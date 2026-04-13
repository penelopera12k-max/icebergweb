"use client";

import React, { useState } from "react";
import BrandSection from "@/components/BrandSection";

export default function Encuesta() {
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: "A", text: "Cual es su nivel de satisfaccion en cuanto a la actitud de servicio del personal de nuestra empresa?" },
    { id: "B", text: "Considera usted que Transportes Iceberg cumple con los tiempos pactados?" },
    { id: "C", text: "Recibe de parte de la compania informacion confiable y oportuna sobre sus operaciones de transporte?" },
    { id: "D", text: "Considera que Transportes Iceberg cuenta con vehiculos confiables para el transporte de mercancias?" },
    { id: "E", text: "Considera que Transportes Iceberg maneja estandares de seguridad adecuados para el manejo de sus mercancias?" },
    { id: "F", text: "Recomendaria nuestro servicio a otras personas?" }
  ];

  const options = [
    "5-Muy Satisfecho",
    "4-Satisfecho",
    "3-Regular",
    "2-Insatisfecho",
    "1-Muy Insatisfecho"
  ];

  if (submitted) {
    return (
      <main className="bg-white min-h-screen pt-52 pb-24 text-center px-6">
        <h2 className="text-4xl font-black uppercase text-[#003366] italic mb-4">Información Guardada</h2>
        <p className="text-slate-500 mb-8 font-medium">Gracias por su valiosa contribución.</p>
        <button onClick={() => setSubmitted(false)} className="bg-[#2D74FF] text-white px-10 py-3 rounded-md font-bold hover:shadow-xl transition-all">Volver</button>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-48 pb-10 text-[#333333] font-sans">
      <div className="max-w-[1000px] mx-auto px-10">
        
        <h1 className="text-3xl font-medium text-center mb-12 text-slate-800">Encuesta de Satisfacción</h1>

        <div className="space-y-4 mb-10 text-[13px] leading-relaxed text-slate-600">
           <p className="font-bold">Encuesta de Satisfaccion al Cliente</p>
           <p>Como soporte para el sostenimiento de nuestro Sistema de Gestion de Calidad NTC ISO 9001:2008. Solicitamos su colaboracion Contestando la presente encuesta con la conviccion de que actuaremos en la permanente mejora de nuestros servicios</p>
           <p>Esta encuesta debe ser diligenciada por la persona contacto con quien mantenemos estrechas relaciones comerciales y conoce de nuestro servicio</p>
        </div>

        <form className="space-y-8 mb-24" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
           <div className="flex items-center gap-4 text-[13px]">
              <label>Nit (sin digito de verificacion):</label>
              <input type="text" className="border border-slate-300 p-1 w-48 outline-none focus:border-[#2D74FF]" required />
           </div>

           <div className="space-y-4 pt-6">
              {questions.map((q) => (
                <div key={q.id} className="grid md:grid-cols-12 gap-4 items-center border-b border-slate-50 pb-4">
                   <div className="md:col-span-8 flex gap-4 text-[13px]">
                      <span className="font-bold text-[#0072CE]">{q.id}.</span>
                      <p>{q.text}</p>
                   </div>
                   <div className="md:col-span-4">
                      <select className="w-full border border-slate-300 p-2 text-[12px] outline-none bg-white focus:border-[#2D74FF]" required>
                         <option value="">--Seleccione--</option>
                         {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                   </div>
                </div>
              ))}
           </div>

           <div className="space-y-2 pt-6">
              <label className="text-[13px]">Observaciones y sugerencias:</label>
              <textarea className="w-full border border-slate-300 p-4 h-32 outline-none focus:border-[#2D74FF]" />
           </div>

           <div className="space-y-6 pt-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                 <label className="md:w-1/4 text-[13px]">Encuesta respondida por:</label>
                 <input type="text" className="flex-1 border border-slate-200 p-2.5 rounded-sm outline-none" required />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                 <label className="md:w-1/4 text-[13px]">Cargo:</label>
                 <input type="text" className="flex-1 border border-slate-200 p-2.5 rounded-sm outline-none" required />
              </div>
           </div>

           <div className="flex justify-center pt-10">
              <button type="submit" className="bg-[#2D74FF] text-white px-12 py-3 rounded-md font-bold text-sm shadow-sm hover:bg-[#1a5edb] transition-all">
                 Guardar
              </button>
           </div>
        </form>

      </div>

      <BrandSection />

    </main>
  );
}
