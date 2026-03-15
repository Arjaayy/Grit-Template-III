"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 500, suffix: "+",    label: "Athletes registered", icon: "👥", desc: "Growing every season" },
  { num: 12,  suffix: "",     label: "Sports offered",      icon: "🏆", desc: "From football to tennis" },
  { num: 8,   suffix: "",     label: "Years running",       icon: "⚡", desc: "Trusted by the community" },
  { num: 50,  suffix: "+",    label: "Partner schools",     icon: "🏫", desc: "Citywide school network" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ num, suffix, label, icon, desc, active, i }: { num: number; suffix: string; label: string; icon: string; desc: string; active: boolean; i: number }) {
  const count = useCountUp(num, 2000, active);
  const isEven = i % 2 === 0;
  return (
    <div className={`card-lift relative p-10 overflow-hidden group ${isEven ? "bg-[#0a1628] text-white" : "bg-white border-2 border-[#0a1628]/10 text-[#0a1628]"}`}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#DA1D3A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      <span className="text-3xl mb-6 block">{icon}</span>
      <p className={`font-display leading-none mb-3 ${isEven ? "text-white" : "text-[#0a1628]"}`} style={{ fontSize: "clamp(52px, 7vw, 80px)" }}>
        {active ? count : 0}{suffix}
      </p>
      <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${isEven ? "text-white/80" : "text-[#0a1628]/80"}`}>{label}</p>
      <p className={`text-xs ${isEven ? "text-white/35" : "text-[#0a1628]/40"}`}>{desc}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6 bg-[#f8f9fc] overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[200px] text-[#0a1628]/[0.03] leading-none select-none pointer-events-none hidden lg:block">
        WIN
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#DA1D3A]" />
            <p className="text-[#DA1D3A] text-xs font-bold tracking-[0.3em] uppercase">By the numbers</p>
            <div className="h-[2px] w-12 bg-[#DA1D3A]" />
          </div>
          <h2 className="font-display text-[clamp(48px,7vw,90px)] uppercase leading-[0.9] text-[#0a1628]">
            Our <span className="text-[#DA1D3A]">Results</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => <StatCard key={s.label} {...s} active={active} i={i} />)}
        </div>
      </div>
    </section>
  );
}
