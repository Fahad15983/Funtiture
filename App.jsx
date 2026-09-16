import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Globe,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Award,
  Factory,
  Send,
  ExternalLink,
} from "lucide-react";

/* ==========================================================================
   CENTRAL ASSET & DATA CONFIGURATION
   Easily replace demo images and client text details in this single section.
   ========================================================================== */
const BRAND_CONFIG = {
  name: "LIANG",
  subName: "FURNITURE",
  chineseName: "梁氏家具",
  owner: "Liang Xiaolong",
  location: "Foshan, China",
  whatsapp: "+86 15813647967",
  whatsappUrl: "https://wa.me/8615813647967",
  facebookFollowers: "41K+",
  experienceYears: "10+",
  designsCount: "100+",
  social: {
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/8615813647967",
  },
};

const IMAGES = {
  heroBg:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=2000",
  aboutSection:
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=85&w=1200",
  factorySection:
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=85&w=1600",
  collections: {
    living:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=85&w=800",
    bedroom:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=85&w=800",
    dining:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=85&w=800",
    office:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=85&w=800",
  },
  products: [
    {
      id: 1,
      name: "Serenade Modular Leather Sofa",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=85&w=800",
      description:
        "Hand-stitched top-grain Italian leather with ergonomic down-filled cushioning.",
    },
    {
      id: 2,
      name: "Aura Minimalist Lounge Chair",
      category: "Living Room",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=85&w=800",
      description:
        "Sculptural solid ash wood frame with high-resilience bouclé upholstery.",
    },
    {
      id: 3,
      name: "Sienna Walnut Dining Table",
      category: "Dining Room",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=85&w=800",
      description:
        "Precision-cut solid North American walnut wood with brushed brass accents.",
    },
    {
      id: 4,
      name: "Haven Platform Upholstered Bed",
      category: "Bedroom",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=85&w=800",
      description:
        "Low-profile architectural silhouette featuring integrated soft ambient backlighting.",
    },
    {
      id: 5,
      name: "Kanso Travertine Side Table",
      category: "Living / Bedroom",
      image:
        "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=85&w=800",
      description:
        "Honed Roman travertine marble top balanced over matte black powder-coated steel.",
    },
    {
      id: 6,
      name: "Executive Minimalist Desk",
      category: "Office",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=85&w=800",
      description:
        "Seamless wood veneer executive suite table integrated with wire management.",
    },
  ],
};

// UI Text Translation Map
const TRANSLATIONS = {
  EN: {
    nav: {
      home: "Home",
      about: "About",
      collections: "Collections",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      quote: "Get a Quote",
    },
    hero: {
      tag: "FURNITURE MANUFACTURING · FOSHAN, CHINA",
      title: "Crafted for Modern Living.",
      subtitle:
        "Premium furniture manufactured with quality materials, refined craftsmanship, and timeless architectural design.",
      btnPrimary: "Explore Collection",
      btnSecondary: "Request a Quote",
      trust: "Direct Factory Manufacturer · Foshan, Guangdong, China",
    },
    about: {
      tag: "ABOUT OUR CRAFT",
      title: "Furniture Made With Purpose.",
      desc: "Based in Foshan, China—the world's premier furniture manufacturing hub—we create furniture that balances contemporary aesthetic, reliable structural integrity, and exquisite detail. From luxury residential living spaces to practical hotel and commercial interiors, our collections are engineered for modern lifestyles.",
      years: "Years of Experience",
      designs: "Furniture Designs",
      followers: "Social Followers",
      btn: "Discover Our Story",
    },
    collections: {
      title: "Explore Our Collections",
      subtitle:
        "Designed to bring comfort, character, and timeless sophistication to every interior space.",
      categories: [
        { name: "Living Room", count: "Sofas, Armchairs & Coffee Tables" },
        { name: "Bedroom", count: "Beds, Nightstands & Wardrobes" },
        { name: "Dining Room", count: "Dining Tables, Chairs & Cabinets" },
        { name: "Office Furniture", count: "Desks, Conference & Lounge" },
      ],
    },
    featured: {
      title: "Featured Furniture",
      subtitle:
        "A curated selection of signature designs engineered for contemporary spaces.",
      viewDetails: "Inquire Product",
    },
    whyUs: {
      title: "Why Choose Us",
      subtitle:
        "Combining artisan woodworking with state-of-the-art precision production.",
      items: [
        {
          id: "01",
          title: "Quality Craftsmanship",
          desc: "Carefully selected kiln-dried hardwoods, top-tier leather, and precision joinery.",
        },
        {
          id: "02",
          title: "Modern Design",
          desc: "Furniture designed around modern architectural standards and human ergonomics.",
        },
        {
          id: "03",
          title: "Custom Solutions",
          desc: "Flexible OEM & ODM custom tailored options for bespoke residential and commercial projects.",
        },
        {
          id: "04",
          title: "Reliable Manufacturing",
          desc: "Direct factory pricing with rigorous quality control based in Foshan, China.",
        },
      ],
    },
    factory: {
      tag: "OUR MANUFACTURING BASE",
      title: "Made in Foshan, China",
      desc: "From our high-precision manufacturing base in Foshan, we combine skilled artisan craftsmanship with modern automated technology to manufacture luxury furniture for private residences, commercial interior projects, and international distributors worldwide.",
      btn: "Discover Our Factory",
    },
    cta: {
      title: "Looking for the Right Furniture for Your Space?",
      desc: "Whether you're furnishing a private residence, boutique showroom, luxury hotel, modern office, or sourcing for wholesale distribution, let's discuss your project specifications.",
      quoteBtn: "Request a Quote",
      contactBtn: "Contact Us",
      directChat: "Direct WhatsApp Line:",
    },
    footer: {
      brandDesc:
        "Premium furniture manufacturing and global export from Foshan, China. Dedicated to modern luxury and timeless craftsmanship.",
      colCompany: "Company",
      colContact: "Contact",
      colSocial: "Connect",
      rights: "All rights reserved. Designed for international excellence.",
    },
    modal: {
      title: "Request a Factory Quote",
      subtitle: "Send your inquiry directly to our Foshan production center.",
      name: "Your Name",
      email: "Email Address",
      phone: "WhatsApp / Phone",
      projectType: "Project Type",
      message: "Project details / Furniture requirements",
      submit: "Send Quote Request",
      success:
        "Thank you! Your quote inquiry has been submitted. Our team will contact you shortly.",
    },
  },
  ZH: {
    nav: {
      home: "首页",
      about: "关于我们",
      collections: "家具系列",
      services: "服务范围",
      gallery: "展厅画廊",
      contact: "联系我们",
      quote: "获取报价",
    },
    hero: {
      tag: "家具制造 · 中国佛山",
      title: "为现代生活打造卓越品质。",
      subtitle:
        "精选优质选材，结合精湛工艺与永恒设计，打造高端实木与软体家具。",
      btnPrimary: "浏览家具系列",
      btnSecondary: "索取工厂报价",
      trust: "源头制造工厂 · 中国广东佛山",
    },
    about: {
      tag: "关于我们的工艺",
      title: "用心打造每一件家具。",
      desc: "我们总部位于中国家具之都佛山，致力于打造兼具当代美学、稳固结构与精致细节的高品质家具。无论是奢华住宅空间，还是商业工程项目，我们的产品皆为满足现代高品质生活而生。",
      years: "年行业制造经验",
      designs: "原创家具设计",
      followers: "全球社交关注",
      btn: "了解品牌故事",
    },
    collections: {
      title: "探索我们的家具系列",
      subtitle: "为每一个空间注入舒适、优雅与独特的品味。",
      categories: [
        { name: "客厅系列", count: "沙发、单人椅、茶几" },
        { name: "卧室系列", count: "双人床、床头柜、衣柜" },
        { name: "餐厅系列", count: "餐桌、餐椅、餐边柜" },
        { name: "办公系列", count: "班台、会议桌、休闲椅" },
      ],
    },
    featured: {
      title: "精选臻品",
      subtitle: "为现代空间量身定制的代表作系列。",
      viewDetails: "咨询产品详情",
    },
    whyUs: {
      title: "为什么选择我们",
      subtitle: "将匠心传统木工工艺与现代化高精度生产相结合。",
      items: [
        {
          id: "01",
          title: "精湛匠心品质",
          desc: "严选烘干实木、进口头层皮料与高密度海绵，严控每道工序。",
        },
        {
          id: "02",
          title: "现代美学设计",
          desc: "融合现代建筑美学与人体工程学，兼具美观与实用功能。",
        },
        {
          id: "03",
          title: "工程定制方案",
          desc: "提供灵活的OEM/ODM工程定制服务，满足不同空间规模需求。",
        },
        {
          id: "04",
          title: "佛山可靠制造",
          desc: "源头工厂直供，完备的质量检测体系，产品远销全球各地。",
        },
      ],
    },
    factory: {
      tag: "我们的制造基地",
      title: "源自中国佛山智造",
      desc: "我们在佛山拥有现代化生产制造基地，结合经验丰富的熟练匠人与精密设备，为全球私人豪宅、精品酒店及国际采购商提供高标准家具制造与出口服务。",
      btn: "参观工厂与展厅",
    },
    cta: {
      title: "正在为您的空间寻找理想家具？",
      desc: "无论您是私宅业主、室内设计师、酒店工程采购商还是国际批发商，欢迎随时联系我们探讨您的项目需求。",
      quoteBtn: "索取项目报价",
      contactBtn: "联系我们",
      directChat: "WhatsApp 专属直连:",
    },
    footer: {
      brandDesc:
        "源自中国佛山的高端家具制造与出口商。专注现代奢华品味与匠心工艺。",
      colCompany: "公司导航",
      colContact: "联系方式",
      colSocial: "关注我们",
      rights: "版权所有。为全球高品质空间服务。",
    },
    modal: {
      title: "索取工厂专属报价",
      subtitle: "将您的需求直接发送至中国佛山生产总部。",
      name: "您的姓名",
      email: "电子邮箱",
      phone: "电话 / WhatsApp",
      projectType: "项目类型 (零售/工程/代理)",
      message: "项目详情或具体的家具需求描述",
      submit: "提交报价申请",
      success: "感谢您的咨询！报价申请已成功提交，我们的团队将尽快与您联系。",
    },
  },
};

export default function App() {
  const [lang, setLang] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = TRANSLATIONS[lang];

  // Track navbar scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openQuoteModal = (productName = null) => {
    setSelectedProduct(productName);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setFormSubmitted(false);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans antialiased selection:bg-[#C8A97E] selection:text-white">
      {/* ===================================================================
          1. NAVIGATION BAR
         =================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FDFBF7]/90 backdrop-blur-md py-4 shadow-sm border-b border-[#EAE3D2]"
            : "bg-gradient-to-b from-black/60 via-black/30 to-transparent py-6 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex flex-col tracking-widest uppercase">
            <span
              className={`font-serif text-2xl font-bold tracking-[0.2em] transition-colors ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}
            >
              {BRAND_CONFIG.name}
            </span>
            <span
              className={`text-[9px] tracking-[0.35em] font-light -mt-1 ${scrolled ? "text-[#8C8275]" : "text-white/80"}`}
            >
              {BRAND_CONFIG.subName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-[0.15em] uppercase">
            {[
              "home",
              "about",
              "collections",
              "services",
              "gallery",
              "contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`transition-colors duration-300 relative hover:text-[#C8A97E] ${
                  scrolled ? "text-[#2D2B2A]" : "text-white/90"
                }`}
              >
                {t.nav[item]}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Switcher */}
            <div
              className={`flex items-center space-x-1 text-xs tracking-wider border rounded-full px-3 py-1 transition-colors ${
                scrolled
                  ? "border-[#D9D2C5] text-[#2D2B2A]"
                  : "border-white/30 text-white"
              }`}
            >
              <Globe className="w-3.5 h-3.5 mr-1 text-[#C8A97E]" />
              <button
                onClick={() => setLang("EN")}
                className={`px-1 font-semibold transition-opacity ${lang === "EN" ? "text-[#C8A97E]" : "opacity-60 hover:opacity-100"}`}
              >
                EN
              </button>
              <span className="opacity-40">|</span>
              <button
                onClick={() => setLang("ZH")}
                className={`px-1 font-semibold transition-opacity ${lang === "ZH" ? "text-[#C8A97E]" : "opacity-60 hover:opacity-100"}`}
              >
                中文
              </button>
            </div>

            {/* Quote Button */}
            <button
              onClick={() => openQuoteModal()}
              className="bg-[#211F1E] text-white hover:bg-[#C8A97E] text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-300 shadow-sm"
            >
              {t.nav.quote}
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setLang(lang === "EN" ? "ZH" : "EN")}
              className={`text-xs font-semibold px-2 py-1 rounded border ${scrolled ? "border-[#2D2B2A] text-[#2D2B2A]" : "border-white text-white"}`}
            >
              {lang === "EN" ? "中文" : "EN"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 focus:outline-none ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1A1A] text-white px-6 py-8 border-t border-white/10 animate-fadeIn">
            <nav className="flex flex-col space-y-5 text-sm uppercase tracking-widest font-medium">
              {[
                "home",
                "about",
                "collections",
                "services",
                "gallery",
                "contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#C8A97E] transition-colors"
                >
                  {t.nav[item]}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full bg-[#C8A97E] text-white py-3 text-xs uppercase tracking-widest font-semibold"
                >
                  {t.nav.quote}
                </button>
                <a
                  href={BRAND_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border border-white/20 text-center py-3 text-xs uppercase tracking-widest text-white/90 flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ===================================================================
          2. HERO SECTION
         =================================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Background Furniture Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroBg}
            alt="Luxury Furniture Living Room Interior"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 text-white w-full">
          <div className="max-w-2xl space-y-6">
            {/* Small Label */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></span>
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/90">
                {t.hero.tag}
              </span>
            </div>

            {/* Main Serif Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] text-white">
              {t.hero.title}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg font-light text-white/80 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#collections"
                className="inline-flex items-center justify-center bg-[#C8A97E] hover:bg-[#b5956a] text-white text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold transition-all shadow-lg group"
              >
                <span>{t.hero.btnPrimary}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => openQuoteModal()}
                className="inline-flex items-center justify-center border border-white/40 hover:bg-white hover:text-[#1A1A1A] text-white text-xs uppercase tracking-[0.2em] px-8 py-4 font-medium transition-all duration-300"
              >
                {t.hero.btnSecondary}
              </button>
            </div>

            {/* Trust Banner */}
            <div className="pt-12 flex items-center space-x-3 text-xs text-white/60 tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
              <span>{t.hero.trust}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. INTRODUCTION / BRAND SECTION
         =================================================================== */}
      <section id="about" className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden rounded-sm shadow-xl aspect-[4/5]">
                <img
                  src={IMAGES.aboutSection}
                  alt="Liang Furniture Craftsmanship Detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Subtle Decorative Frame Accent */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#C8A97E]/30 -z-0" />
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C8275]">
                {t.about.tag}
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal tracking-tight">
                {t.about.title}
              </h2>

              <p className="text-[#55524E] leading-relaxed text-sm sm:text-base font-light">
                {t.about.desc}
              </p>

              {/* Statistics Row */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-b border-[#EAE3D2] py-6">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-semibold">
                    {BRAND_CONFIG.experienceYears}
                  </div>
                  <div className="text-xs text-[#8C8275] tracking-wide uppercase mt-1">
                    {t.about.years}
                  </div>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-semibold">
                    {BRAND_CONFIG.designsCount}
                  </div>
                  <div className="text-xs text-[#8C8275] tracking-wide uppercase mt-1">
                    {t.about.designs}
                  </div>
                </div>

                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] font-semibold">
                    {BRAND_CONFIG.facebookFollowers}
                  </div>
                  <div className="text-xs text-[#8C8275] tracking-wide uppercase mt-1">
                    {t.about.followers}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] hover:text-[#C8A97E] transition-colors group"
                >
                  <span>{t.about.btn}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. FURNITURE COLLECTIONS
         =================================================================== */}
      <section id="collections" className="py-24 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-2xl text-center mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal tracking-tight">
              {t.collections.title}
            </h2>
            <p className="text-sm sm:text-base text-[#6E6A63] font-light">
              {t.collections.subtitle}
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.collections.categories[0].name,
                desc: t.collections.categories[0].count,
                img: IMAGES.collections.living,
              },
              {
                title: t.collections.categories[1].name,
                desc: t.collections.categories[1].count,
                img: IMAGES.collections.bedroom,
              },
              {
                title: t.collections.categories[2].name,
                desc: t.collections.categories[2].count,
                img: IMAGES.collections.dining,
              },
              {
                title: t.collections.categories[3].name,
                desc: t.collections.categories[3].count,
                img: IMAGES.collections.office,
              },
            ].map((col, idx) => (
              <div
                key={idx}
                className="group relative h-[420px] overflow-hidden rounded-xs cursor-pointer shadow-sm"
              >
                {/* Background Image with Zoom */}
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/70 font-mono">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-normal mt-1 mb-1">
                    {col.title}
                  </h3>
                  <p className="text-xs text-white/70 font-light mb-4">
                    {col.desc}
                  </p>

                  <div className="flex items-center text-xs uppercase tracking-widest font-medium text-[#C8A97E] group-hover:text-white transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. FEATURED PRODUCTS
         =================================================================== */}
      <section className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-xl space-y-3">
              <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal tracking-tight">
                {t.featured.title}
              </h2>
              <p className="text-sm sm:text-base text-[#6E6A63] font-light">
                {t.featured.subtitle}
              </p>
            </div>
            <button
              onClick={() => openQuoteModal()}
              className="mt-6 md:mt-0 inline-flex items-center text-xs uppercase tracking-[0.2em] font-semibold text-[#1A1A1A] hover:text-[#C8A97E] transition-colors"
            >
              <span>Request Full Catalog</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          {/* Product Grid - 6 Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.products.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-[#EAE3D2] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F2EFE9]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#1A1A1A]/80 backdrop-blur-md text-white text-[10px] uppercase tracking-widest px-2.5 py-1">
                      {item.category}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl text-[#1A1A1A] font-medium group-hover:text-[#C8A97E] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6E6A63] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2 border-t border-[#F2EFE9] flex items-center justify-between">
                  <button
                    onClick={() => openQuoteModal(item.name)}
                    className="text-xs uppercase tracking-widest font-semibold text-[#1A1A1A] hover:text-[#C8A97E] transition-colors inline-flex items-center"
                  >
                    <span>{t.featured.viewDetails}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. WHY CHOOSE US (ELEGANT DARK SECTION)
         =================================================================== */}
      <section id="services" className="py-24 bg-[#1F1D1C] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A97E] font-medium">
              FACTORY DIRECT ADVANTAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              {t.whyUs.title}
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-light">
              {t.whyUs.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.whyUs.items.map((item) => (
              <div
                key={item.id}
                className="border border-white/10 p-8 rounded-xs hover:border-[#C8A97E]/50 transition-colors bg-white/[0.02]"
              >
                <div className="font-mono text-xs text-[#C8A97E] mb-4">
                  {item.id}
                </div>
                <h3 className="font-serif text-xl font-normal text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. FACTORY / FOSHAN SECTION
         =================================================================== */}
      <section
        id="gallery"
        className="relative py-32 bg-[#1A1A1A] text-white overflow-hidden"
      >
        {/* Wide Factory Image Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src={IMAGES.factorySection}
            alt="Foshan Furniture Manufacturing Facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs tracking-widest uppercase">
            <Factory className="w-3.5 h-3.5 text-[#C8A97E]" />
            <span>{t.factory.tag}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-6xl font-normal tracking-tight">
            {t.factory.title}
          </h2>

          <p className="text-sm sm:text-base text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            {t.factory.desc}
          </p>

          <div className="pt-4">
            <button
              onClick={() => openQuoteModal()}
              className="inline-flex items-center bg-[#C8A97E] hover:bg-[#b5956a] text-white text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold transition-all shadow-md"
            >
              <span>{t.factory.btn}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. INTERNATIONAL BUSINESS CTA
         =================================================================== */}
      <section id="contact" className="py-24 bg-[#F2EFE9]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] font-normal tracking-tight">
            {t.cta.title}
          </h2>

          <p className="text-sm sm:text-base text-[#55524E] font-light max-w-2xl mx-auto leading-relaxed">
            {t.cta.desc}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#C8A97E] text-white text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold transition-all shadow-md"
            >
              {t.cta.quoteBtn}
            </button>

            <a
              href={BRAND_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-[#1A1A1A] hover:border-emerald-600 hover:bg-emerald-600 hover:text-white text-[#1A1A1A] text-xs uppercase tracking-[0.2em] px-8 py-4 font-semibold transition-all inline-flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 hover:text-white" />
              <span>WhatsApp: {BRAND_CONFIG.whatsapp}</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-[#8C8275]">
            <span>Owner & Direct Contact: </span>
            <strong className="text-[#1A1A1A] font-medium">
              {BRAND_CONFIG.owner}
            </strong>
            <span className="mx-2">•</span>
            <span>Foshan City, Guangdong Province, China</span>
          </div>
        </div>
      </section>

      {/* ===================================================================
          9. FOOTER
         =================================================================== */}
      <footer className="bg-[#141312] text-white/80 py-16 border-t border-white/10 text-xs font-light">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex flex-col tracking-widest uppercase">
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[9px] tracking-[0.35em] text-[#C8A97E] font-light">
                  {BRAND_CONFIG.subName}
                </span>
              </div>

              <p className="text-white/60 leading-relaxed max-w-sm">
                {t.footer.brandDesc}
              </p>

              <div className="text-white/40 pt-2 font-mono text-[11px]">
                Foshan Industrial District, Guangdong, China
              </div>
            </div>

            {/* Navigation Column */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-white uppercase tracking-widest font-medium text-[11px]">
                {t.footer.colCompany}
              </h4>
              <ul className="space-y-2 text-white/60">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.collections}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.services}
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="hover:text-white transition-colors"
                  >
                    {t.nav.gallery}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-white uppercase tracking-widest font-medium text-[11px]">
                {t.footer.colContact}
              </h4>
              <ul className="space-y-2.5 text-white/60">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A97E]" />
                  <span>{BRAND_CONFIG.location}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <a
                    href={BRAND_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp: {BRAND_CONFIG.whatsapp}
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#C8A97E]">FB:</span>
                  <a
                    href={BRAND_CONFIG.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Facebook ({BRAND_CONFIG.facebookFollowers})
                  </a>
                </li>
              </ul>
            </div>

            {/* Social / Language Column */}
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-white uppercase tracking-widest font-medium text-[11px]">
                {t.footer.colSocial}
              </h4>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setLang("EN")}
                  className={`px-2 py-1 rounded text-[11px] font-mono ${lang === "EN" ? "bg-[#C8A97E] text-white" : "bg-white/10 text-white/60"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("ZH")}
                  className={`px-2 py-1 rounded text-[11px] font-mono ${lang === "ZH" ? "bg-[#C8A97E] text-white" : "bg-white/10 text-white/60"}`}
                >
                  中文
                </button>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-[11px] space-y-4 md:space-y-0">
            <div>
              © 2026 {BRAND_CONFIG.name} {BRAND_CONFIG.subName}.{" "}
              {t.footer.rights}
            </div>
            <div>
              Factory Contact: {BRAND_CONFIG.owner} ({BRAND_CONFIG.whatsapp})
            </div>
          </div>
        </div>
      </footer>

      {/* ===================================================================
          MODAL: FACTORY INQUIRY & REQUEST QUOTE
         =================================================================== */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FDFBF7] border border-[#EAE3D2] rounded-xs max-w-lg w-full p-8 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#8C8275] hover:text-[#1A1A1A] p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A]">
                  Inquiry Submitted
                </h3>
                <p className="text-xs text-[#6E6A63] leading-relaxed max-w-xs mx-auto">
                  {t.modal.success}
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#1A1A1A]">
                    {t.modal.title}
                  </h3>
                  <p className="text-xs text-[#8C8275] mt-1">
                    {t.modal.subtitle}
                  </p>
                  {selectedProduct && (
                    <div className="mt-3 text-xs bg-[#F2EFE9] px-3 py-1.5 rounded-xs text-[#1A1A1A] font-medium">
                      Inquiring for: {selectedProduct}
                    </div>
                  )}
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-[#8C8275] mb-1">
                      {t.modal.name}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-white border border-[#EAE3D2] px-3 py-2.5 focus:outline-none focus:border-[#C8A97E]"
                      placeholder="e.g. Alexander Wright"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#8C8275] mb-1">
                        {t.modal.email}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white border border-[#EAE3D2] px-3 py-2.5 focus:outline-none focus:border-[#C8A97E]"
                        placeholder="client@domain.com"
                      />
                    </div>
                    <div>
                      <label className="block uppercase tracking-wider text-[10px] text-[#8C8275] mb-1">
                        {t.modal.phone}
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-white border border-[#EAE3D2] px-3 py-2.5 focus:outline-none focus:border-[#C8A97E]"
                        placeholder="+1 555 019 2834"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block uppercase tracking-wider text-[10px] text-[#8C8275] mb-1">
                      {t.modal.message}
                    </label>
                    <textarea
                      rows={3}
                      required
                      className="w-full bg-white border border-[#EAE3D2] px-3 py-2.5 focus:outline-none focus:border-[#C8A97E]"
                      placeholder="Specify estimated quantities, project timeline, or custom dimensions required..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1A1A1A] hover:bg-[#C8A97E] text-white py-3.5 uppercase tracking-[0.2em] font-semibold text-xs transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.modal.submit}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
