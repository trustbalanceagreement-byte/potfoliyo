import { motion, Variants } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Users, 
  CheckCircle2,
  Code2,
  Layout,
  Smartphone,
  Settings,
  ArrowRight,
  TrendingUp,
  Target,
  Clock
} from 'lucide-react';

export default function App() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const coreValues = [
    "Transparency in every engagement",
    "Balance between design and function",
    "Accountability from start to finish",
    "Reliability you can count on"
  ];

  const teamMembers = [
    { name: 'Tirthankar Das', role: 'Full-Stack Developer', image: '/regenerated_image_1777315935131.png' },
    { name: 'Bornita Sarkar', role: 'UI/UX Designer & Developer', image: '/regenerated_image_1777315940187.png' },
    { name: 'Agnik Das', role: 'Frontend Specialist', image: '/regenerated_image_1777315945160.png' },
    { name: 'Raja Das', role: 'Backend Developer', image: '/regenerated_image_1777315951426.png' },
  ];

  return (
    <div className="noise-bg bg-[#0f1115] text-white font-sans overflow-x-hidden">
      <div className="tech-bg"></div>
      
      {/* 1. HERO SECTION */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#e2c66c]/10 blur-[120px] rounded-full animate-orb-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-500/10 blur-[150px] rounded-full animate-orb-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(226,198,108,0.03)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 w-full py-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-[#e2c66c]/50"></span>
              <span className="text-[#e2c66c] text-xs font-bold tracking-[0.3em] uppercase">Professional Cluster</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] text-gradient">
              TBA — <br />
              <span className="text-[#e2c66c]">Tech Base Axis</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed font-light">
              We architect the digital future from Kanchrapara. A specialized collective dedicated to building high-performance, aesthetically dominant web solutions.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href="https://wa.me/919477201106"
                target="_blank"
                rel="noreferrer"
                className="group relative px-10 py-5 bg-[#e2c66c] text-[#0f1115] font-bold rounded-sm overflow-hidden transition-all shadow-2xl shadow-[#e2c66c]/20 inline-block"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                <span className="relative flex items-center gap-2">
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <button 
                onClick={() => document.getElementById('founder-base')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 border border-white/10 hover:border-[#e2c66c] glass text-white font-bold rounded-sm transition-all"
              >
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             className="relative"
          >
            <div className="aspect-[4/5] lg:aspect-square bg-[#1a1d23] rounded-sm overflow-hidden border border-white/5 shadow-2xl relative group p-1 glass">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture"
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-[#0f1115]/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 p-6 glass backdrop-blur-xl border-white/5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#e2c66c] font-bold block mb-1">Company Entity</span>
                    <span className="text-xl font-serif font-bold">TBA_UNIT_7.01</span>
                  </div>
                  <div className="text-slate-500 text-[10px] font-mono">EST. 2024</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#e2c66c]/5 blur-[100px] rounded-full animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#e2c66c] rounded-full"></div>
                <span className="text-[#e2c66c] text-xs font-bold tracking-[0.4em] uppercase">Who We Are</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none">
                Built on <span className="text-gradient">Trust.</span><br />
                Driven by <span className="text-[#e2c66c]">Balance.</span>
              </h2>
              <div className="space-y-6 text-slate-400 leading-relaxed font-light text-xl">
                <p>
                  TBA (Trust Balance Agreement) is an elite collective of five developers committed to crafting dominant digital experiences. We believe great development starts with an unbreakable handshake of trust.
                </p>
                <p>
                  Precision engineering meets creative vision. We don't just build websites; we create digital assets that empower businesses and captivate users.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid gap-4"
            >
              {coreValues.map((value, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="glass-gold group p-8 flex items-center gap-6 hover:bg-[#e2c66c]/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-[#e2c66c]/30 flex items-center justify-center text-[#e2c66c] group-hover:bg-[#e2c66c] group-hover:text-[#0f1115] transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl font-medium tracking-tight">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section id="founder-base" className="py-24 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-0 glass overflow-hidden rounded-sm border-white/5">
          <div className="lg:col-span-5 relative group h-[600px] lg:h-auto overflow-hidden">
            <img 
              src="/regenerated_image_1777322329390.png" 
              alt="Bikram Ghosh - Founder"
              style={{ height: '1000px', backgroundColor: '#000000' }}
              className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f1115]/40 lg:to-[#0f1115]"></div>
          </div>
          <div className="lg:col-span-7 flex items-center p-12 lg:p-32 bg-[#0f1115]/50 backdrop-blur-3xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-[#e2c66c] text-xs font-bold tracking-[0.5em] uppercase">The Architect</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                  Bikram Ghosh
                </h2>
                <div className="text-xl text-[#e2c66c] font-light italic">Founder & Lead Developer</div>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                At 23, Bikram leads TBA with a vision to redefine the digital landscape of India. From Kanchrapara, he orchestrates a team that blends cutting-edge technology with high-end aesthetics, delivering world-class animated and static web solutions.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="space-y-1">
                  <div className="text-3xl font-serif font-bold text-[#e2c66c]">23</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">Age Base</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-serif font-bold text-[#e2c66c]">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">Dedication</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e2c66c]/10 blur-[150px] rounded-full animate-orb-float pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center mb-24 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-[#e2c66c] text-xs font-bold tracking-[0.5em] uppercase block mb-6">The Collective</span>
            <h2 className="text-6xl md:text-7xl font-serif font-bold mb-8">Specialized Core</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
              Five specialists. One unified vision. Our team is architected for versatility, ensuring every layer of your project is handled by an expert.
            </p>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {teamMembers.map((member, i) => (
              <motion.div key={i} variants={fadeInUp} className="group cursor-default">
                <div className="aspect-[3/4] mb-8 overflow-hidden glass p-1 shadow-2xl relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#e2c66c] mb-2 group-hover:translate-x-2 transition-transform duration-300">{member.name}</h3>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-white/20"></div>
                  <p className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-40 bg-[#121418]/50 relative overflow-hidden">
        {/* Decorative background image */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            alt="Technical Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1115] via-transparent to-[#0f1115]"></div>

        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl">
              <span className="text-[#e2c66c] text-xs font-bold tracking-[0.5em] uppercase block mb-6">Capabilities</span>
              <h2 className="text-6xl font-serif font-bold mb-8">Solution Suite</h2>
              <p className="text-slate-400 text-xl font-light leading-relaxed">
                We bridge the gap between complex engineering and emotional design. Our services are tailored for businesses that demand digital distinction.
              </p>
            </motion.div>
            <div className="hidden lg:block w-32 h-32 border border-[#e2c66c]/20 rotate-45 animate-spin-slow"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: <Code2 className="w-8 h-8" />, title: "Web Development", desc: "Forging specialized web environments with React, Node.js and advanced framework architecture." },
            { icon: <Layout className="w-8 h-8" />, title: "UI/UX Design", desc: "Synthesizing beauty and behavior to create interfaces that feel natural and perform exceptionally." },
            { icon: <Smartphone className="w-8 h-8" />, title: "Responsive Systems", desc: "Fluid, high-density layouts optimized for the entire spectrum of modern screen resolutions." },
            { icon: <Settings className="w-8 h-8" />, title: "Strategic Growth", desc: "Continuous refinement and infrastructure support to ensure long-term digital operational success." }
          ].map((service, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              className="glass p-12 hover:border-[#e2c66c]/30 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-full glass-gold flex items-center justify-center text-[#e2c66c] mb-10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-6 underline decoration-[#e2c66c]/20 underline-offset-8 decoration-2">{service.title}</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. HOW WE WORK (Refined PROCESS) */}
      <section className="py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="mb-32">
            <span className="text-[#e2c66c] text-xs font-bold tracking-[0.5em] uppercase block mb-6">Pipeline</span>
            <h2 className="text-6xl font-serif font-bold mb-8">The TBA Method</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square flex items-center justify-center">
              <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-12 border border-[#e2c66c]/5 rounded-full"></div>
              
              <div className="relative grid grid-cols-2 gap-8 z-20">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-[#e2c66c] to-[#bfa34a] flex items-center justify-center shadow-2xl"
                >
                  <div className="text-[#0f1115] font-serif font-bold text-2xl">Discover</div>
                </motion.div>
                <div className="w-4 h-[1px] bg-white/10 self-center"></div>
                <div className="w-4 h-[1px] bg-white/10 self-center justify-self-end"></div>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="w-48 h-48 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl"
                >
                   <div className="text-white font-serif font-bold text-2xl">Develop</div>
                </motion.div>
              </div>
            </div>

            <div className="text-left space-y-12">
              {[
                { title: "Analysis & Intent", desc: "Understanding the DNA of your project, user archetypes, and market friction." },
                { title: "Iterative Engineering", desc: "Transparent development cycles where code is crafted for stability and speed." },
                { title: "Deployment Excellence", desc: "Precision launch strategies and performance benchmarking for a flawless entry." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex gap-8 group">
                  <div className="text-3xl font-serif font-bold text-white/20 group-hover:text-[#e2c66c] transition-colors">0{i+1}</div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-serif font-bold">{step.title}</h4>
                    <p className="text-slate-500 font-light text-lg">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. LOCATION & CONTACT (Advanced Bento Map vibe) */}
      <section className="py-40 bg-[#121418]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-12 mb-12">
            <span className="text-[#e2c66c] text-xs font-bold tracking-[0.5em] uppercase block mb-6">Connection</span>
            <h2 className="text-6xl font-serif font-bold">Reach the Base</h2>
          </div>
          
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass-gold p-12 border-none relative overflow-hidden"
            >
               <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-[#e2c66c]/10 blur-3xl rounded-full"></div>
               <div className="relative z-10 space-y-12">
                 <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[#e2c66c] uppercase text-[10px] font-bold tracking-widest">
                    <MapPin className="w-4 h-4" />
                    <span>Physical Cluster</span>
                  </div>
                  <h3 className="text-4xl font-serif font-bold">Kanchrapara</h3>
                  <p className="text-xl opacity-70 font-light italic">West Bengal, India / 743145</p>
                 </div>
                 
                 <div className="space-y-8 pt-8 border-t border-black/5">
                   <a href="tel:+917980547061" className="flex items-center justify-between group">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-black">
                          <Phone className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-serif font-bold border-black/10 group-hover:text-black transition-colors">+91 79805 47061</span>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-black" />
                   </a>
                   <a href="mailto:trustbalanceagreement@gmail.com" className="flex items-center justify-between group">
                      <div className="flex items-center gap-6 min-w-0">
                        <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all text-black shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-serif font-bold truncate group-hover:text-black transition-colors">trustbalanceagreement@gmail.com</span>
                      </div>
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-black" />
                   </a>
                 </div>
               </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.a 
              href="https://www.facebook.com/share/1JA6qanz7a/"
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="glass p-12 flex flex-col justify-between group h-full hover:bg-blue-600 transition-colors duration-500"
            >
              <Facebook className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
              <div className="mt-20">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2 block">Connect on</span>
                <h3 className="text-3xl font-serif font-bold">Facebook</h3>
              </div>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/tba7.01?igsh=MWNmYjFjcHBtdThzOQ=="
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-12 flex flex-col justify-between group h-full hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] transition-all duration-500"
            >
              <Instagram className="w-12 h-12 group-hover:scale-110 transition-transform duration-500" />
              <div className="mt-20">
                <span className="text-[10px] uppercase tracking-widest font-bold opacity-40 mb-2 block">Follow on</span>
                <h3 className="text-3xl font-serif font-bold">Instagram</h3>
              </div>
            </motion.a>
            <div className="sm:col-span-2 glass-gold p-10 flex items-center gap-8 border-none bg-[#e2c66c]/10">
               <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-[#e2c66c]/30 flex items-center justify-center">
                    <Clock className="w-8 h-8 text-[#e2c66c]" />
                  </div>
               </div>
               <div>
                  <h4 className="text-xl font-serif font-bold text-white mb-1 uppercase tracking-tight">Active Response</h4>
                  <p className="text-slate-400 font-light text-lg">Inquiries managed within 12 standard operational hours.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="py-60 relative overflow-hidden text-center bg-black">
        <div className="absolute inset-0 bg-[#e2c66c]/5 blur-[120px] rounded-full animate-orb-float blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-[300%] brightness-[50%]"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-5xl mx-auto px-6 space-y-16"
        >
          <div className="space-y-8">
             <h2 className="text-6xl md:text-9xl font-serif font-bold text-white leading-none">
              Deploy <br />
              <span className="text-gradient">Distinction.</span>
            </h2>
            <p className="text-2xl text-slate-400 font-light mx-auto max-w-2xl leading-relaxed italic">
              "We don't build projects. We architect digital legacies."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="https://wa.me/919477201106"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-16 py-6 bg-[#e2c66c] text-[#0f1115] font-bold rounded-sm text-xl hover:scale-105 transition-all shadow-2xl shadow-[#e2c66c]/30 flex items-center gap-3 justify-center"
            >
              Start Project <ArrowRight className="w-6 h-6" />
            </a>
            <a 
               href="https://wa.me/919477201106"
               target="_blank"
               rel="noreferrer"
               className="w-full sm:w-auto px-16 py-6 border border-[#e2c66c] text-[#e2c66c] font-bold rounded-sm text-xl glass-gold hover:bg-[#e2c66c]/10 transition-all text-center flex items-center gap-3 justify-center"
            >
              <MessageCircle className="w-6 h-6" /> Direct WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-3xl font-serif font-bold text-white tracking-widest mb-2">TBA<span className="text-[#e2c66c]">_</span>UNIT</span>
            <span className="text-[9px] uppercase tracking-[0.6em] text-slate-500 font-bold">Trust Balance Agreement</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            <span className="hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-white">Status: Alpha</span>
            <span className="hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-white">Protocol: Secure</span>
            <span className="text-white">© 2024 Tech Base Axis</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
