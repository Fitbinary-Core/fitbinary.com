"use client";

export const FitCloudDemo = () => {
  return (
    <div className="flex h-full w-full bg-neutral-900 overflow-hidden font-sans text-sm rounded-xl border border-neutral-800 shadow-2xl">
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#f8f9fc]">
        {/* Header */}
        <div className="h-16 bg-neutral-950 border-b border-neutral-800 flex items-center px-6 justify-between shrink-0">
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
            <div className="items-center text-neutral-400 text-xs font-medium gap-2 hidden sm:flex">
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
            <div className="items-center text-neutral-400 text-xs font-medium gap-2 hidden sm:flex">
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
            <div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400">
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
            <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-300 font-bold text-xs shrink-0">
              GG
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-hidden flex flex-col">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1">
              Welcome back, <span className="text-blue-600">Gold Gym!</span>
            </h1>
            <p className="text-neutral-400 text-sm">
              Manage{" "}
              <span className="font-semibold text-neutral-300">Gold Gym</span>{" "}
              with powerful analytics and insights.
            </p>
          </div>

          <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-4 mb-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
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
              <span className="font-bold text-white text-sm tracking-wide">
                WHAT'S NEW IN FITCLOUD
              </span>
            </div>
            <div className="text-xs font-semibold text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-md flex items-center gap-1">
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

          <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 mb-6 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6 mb-6">
              <div className="flex items-start gap-3 w-auto lg:w-64 shrink-0">
                <div className="w-6 h-6 rounded-full border border-blue-200 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-serif font-bold italic">i</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">
                    Date Range Filter
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Select a custom date range to view specific data
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 border-l border-neutral-800 pl-6 h-full justify-center">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
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
                <label className="text-xs font-medium text-neutral-300 mb-1.5 block">
                  Start Date
                </label>
                <div className="h-10 border border-neutral-800 rounded-lg flex items-center justify-between px-3 text-sm">
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
              <div className="hidden sm:block h-0 border-t border-neutral-800 w-8 mb-5"></div>
              <div className="flex-1 w-full">
                <label className="text-xs font-medium text-neutral-300 mb-1.5 block">
                  End Date
                </label>
                <div className="h-10 border border-neutral-800 rounded-lg flex items-center justify-between px-3 text-sm">
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
              <div className="h-10 px-4 border border-neutral-800 rounded-lg flex items-center gap-2 hover:bg-neutral-900 cursor-pointer">
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

          <h2 className="text-lg font-bold text-white mb-4">
            Period Analytics (Feb 28, 2026 - Mar 8, 2026 (8 days))
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-neutral-400 font-medium mb-1">
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
              <p className="text-xs text-neutral-400">
                8 days of new members (Saturday Feb 28 - Sunday Mar 8)
              </p>
            </div>

            <div className="bg-neutral-950 rounded-xl border border-neutral-800 p-5 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm text-neutral-400 font-medium mb-1">
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
              <p className="text-xs text-neutral-400">
                8 days of membership renewals (Saturday Feb 28 - Sunday Mar 8)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
