import React from "react";
import {
  Search,
  Mic,
  Bell,
  Bookmark,
  Share2,
  Radio,
  Play,
  User,
  Compass,
  Headphones,
} from "lucide-react";

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-[#08080A] text-white font-sans relative pb-24 w-full">
      {/* =========================================
          TOP HEADER
      ========================================== */}
      <header className="sticky top-0 z-50 bg-[#08080A]/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo & Actions (Mobile: Top Row, Desktop: Left) */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
              LeedNews<span className="text-cyan-400">.</span>
              <span className="bg-cyan-500/20 text-cyan-400 text-[10px] px-2 py-0.5 rounded-full border border-cyan-500/30 ml-1">
                PRO
              </span>
            </div>
            <div className="flex md:hidden items-center gap-3">
              <button className="relative p-2 text-gray-400 hover:text-white transition">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Search Bar (Mobile: Bottom, Desktop: Center) */}
          <div className="relative flex items-center bg-[#131315] border border-cyan-500/50 rounded-full px-4 py-2 w-full md:max-w-xl shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <Search className="text-cyan-400 w-4 h-4" />
            <input
              type="text"
              defaultValue="Autonomous Systems"
              className="flex-1 bg-transparent border-none outline-none text-sm text-white px-3 placeholder-gray-500"
            />
            <div className="flex items-center gap-2">
              <button className="p-1 text-gray-400 hover:text-white">
                <span className="text-xs">X</span>
              </button>
              <div className="w-px h-4 bg-white/10"></div>
              <button className="flex items-center gap-1 text-cyan-400">
                <div className="flex gap-0.5 items-center h-3">
                  <div className="w-0.5 h-1.5 bg-cyan-400 animate-pulse"></div>
                  <div className="w-0.5 h-3 bg-cyan-400 animate-pulse"></div>
                  <div className="w-0.5 h-2 bg-cyan-400 animate-pulse"></div>
                </div>
                <Mic className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Desktop Actions (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></span>
            </button>
            <div className="w-9 h-9 rounded-full bg-[#1C1C1E] border border-white/10 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      {/* =========================================
          MAIN CONTENT
      ========================================== */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-6">
        {/* Flash Ticker */}
        <div className="flex items-center gap-3 bg-[#101014] border border-amber-500/30 rounded-xl p-3 mb-6 overflow-hidden max-w-4xl">
          <span className="bg-red-500/20 text-red-500 font-bold text-[10px] px-2 py-1 rounded shrink-0 border border-red-500/30">
            FLASH
          </span>
          <p className="text-xs text-gray-300 truncate">
            Next-Gen Neural Clusters Deploy Global Zero-Ki...
          </p>
        </div>

        {/* Responsive Grid Layout (Mobile: Stacked, Desktop: 2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: Hero Card */}
          <div className="lg:col-span-7">
            <div className="liquid-border bg-[#101014] rounded-2xl overflow-hidden mb-8 group h-full flex flex-col">
              {/* Image Area */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#101014] via-[#101014]/40 to-transparent"></div>

                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className="bg-black/60 backdrop-blur-md border border-white/10 text-cyan-400 text-[9px] font-mono px-2.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>{" "}
                    QUANTUM NETWORKS
                  </span>
                  <span className="text-[10px] text-gray-300 font-mono bg-black/40 px-2 py-1 rounded backdrop-blur-md">
                    8 mins ago
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 md:p-8 relative z-10 -mt-12 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-[10px] font-mono mb-3">
                  <span className="text-white font-bold">LEED GLOBAL DESK</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-cyan-400">STORY #9402</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                  Quantum Coherence Achieved at Room Temperature: The
                  Architecture of Post-Binary Computation
                </h2>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  The publisher's own summary from its RSS feed detailing
                  scalable quantum matrices, autonomous sub-atomic routing, and
                  the end of binary limitations.
                </p>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition">
                    <Play className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-medium">Listen 3:42</span>
                  </button>
                  <span className="text-[11px] text-gray-500">4m read</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Live Wire Stream */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                Live Wire Stream{" "}
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              </h3>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest">
                REALTIME FEED
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {/* Stream Item 1 */}
              <div className="liquid-border bg-[#101014] p-4 rounded-xl flex justify-between gap-4 group cursor-pointer hover:bg-[#181820] transition">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[9px] font-mono mb-1">
                    <span className="text-cyan-400 font-bold uppercase">
                      GOVERNANCE
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">Brussels Wire</span>
                  </div>
                  <h4 className="text-sm font-bold leading-snug mb-2 group-hover:text-cyan-400 transition">
                    The European Union Passes Comprehensive Neural...
                  </h4>
                  <span className="text-[10px] text-gray-500">14 mins ago</span>
                </div>
                <div className="w-20 h-20 rounded-lg bg-gray-800 overflow-hidden shrink-0 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded backdrop-blur-sm">
                    <Bookmark className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Stream Item 2 */}
              <div className="liquid-border bg-[#101014] p-4 rounded-xl flex justify-between gap-4 group cursor-pointer hover:bg-[#181820] transition">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[9px] font-mono mb-1">
                    <span className="text-amber-400 font-bold uppercase">
                      FINANCE
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">Apex Financial</span>
                  </div>
                  <h4 className="text-sm font-bold leading-snug mb-2 group-hover:text-cyan-400 transition">
                    Decentralized Liquidity Reserves Adopt Algorithmic
                    Autonomous...
                  </h4>
                  <span className="text-[10px] text-gray-500">32 mins ago</span>
                </div>
                <div className="w-20 h-20 rounded-lg bg-gray-800 overflow-hidden shrink-0 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded backdrop-blur-sm">
                    <Bookmark className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Stream Item 3 */}
              <div className="liquid-border bg-[#101014] p-4 rounded-xl flex justify-between gap-4 group cursor-pointer hover:bg-[#181820] transition">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[9px] font-mono mb-1">
                    <span className="text-cyan-400 font-bold uppercase">
                      EXPLORATION
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400">GeoTech Oceanic</span>
                  </div>
                  <h4 className="text-sm font-bold leading-snug mb-2 group-hover:text-cyan-400 transition">
                    Deep-Sea Autonomous Submersibles Map Oceanic Miner...
                  </h4>
                  <span className="text-[10px] text-gray-500">1 hr ago</span>
                </div>
                <div className="w-20 h-20 rounded-lg bg-gray-800 overflow-hidden shrink-0 relative">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center opacity-70"></div>
                  <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded backdrop-blur-sm">
                    <Bookmark className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-8 mb-4 text-center">
              <p className="text-[10px] text-gray-500 font-mono mb-4">
                Showing 1 of 42 articles •{" "}
                <span className="text-gray-400">next_before: 2026-10-01</span>
              </p>
              <button className="w-full py-3 bg-[#101014] border border-white/10 rounded-xl text-sm font-medium hover:bg-white/5 transition flex items-center justify-center gap-2">
                <span className="material-symbols-rounded text-sm text-cyan-400">
                  sync
                </span>{" "}
                FETCH NEXT DISPATCHES
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* =========================================
          BOTTOM NAVIGATION (Responsive)
      ========================================== */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#08080A]/90 backdrop-blur-xl border-t border-white/5 px-4 py-3 pb-safe z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <button className="flex flex-col items-center gap-1 text-cyan-400">
            <div className="relative">
              <Radio className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,242,254,0.8)]"></span>
            </div>
            <span className="text-[9px] font-medium">Feed</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
            <Compass className="w-5 h-5" />
            <span className="text-[9px] font-medium">Explore</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
            <Headphones className="w-5 h-5" />
            <span className="text-[9px] font-medium">Briefing</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
            <Bookmark className="w-5 h-5" />
            <span className="text-[9px] font-medium">Saved</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-white transition">
            <User className="w-5 h-5" />
            <span className="text-[9px] font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
