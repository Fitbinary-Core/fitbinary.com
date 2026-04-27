const stats = [
  { value: "500+", label: "Fitness Businesses" },
  { value: "50+", label: "Cities" },
  { value: "Multi-branch", label: "Architecture" },
  { value: "99.9%", label: "Uptime" },
];

export default function StatsBar() {
  return (
    <div className="border-b border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="text-[2rem] font-black text-zinc-900 tracking-tight leading-none mb-1.5">
                {stat.value}
              </div>
              <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
