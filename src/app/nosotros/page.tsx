"use client";

import React from "react";
import Image from "next/image";
import BrandSection from "@/components/BrandSection";

export default function Nosotros() {
  return (
    <main className="bg-white min-h-screen pt-48 pb-10 text-[#333333] font-sans">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="mb-12 border-b border-slate-100 pb-8">
           <h1 className="text-4xl font-semibold uppercase tracking-tight text-[#003366]">Sobre Nosotros</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
           <div className="space-y-8">
              <div className="space-y-6 text-slate-600 text-[17px] leading-relaxed font-semibold">
                 <p>
                    <span className="text-[#003366] font-semibold">TRANSPORTES ICEBERG DE COLOMBIA.</span> es una empresa líder en el sector transporte que propone soluciones integrales y eficientes en el manejo de carga nacional.
                 </p>
                 <p>
                    Contamos con una flota moderna y propia, especializada en carga líquida y seca. Nuestras operaciones se centralizan en nuestra sede principal de Cota Cundinamarca, garantizando los más altos estándares de seguridad, trazabilidad y responsabilidad ambiental.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                 <div className="space-y-2">
                    <h3 className="text-[12px] font-semibold text-[#0072CE] uppercase tracking-widest">Misión</h3>
                    <p className="text-[12px] text-slate-500 leading-normal">
                       Liderar el transporte de carga nacional con soluciones eficientes, tecnología de punta y un equipo humano enfocado en la excelencia.
                    </p>
                 </div>
                 <div className="space-y-2">
                    <h3 className="text-[12px] font-semibold text-[#0072CE] uppercase tracking-widest">Visión</h3>
                    <p className="text-[12px] text-slate-500 leading-normal">
                       Para el 2028, seremos el referente nacional en logística sostenible y expansión operativa, consolidando la confianza de nuestros socios.
                    </p>
                 </div>
              </div>
           </div>

           <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 shadow-sm">
              <Image src="/images/site/2.jpg" alt="Flota Iceberg" fill className="object-cover" />
           </div>
        </div>

        <div className="pt-2 pb-20 text-center mb-10">
           <a 
             href="https://www.iceberg.com.co/docs/GR-DG-01C%C3%B3digodeeticayConductaVv02.pdf" 
             target="_blank"
             className="inline-block bg-[#003366] text-white px-16 py-4 rounded-md font-bold text-[12px] uppercase tracking-[0.3em] hover:bg-[#0072CE] transition-all shadow-md"
           >
              Línea Ética
           </a>
        </div>

      </div>

      <BrandSection />

    </main>
  );
}
