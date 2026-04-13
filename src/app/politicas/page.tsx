"use client";

import React from "react";
import Image from "next/image";

export default function Politicas() {
  const complianceItems = [
    { title: "SGI (Sistema de Gestión Integral)", desc: "Nuestro enfoque unificado para la calidad, seguridad y salud en el trabajo." },
    { title: "Seguridad Vial", desc: "Protocolos estrictos de prevención y control de fatiga para nuestros conductores." },
    { title: "Control y Seguridad BASC", desc: "Altos estándares para prevenir actividades ilícitas en la cadena logística." },
    { title: "Calidad ISO 9001", desc: "Mejora continua en todos los procesos administrativos y operativos." }
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-24">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="border-l-8 border-[#0072CE] pl-8 mb-20 text-[#003366]">
           <span className="text-[#0072CE] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Seguridad Integral</span>
           <h1 className="text-4xl lg:text-7xl font-extrabold uppercase tracking-tight leading-none mb-6">
              MARCO NORMATIVO <br />& POLÍTICAS SGI
           </h1>
           <p className="text-slate-500 font-medium max-w-2xl leading-relaxed italic">
              "Garantizamos que cada operación de transporte se realice bajo los más estrictos marcos legales y protocolos de seguridad internacional."
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-slate-100 border border-slate-100 shadow-sm mb-32">
           {complianceItems.map((item, i) => (
             <div key={i} className="bg-white p-12 lg:p-16 space-y-6">
                <h3 className="text-2xl font-bold uppercase text-[#003366] border-b-2 border-[#0072CE] pb-4 inline-block">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
             </div>
           ))}
        </div>

        <div className="text-center space-y-16">
           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Certificaciones y Avales Vigentes</h4>
           <div className="flex flex-wrap justify-between items-center gap-12 grayscale opacity-50">
              <Image src="https://www.iceberg.com.co/images/basc.png" alt="BASC" width={100} height={40} className="object-contain" />
              <Image src="https://www.iceberg.com.co/images/ruc.png" alt="RUC" width={180} height={60} className="object-contain" />
              <div className="text-3xl font-black text-slate-300 italic tracking-tighter uppercase">DIAN OEA</div>
              <div className="text-3xl font-black text-slate-300 italic tracking-tighter uppercase px-12 border-x border-slate-100">SGI ISO</div>
           </div>
        </div>

      </div>
    </main>
  );
}
