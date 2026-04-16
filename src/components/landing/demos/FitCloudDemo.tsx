import React from "react";

export const FitCloudDemo = () => {
  return (
    <div className="flex h-full w-full bg-neutral-950 overflow-hidden font-sans text-sm rounded-xl border border-white/5 shadow-2xl">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-transparent">
        {/* Header */}
        <div className="h-16 bg-neutral-900/50 backdrop-blur-md border-b border-white/5 flex items-center px-6 justify-between shrink-0">
          <div className="w-8 h-8 rounded border border-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 cursor-pointer hover:bg-blue-500/10 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <div className="flex items-center gap-6">
            <div className="items-center text-neutral-400 text-xs font-semibold gap-2 hidden sm:flex bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <svg
                className="w-4 h-4 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>March 07, 2026</span>
            </div>

            <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-neutral-400 hover:bg-white/5 cursor-pointer transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-blue-600/20">
              GG
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">
          <div className="mb-2">
            <h1 className="text-2xl sm:text-[2rem] font-black tracking-tight text-white mb-2 italic">
              Welcome back,{" "}
              <span className="text-blue-500 not-italic">Gold Gym!</span>
            </h1>
            <p className="text-neutral-400 text-sm font-medium">
              Your facility is running at{" "}
              <span className="text-emerald-400">92% efficiency</span> today.
            </p>
          </div>

          <div className="bg-blue-500/5 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div>
                <span className="font-black text-white text-xs tracking-[0.2em]">
                  NEW FEATURE AVAILABLE
                </span>
                <p className="text-[11px] text-neutral-400 font-medium">
                  Auto-scheduling is now live for all trainers.
                </p>
              </div>
            </div>
            <div className="text-[10px] font-black text-white bg-blue-600 px-4 py-2 rounded-xl uppercase tracking-widest cursor-pointer hover:bg-blue-500 transition-colors">
              Explore Now
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 p-6 mb-2">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl border border-blue-500/20 text-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
                  <span className="text-lg font-black italic">!</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-base">
                    Date Analytics
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-[180px] leading-relaxed">
                    Custom period reporting and member retention insights.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["Today", "Week", "Month", "Year"].map((label, i) => (
                  <div
                    key={label}
                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-pointer transition-all ${
                      i === 2
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "bg-white/5 text-neutral-400 hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <div className="px-5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-black">
                  ACTIVE
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white hover:bg-white/10 cursor-pointer transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-6 transition-all hover:bg-neutral-800/80">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-[10px] font-black text-neutral-500 tracking-[0.2em] mb-2 uppercase">
                    New Members
                  </h3>
                  <div className="text-4xl font-black text-white">42</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/10">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-[65%]" />
              </div>
            </div>

            <div className="bg-neutral-900/50 border border-white/5 rounded-3xl p-6 transition-all hover:bg-neutral-800/80">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-[10px] font-black text-neutral-500 tracking-[0.2em] mb-2 uppercase">
                    Retention
                  </h3>
                  <div className="text-4xl font-black text-blue-500">92%</div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/10">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-[92%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
