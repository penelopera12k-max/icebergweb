"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const CounterItem = ({ target, duration, label, suffix = "" }: { target: number, duration: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-5xl lg:text-7xl font-black text-[#003366] mb-2 tabular-nums group-hover:text-[#00AEEF] transition-colors duration-500">
        {count}{suffix}
      </div>
      <div className="text-[#00AEEF] font-semibold uppercase tracking-widest text-sm lg:text-base">
        {label}
      </div>
    </div>
  );
};

export default function StatsCounter() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <CounterItem target={25} duration={1500} label="Años de Experiencia" suffix="+" />
          <CounterItem target={800} duration={2000} label="Unidades de Flota" suffix="+" />
          <CounterItem target={150} duration={1800} label="Clientes Corporativos" suffix="+" />
          <CounterItem target={100} duration={1500} label="Cobertura Nacional" suffix="%" />
        </div>
      </div>
    </section>
  );
}
