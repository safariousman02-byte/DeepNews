import React from "react";
import { Search, Mic, Hexagon } from "lucide-react"; // We will install lucide-react later

export default function LandingPage() {
  return (
    // The main background is a deep void, but we add a subtle cyan glow at the top
    <div className="min-h-screen bg-[#08080A] text-white relative overflow-hidden font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* =========================================
          NAVBAR
      ========================================== */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Hexagon className="text-cyan-400 w-6 h-6 fill-cyan-400/20" />
          LeedNews<span className="text-cyan-400">.</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">
            Features
          </a>
          <a href="#" className="hover:text-white transition">
            Architecture
          </a>
          <a href="#" className="hover:text-white transition">
            API
          </a>
          <a href="#" className="hover:text-white transition">
            Audio
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-cyan-400 transition">
            Sign in
          </button>
          <button className="bg-cyan-400 text-black font-bold text-sm px-5 py-2.5 rounded-full hover:bg-cyan-300 transition shadow-[0_0_15px_rgba(0,242,254,0.3)]">
            Launch Console
          </button>
        </div>
      </nav>

      {/* =========================================
          HERO SECTION
      ========================================== */}
      <header className="relative z-10 flex flex-col items-center text-center mt-24 px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-cyan-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          LEEDNEWS 4.0 // NEURAL INTELLIGENCE DISPATCH
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          Next-Generation Autonomous News <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Architecture & Real-Time Intelligence.
          </span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mb-10">
          Ingest multi-publisher wire feeds, query high-dimensional signal
          clusters in 0.02s, and synthesize studio-grade neural audio briefings
          on demand.
        </p>

        {/* Liquid Search Bar */}
        <div className="w-full max-w-2xl relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative flex items-center bg-[#131315] border border-white/10 rounded-full px-6 py-3">
            <Search className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search breaking intelligence..."
              className="flex-1 bg-transparent border-none outline-none text-white px-4 placeholder-gray-500"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 hidden md:block">⌘ K</span>
              <button className="p-2 bg-cyan-500/20 rounded-full text-cyan-400 hover:bg-cyan-500/30 transition">
                <Mic className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
