import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-900/50 text-red-600 mb-8">
        <span className="flex w-2 h-2 rounded-full bg-red-600 animate-pulse" />
        <span className="text-[12px] font-bold tracking-tight uppercase">
          Error 404
        </span>
      </div>

      <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
        Page <span className="text-red-600">Not Found</span>.
      </h1>

      <p className="text-xl text-neutral-400 mb-12 max-w-lg font-medium leading-relaxed">
        We couldn't find the page you were looking for. It might have been
        moved, deleted, or perhaps it never existed.
      </p>

      <Link
        href="/"
        className="group relative px-10 py-5 rounded-full overflow-hidden bg-black text-white hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-black/10 flex items-center gap-2"
      >
        <div className="absolute inset-0 bg-red-600 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
        <span className="relative z-10 font-bold text-lg flex items-center gap-2">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Return to Home
        </span>
      </Link>
    </div>
  );
}
