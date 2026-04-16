"use client";

export const FitStockDemo = () => {
  return (
    <div className="flex h-full w-full bg-[#f8f9fc] overflow-hidden font-sans text-sm rounded-xl border border-neutral-800 shadow-2xl">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-transparent">
        {/* Header */}
        <div className="h-16 bg-neutral-950 border-b border-neutral-800 flex items-center px-6 justify-between shrink-0">
          <div className="w-8 h-8 rounded border border-red-200 text-red-600 flex items-center justify-center shrink-0 cursor-pointer">
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
            <div className="px-3 py-3 border border-neutral-800 rounded-lg flex items-center gap-2 text-neutral-400 text-xs font-medium bg-neutral-950 hover:bg-neutral-900 cursor-pointer shadow-sm">
              <svg
                className="w-4 h-4 text-slate-400 shrink-0"
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
                className="w-3 h-3 text-slate-400 ml-1 shrink-0"
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
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md shadow-red-600/20">
                JD
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-white leading-tight">
                  John Doe
                </div>
                <div className="text-[10px] text-neutral-400 font-medium">
                  Branch Manager
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col">
          <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-4 mb-4 shadow-sm relative">
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Welcome back, John
              </h1>
              <div className="px-4 py-2.5 bg-[#0a0f1c] text-white rounded-lg text-sm font-bold shadow-md cursor-pointer flex items-center gap-2 hover:bg-slate-900 transition-colors shrink-0">
                <svg
                  className="w-4 h-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="hidden sm:inline">View Inventory</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* Total Products */}
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-neutral-400 tracking-wider">
                  TOTAL PRODUCTS
                </h3>
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 text-slate-400 flex items-center justify-center">
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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">0</div>
            </div>

            {/* In Stock */}
            <div className="bg-neutral-950 rounded-xl border border-blue-900/50 p-5 shadow-sm shadow-blue-50/50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-neutral-400 tracking-wider">
                  IN STOCK
                </h3>
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
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
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">0</div>
            </div>

            {/* Low Stock Items */}
            <div className="bg-neutral-950 rounded-xl border border-amber-900/50 p-5 shadow-sm shadow-amber-50/50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-neutral-400 tracking-wider">
                  LOW STOCK ITEMS
                </h3>
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
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
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">0</div>
            </div>

            {/* Out of Stock */}
            <div className="bg-neutral-950 rounded-xl border border-red-900/50 p-5 shadow-sm shadow-red-50/50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-neutral-400 tracking-wider">
                  OUT OF STOCK
                </h3>
                <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
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
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">0</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-neutral-400 tracking-wider">
                  INCOMING TRANSFERS
                </h3>
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
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
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">0</div>
            </div>
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-neutral-400 tracking-wider">
                  OUTGOING TRANSFERS
                </h3>
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">
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
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold text-white">0</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-red-600 rounded"></div>
                <h2 className="text-base font-bold text-white">
                  Movement (30d)
                </h2>
              </div>
              <div className="bg-neutral-950 rounded-xl border border-neutral-800 shadow-sm p-2">
                <div className="flex items-center justify-between p-3 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-neutral-300">
                      Stock Received
                    </span>
                  </div>
                  <span className="font-bold text-white">0</span>
                </div>
                {/* ... Add more rows if needed, keep static ... */}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-red-600 rounded"></div>
                  <h2 className="text-base font-bold text-white">
                    Recent Transactions
                  </h2>
                </div>
                <span className="text-xs font-bold text-red-600 cursor-pointer hover:underline">
                  View All
                </span>
              </div>
              <div className="bg-neutral-950 rounded-xl border border-neutral-800 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-neutral-900/50 text-neutral-400 font-medium text-xs border-b border-neutral-800">
                    <tr>
                      <th className="px-4 py-3 font-medium">Type</th>
                      <th className="px-4 py-3 font-medium">Product</th>
                      <th className="px-4 py-3 font-medium text-right">Qty</th>
                      <th className="px-4 py-3 font-medium text-right">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan={4}
                        className="px-4 py-6 text-center text-slate-400 text-sm border-b border-slate-50 pb-8 pt-8"
                      >
                        No transactions found
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
