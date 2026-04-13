"use client";

import React from "react";
import Image from "next/image";
import BrandSection from "@/components/BrandSection";
import { Play, Camera, MapPin, Trophy } from "lucide-react";

export default function Noticias() {
  const videoNews = [
    { 
      title: "BOLSA DE VACACIONES \"GUATAPÉ\"", 
      video: "https://www.iceberg.com.co/img/Videos/1.mp4",
      icon: <MapPin size={24} className="text-blue-500" />
    },
    { 
      title: "CELEBRAMOS CON NUESTROS CONDUCTORES SU \"DÍA\"", 
      video: "https://www.iceberg.com.co/img/Videos/2.mp4",
      icon: <Trophy size={24} className="text-[#003366]" />
    },
    { 
      title: "BOLSA DE VACACIONES \"SAN ANDRÉS ISLA\"", 
      video: "https://www.iceberg.com.co/img/Videos/3.mp4",
      icon: <MapPin size={24} className="text-cyan-500" />
    }
  ];

  return (
    <main className="bg-white min-h-screen pt-48 pb-0 text-[#333333] font-sans">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* TITULACIÓN INSTITUCIONAL */}
        <div className="text-center mb-24 space-y-4">
           <h1 className="text-4xl font-black uppercase text-[#003366] tracking-tight">Bienestar e Información</h1>
           <div className="h-1.5 w-24 bg-[#0072CE] mx-auto rounded-full"></div>
           <p className="text-slate-400 font-bold uppercase text-[11px] tracking-[0.3em] pt-4">Vida Corporativa - Transportes Iceberg</p>
        </div>

        {/* SECCIONES DE VIDEO (100% CONTENIDO ORIGINAL) */}
        <div className="space-y-32 mb-40">
           {videoNews.map((item, idx) => (
             <div key={idx} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`w-full lg:w-1/2 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                   <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 ring-1 ring-slate-100">
                      <video 
                        src={item.video} 
                        controls 
                        className="w-full h-full object-cover"
                        poster={`/images/site/flota_${idx + 1}.jpg`}
                      >
                         Tu navegador no soporta videos.
                      </video>
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                         {item.icon}
                      </div>
                   </div>
                </div>
                <div className={`w-full lg:w-1/2 space-y-6 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <span className="text-[#0072CE] text-[10px] font-black uppercase tracking-[0.4em]">Hito Corporativo</span>
                   <h2 className="text-4xl font-black uppercase text-[#003366] leading-none tracking-tighter">
                      {item.title}
                   </h2>
                   <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
                      Impulsamos el bienestar de nuestro equipo operativo a través de incentivos y programas de recreación de alta calidad.
                   </p>
                   <div className="flex items-center gap-4 text-[#0072CE]">
                      <div className="h-px w-12 bg-[#0072CE]/30"></div>
                      <span className="text-[11px] font-black uppercase tracking-widest">Transportes Iceberg de Colombia</span>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* GALERÍA SOCIAL (16 IMÁGENES) */}
        <div className="bg-slate-50 -mx-6 px-6 py-32 border-y border-slate-100 mb-32">
           <div className="max-w-[1240px] mx-auto space-y-16">
              <div className="text-center space-y-4">
                 <Camera size={40} className="mx-auto text-[#003366]" />
                 <h3 className="text-3xl font-black uppercase text-[#003366] tracking-tighter">Momentos Iceberg</h3>
                 <p className="text-slate-400 font-semibold text-[13px] uppercase tracking-widest">Galería oficial de bienestar social</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                 {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((num) => (
                   <div key={num} className="group relative aspect-square rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:z-[100] hover:scale-105 transition-all duration-300 cursor-zoom-in">
                      <Image 
                        src={`/images/site/bienestar/${num}.jpg`} 
                        alt={`Bienestar Iceberg ${num}`} 
                        fill 
                        className="object-cover group-hover:brightness-110 transition-all"
                      />
                      <div className="absolute inset-0 bg-[#003366]/0 group-hover:bg-[#003366]/10 transition-all"></div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* PIE DE CERTIFICACIONES (RECREACIÓN 100%) */}
        <div className="mb-32">
           <div className="text-center space-y-8">
              <span className="text-[10px] font-black uppercase text-slate-300 tracking-[0.6em]">Certificados de Excelencia</span>
              <div className="relative w-full h-[150px] grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                 <Image 
                   src="/images/site/certs_footer.jpg" 
                   alt="Certificaciones BASC CCS RUC" 
                   fill 
                   className="object-contain" 
                 />
              </div>
           </div>
        </div>

      </div>

      <BrandSection />

    </main>
  );
}
