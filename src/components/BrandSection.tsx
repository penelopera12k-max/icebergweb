"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fleetImages = [
  "/images/site/2.jpg", "/images/site/24.jpg", "/images/site/3.jpg", 
  "/images/site/29.jpg", "/images/site/8.jpg", "/images/site/1.jpg",
  "/images/site/4.jpg", "/images/site/15.jpg", "/images/site/23.jpg"
];

export default function BrandSection() {
  return (
    <section className="bg-white border-t border-slate-50">
      {/* 🚛 INFINITE FLEET SLIDER */}
      <div className="relative overflow-hidden py-10">
         <motion.div 
           className="flex gap-4"
           animate={{ x: [0, -1200] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
         >
            {[...fleetImages, ...fleetImages].map((img, i) => (
              <div key={i} className="relative min-w-[280px] aspect-video flex-shrink-0 shadow-sm border border-slate-50">
                 <Image src={img} alt="Flota Iceberg" fill className="object-cover" />
              </div>
            ))}
         </motion.div>
      </div>

      {/* 📜 OFFICIAL CERTIFICATES STRIP */}
      <div className="flex justify-center py-10 border-t border-slate-50 bg-slate-50/30">
         <div className="relative w-full max-w-[800px] h-32 opacity-80">
            <Image src="/images/site/footer.jpg" alt="Certificados Iceberg" fill className="object-contain" />
         </div>
      </div>
    </section>
  );
}
