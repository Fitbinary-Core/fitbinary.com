"use client";

export const AccountsDemo = () => {
  return (
    <div className="flex h-full w-full bg-neutral-900 overflow-hidden font-sans text-sm rounded-xl border border-neutral-800 shadow-2xl">
      {/* Sidebar - Dark */}
      <div className="w-56 lg:w-55 bg-[#0a0f1c] text-slate-300 hidden md:flex flex-col shrink-0">
        <div className="h-16 flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">
              F
            </div>
            <span className="text-white text-xs font-bold tracking-tight">
              Fitbinary Accounts
            </span>
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="text-[10px] font-bold text-neutral-400 mb-2 uppercase tracking-wider px-2">
            Overview
          </div>
          <div className="bg-slate-800/80 text-white rounded-lg px-3 py-2 flex items-center gap-3 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
            <svg
              className="w-4 h-4 text-red-500"
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
            <span className="font-medium">Home</span>
          </div>
          <div className="px-3 py-2 flex items-center gap-3 text-slate-400 mt-1">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Personal info</span>
          </div>
          <div className="px-3 py-2 flex items-center gap-3 text-slate-400">
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
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Security</span>
          </div>
        </div>

        <div className="mt-auto p-4">
          <div className="bg-slate-800/50 rounded-lg p-3 flex items-center gap-3 border border-slate-700/50">
            <div className="w-8 h-8 rounded-full bg-slate-700 shrink-0"></div>
            <div className="flex-1 overflow-hidden">
              <div className="text-white text-xs font-medium truncate">
                John Doe
              </div>
              <div className="text-neutral-400 text-[10px] truncate">
                johndoe@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-neutral-950">
        {/* Header */}
        <div className="h-16 border-b border-neutral-800 flex items-center px-4 sm:px-8 justify-between shrink-0">
          <div className="w-48 sm:w-64 bg-neutral-900 h-9 rounded-md border border-neutral-800 flex items-center px-3 gap-2">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="text-slate-400 text-sm hidden sm:inline truncate">
              Search resources, settings...
            </span>
            <span className="text-slate-400 text-sm sm:hidden truncate">
              Search...
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-slate-200 rounded-full shrink-0"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-8 overflow-hidden flex flex-col overflow-y-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold tracking-wider rounded uppercase">
              Accounts Portal
            </span>
            <span className="text-slate-300 text-xs">System Active</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
            Welcome back,
            <br />
            <span className="text-slate-400">John</span>
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-8 sm:mb-12">
            Centralized management for your organization, users, and security
            settings across the entire Fitbinary ecosystem.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {/* Quick Setup Card */}
            <div className="bg-[#1c1c1f] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between h-48">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-white"
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
                <h3 className="font-bold text-lg mb-1">Quick Setup</h3>
                <p className="text-slate-400 text-sm">
                  Configure your workspace defaults in seconds.
                </p>
              </div>
              <div className="text-red-500 text-xs font-bold tracking-wider pt-4">
                START GUIDE &rarr;
              </div>
            </div>

            {/* Security Score */}
            <div className="bg-neutral-950 rounded-2xl p-6 border border-neutral-800 shadow-sm flex flex-col justify-between h-48">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center mb-4 border border-neutral-800">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-lg mb-1">
                  Security Score
                </h3>
                <p className="text-neutral-400 text-sm">
                  Your account is 85% secure. Complete 2 steps.
                </p>
              </div>
              <div className="text-white text-xs font-bold tracking-wider pt-4">
                VIEW ACTIONS &rarr;
              </div>
            </div>

            {/* System Status */}
            <div className="bg-neutral-950 rounded-2xl p-6 border border-neutral-800 shadow-sm flex flex-col justify-between h-48">
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center mb-4 border border-neutral-800">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-white text-lg mb-1">
                  System Status
                </h3>
                <p className="text-neutral-400 text-sm">
                  All Fitbinary services are operational.
                </p>
              </div>
              <div className="text-white text-xs font-bold tracking-wider pt-4">
                NETWORK MAP &rarr;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
