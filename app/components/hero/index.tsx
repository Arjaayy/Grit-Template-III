export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden clip-hero bg-[#0a1628]">
      {/* BG image */}
      <div className="absolute inset-0 bg-cover bg-center bg-right" style={{ backgroundImage: "url(/background/hero.jpg)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />

      {/* Premium gold top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DA1D3A] via-white/60 to-[#DA1D3A]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "80px 80px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-40 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left content */}
        <div>
          <div className="fade-up fade-up-1 flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px] bg-[#DA1D3A]" />
            <span className="text-[#DA1D3A] text-xs font-bold tracking-[0.3em] uppercase">Season 2026 · Registrations open</span>
          </div>

          <h1 className="fade-up fade-up-2 font-display uppercase mb-8 text-white" style={{ fontSize: "clamp(64px, 11vw, 130px)", lineHeight: "0.88" }}>
            Where<br />
            <span className="text-[#DA1D3A]">Champions</span><br />
            Begin.
          </h1>

          <p className="fade-up fade-up-3 text-white/65 text-lg max-w-lg mb-10 leading-relaxed">
            The city's most trusted sports & school registration platform. Built for athletes who demand excellence at every level.
          </p>

          <div className="fade-up fade-up-4 flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-[#DA1D3A] text-white font-bold text-sm px-10 py-4 uppercase tracking-widest hover:bg-red-600 transition-colors flex items-center gap-3 group">
              Register Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#services" className="border-2 border-white/30 text-white font-bold text-sm px-10 py-4 uppercase tracking-widest hover:border-white hover:bg-white hover:text-[#0a1628] transition-all">
              Our Programs
            </a>
          </div>
        </div>

        {/* Right — premium floating cards */}
        <div className="fade-right hidden lg:grid grid-cols-2 gap-4">
          {[
            { num: "500+", label: "Athletes", icon: "👥" },
            { num: "12", label: "Sports", icon: "🏆" },
            { num: "8yrs", label: "Running", icon: "⚡" },
            { num: "50+", label: "Schools", icon: "🏫" },
          ].map(({ num, label, icon }) => (
            <div key={label} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-[#c9a84c]/40 transition-all duration-300 group">
              <span className="text-2xl mb-4 block">{icon}</span>
              <p className="font-display text-4xl text-white mb-1">{num}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
              <div className="h-[2px] bg-[#DA1D3A] mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/25 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent animate-bounce" />
      </div>
    </section>
  );
}
