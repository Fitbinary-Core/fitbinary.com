"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, Clock, ExternalLink, HelpCircle } from "lucide-react";

export default function StaffLoginRedirection() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const targetUrl = "https://fitcloud.fitbinary.com/login";

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push(targetUrl);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>

      <div className="max-w-xl w-full text-center space-y-8 z-10">
        {/* Main Icon */}
        <div className="mx-auto bg-gray-50 border border-gray-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
          <ExternalLink className="h-8 w-8 text-gray-600" />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Staff Login Portal Moved
          </h1>
          <p className="text-lg text-gray-600">
            The staff login screen has been moved to a new location.
          </p>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Redirecting to
            </p>
            <a
              href={targetUrl}
              className="text-xl font-medium text-red-600 hover:text-red-700 underline underline-offset-4 break-all"
            >
              {targetUrl}
            </a>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2 py-4">
            <div className="text-5xl font-mono font-bold text-gray-900 tabular-nums">
              {countdown}
            </div>
            <p className="text-sm text-gray-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Redirecting automatically...
            </p>
          </div>

          <div className="prose prose-sm prose-gray max-w-none text-gray-600">
            <p>
              Please enter your credentials on the new portal and continue using
              it for your daily staff operations.
            </p>
          </div>
        </div>

        {/* Notices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-left">
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex gap-3 text-amber-900">
            <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <p className="font-semibold text-amber-700 mb-1">Important</p>
              <p>
                This page will be removed in <strong>2-3 days</strong>. Please
                bookmark or save the new URL.
              </p>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 text-blue-900">
            <HelpCircle className="h-5 w-5 text-blue-600 shrink-0" />
            <div>
              <p className="font-semibold text-blue-700 mb-1">Need Help?</p>
              <p>
                If you encounter any problems, please contact:
                <br />
                <span className="font-medium">+977 9763427690</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 text-center text-xs text-gray-400">
        &copy; Fitbinary. All rights reserved.
      </div>
    </div>
  );
}
