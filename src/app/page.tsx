"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BrandSection from "@/components/BrandSection";
import StatsCounter from "@/components/StatsCounter";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { X } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(5px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const assets = {
    slides: ["/images/site/24.jpg", "/images/site/6.jpg", "/images/site/1.jpg"],
    liquida: [
      "/images/site/1.jpg", "/images/site/2.jpg", "/images/site/3.jpg", "/images/site/4.jpg",
      "/images/site/5.jpg", "/images/site/7.jpg", "/images/site/8.jpg", "/images/site/9.jpg"
    ],
    seca: ["/images/site/6.jpg", "/images/site/15.jpg", "/images/site/23.jpg"]
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % assets.slides.length), 6000);
    return () => clearInterval(timer);
  }, [assets.slides.length]);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen text-[#003366] font-sans relative overflow-x-hidden"
    >
      <section ref={heroRef} className="relative w-full h-[600px] lg:h-[800px] bg-slate-900 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          {assets.slides.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-[1500ms] ${currentSlide === i ? "opacity-100" : "opacity-0"}`}>
              <Image src={img} alt="Iceberg Hero" fill sizes="100vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/60 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
        
        <motion.div 
          style={{ y: y2 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-white text-6xl lg:text-[8rem] font-black uppercase tracking-tighter italic leading-none drop-shadow-2xl"
          >
          </motion.h1>
        </motion.div>
      </section>

      <StatsCounter />

      <section className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h4 className="text-[#00AEEF] text-xl font-black uppercase tracking-tight mb-2 italic">EXCELENCIA</h4>
             <h2 className="text-[#003366] text-4xl lg:text-5xl font-black uppercase tracking-tight italic underline decoration-4 decoration-[#00AEEF] underline-offset-[12px]">
                CARGA LIQUIDA
             </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8"
          >
            {assets.liquida.map((img, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-white p-1 shadow-xl border border-slate-50 cursor-zoom-in relative group"
                onClick={() => setSelectedImage(img)}
              >
                 <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image src={img} alt={`Unidad ${i+1}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#003366]/0 group-hover:bg-[#003366]/10 transition-all duration-300" />
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h4 className="text-[#00AEEF] text-xl font-black uppercase tracking-tight mb-2 italic">FLOTA</h4>
             <h2 className="text-[#003366] text-4xl lg:text-5xl font-black uppercase tracking-tight italic underline decoration-4 decoration-[#00AEEF] underline-offset-[12px]">
                CARGA SECA
             </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-6 items-stretch"
          >
            <div className="lg:col-span-4 flex flex-col gap-6">
               {[assets.seca[0], assets.seca[1]].map((img, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ x: 5 }}
                   className="relative aspect-video lg:aspect-square shadow-xl border-4 border-white overflow-hidden rounded-sm cursor-zoom-in group"
                   onClick={() => setSelectedImage(img)}
                 >
                    <Image src={img} alt={`Seca ${i+1}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-[1s] group-hover:scale-110" />
                 </motion.div>
               ))}
            </div>
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="lg:col-span-8 relative min-h-[400px] shadow-xl border-8 border-white overflow-hidden rounded-sm cursor-zoom-in group"
              onClick={() => setSelectedImage(assets.seca[2])}
            >
               <Image src={assets.seca[2]} alt="Seca Principal" fill sizes="66vw" className="object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BrandSection />

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[2000] bg-[#003366]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full aspect-[16/10]"
            >
              <Image src={selectedImage} alt="Fullscreen" fill className="object-contain" />
              <button className="absolute -top-12 right-0 text-white p-2">
                <X size={44} strokeWidth={1} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
