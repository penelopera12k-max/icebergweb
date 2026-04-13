"use client";

import { motion } from "framer-motion";

const logos = [
  "CLIENTE A", "CLIENTE B", "CLIENTE C", "CLIENTE D", "CLIENTE E", "CLIENTE F"
];

export default function ClientMarquee() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6 mb-12 text-center">
         <h3 className="text-[#003366]/40 font-black uppercase tracking-[0.3em] text-sm">Empresas que confían en nosotros</h3>
      </div>
      
      <div className="flex relative">
        <motion.div 
          className="flex whitespace-nowrap gap-20 items-center py-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="text-3xl lg:text-4xl font-black text-[#003366]/10 hover:text-[#003366]/30 transition-colors duration-500 cursor-default select-none uppercase tracking-tighter italic"
            >
              {logo}
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </section>
  );
}
