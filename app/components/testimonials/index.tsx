"use client";

import { useState } from "react";

const testimonials = [
  { name: "Jamie K.",  since: "Member since 2022", sport: "Football",   quote: "Best decision I made. I moved to the city knowing nobody — now my whole social life revolves around this league.", rating: 5 },
  { name: "Rania L.",  since: "Member since 2023", sport: "Volleyball", quote: "Super welcoming, even for a total beginner. The skill matching is spot on — I never felt out of my depth.", rating: 5 },
  { name: "Marco S.",  since: "Member since 2021", sport: "Basketball", quote: "We won the championship last season. The playoffs atmosphere is unreal. Already signed up for the next one.", rating: 5 },
  { name: "Chris P.",  since: "Member since 2023", sport: "Tennis",     quote: "The school program got my kids into sports properly. The coaching staff are amazing and very professional.", rating: 5 },
  { name: "Nina R.",   since: "Member since 2022", sport: "Football",   quote: "From zero to competing in tournaments in just one season. GritTemplate changed how I approach sports entirely.", rating: 5 },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative py-32 px-6 bg-[#f0f4f8] overflow-hidden">
      {/* Navy side borders */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0a1628] hidden lg:block" />
      <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#0a1628] hidden lg:block" />

      {/* Background watermark */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 font-display text-[200px] text-[#0a1628]/[0.04] leading-none select-none pointer-events-none hidden lg:block">
        GRIT
      </div>

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-bold tracking-[0.3em] uppercase">Athlete stories</p>
            </div>
            <h2 className="font-display text-[clamp(48px,7vw,90px)] uppercase leading-[0.9] text-[#0a1628]">
              Real People.<br /><span className="text-[#DA1D3A]">Real Games.</span>
            </h2>
          </div>
          <p className="text-[#0a1628]/50 text-sm max-w-xs leading-relaxed lg:text-right">
            Don't take our word for it — hear it from the players.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Featured card — navy */}
          <div className="lg:col-span-2 bg-[#0a1628] p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#DA1D3A]" />
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#DA1D3A]" />
            <div className="absolute top-6 right-8 font-display text-[140px] text-white/[0.04] leading-none select-none">"</div>

            {/* Sport badge */}
            <span className="inline-block bg-[#DA1D3A] text-white text-xs font-bold px-4 py-1.5 uppercase tracking-widest mb-8">
              {current.sport}
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {Array.from({ length: current.rating }).map((_, j) => (
                <span key={j} className="text-[#DA1D3A] text-2xl">★</span>
              ))}
            </div>

            <p className="text-white text-xl leading-relaxed italic mb-10 relative z-10">
              "{current.quote}"
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DA1D3A] flex items-center justify-center text-white font-display text-xl font-black">
                  {current.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{current.name}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-0.5">{current.since}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center text-white/50 hover:bg-[#DA1D3A] hover:border-[#DA1D3A] hover:text-white transition-all">
                  ←
                </button>
                <button
                  onClick={() => setActive((active + 1) % testimonials.length)}
                  className="w-10 h-10 border-2 border-white/20 flex items-center justify-center text-white/50 hover:bg-[#DA1D3A] hover:border-[#DA1D3A] hover:text-white transition-all">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-3">
            {testimonials.map(({ name, since, sport, quote, rating }, i) => (
              <div
                key={name}
                onClick={() => setActive(i)}
                className={`cursor-pointer p-5 transition-all duration-300 flex-1 relative overflow-hidden border-l-4 shadow-sm ${
                  i === active
                    ? "bg-[#0a1628] border-[#DA1D3A] shadow-lg"
                    : "bg-white border-transparent hover:border-[#0a1628]/30 hover:shadow-md"
                }`}
              >
                {/* Top accent line on active */}
                {i === active && <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#DA1D3A]" />}

                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: rating }).map((_, j) => (
                      <span key={j} className={`text-xs ${i === active ? "text-[#DA1D3A]" : "text-[#0a1628]/30"}`}>★</span>
                    ))}
                  </div>
                  <span className={`text-xs uppercase tracking-wider font-bold px-2 py-0.5 ${
                    i === active ? "bg-[#DA1D3A] text-white" : "bg-[#0a1628]/8 text-[#0a1628]/50"
                  }`}>
                    {sport}
                  </span>
                </div>

                <p className={`text-xs line-clamp-2 mb-3 leading-relaxed ${i === active ? "text-white/70" : "text-[#0a1628]/55"}`}>
                  {quote}
                </p>

                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    i === active ? "bg-[#DA1D3A] text-white" : "bg-[#0a1628]/10 text-[#0a1628]/60"
                  }`}>
                    {name[0]}
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${i === active ? "text-white" : "text-[#0a1628]/80"}`}>{name}</p>
                    <p className={`text-xs ${i === active ? "text-white/40" : "text-[#0a1628]/35"}`}>{since}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition-all duration-300 ${
                i === active ? "w-8 h-2 bg-[#DA1D3A]" : "w-2 h-2 rounded-full bg-[#0a1628]/20 hover:bg-[#0a1628]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}