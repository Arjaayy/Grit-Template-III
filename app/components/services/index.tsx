import Image from "next/image";

const services = [
  { title: "Tournaments", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.", image: "/placeholders/tournament.jpg", badge: "Most popular", n: "01" },
  { title: "Leagues", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "/placeholders/leagues.jpg", badge: "", n: "02" },
  { title: "School Programs", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", image: "/placeholders/Events.jpg", badge: "New", n: "03" },
  { title: "Elite Events", desc: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.", image: "/placeholders/elite.jpg", badge: "", n: "04" },
];

export default function Services() {
  return (
    <section className="relative py-32 px-6 bg-[#0a1628] overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[3px] bg-[#DA1D3A]" />
              <p className="text-[#DA1D3A] text-xs font-bold tracking-[0.3em] uppercase">What we offer</p>
            </div>
            <h2 className="font-display text-[clamp(48px,7vw,90px)] uppercase leading-[0.9] text-white">
              Our <span className="text-[#DA1D3A]">Services</span>
            </h2>
          </div>
          <a href="#contact" className="text-white/30 text-xs uppercase tracking-widest hover:text-[#DA1D3A] transition-colors">
            View all →
          </a>
        </div>

        {/* Services list — horizontal premium layout */}
        <div className="flex flex-col gap-1">
          {services.map(({ title, desc, image, badge, n }, i) => (
            <div key={title}
              className="group relative border border-white/5 hover:border-[#DA1D3A]/30 transition-all duration-300 overflow-hidden cursor-pointer"
              style={{ minHeight: i === 0 ? "280px" : "160px" }}>

              {/* BG image subtle */}
              <Image src={image} alt={title} fill className="object-cover group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" style={{ transition: "opacity 0.5s, transform 0.7s" }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/30" />
              {/* Red left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DA1D3A] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="relative z-10 flex items-center justify-between p-8 h-full">
                <div className="flex items-center gap-8">
                  <span className="font-display text-white/10 text-5xl group-hover:text-[#DA1D3A]/30 transition-colors hidden lg:block">{n}</span>
                  <div>
                    {badge && <span className="inline-block bg-[#DA1D3A] text-white text-xs font-bold px-3 py-0.5 uppercase tracking-wider mb-3">{badge}</span>}
                    <h3 className="font-display text-white uppercase group-hover:text-[#DA1D3A] transition-colors duration-300"
                      style={{ fontSize: i === 0 ? "clamp(36px,5vw,60px)" : "clamp(24px,3vw,40px)" }}>
                      {title}
                    </h3>
                    <p className="text-white/45 text-sm mt-2 max-w-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {desc}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 w-12 h-12 border-2 border-white/10 group-hover:border-[#DA1D3A] flex items-center justify-center text-white/30 group-hover:text-[#DA1D3A] group-hover:bg-[#DA1D3A]/10 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
