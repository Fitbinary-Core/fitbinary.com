import React from "react";

export const FitStockDemo = () => {
  return (
    <div className="flex h-full w-full bg-neutral-950 overflow-hidden font-sans text-sm rounded-xl border border-white/5 shadow-2xl">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-transparent">
        {/* Header */}
        <div className="h-16 bg-neutral-900/50 backdrop-blur-md border-b border-white/5 flex items-center px-6 justify-between shrink-0">
          <div className="w-8 h-8 rounded border border-red-500/20 text-red-500 flex items-center justify-center shrink-0 cursor-pointer hover:bg-red-500/10 transition-colors">
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

          <div className="flex items-center gap-4">
            <div className="px-3 py-2 border border-white/5 rounded-lg flex items-center gap-2 text-neutral-400 text-xs font-semibold bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
              <svg
                className="w-4 h-4 text-neutral-500 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="hidden sm:inline">All Branches</span>
              <svg
                className="w-3 h-4 text-neutral-500 ml-1 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-lg shadow-red-600/20">
                JD
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-white leading-tight">
                  John Doe
                </div>
                <div className="text-[10px] text-neutral-500 font-medium">
                  Branch Manager
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 p-6 shadow-xl relative overflow-hidden group">
            {/* Subtle highlight */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-red-500/10 transition-colors" />

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-1">
                  Welcome back, John
                </h1>
                <p className="text-neutral-400 text-sm font-medium">
                  Real-time inventory overview for today.
                </p>
              </div>
              <div className="px-5 py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-red-600/20 cursor-pointer flex items-center gap-2 hover:bg-red-500 transition-all hover:scale-105 active:scale-95 shrink-0">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Add Product</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Stats Cards */}
            {[
              {
                label: "TOTAL PRODUCTS",
                value: "1,280",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                color: "text-neutral-400",
                bg: "bg-white/5",
              },
              {
                label: "IN STOCK",
                value: "942",
                icon: "M5 13l4 4L19 7",
                color: "text-blue-400",
                bg: "bg-blue-500/10",
                border: "border-blue-500/20",
              },
              {
                label: "LOW STOCK",
                value: "12",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                color: "text-amber-400",
                bg: "bg-amber-500/10",
                border: "border-amber-500/20",
              },
              {
                label: "OUT OF STOCK",
                value: "3",
                icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "text-red-400",
                bg: "bg-red-500/10",
                border: "border-red-500/20",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`bg-neutral-900 border ${stat.border || "border-white/5"} rounded-2xl p-5 transition-all hover:bg-neutral-800/80`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-[10px] font-black text-neutral-500 tracking-[0.2em]">
                    {stat.label}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}
                  >
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
                        d={stat.icon}
                      />
                    </svg>
                  </div>
                </div>
                <div className="text-2xl font-black text-white">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.5)]"></div>
                <h2 className="text-base font-black text-white tracking-tight">
                  Movement Trends (30d)
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Inventory Received",
                    value: "+420 units",
                    color: "text-emerald-400",
                    bg: "bg-emerald-500/10",
                  },
                  {
                    label: "Inventory Dispatched",
                    value: "-385 units",
                    color: "text-blue-400",
                    bg: "bg-blue-500/10",
                  },
                  {
                    label: "Returns Processed",
                    value: "12 units",
                    color: "text-neutral-400",
                    bg: "bg-white/5",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <span className="text-sm font-semibold text-neutral-300">
                      {item.label}
                    </span>
                    <span className={`text-sm font-black ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden">
              <div className="flex items-center justify-between p-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.5)]"></div>
                  <h2 className="text-base font-black text-white tracking-tight">
                    Recent Transfers
                  </h2>
                </div>
                <span className="text-xs font-bold text-red-500 hover:text-red-400 cursor-pointer transition-colors uppercase tracking-widest">
                  View All
                </span>
              </div>
              <div className="px-6 pb-6">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-[10px] font-black text-neutral-500 tracking-[0.2em] border-b border-white/5">
                      <th className="py-4">LOCATION</th>
                      <th className="py-4">STATUS</th>
                      <th className="py-4 text-right">QTY</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td
                        colSpan={3}
                        className="py-12 text-center text-neutral-500 font-medium italic"
                      >
                        No active branch transfers found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
