/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  MessageCircle, 
  ArrowRight, 
  Globe, 
  Zap, 
  Layers, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Video,
  CheckCircle2,
  Menu,
  X,
  Mail,
  Phone,
  Handshake,
  BookOpen,
  Camera,
  Play,
  ExternalLink,
  ShoppingBag,
  Tag
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MerchProduct {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

// --- Constants ---
const WHATSAPP_NUMBER = "+250783594197";
const EMAIL = "info@eastcreaxions.com";

const SERVICES: Service[] = [
  {
    title: "Media Production",
    description: "High-end video, film, and cinematic shoots that capture your brand's essence.",
    icon: <Video className="w-6 h-6" />,
  },
  {
    title: "Creative Direction",
    description: "Visionary guidance to ensure your brand's visual identity is cohesive and premium.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Brand Storytelling",
    description: "Compelling narratives that turn your brand's mission into an engaging experience.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Photography",
    description: "Stunning visual content that tells a story in every frame.",
    icon: <Camera className="w-6 h-6" />,
  },
];

const PORTFOLIO_LINKS = [
  { name: "Vimeo Portfolio", icon: <Video className="w-5 h-5" />, url: "https://vimeo.com/user247709878?fl=pp&fe=sh", color: "bg-blue-600" },
  { name: "Instagram Content", icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/eastcreaxions/", color: "bg-pink-600" },
  { name: "Photography Page", icon: <Camera className="w-5 h-5" />, url: "https://www.instagram.com/photogonist/", color: "bg-orange-600" },
];

const MERCHANDISE: MerchProduct[] = [
  {
    id: "merch-1",
    name: "East Creaxions Water Bottle",
    price: "$25.00",
    description: "Matte black stainless steel bottle with laser-etched logo.",
    image: "https://picsum.photos/seed/bottle/600/800"
  },
  {
    id: "merch-2",
    name: "Signature Storyteller T-Shirt",
    price: "$35.00",
    description: "Premium heavy-weight cotton tee in chocolate brown.",
    image: "https://picsum.photos/seed/tshirt/600/800"
  },
  {
    id: "merch-3",
    name: "Cinematic Vision Hoodie",
    price: "$65.00",
    description: "Oversized fit with minimalist branding for creators.",
    image: "https://picsum.photos/seed/hoodie/600/800"
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white">
          EAST <span className="text-chocolate">CREAXIONS</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Portfolio</a>
          <a href="#merch" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Merch</a>
          <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-chocolate hover:text-white transition-all">
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white/70">Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white/70">Portfolio</a>
            <a href="#merch" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white/70">Merch</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-white text-black px-5 py-3 rounded-xl text-center font-semibold">
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroOverlay = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background Feel */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        <img 
          src="https://picsum.photos/seed/cinematic/1920/1080?blur=10" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-chocolate">
            Media Production & Creative Storytelling
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            CINEMATIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-chocolate to-white/50">STORYTELLING</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light italic">
            "We don't just capture moments; we create digital legacies."
          </p>
          
          <button 
            onClick={onEnter}
            className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform group mx-auto shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <Play className="w-6 h-6 fill-current" />
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Services</h2>
            <p className="text-white/50 font-light">Premium media solutions designed to impress and convert.</p>
          </div>
          <div className="text-chocolate font-mono text-sm">01 / EXPERTISE</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-chocolate/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-chocolate/20 flex items-center justify-center text-chocolate mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Portfolio</h2>
            <p className="text-white/50 font-light">Explore our cinematic work across various platforms.</p>
          </div>
          <div className="text-chocolate font-mono text-sm">02 / WORK</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_LINKS.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group block overflow-hidden rounded-[2rem] aspect-video md:aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
              <img 
                src={`https://picsum.photos/seed/${item.name}/800/1000`} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 shadow-xl`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <div className="flex items-center gap-2 text-white/70 text-sm font-medium">
                  View Gallery <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Merchandise = () => {
  return (
    <section id="merch" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Merch</h2>
            <p className="text-white/50 font-light">Exclusive gear for the East Creaxions community.</p>
          </div>
          <div className="text-chocolate font-mono text-sm">03 / SHOP</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {MERCHANDISE.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-white/5 border border-white/10">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-chocolate font-bold">
                    {product.price}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <button className="w-full bg-white text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-chocolate hover:text-white transition-all">
                    <ShoppingBag className="w-5 h-5" /> Buy Now
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-white/40 text-sm font-light">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Media Production",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Construct WhatsApp message
    const waMessage = `Hi, my name is ${formData.name}. I'm interested in ${formData.service}. Here are my project details: ${formData.message}. Contact me at: ${formData.contact}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      setStatus("success");
      // Redirect to WhatsApp
      window.open(waUrl, "_blank");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            START YOUR <br />
            <span className="text-chocolate">PROJECT</span>
          </h2>
          <p className="text-white/50 mb-12 max-w-md font-light leading-relaxed">
            Ready to create something cinematic? Fill out the form and we'll redirect you to WhatsApp to finalize the details.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-chocolate">
                <Mail className="w-5 h-5" />
              </div>
              <span>{EMAIL}</span>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-chocolate">
                <Phone className="w-5 h-5" />
              </div>
              <span>{WHATSAPP_NUMBER}</span>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-sm">
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-chocolate mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Redirecting to WhatsApp...</h3>
              <p className="text-white/50">If it doesn't open automatically, please check your pop-up blocker.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-chocolate underline underline-offset-4"
              >
                Go back to form
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-chocolate transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Contact (Email/Phone)</label>
                  <input 
                    required
                    type="text" 
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-chocolate transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Interested In</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-chocolate transition-colors appearance-none"
                >
                  {SERVICES.map(s => <option key={s.title} value={s.title} className="bg-black">{s.title}</option>)}
                  <option value="Merchandise" className="bg-black">Merchandise Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your cinematic vision..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-chocolate transition-colors resize-none"
                />
              </div>
              <button 
                disabled={status === "loading"}
                className="w-full bg-chocolate text-white py-4 rounded-xl font-bold hover:bg-chocolate/80 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" ? "Processing..." : <>Submit & Chat on WhatsApp <MessageCircle className="w-5 h-5" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-bold tracking-tighter text-white">
          EAST <span className="text-chocolate">CREAXIONS</span>
        </div>
        <div className="text-white/30 text-sm font-light">
          &copy; {new Date().getFullYear()} East Creaxions. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="https://www.instagram.com/eastcreaxions/" target="_blank" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Instagram</a>
          <a href="https://vimeo.com/user247709878?fl=pp&fe=sh" target="_blank" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">Vimeo</a>
        </div>
      </div>
    </footer>
  );
};

const StrategyGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-chocolate text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        title="View Funnel Strategy"
      >
        <Layers className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl p-6 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto py-12">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-bold text-white tracking-tight">Media Agency Funnel Strategy</h2>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="grid gap-12 text-white/80">
                <section>
                  <h3 className="text-xl font-bold text-chocolate mb-4 uppercase tracking-widest">1. Funnel Experience</h3>
                  <div className="space-y-4 font-light">
                    <p><strong className="text-white">The "Pop-up" Hero:</strong> We use a full-screen immersive overlay to instantly capture attention. This creates a "premium" first impression before the user even scrolls.</p>
                    <p><strong className="text-white">Visual-First Portfolio:</strong> High-quality placeholders evoke the cinematic feel. Clear links to Vimeo and Instagram ensure the user can explore real work easily.</p>
                    <p><strong className="text-white">Seamless Redirect:</strong> The form doesn't just "submit"; it bridges the gap to WhatsApp, keeping the conversation alive and personal.</p>
                    <p><strong className="text-white">Merchandise Upsell:</strong> The "Shop" section adds a lifestyle element to the brand, allowing fans to support the agency while increasing brand visibility.</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-chocolate mb-4 uppercase tracking-widest">2. Automation Setup (Google Sheets)</h3>
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
                    <p><strong className="text-white">Option A: Simple (Jotform/Google Forms)</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Create your form in Google Forms.</li>
                      <li>Go to "Responses" {"->"} "Link to Sheets".</li>
                      <li>In "Settings", set the "Confirmation Message" or "Redirect URL" (if using Jotform) to your WhatsApp link.</li>
                    </ul>
                    <p><strong className="text-white">Option B: Pro (Zapier/Make.com)</strong></p>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>Trigger: New Form Submission (Typeform/Carrd/Webflow).</li>
                      <li>Action: Create Spreadsheet Row in Google Sheets.</li>
                      <li>Action: Send WhatsApp Message (via Twilio) or simply rely on the client-side redirect implemented in this app.</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-chocolate mb-4 uppercase tracking-widest">3. WhatsApp Auto-Reply</h3>
                  <div className="space-y-4">
                    <p><strong className="text-white">Auto-Reply (WhatsApp Business):</strong> "Thanks for reaching out to East Creaxions. 🎬 We've received your request and will get back to you shortly. In the meantime, feel free to share any moodboards or references!"</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-chocolate mb-4 uppercase tracking-widest">4. Testing Checklist</h3>
                  <ul className="list-disc list-inside space-y-2 font-light">
                    <li><strong className="text-white">Form Validation:</strong> Ensure all fields are required to prevent empty WhatsApp messages.</li>
                    <li><strong className="text-white">Pop-up Blockers:</strong> Test if the WhatsApp redirect works on mobile browsers (some block automatic `window.open`).</li>
                    <li><strong className="text-white">Image Referrer:</strong> Ensure `referrerPolicy="no-referrer"` is on all {"<img>"} tags to avoid broken picsum images.</li>
                  </ul>
                </section>
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="mt-16 w-full bg-white text-black py-4 rounded-xl font-bold text-lg"
              >
                Close Strategy Guide
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  const [showHero, setShowHero] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-chocolate selection:text-white font-sans">
      <AnimatePresence>
        {showHero && <HeroOverlay onEnter={() => setShowHero(false)} />}
      </AnimatePresence>

      <Navbar />
      <main className={showHero ? "h-screen overflow-hidden" : ""}>
        {/* Main Hero (Static version for after overlay) */}
        <section className="relative h-[80vh] flex items-center justify-center bg-black overflow-hidden pt-20">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-chocolate/20 rounded-full blur-[120px]" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
              PREMIUM <span className="text-chocolate">MEDIA</span> PRODUCTION
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto mb-8 font-light">
              We transform brand visions into cinematic realities. From creative direction to final cut.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-chocolate hover:text-white transition-all">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        <Services />
        <Portfolio />
        <Merchandise />
        <ContactForm />
      </main>
      
      <Footer />
      <StrategyGuide />
      
      {/* Custom Styles for Chocolate Color */}
      <style>{`
        .text-chocolate { color: #4B2E1E; }
        .bg-chocolate { background-color: #4B2E1E; }
        .border-chocolate { border-color: #4B2E1E; }
        .selection\\:bg-chocolate::selection { background-color: #4B2E1E; }
      `}</style>
    </div>
  );
}
