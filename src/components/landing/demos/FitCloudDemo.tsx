export const FitCloudDemo = () => {
  return (
    <div className="flex h-full w-full bg-slate-50 overflow-hidden font-sans text-sm rounded-xl border border-gray-200 shadow-2xl">
      {/* Sidebar - Light */}
      <div className="w-50 bg-white border-r border-slate-200 hidden md:flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg items-center justify-center text-white font-bold text-lg grid grid-cols-2 gap-0.5 p-1.5">
              <div className="bg-white/9 rounded-sm"></div>
              <div className="bg-white/90 rounded-sm"></div>
              <div className="bg-white/90 rounded-sm"></div>
              <div className="bg-white/90 rounded-sm"></div>
            </div>
            <div>
              <div className="text-slate-900 font-bold tracking-tight text-base leading-tight">
                Gold Gym
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                Branch <span className="text-blue-500">Location</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex flex-col px-4 py-4 space-y-6">
          <div>
            <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-2">
              Main
            </div>
            <div className="bg-blue-50 text-blue-600 rounded-lg px-3 py-2.5 flex items-center gap-3 relative overflow-hidden font-bold border border-blue-100/50">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
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
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              <span>Dashboard</span>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-2">
              Attendance
            </div>
            <div className="px-3 py-2 rounded-lg flex items-center justify-between text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="font-medium">Attendance</span>
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="px-3 py-2 rounded-lg flex items-center gap-3 text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors mt-1">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <span className="font-medium">Attendance History</span>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider px-2">
              Members
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <span className="font-medium">New Member</span>
            </div>
            <div className="px-3 py-2 rounded-lg flex items-center gap-3 text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors mt-1">
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
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="font-medium">Members List</span>
            </div>
            <div className="px-3 py-2 rounded-lg flex items-center gap-3 text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors mt-1">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="font-medium">Expired Memberships</span>
            </div>
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-slate-100">
          <div className="rounded-lg p-2 flex items-center gap-3 hover:bg-slate-50 cursor-pointer transition-colors">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              GG
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="text-slate-900 text-xs font-bold truncate">
                Gold Gym
              </div>
              <div className="text-slate-500 text-[10px] truncate">
                goldgym@g...
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
      <div className="flex-1 flex flex-col min-w-0 bg-[#f8f9fc]">
        {/* Header */}
        <div className="h-16 bg-white border-b border-gray-200 flex items-center px-6 justify-between shrink-0">
          <div className="w-8 h-8 rounded border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 cursor-pointer">
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
            <div className="items-center text-slate-600 text-xs font-medium gap-2 hidden sm:flex">
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
              <span>03/07/2026</span>
            </div>
            <div className="items-center text-slate-600 text-xs font-medium gap-2 hidden sm:flex">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>11:02:06 PM</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500">
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
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-xs shrink-0">
              GG
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-1">
              Welcome back, <span className="text-blue-600">Gold Gym!</span>
            </h1>
            <p className="text-slate-500 text-sm">
              Manage{" "}
              <span className="font-semibold text-slate-700">Gold Gym</span>{" "}
              with powerful analytics and insights.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
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
              <span className="font-bold text-slate-900 text-sm tracking-wide">
                WHAT'S NEW IN FITCLOUD
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md flex items-center gap-1">
              See whats new
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="flex items-start gap-3 w-auto lg:w-64 shrink-0">
                <div className="w-6 h-6 rounded-full border border-blue-200 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-serif font-bold italic">i</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    Date Range Filter
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select a custom date range to view specific data
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-l border-slate-100 pl-6 h-full justify-center">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>{" "}
                  Current Month
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>{" "}
                  Custom Range
                </div>
              </div>

              <div className="flex flex-wrap gap-2 ml-auto justify-end">
                {[
                  "Today",
                  "This Week",
                  "This Month",
                  "Last Month",
                  "Last 3 Months",
                  "This Year",
                ].map((label, i) => (
                  <div
                    key={label}
                    className={`px-3 py-1.5 rounded text-xs font-medium cursor-pointer ${i === 2 ? "bg-blue-500 text-white" : "bg-blue-500 text-white"}`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-end">
              <div className="flex-1 w-full">
                <label className="text-xs font-medium text-slate-700 mb-1.5 block">
                  Start Date
                </label>
                <div className="h-10 border border-slate-200 rounded-lg flex items-center justify-between px-3 text-sm">
                  <span>02/28/2026</span>
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="hidden sm:block h-0 border-t border-slate-200 w-8 mb-5"></div>
              <div className="flex-1 w-full">
                <label className="text-xs font-medium text-slate-700 mb-1.5 block">
                  End Date
                </label>
                <div className="h-10 border border-slate-200 rounded-lg flex items-center justify-between px-3 text-sm">
                  <span>03/08/2026</span>
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="h-10 px-4 border border-slate-200 rounded-lg flex items-center gap-2 hover:bg-slate-50 cursor-pointer">
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                <span className="text-sm font-medium">Reset</span>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Period Analytics (Feb 28, 2026 - Mar 8, 2026 (8 days))
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-slate-500 font-medium mb-1">
                    New Members
                  </h3>
                  <div className="text-3xl font-bold text-purple-600">1</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center">
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
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-slate-500">
                8 days of new members (Saturday Feb 28 - Sunday Mar 8)
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-slate-500 font-medium mb-1">
                    Renewed Members
                  </h3>
                  <div className="text-3xl font-bold text-blue-600">2</div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
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
              <p className="text-xs text-slate-500">
                8 days of membership renewals (Saturday Feb 28 - Sunday Mar 8)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
