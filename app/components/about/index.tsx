export default function About() {
  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Decorative large watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[200px] text-[#0a1628]/[0.03] leading-none select-none pointer-events-none hidden lg:block">
        GRIT
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[3px] bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-bold tracking-[0.3em] uppercase">Who we are</p>
            </div>
            <h2 className="font-display text-[clamp(48px,6vw,80px)] uppercase leading-[0.92] text-[#0a1628] mb-8">
              Built For<br />
              <span className="text-[#0a1628]">Champions.</span><br />
              <span className="text-[#DA1D3A]">Designed</span><br />
              For All.
            </h2>
            <div className="w-16 h-1 bg-[#0a1628] mb-8" />
            <p className="text-[#0a1628]/70 text-base leading-relaxed mb-6 max-w-lg">
              <span className="text-[#0a1628] font-semibold">Sports & school registration experts</span> with over 8 years connecting athletes, schools, and leagues across the city.
            </p>
            <p className="text-[#0a1628]/55 text-sm leading-relaxed mb-10 max-w-lg">
              Successfully registered <span className="text-[#DA1D3A] font-semibold">500+ athletes</span> across 12 sports — known for efficiency, community building, and elite-level program management.
            </p>
            <a href="#services"
              className="inline-flex items-center gap-3 bg-[#0a1628] text-white text-xs font-bold px-8 py-4 uppercase tracking-widest hover:bg-[#DA1D3A] transition-colors duration-200">
              Explore Programs →
            </a>
          </div>

          {/* Right — premium stat cards with navy bg */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "500+", label: "Athletes registered",  icon: "👥", dark: true },
              { num: "12",   label: "Sports offered",       icon: "🏆", dark: false },
              { num: "8",    label: "Years of experience",  icon: "⚡", dark: false },
              { num: "50+",  label: "Partner schools",      icon: "🏫", dark: true },
            ].map(({ num, label, icon, dark }) => (
              <div key={label}
                className={`card-lift p-8 relative overflow-hidden group ${
                  dark
                    ? "bg-[#0a1628] text-white"
                    : "bg-[#f8f9fc] text-[#0a1628] border-2 border-[#0a1628]/10"
                }`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-[#DA1D3A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                <span className="text-2xl mb-4 block">{icon}</span>
                <p className={`font-display text-5xl leading-none mb-2 ${dark ? "text-white" : "text-[#0a1628]"}`}>{num}</p>
                <p className={`text-xs uppercase tracking-widest ${dark ? "text-white/50" : "text-[#0a1628]/40"}`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
