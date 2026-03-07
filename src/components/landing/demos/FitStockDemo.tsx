export const FitStockDemo = () => {
  return (
    <div className="flex h-full w-full bg-[#f8f9fc] overflow-hidden font-sans text-sm rounded-xl border border-gray-200 shadow-2xl">
      {/* Sidebar - Light */}
      <div className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-100/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center p-1.5 shrink-0">
              {/* Dumbbell Icon */}
              <div className="w-full h-2 bg-slate-800 rounded-sm relative">
                <div className="absolute left-0 -top-1 w-1.5 h-4 bg-slate-800 rounded-sm"></div>
                <div className="absolute right-0 -top-1 w-1.5 h-4 bg-slate-800 rounded-sm"></div>
              </div>
            </div>
            <span className="text-slate-900 font-bold tracking-tight text-sm">
              Light Weight
            </span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overflow-hidden flex flex-col px-4 py-4 space-y-6">
          <div>
            <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-2">
              General
            </div>
            <div className="bg-red-600 text-white rounded-lg px-3 py-2.5 flex items-center gap-3 font-bold shadow-sm shadow-red-600/20">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Dashboard</span>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-2">
              Inventory
            </div>
            {[
              {
                label: "Products",
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                hasSub: true,
              },
              {
                label: "Branch Inventory",
                icon: "M19 11v9h-5v-6h-4v6H5v-9m14-4-7-7-7 7",
                hasSub: false,
              },
              {
                label: "Stock Operations",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                hasSub: true,
              },
              {
                label: "Low Stock Alerts",
                icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
                hasSub: false,
              },
              {
                label: "Inventory Logs",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
                hasSub: false,
              },
              {
                label: "Suppliers",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                hasSub: true,
              },
              {
                label: "Print Barcodes",
                icon: "M12 4v16m8-8H4",
                hasSub: false,
              }, // Custom icon representation
            ].map((item, i) => (
              <div
                key={i}
                className="px-3 py-2 rounded-lg flex items-center justify-between text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors mt-0.5"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.icon}
                    />
                  </svg>
                  <span className="font-medium text-[13px]">{item.label}</span>
                </div>
                {item.hasSub && (
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>

          <div>
            <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-2">
              Sales
            </div>
            <div className="px-3 py-2 rounded-lg flex items-center gap-3 text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
              <svg
                className="w-5 h-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium text-[13px]">POS</span>
            </div>
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-slate-100">
          <div className="rounded-lg p-2 flex items-center gap-3 hover:bg-slate-50 cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs shrink-0 border border-red-200">
              NB
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-slate-900 text-xs font-bold truncate">
                Nabaraj Basnet
              </div>
              <div className="text-slate-500 text-[10px] truncate">
                manager@fitstock...
              </div>
            </div>
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-transparent">
        {/* Header */}
        <div className="h-16 bg-white border-b border-slate-200 flex items-center px-6 justify-between shrink-0">
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
            <div className="px-3 py-1.5 border border-slate-200 rounded-lg flex items-center gap-2 text-slate-600 text-xs font-medium bg-white hover:bg-slate-50 cursor-pointer shadow-sm">
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
                NB
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  Nabaraj Basnet
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  Branch Manager
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col overflow-y-auto">
          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 shadow-sm relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-0">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
                  Welcome back, Nabaraj
                </h1>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-slate-600 px-2 py-1 bg-slate-100 rounded">
                    Light Weight
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-xs font-medium text-slate-500">
                    US East
                  </span>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    Bhaktapur 1
                  </span>
                </div>
                <p className="text-slate-500 text-sm">
                  Here's your performance overview for today.
                </p>
              </div>
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Total Products */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-slate-500 tracking-wider">
                  TOTAL PRODUCTS
                </h3>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-slate-400 flex items-center justify-center">
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
              <div className="text-3xl font-bold text-slate-900">0</div>
            </div>

            {/* In Stock */}
            <div className="bg-white rounded-xl border border-blue-100 p-5 shadow-sm shadow-blue-50/50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-slate-500 tracking-wider">
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
              <div className="text-3xl font-bold text-slate-900">0</div>
            </div>

            {/* Low Stock Items */}
            <div className="bg-white rounded-xl border border-amber-100 p-5 shadow-sm shadow-amber-50/50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-slate-500 tracking-wider">
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
              <div className="text-3xl font-bold text-slate-900">0</div>
            </div>

            {/* Out of Stock */}
            <div className="bg-white rounded-xl border border-red-100 p-5 shadow-sm shadow-red-50/50">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs font-bold text-slate-500 tracking-wider">
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
              <div className="text-3xl font-bold text-slate-900">0</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-slate-500 tracking-wider">
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
              <div className="text-3xl font-bold text-slate-900">0</div>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold text-slate-500 tracking-wider">
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
              <div className="text-3xl font-bold text-slate-900">0</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 bg-red-600 rounded"></div>
                <h2 className="text-base font-bold text-slate-900">
                  Movement (30d)
                </h2>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-2">
                <div className="flex items-center justify-between p-3 border-b border-slate-100">
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
                    <span className="text-sm font-bold text-slate-700">
                      Stock Received
                    </span>
                  </div>
                  <span className="font-bold text-slate-900">0</span>
                </div>
                {/* ... Add more rows if needed, keep static ... */}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-red-600 rounded"></div>
                  <h2 className="text-base font-bold text-slate-900">
                    Recent Transactions
                  </h2>
                </div>
                <span className="text-xs font-bold text-red-600 cursor-pointer hover:underline">
                  View All
                </span>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50/50 text-slate-500 font-medium text-xs border-b border-slate-100">
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
