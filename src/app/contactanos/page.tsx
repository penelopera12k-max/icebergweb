"use client";

import React from "react";
import BrandSection from "@/components/BrandSection";

export default function Contactanos() {
  return (
    <main className="bg-slate-50 min-h-screen pt-48 pb-10 text-[#333333] font-sans">
      <div className="max-w-[1240px] mx-auto px-6">
        
        <div className="mb-20 text-center">
           <h1 className="text-4xl font-extrabold uppercase tracking-tight text-[#001a4d]">Contáctenos</h1>
           <div className="h-1.5 w-24 bg-[#0072CE] mx-auto mt-6"></div>
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-12 items-stretch mb-24 min-h-[600px]">
           
           <div className="lg:w-[45%] flex flex-col justify-between py-2">
              <div className="space-y-8">
                 <div className="space-y-2">
                    <label className="text-[17px] font-bold text-[#0056b3] block uppercase tracking-tight">Nombre:</label>
                    <input 
                      type="text" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#0072CE] focus:bg-white text-[15px] font-semibold text-slate-700 transition-all shadow-sm" 
                      placeholder="Ingrese su nombre completo" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[17px] font-bold text-[#0056b3] block uppercase tracking-tight">Correo Electrónico:</label>
                    <input 
                      type="email" 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#0072CE] focus:bg-white text-[15px] font-semibold text-slate-700 transition-all shadow-sm" 
                      placeholder="ejemplo@empresa.com" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[17px] font-bold text-[#0056b3] block uppercase tracking-tight">Mensaje:</label>
                    <textarea 
                      rows={6} 
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[#0072CE] focus:bg-white text-[15px] font-semibold text-slate-700 transition-all shadow-sm resize-none"
                      placeholder="Escriba aquí sus dudas o requerimientos..."
                    ></textarea>
                 </div>
              </div>

              <button className="mt-8 bg-[#007bff] text-white px-12 py-4 rounded-lg font-bold text-[14px] uppercase tracking-widest hover:bg-[#003366] transition-all shadow-lg active:scale-95 w-fit">
                 Enviar
              </button>
           </div>

           <div className="lg:w-[55%] rounded-2xl overflow-hidden border border-slate-100 shadow-inner relative min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.223842602123!2d-74.14896!3d4.76828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f83c022cdf3cb%3A0x6b968c931ba54ba9!2sTRANSPORTE%20ICEBERG!5e0!3m2!1ses-419!2sco!4v1712849500000!5m2!1ses-419!2sco" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>

        </div>

      </div>

      <div className="py-20">
         <BrandSection />
      </div>

    </main>
  );
}
