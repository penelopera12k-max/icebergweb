"use client";

import React from "react";
import BrandSection from "@/components/BrandSection";

export default function LineaEtica() {
  const policies = [
    { name: "Política Integral de Gestión", url: "https://www.iceberg.com.co/docs/GR-PO-05%20POLITICA%20INTEGRAL%20DE%20GESTION.pdf" },
    { name: "Política de Seguridad Vial", url: "https://www.iceberg.com.co/docs/GR-PO-06%20POLITICA%20DE%20SEGURIDAD%20VIAL24.pdf" },
    { name: "Política de Prevención de Adicciones", url: "https://www.iceberg.com.co/docs/GR-PO-02%20POLITICA%20PREVENCION%20DE%20ADICCIONES%20Vv.03.pdf" },
    { name: "Política de Prevención Acoso Laboral y Sexual", url: "https://www.iceberg.com.co/docs/Acosolaboral.pdf" },
    { name: "Código de Ética y Conducta", url: "https://www.iceberg.com.co/docs/GR-DG-01C%C3%B3digodeeticayConductaVv02.pdf" },
    { name: "Política de Tratamiento de Datos Personales", url: "https://www.iceberg.com.co/docs/ley.pdf" }
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-10 text-[#003366] font-sans">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="border-l-8 border-[#0072CE] pl-8 mb-20">
           <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              LÍNEA ÉTICA <br />& CUMPLIMIENTO
           </h1>
           <p className="text-slate-500 font-medium max-w-2xl leading-relaxed italic border-t border-slate-100 pt-6">
              Canal oficial para el reporte de actividades ilícitas y consultas sobre el Código de Conducta.
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
           <section className="space-y-8">
              <h3 className="text-xl font-bold uppercase border-b-2 border-slate-100 pb-4">Canales de Atención</h3>
              <div className="space-y-6">
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Línea Nacional</p>
                    <p className="text-lg font-bold">601 896 6565 - Ext. 151</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Línea Celular</p>
                    <p className="text-lg font-bold">321 213 2967</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Correo Electrónico</p>
                    <p className="text-lg font-bold">lineaetica@iceberg.com.co</p>
                 </div>
              </div>
           </section>

           <section className="bg-slate-50 p-10 lg:p-12 border border-slate-100 flex flex-col justify-center">
              <h3 className="text-xl font-bold uppercase text-[#0072CE] mb-6 underline">Consultorio de Ética</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">Atención para resolución de dilemas éticos y normativa corporativa.</p>
              <div className="space-y-2 text-[11px] font-bold uppercase tracking-widest">
                 <p>• Lunes a Viernes: 10am a 3pm</p>
                 <p>• Extensión: 177</p>
              </div>
           </section>
        </div>

        <div className="space-y-12 mb-24">
           <h3 className="text-xl font-bold uppercase border-b-2 border-slate-100 pb-4">Políticas y Reglamentos</h3>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {policies.map((p, i) => (
                <a key={i} href={p.url} target="_blank" className="flex justify-between items-center py-4 border-b border-slate-50 hover:border-[#0072CE] transition-all group">
                   <span className="text-[12px] font-bold uppercase text-slate-600 group-hover:text-[#003366]">{p.name}</span>
                   <span className="text-[10px] font-black text-slate-200 group-hover:text-[#0072CE]">PDF ↗</span>
                </a>
              ))}
           </div>
        </div>
      </div>

      <BrandSection />

    </main>
  );
}
