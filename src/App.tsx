import { motion, useScroll, useTransform } from "motion/react";
import { 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Phone, 
  ArrowUpRight, 
  Zap, 
  Layers, 
  Target, 
  Users, 
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import { useState, useRef } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "The Wiggles",
    subtitle: "Wiggle Up, Giddy Up!",
    category: "Album Cover & Promotion",
    description: "Country album cover design for The Wiggles' 2025 release. Bridging iconic childhood branding with a fresh country aesthetic.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/3182da222687219.67eb3e41ca4de.jpg",
    link: "https://www.behance.net/gallery/222687219/The-Wiggles-Wiggle-Up-Giddy-Up-Album-Cover",
    tools: ["Adobe Creative Cloud", "Retouching & Manipulation", "Photography", "Art Direction"]
  },
  {
    id: 2,
    title: "Toys'R'Us (Babies'R'Us)",
    subtitle: "Big Sale for Little Ones",
    category: "Retail Campaign",
    description: "Comprehensive retail campaign for Babies'R'Us. A high-impact visual strategy for one of the world's most iconic baby retailers.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/4ff86366899147.5b270a49bb1e9.jpg",
    link: "https://www.behance.net/gallery/66899147/Big-Sale-for-Little-Ones-2018",
    tools: ["Adobe Creative Suite", "Visual Strategic Planning", "Print & Displays", "Retail Marketing"]
  },
  {
    id: 3,
    title: "iiNet Business",
    subtitle: "Help Hub Digital Platform",
    category: "Digital Campaign",
    description: "Digital help platform for iiNet Business customers. Streamlining complex technical support into an intuitive user experience.",
    image: "https://www.iinet.net.au/sites/iinet/files/2022-03/ii_fb_1200x630px_0.jpg",
    link: "https://www.behance.net/gallery/141959907/iiNet-Business-Help-Hub",
    tools: ["Campaign Management", "Photoshop", "Google Web Designer", "Information Architecture"]
  },
  {
    id: 4,
    title: "Goodman Fielder",
    subtitle: "Best Bacon Buttys NZ",
    category: "FMCG and UGC Campaign",
    description: "FMCG campaign for Goodman Fielder NZ. Creative strategy for a nationwide culinary competition.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/08216f116625205.69d3156d3c84c.png",
    link: "https://www.behance.net/gallery/116625205/Best-Bacon-Buttys-NZ-Goodman-Fielder-NZ-Proposal",
    tools: ["Adobe Creative Cloud", "Photography Direction", "Strategic Planning", "FMCG Marketing"]
  },
  {
    id: 5,
    title: "TN'B Records",
    subtitle: "Brand Identity System",
    category: "Logo & Branding",
    description: "Complete brand identity for an independent music label. Bold, rhythmic, and timeless visual language.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/22eee4114320409.6038d496f083a.jpg",
    link: "https://www.behance.net/gallery/114320409/TNB-Records-Logo-and-Branding",
    tools: ["Adobe Illustrator", "Brand Identity", "Typography", "Logo Design"]
  },
  {
    id: 6,
    title: "Unilever",
    subtitle: "Sustainability Initiative",
    category: "FMCG Cmapiagn",
    description: "Sustainable FMCG product display and promotion for Unilever brands' Sustainability Initiatives. Merging environmental responsibility with premium retail appeal.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/3b382e116623733.60658d204f37c.png",
    link: "https://www.behance.net/gallery/116623733/Sustainability-HBPC-Unilever-Coles-2021",
    tools: ["Adobe Illustrator", "Packaging Design", "Sustainability Strategy", "FMCG"]
  }
];

const BRANDS = [
  "The Wiggles", "Unilever", "Toys'R'Us", "iiNet", "Goodman Fielder", "Coles", "Optus", "Disney", "Netflix", "Warner Bros"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  
  return (
    <div ref={containerRef} className="relative min-h-screen font-sans bg-[#fdfcfb] overflow-x-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-screen pointer-events-none z-0 opacity-100 mix-blend-multiply">
        <img 
          src="https://raw.githubusercontent.com/mickrefalo90/MichaelRefalo-Portfolio/refs/heads/main/Michael%20Refalo-Right.jpg" 
          alt="" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain object-right-top"
        />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex items-center justify-between text-zinc-900">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display text-4xl tracking-widest uppercase hover:text-brand-accent transition-colors cursor-default"
        >
        Michael Refalo
        </motion.div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 group"
          >
            <span className="text-sm font-bold uppercase tracking-widest group-hover:text-brand-accent transition-all">Menu</span>
            <Menu size={20} className="text-brand-accent group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-zinc-950 text-white flex flex-col items-center justify-center gap-12"
        >
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-12 p-4 hover:scale-110 transition-transform text-brand-accent"
          >
            <X size={32} />
          </button>
          {["Work", "About", "Contact"].map((item, i) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                className="text-7xl md:text-9xl font-display uppercase tracking-wider hover:text-brand-accent transition-colors"
              >
                {item}
              </motion.a>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32">
        <div className="max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-400 mb-8"
          >
            Creative Manager & Art Director
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[clamp(4rem,12vw,15rem)] font-display leading-[0.8] tracking-wider mb-12 uppercase"
          >
            Bridging strategy <br /> <span className="text-brand-accent font-bold">& </span> execution.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-8 mb-16"
          >
            {[
              { icon: <Zap size={18} />, title: "Creative Direction" },
              { icon: <Target size={18} />, title: "Brand Strategy" },
              { icon: <Users size={18} />, title: "Team Leadership" }
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-brand-accent">{skill.icon}</div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 whitespace-nowrap">{skill.title}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
          >
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-xl">
              15+ years of experience directing creative teams to deliver impactful brand activations and end-to-end marketing campaigns.
            </p>
            <div className="flex flex-col gap-6 items-start md:items-end">
              <a 
                href="https://drive.google.com/file/d/1YY-ghTTgm-82TgV88nycvhP6t-6IzyV1/view?usp=sharing" 
                target="_blank"
                className="group flex items-center gap-4 text-lg font-bold uppercase tracking-widest hover:text-brand-accent transition-colors"
              >
                View Full CV
                <div className="w-12 h-px bg-brand-accent group-hover:w-20 transition-all" />
              </a>
              <a href="#work" className="group flex items-center gap-4 text-lg font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
                Explore Selected Work 
                <div className="w-12 h-px bg-brand-accent group-hover:w-20 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section - List Style like Lyria */}
      <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-widest">Selected <span className="text-brand-accent">Work</span></h2>
        </div>
        <div className="space-y-32">
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 flex justify-center overflow-hidden group">
                <a href={project.link} target="_blank" className="block relative overflow-hidden bg-zinc-100">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    initial={{ filter: "grayscale(100%)" }}
                    whileInView={{ filter: "grayscale(0%)" }}
                    viewport={{ amount: 0.6, margin: "-10% 0px -10% 0px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-full w-auto h-auto transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </a>
              </div>
              
              <div className="w-full md:w-1/2 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">{project.category}</span>
                  <h2 className="text-6xl md:text-8xl font-display tracking-wider uppercase">{project.title}</h2>
                  <p className="text-2xl text-zinc-400 font-display uppercase tracking-widest">{project.subtitle}</p>
                </div>
                
                <p className="text-lg text-zinc-600 leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-zinc-100 text-[10px] font-bold uppercase tracking-widest text-zinc-600 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  target="_blank"
                  className="inline-flex items-center gap-4 group text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors"
                >
                  View Case Study
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-brand-accent" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-7xl md:text-9xl font-display tracking-wider uppercase leading-[0.8]">Meet <br /> Michael <br /> Refalo.</h2>
            <div className="space-y-8 text-zinc-400 text-xl leading-relaxed">
              <p>
                Michael Refalo is a creative force of nature with 15+ years of experience turning "what if" into "holy cow." 
                He operates at the high-stakes intersection of brand strategy and visual alchemy, possessing the rare ability 
                to conceptualise the impossible and then lead a team to build it.
              </p>
              <p>
                From the whimsical global stage of The Wiggles to the high-octane retail of Toys'R'Us, Michael navigates 
                diverse industries with a strategist’s precision and an artist’s soul. He doesn't just stay on trend; 
                he interrogates the cultural zeitgeist to ensure every solution is as innovative as it is effective.
              </p>
              <p>
                He is a mentor, a guide, and a relentless problem-solver who thinks three steps ahead of the curve. 
                If there’s an angle he hasn’t considered, it probably doesn’t exist. Clever, innovative, and deeply 
                passionate, Michael is the candidate who doesn't just fill a role; he redefines it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              {[
                { icon: <Zap size={20} />, title: "Creative Visionary" },
                { icon: <Target size={20} />, title: "Strategic Architecture" },
                { icon: <Layers size={20} />, title: "Global Leadership" },
                { icon: <Users size={20} />, title: "Creative Mentorship" }
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-4 border-b border-zinc-800 pb-4 group">
                  <div className="text-brand-accent transition-colors">{skill.icon}</div>
                  <span className="font-bold uppercase tracking-widest text-sm group-hover:text-white transition-colors">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="https://instagram.fsyd5-1.fna.fbcdn.net/v/t51.82787-15/620190846_18036782162746346_1488749971840737327_n.webp?_nc_cat=106&ig_cache_key=MzA2OTc1NjE2ODE2ODMxMTczNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTQ0MC5zZHIuQzMifQ%3D%3D&_nc_ohc=aFsOPxC-muYQ7kNvwFgfFLc&_nc_oc=AdpvhZXQqzNiVpd4U-0XXHeTA6VcDfd-Dketk9xKgcmgWtPhOee-KQw3M_rTx4VPYY5OpLhn-vl0pXVEr8rxwRL-&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsyd5-1.fna&_nc_gid=e2ENmi21b6qqgJwfSWwwJA&_nc_ss=7a32e&oh=00_Af2DwxK86_pTkd83hKAPRCWOYrj-Es8CD-fCvXyIoYMxhg&oe=69D9035B" 
                alt="Michael Refalo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            
            {/* Handwritten Note */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="absolute bottom-16 right-10 md:bottom-24 md:right-20 z-30 pointer-events-none"
            >
              <div className="relative">
                {/* Handwritten Text with "Writing" animation */}
                <motion.div 
                  variants={{
                    hidden: { clipPath: "inset(-50% 100% -50% -50%)" },
                    visible: { 
                      clipPath: "inset(-50% -50% -50% -50%)", 
                      transition: { duration: 2.5, delay: 0.4, ease: "linear" } 
                    }
                  }}
                  className="relative px-8 py-4"
                >
                  <p className="font-handwritten text-4xl md:text-6xl text-[#00B137] leading-[0.75] text-center transform -rotate-3 select-none">
                    Michael's<br />Business Partner
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="text-7xl md:text-[12rem] font-display tracking-wider uppercase">Let's <span className="text-brand-accent">connect</span>.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <a href="mailto:m2.refalo.mr@gmail.com" className="group space-y-4">
              <div className="text-brand-accent group-hover:scale-110 transition-transform">
                <Mail size={32} className="mx-auto" />
              </div>
              <p className="font-bold uppercase tracking-widest text-xs">Email</p>
              <p className="text-lg">m2.refalo.mr@gmail.com</p>
            </a>
            <a href="tel:+61409230959" className="group space-y-4">
              <div className="text-brand-accent group-hover:scale-110 transition-transform">
                <Phone size={32} className="mx-auto" />
              </div>
              <p className="font-bold uppercase tracking-widest text-xs">Phone</p>
              <p className="text-lg">+61 409 230 959</p>
            </a>
            <a href="https://www.linkedin.com/in/michael-refalo" target="_blank" className="group space-y-4">
              <div className="text-brand-accent group-hover:scale-110 transition-transform">
                <Linkedin size={32} className="mx-auto" />
              </div>
              <p className="font-bold uppercase tracking-widest text-xs">LinkedIn</p>
              <p className="text-lg">Michael Refalo</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">
        <p>© 2026 <span className="text-brand-accent">Michael Refalo</span></p>
        <div className="flex items-center gap-8">
          <a href="https://www.behance.net/michaelrefalo1" target="_blank" className="hover:text-brand-accent transition-colors">Behance</a>
          <a href="https://www.linkedin.com/in/michael-refalo" target="_blank" className="hover:text-brand-accent transition-colors">LinkedIn</a>
        </div>
        <p>Sydney, Australia</p>
      </footer>
    </div>
  );
}
