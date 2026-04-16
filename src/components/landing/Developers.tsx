import { Terminal, Globe } from "lucide-react";
import { TopographyBackground } from "./TopographyBackground";

export default function Developers() {
  return (
    <section className="relative py-48 bg-neutral-950 text-white px-6 overflow-hidden">
      <TopographyBackground
        lineCount={10}
        lineColor="rgba(255, 255, 255, 0.02)"
        speed={0.2}
      />

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-24 items-center relative z-10">
        <div>
          <div className="text-red-500 font-bold mb-4 tracking-widest uppercase text-xs">
            Architected for Speed
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">
            The most flexible <br /> fitness APIs.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-12 font-medium">
            Integrate Fitbinary into your custom mobile apps, member portals, or
            corporate HR systems. Our RESTful APIs and real-time Webhooks give
            you total control over the business logic.
          </p>
          <div className="space-y-6">
            {[
              {
                icon: Terminal,
                title: "Clean SDKs",
                desc: "Available in Node, Go, Python, and Ruby.",
              },
              {
                icon: Globe,
                title: "Edge Performance",
                desc: "Sub-100ms API response times globally.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="p-3 bg-neutral-950/5 rounded-xl">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Code Terminal Visual */}
        <div className="bg-zinc-900 rounded-3xl border border-zinc-800 shadow-3xl overflow-hidden font-mono text-sm leading-relaxed p-0">
          <div className="flex items-center gap-2 px-6 py-4 bg-zinc-800/50 border-b border-zinc-800">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-zinc-500 text-xs ml-4">
              api_initialization.js
            </span>
          </div>
          <div className="p-4 sm:p-8 text-zinc-300 overflow-x-auto">
            <div className="mb-4">
              <span className="text-red-400">const</span> fitbinary ={" "}
              <span className="text-blue-400">require</span>(
              <span className="text-amber-200">'fitbinary-node'</span>);
            </div>
            <div className="mb-4">
              <span className="text-red-400">const</span> client ={" "}
              <span className="text-red-400">new</span> fitbinary.
              <span className="text-yellow-400">Client</span>({`{`}
              <div className="pl-6">
                apiKey:{" "}
                <span className="text-amber-200">'fb_live_2938...'</span>,{" "}
                <br />
                tenantId:{" "}
                <span className="text-amber-200">'main-city-gym'</span>
              </div>
              {`}`});
            </div>
            <div className="mb-4 text-zinc-500">
              // Retrieve member stats in 50ms
            </div>
            <div className="mb-4">
              <span className="text-red-400">async function</span>{" "}
              <span className="text-yellow-400">syncMembers</span>() {`{`}
              <div className="pl-6">
                <span className="text-red-400">const</span> stats ={" "}
                <span className="text-red-400">await</span> client.members.
                <span className="text-yellow-400">list</span>(); <br />
                <span className="text-blue-400">return</span> stats;
              </div>
              {`}`}
            </div>
            <div className="text-green-400 opacity-60">
              &gt; Initializing cloud nodes... DONE <br />
              &gt; Listening on localhost:4001
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
