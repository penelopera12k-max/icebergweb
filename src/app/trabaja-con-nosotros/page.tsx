"use client";

import React from "react";
import Image from "next/image";
import BrandSection from "@/components/BrandSection";
import Link from "next/link";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function TrabajaConNosotros() {
  const allBenefits = [
    { title: "PAGO PUNTUAL", desc: "Únete a nuestro equipo y disfruta de la tranquilidad de recibir tu pago a tiempo.", img: "/images/site/Pago.jpg" },
    { title: "DOS LINEAS DE NEGOCIO", desc: "Carga líquida y carga seca. ¡Tú eliges la que mejor se adapte a tu perfil!", img: "/images/site/DosLineas_flota.jpg" },
    { title: "SERVICIO DE CASINO", desc: "Relájate en el Casino de la compañía. Nuestras máquinas tienen opciones para todos.", img: "/images/site/Casino_real.jpg" },
    { title: "SERVICIO DE RUTA", desc: "Viaja sin estrés. Nuestro servicio de ruta te lleva directo a la empresa.", img: "/images/site/Ruta_map.jpg" },
    { title: "CURSOS TÉCNICOS", desc: "Cursos en alturas, mecánica básica y manejo defensivo siempre para ti.", img: "/images/site/Alturas.jpg" },
    { title: "BIENESTAR", desc: "Actividades para tus hijos, eventos sociales y mucho más. ¡Más que un empleo!", img: "/images/site/Ellas.jpg" },
    { title: "FINANCIAMIENTO", desc: "Convenios con diversas entidades para que tengas acceso a los mejores beneficios.", img: "/images/site/Prestamos_desk.jpg" },
    { title: "PRESTAMOS", desc: "Préstamos sin intereses para que inviertas en ti mismo y en los tuyos.", img: "/images/site/Prestamos_bag.jpg" },
    { title: "DESCANSO REMUNERADO", desc: "Garantizamos tiempos de descanso de calidad para tu equilibrio personal.", img: "/images/site/Descanso.jpg" },
    { title: "PLAN MOVIL", desc: "Conecta con quien quieras. Nuestro plan corporativo tiene todo lo que necesitas.", img: "/images/site/DatosMoviles.jpg" },
    { title: "VEHICULOS CONFORTABLES", desc: "Nueva flota de camiones. Confort y seguridad al máximo nivel.", img: "/images/site/Conductor_cabin.jpg" },
    { title: "PAGA DE HOTEL", desc: "Descansa tranquilo. Nuestras políticas de viaje se adaptan a tus necesidades.", img: "/images/site/Hotel.jpg" }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white min-h-screen pt-48 pb-10 text-[#333333] font-sans"
    >
      <div className="max-w-[1300px] mx-auto px-6">
        
        <div className="text-center mb-16 space-y-4">
           <h1 className="text-4xl font-black uppercase text-[#003366] tracking-tighter">Trabaja con nosotros</h1>
           <div className="h-1.5 w-20 bg-[#0072CE] mx-auto"></div>
        </div>
        
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://www.iceberg.com.co/Candidatos/TrabajeConNosotros.aspx" 
          target="_blank"
          className="block w-full bg-[#1A73E8] text-white py-4 font-bold uppercase text-[12px] tracking-widest rounded-md mb-20 shadow-sm hover:bg-[#003366] transition-all text-center btn-shimmer"
        >
           Envia tu hoja de vida ahora
        </motion.a>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
           {allBenefits.map((b, i) => (
             <motion.div key={i} variants={itemVariants} className="flex flex-col space-y-4 group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                   <Image src={b.img} alt={b.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="space-y-1">
                   <h3 className="text-[13px] font-bold uppercase text-[#0072CE] leading-tight group-hover:text-[#003366] transition-colors">{b.title}</h3>
                   <p className="text-[11px] leading-relaxed text-slate-500 font-medium">{b.desc}</p>
                </div>
             </motion.div>
           ))}
        </motion.div>

        <div className="flex justify-center mb-20">
           <Link 
             href="/noticias" 
             className="bg-[#003366] text-white px-12 py-4 rounded-md font-bold text-[12px] uppercase shadow-lg hover:bg-[#0072CE] transition-all flex items-center gap-3 tracking-widest btn-shimmer"
           >
              MÁS BENEFICIOS <Plus size={16} />
           </Link>
        </div>

      </div>

      <BrandSection />

    </motion.main>
  );
}
