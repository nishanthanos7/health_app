import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Stethoscope, 
  Building2, 
  Users, 
  GraduationCap, 
  Home, 
  ChevronRight, 
  Menu, 
  X,
  HeartPulse,
  Award,
  ShieldCheck,
  Zap,
  UserCheck,
  ArrowRight,
  Info,
  Activity,
  Target,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ne' : 'en');
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const services = [
    { icon: <Stethoscope size={32} />, title: t.services.consultation, desc: t.services.consultationDesc, detail: t.services.consultationDetail, color: 'bg-blue-500' },
    { icon: <Building2 size={32} />, title: t.services.corporate, desc: t.services.corporateDesc, detail: t.services.corporateDetail, color: 'bg-indigo-500' },
    { icon: <Users size={32} />, title: t.services.community, desc: t.services.communityDesc, detail: t.services.communityDetail, color: 'bg-emerald-500' },
    { icon: <GraduationCap size={32} />, title: t.services.educational, desc: t.services.educationalDesc, detail: t.services.educationalDetail, color: 'bg-amber-500' },
    { icon: <Home size={32} />, title: t.services.homecare, desc: t.services.homecareDesc, detail: t.services.homecareDetail, color: 'bg-rose-500' },
  ];

  return (
    <div className={`min-h-screen font-sans selection:bg-medical-blue selection:text-white ${lang === 'ne' ? 'nepali' : ''}`}>
      {/* Top Bar */}
      <div className="bg-medical-blue text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><MapPin size={14} /> {t.contact.address}</span>
            <span className="flex items-center gap-2"><Phone size={14} /> {t.contact.phone}</span>
            <span className="flex items-center gap-2 font-bold"><Info size={14} /> {t.contact.regd}</span>
          </div>
          <div className="flex gap-4">
            <span className="flex items-center gap-2"><Mail size={14} /> {t.contact.email}</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 md:top-8 w-full z-50 transition-all duration-300 ${scrolled ? 'md:top-0 glass shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl overflow-hidden p-1.5 border border-slate-100">
              <img src="https://i.ibb.co/mVctczJz/Chat-GPT-Image-Apr-15-2026-12-45-18-PM.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl leading-tight text-slate-900">{lang === 'en' ? 'All Nepal Health' : 'अल नेपाल हेल्थ'}</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-medical-blue font-bold">{lang === 'en' ? 'Treatment Clinic' : 'ट्रिटमेन्ट क्लिनिक'}</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-bold text-slate-700 hover:text-medical-blue transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-medical-blue transition-all group-hover:w-full" />
              </a>
            ))}
            <button onClick={toggleLang} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-200 text-sm font-bold hover:border-medical-blue hover:text-medical-blue transition-all bg-white">
              <Globe size={18} />
              {lang === 'en' ? 'नेपाली' : 'English'}
            </button>
            <a href="#contact" className="bg-medical-blue text-white px-7 py-3 rounded-xl text-sm font-black shadow-xl shadow-medical-blue/30 hover:bg-blue-700 transition-all active:scale-95 hover:-translate-y-0.5">
              {t.hero.cta}
            </a>
          </div>

          <button className="md:hidden w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-md text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col">
            <div className="p-6 flex justify-between items-center border-b">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md overflow-hidden p-1.5">
                  <img src="https://i.ibb.co/mVctczJz/Chat-GPT-Image-Apr-15-2026-12-45-18-PM.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="font-black text-xl">{lang === 'en' ? 'All Nepal Health' : 'अल नेपाल हेल्थ'}</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex-1 flex flex-col p-8 gap-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-display font-black text-slate-900">{item.name}</a>
              ))}
              <div className="mt-auto flex flex-col gap-4">
                <button onClick={toggleLang} className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border-2 border-slate-200 text-xl font-bold text-medical-blue">
                  <Globe size={24} /> {lang === 'en' ? 'नेपाली' : 'English'}
                </button>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full bg-medical-blue text-white py-5 rounded-2xl text-center text-xl font-black shadow-xl shadow-medical-blue/20">{t.hero.cta}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-medical-blue/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-medical-light/10 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-medical-blue/10 text-medical-blue text-sm font-black uppercase tracking-widest mb-8">
              <Zap size={16} fill="currentColor" /> {t.hero.slogan}
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 leading-[1.05] mb-8">{t.hero.title}</h1>
            <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed font-medium">{t.hero.subtitle}</p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="bg-medical-blue text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-medical-blue/30 hover:bg-blue-700 transition-all hover:-translate-y-1 flex items-center gap-3">
                {t.hero.cta} <ArrowRight size={20} />
              </a>
              <a href="#services" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg border-2 border-slate-200 hover:border-medical-blue hover:text-medical-blue transition-all">{t.hero.secondaryCta}</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://picsum.photos/seed/nepal-doctor-patient/1000/1200" alt="Clinic" className="w-full h-auto object-cover aspect-[4/5]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-medical-blue font-black uppercase tracking-[0.3em] text-sm mb-4">{lang === 'en' ? 'What we offer' : 'हाम्रा सेवाहरू'}</div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900">{t.services.title}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                onClick={() => setSelectedService(i)}
                className="p-10 rounded-[2.5rem] bg-slate-50 border-2 border-transparent hover:border-medical-blue/10 hover:bg-white hover:shadow-2xl transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-5 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">{service.desc}</p>
                <div className="flex items-center gap-2 text-medical-blue font-bold text-sm">
                  {t.services.learnMore} <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedService(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden">
              <div className={`h-32 ${services[selectedService].color} flex items-center justify-center text-white`}>
                {services[selectedService].icon}
              </div>
              <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"><X size={20} /></button>
              <div className="p-10">
                <h3 className="text-3xl font-black mb-6 text-slate-900">{services[selectedService].title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium mb-8">{services[selectedService].detail}</p>
                <a href="#contact" onClick={() => setSelectedService(null)} className="inline-flex items-center gap-3 bg-medical-blue text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-medical-blue/20 hover:bg-blue-700 transition-all">
                  {t.hero.cta} <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Educational Program Details (Page 4 from PDF) */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-xl border border-slate-100">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-black uppercase tracking-widest mb-6">
                  <GraduationCap size={16} /> {lang === 'en' ? 'Special Program' : 'विशेष कार्यक्रम'}
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 mb-8">{t.educationalProgram.title}</h2>
                <div className="space-y-6">
                  <h4 className="text-xl font-black flex items-center gap-3 text-medical-blue"><Target size={24} /> {t.educationalProgram.objectivesTitle}</h4>
                  <ul className="grid gap-4">
                    {t.educationalProgram.objectives.map((obj, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 font-medium leading-relaxed">
                        <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-medical-blue" /> {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-12">
                <div className="bg-rose-50 p-10 rounded-[2.5rem] border border-rose-100">
                  <h4 className="text-xl font-black flex items-center gap-3 text-rose-600 mb-6"><AlertCircle size={24} /> {t.educationalProgram.challengesTitle}</h4>
                  <div className="flex flex-wrap gap-3">
                    {t.educationalProgram.challenges.map((challenge, i) => (
                      <span key={i} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-rose-700 border border-rose-100">{challenge}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-medical-blue p-10 rounded-[2.5rem] text-white shadow-xl shadow-medical-blue/20">
                  <h4 className="text-xl font-black flex items-center gap-3 mb-6"><Activity size={24} /> {t.educationalProgram.offersTitle}</h4>
                  <ul className="space-y-4">
                    {t.educationalProgram.offers.map((offer, i) => (
                      <li key={i} className="flex gap-3 font-bold text-blue-50">
                        <CheckCircle2 size={20} className="shrink-0 text-medical-light" /> {offer}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Leadership Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <div className="text-medical-blue font-black uppercase tracking-[0.3em] text-sm mb-4">{lang === 'en' ? 'Our Story' : 'हाम्रो कथा'}</div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-10">{t.about.title}</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">{t.about.intro}</p>
              <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium">{t.about.content}</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xl font-black mb-4 text-medical-blue">{t.about.visionTitle}</h4>
                  <p className="text-slate-600 font-medium">{t.about.vision}</p>
                </div>
                <div className="p-8 rounded-3xl bg-medical-blue text-white shadow-xl shadow-medical-blue/20">
                  <h4 className="text-xl font-black mb-4">{t.about.missionTitle}</h4>
                  <p className="text-blue-50 font-medium">{t.about.mission}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/nepal-hospital-service/1000/1000" alt="Team" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" />
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-slate-200 rounded-2xl overflow-hidden">
                    <img src="https://picsum.photos/seed/nepali-man-portrait/200/200" alt="MD" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-slate-900">{t.about.mdName}</div>
                    <div className="text-sm font-bold text-medical-blue uppercase tracking-widest">{t.about.mdRole}</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 italic font-medium leading-relaxed">"{t.about.mdMessage}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8">{t.whyChooseUs.title}</h2>
            <p className="text-xl text-slate-400 font-medium">{lang === 'en' ? 'We combine medical expertise with a human touch to give you the best care possible.' : 'हामी तपाईंलाई उत्कृष्ट हेरचाह दिनको लागि मानवीय स्पर्शको साथ चिकित्सा विशेषज्ञता संयोजन गर्दछौं।'}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award />, label: t.whyChooseUs.quality },
              { icon: <Zap />, label: t.whyChooseUs.cost },
              { icon: <UserCheck />, label: t.whyChooseUs.expertise },
              { icon: <Users />, label: t.whyChooseUs.reputation },
              { icon: <MapPin />, label: t.whyChooseUs.accessibility },
              { icon: <HeartPulse />, label: t.whyChooseUs.clientCare },
              { icon: <Building2 />, label: t.whyChooseUs.innovation },
              { icon: <ShieldCheck />, label: t.whyChooseUs.authenticity },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-medical-light transition-all group">
                <div className="w-14 h-14 bg-medical-blue/20 text-medical-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="text-lg font-black">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-medical-blue rounded-[4rem] p-12 md:p-24 overflow-hidden relative text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
            <div className="relative z-10 text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-display font-black mb-6">{t.branches.title}</h2>
              <p className="text-xl text-blue-100 font-medium">{t.branches.subtitle}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {t.branches.locations.map((loc, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 font-black text-xl hover:bg-white hover:text-medical-blue transition-all cursor-default">{loc}</motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="text-medical-blue font-black uppercase tracking-[0.3em] text-sm mb-4">{lang === 'en' ? 'Contact Us' : 'सम्पर्क'}</div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 mb-8">{t.contact.title}</h2>
              <p className="text-xl text-slate-600 mb-12 font-medium">{t.contact.subtitle}</p>
              <div className="space-y-10">
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-white text-medical-blue rounded-2xl flex items-center justify-center shadow-lg shrink-0"><MapPin size={32} /></div>
                  <div>
                    <div className="font-black text-xl mb-2 text-slate-900">{t.contact.addressLabel}</div>
                    <p className="text-slate-600 text-lg font-medium">{t.contact.address}</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-white text-medical-blue rounded-2xl flex items-center justify-center shadow-lg shrink-0"><Phone size={32} /></div>
                  <div>
                    <div className="font-black text-xl mb-2 text-slate-900">{t.contact.phoneLabel}</div>
                    <p className="text-slate-600 text-lg font-medium">{t.contact.phone}</p>
                    <p className="text-slate-600 text-lg font-medium">{t.contact.mobile}</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-16 h-16 bg-white text-medical-blue rounded-2xl flex items-center justify-center shadow-lg shrink-0"><Mail size={32} /></div>
                  <div>
                    <div className="font-black text-xl mb-2 text-slate-900">{t.contact.emailLabel}</div>
                    <p className="text-slate-600 text-lg font-medium">{t.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{t.contact.form.name}</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-medical-blue focus:bg-white outline-none transition-all font-bold" placeholder={lang === 'en' ? 'Your Name' : 'तपाईंको नाम'} />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{t.contact.form.phone}</label>
                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-medical-blue focus:bg-white outline-none transition-all font-bold" placeholder={lang === 'en' ? 'Phone Number' : 'फोन नम्बर'} />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{t.contact.form.message}</label>
                  <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-medical-blue focus:bg-white outline-none transition-all font-bold" placeholder={lang === 'en' ? 'How can we help you?' : 'हामीले कसरी सहयोग गर्न सक्छौं?'} />
                </div>
                <button className="w-full bg-medical-blue text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-medical-blue/30 hover:bg-blue-700 transition-all hover:-translate-y-1">{t.contact.form.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl overflow-hidden p-1.5">
                  <img src="https://i.ibb.co/mVctczJz/Chat-GPT-Image-Apr-15-2026-12-45-18-PM.png" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="font-display font-black text-3xl">{lang === 'en' ? 'All Nepal Health' : 'अल नेपाल हेल्थ'}</span>
              </div>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed font-medium mb-10">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 uppercase tracking-widest">{lang === 'en' ? 'Quick Links' : 'लिङ्कहरू'}</h4>
              <ul className="space-y-5 text-lg font-bold text-slate-400">
                {navItems.map(item => (
                  <li key={item.name}><a href={item.href} className="hover:text-medical-light transition-colors">{item.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-black mb-8 uppercase tracking-widest">{t.footer.hours}</h4>
              <ul className="space-y-5 text-lg font-bold text-slate-400">
                <li className="flex justify-between border-b border-white/10 pb-2"><span>{t.footer.sunFri.split(':')[0]}</span> <span>{t.footer.sunFri.split(':')[1]}</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span>{t.footer.sat.split(':')[0]}</span> <span>{t.footer.sat.split(':')[1]}</span></li>
                <li className="flex justify-between text-medical-light font-black"><span>{t.footer.emergency.split(':')[0]}</span> <span>{t.footer.emergency.split(':')[1]}</span></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center text-sm font-bold text-slate-500 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {lang === 'en' ? 'All Nepal Health Treatment Clinic' : 'अल नेपाल हेल्थ ट्रिटमेन्ट क्लिनिक'}. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
