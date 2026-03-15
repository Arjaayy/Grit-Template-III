const items = [
  "🏆 Tournaments", "⚽ Football", "🏀 Basketball",
  "🏐 Volleyball",  "🎾 Tennis",  "🏫 School Programs",
  "🏅 Elite Events", "👕 Team Registration", "📊 Live Standings", "🥇 Season Playoffs",
];

export default function Ticker() {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="bg-[#0a1628] py-3 overflow-hidden border-y-2 border-[#DA1D3A]">
      <div className="ticker-track">
        {tripled.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-8 font-display text-white text-sm uppercase tracking-[0.15em] whitespace-nowrap">
            {item}
            <span className="text-[#c9a84c] text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
