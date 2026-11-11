import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Search, Mic, Hexagon } from "lucide-react"; // We will install lucide-react later

export default function LandingPage() {
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium hover:text-cyan-400 transition"
          >
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
      {/* =========================================
          FEATURE CARDS
      ========================================== */}
      <section className="relative z-10 max-w-5xl mx-auto mt-24 px-4 mb-32">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-t border-white/5 pt-10">
          <div>
            <p className="text-cyan-400 text-xs font-bold tracking-widest mb-3 uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              CORE PLATFORM SUITE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Engineered for Instantaneous <br /> News Velocity.
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-xs leading-relaxed mt-6 md:mt-0">
            Designed for news desks, financial trading floors, and automated
            aggregation workflows demanding absolute sub-second fidelity.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="liquid-border bg-[#101014]/80 backdrop-blur-xl p-6 rounded-2xl group cursor-pointer hover:bg-[#181820] transition duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-[#1C1C1E] rounded-lg border border-white/5 flex items-center justify-center text-cyan-400">
                <span className="text-lg">⚡</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                8.4B Velocity
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Optical Query Engine & Velocity Radar
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              High-dimensional vector indexing traverses million-token corpus
              sets with 99.4% precision. Real-time velocity radar detects
              emerging geopolitical and market breakouts prior to syndicated
              wire distribution.
            </p>
            {/* Mini Graph Mockup */}
            <div className="bg-[#09090B] rounded-lg p-3 border border-white/5">
              <div className="text-[9px] text-gray-500 font-mono mb-2">
                SIGNAL DENSITY VELOCITY
              </div>
              <div className="flex items-end gap-1 h-8">
                <div className="w-full bg-white/5 h-full rounded-sm"></div>
                <div className="w-full bg-white/5 h-full rounded-sm"></div>
                <div className="w-full bg-white/5 h-full rounded-sm"></div>
                <div className="w-full bg-cyan-500/20 h-3/4 rounded-sm"></div>
                <div className="w-full bg-cyan-400 h-full rounded-sm shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
                <div className="w-full bg-cyan-400 h-1/2 rounded-sm shadow-[0_0_10px_rgba(0,242,254,0.5)]"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="liquid-border bg-[#101014]/80 backdrop-blur-xl p-6 rounded-2xl group cursor-pointer hover:bg-[#181820] transition duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-[#1C1C1E] rounded-lg border border-white/5 flex items-center justify-center text-cyan-400">
                <span className="text-lg">🔊</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                48kHz / 24-Bit
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Lossless Neural Audio Synthesizer
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Instantaneous text-to-voice transformation converts raw text
              dispatches into studio-grade broadcast feeds. Features chapter
              markers, dual-narrator cross-talk, dynamic pacing, and offline
              audio caching.
            </p>
            {/* Audio Mockup */}
            <div className="bg-[#09090B] rounded-lg p-3 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black text-xs">
                  ▶
                </div>
                <div className="flex gap-0.5 items-center h-4">
                  <div className="w-0.5 h-2 bg-cyan-400"></div>
                  <div className="w-0.5 h-4 bg-cyan-400"></div>
                  <div className="w-0.5 h-3 bg-cyan-400"></div>
                  <div className="w-0.5 h-1 bg-cyan-400"></div>
                  <div className="w-0.5 h-2 bg-cyan-400"></div>
                </div>
              </div>
              <div className="text-[9px] text-gray-500 font-mono">
                03:42 / 15:10
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="liquid-border bg-[#101014]/80 backdrop-blur-xl p-6 rounded-2xl group cursor-pointer hover:bg-[#181820] transition duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-[#1C1C1E] rounded-lg border border-white/5 flex items-center justify-center text-cyan-400">
                <span className="text-lg">🌐</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                0.02s Sync
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Publisher Ingestion & Cursor Streaming
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Ingest multi-publisher wire streams over cursor-based pagination.
              Native support for RSS payloads with sub-second latency
              guarantees. Zero missed dispatches during network blips.
            </p>
            {/* Code Mockup */}
            <div className="bg-[#09090B] rounded-lg p-3 border border-white/5 text-[9px] font-mono text-gray-400 overflow-hidden">
              <div className="text-cyan-400 mb-1">
                PIPELINE DISPATCH WORKFLOW
              </div>
              <div className="truncate">
                GET /v1/stream?cursor=eyJpZCI6IjEyMzQ1NiJ9...
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="liquid-border bg-[#101014]/80 backdrop-blur-xl p-6 rounded-2xl group cursor-pointer hover:bg-[#181820] transition duration-300">
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 bg-[#1C1C1E] rounded-lg border border-white/5 flex items-center justify-center text-cyan-400">
                <span className="text-lg">🔒</span>
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
                Local Encrypt
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Encrypted Dispatches & Offline Vault
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Client-side AES-256-GCM encryption and local caching mechanisms.
              One-click bulk export to standard JSON or Markdown archives with
              cryptographically pinned timestamps.
            </p>
            {/* Status Mockup */}
            <div className="bg-[#09090B] rounded-lg p-3 border border-white/5 flex items-center justify-between text-[9px] font-mono">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                OFFLINE DISPATCH EXPLORER
              </div>
              <div className="text-cyan-400">SYNCED</div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
          INTERACTIVE ARCHITECTURE
      ========================================== */}
      <section className="relative z-10 max-w-5xl mx-auto mt-24 px-4">
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2 flex items-center justify-center gap-2">
            <span className="material-symbols-rounded text-sm">code</span>{" "}
            TECHNICAL PLAYGROUND
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Interactive Architecture & Data Spec.
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Inspect how LeedNews processes queries, delivers validated JSON
            payload schemas, and plays neural audio feeds.
          </p>

          {/* Toggle Tabs */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="bg-cyan-400 text-black px-4 py-1.5 rounded-full text-xs font-bold">
              LIQUID SEARCH UI
            </button>
            <button className="bg-white/5 border border-white/10 text-gray-400 px-4 py-1.5 rounded-full text-xs font-medium hover:text-white transition">
              API SPEC & JSON
            </button>
            <button className="bg-white/5 border border-white/10 text-gray-400 px-4 py-1.5 rounded-full text-xs font-medium hover:text-white transition">
              AUDIO PIPELINE
            </button>
          </div>
        </div>

        {/* Playground Box */}
        <div className="liquid-border bg-[#101014]/80 backdrop-blur-xl p-6 rounded-2xl grid md:grid-cols-2 gap-8">
          {/* Left Side: Search UI */}
          <div>
            <h4 className="text-sm font-bold text-white mb-2">
              The Liquid Glass Pill Interface
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Engineered with 30px backdrop blur and edge refraction. The search
              pill parses query debouncing with live vector clustering to return
              instant publisher consensus.
            </p>
            <ul className="space-y-4">
              {[
                "Spatial blur ring: Minimal cyan border illumination when active",
                "Live operator filtering: Queries are tokenized against active endpoints",
                "Collapsible publisher drawer: Auto-maps semantic tags",
                "Integrated Neural Audio Synthesizer: Tap to trigger spoken-word index",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-xs text-gray-300"
                >
                  <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: JSON Code Mockup */}
          <div className="bg-[#09090B] border border-white/5 rounded-xl p-4 font-mono">
            <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-3">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>{" "}
                LIVE SEARCH TELEMETRY EGRESS
              </span>
              <span className="text-[9px] text-gray-600">
                RATIO_SCORE: 0.994
              </span>
            </div>
            <div className="space-y-3 text-[10px]">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="material-symbols-rounded text-xs">search</span>{" "}
                Autonomous Systems
              </div>
              <div className="text-gray-500 italic">
                "Retrieves 4,891 docs • 42 ms"
              </div>

              <div className="border-l border-white/10 pl-3 space-y-2">
                <div className="bg-white/5 p-2 rounded">
                  <div className="text-white font-bold">
                    Next-Gen Autonomous Drone Corridors Receive Sovereign
                    Certification
                  </div>
                  <div className="text-cyan-400 text-[9px] mt-1">
                    INTELLIGENCE | Reuters | 8m ago
                  </div>
                </div>
                <div className="bg-white/5 p-2 rounded">
                  <div className="text-white font-bold">
                    Autonomous Micro-Grids Save Off Grid Denizens
                  </div>
                  <div className="text-cyan-400 text-[9px] mt-1">
                    INTELLIGENCE | Bloomberg | 14m ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LIVE INGESTION FEEDS
      ========================================== */}
      <section className="relative z-10 max-w-5xl mx-auto mt-24 px-4 mb-24">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-cyan-400 text-[10px] font-bold tracking-widest uppercase mb-1">
              LIVE INGESTION FEEDS
            </p>
            <h2 className="text-3xl font-bold text-white">
              Dispatched Wire Signals
            </h2>
          </div>
          <a
            href="#"
            className="text-xs text-cyan-400 flex items-center gap-1 hover:text-cyan-300 transition"
          >
            OPEN INGESTION CONSOLE{" "}
            <span className="material-symbols-rounded text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feed Card 1 */}
          <div className="liquid-border bg-[#101014]/80 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="h-40 bg-gray-800 relative overflow-hidden">
              {/* Fake Image Background */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] to-transparent"></div>
              <span className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono px-2 py-1 rounded">
                VERIFIED WIRE
              </span>
            </div>
            <div className="p-5 relative z-10">
              <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2 font-mono">
                <span className="text-white">Financial Wire</span> • 10m ago
              </div>
              <h3 className="text-sm font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition">
                Global Central Banks Standardize RealTime Ledger Integration
                Protocols
              </h3>
              <p className="text-[11px] text-gray-500">
                Cross-border settlements enter a tokenized era moving $7T daily
                into regulatory frameworks.
              </p>
            </div>
          </div>

          {/* Feed Card 2 */}
          <div className="liquid-border bg-[#101014]/80 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="h-40 bg-gray-800 relative overflow-hidden">
              {/* Fake Image Background */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] to-transparent"></div>
              <span className="absolute top-4 left-4 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[9px] font-mono px-2 py-1 rounded">
                BREAKING SIGNAL
              </span>
            </div>
            <div className="p-5 relative z-10">
              <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2 font-mono">
                <span className="text-white">AeroSpace Desk</span> • 14m ago
              </div>
              <h3 className="text-sm font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition">
                Sovereign Flight Authorities Clear Commercial High-Altitude
                Drone Mesh
              </h3>
              <p className="text-[11px] text-gray-500">
                Autonomous sky corridors now authorized across 14 international
                airspaces following sub-millimeter safety records.
              </p>
            </div>
          </div>

          {/* Feed Card 3 */}
          <div className="liquid-border bg-[#101014]/80 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="h-40 bg-gray-800 relative overflow-hidden">
              {/* Fake Image Background */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#101014] to-transparent"></div>
              <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono px-2 py-1 rounded">
                100% CRYPTOGRAPHIC
              </span>
            </div>
            <div className="p-5 relative z-10">
              <div className="flex items-center gap-2 text-[10px] text-gray-500 mb-2 font-mono">
                <span className="text-white">Quantum Networks</span> • 18m ago
              </div>
              <h3 className="text-sm font-bold text-white leading-snug mb-3 group-hover:text-cyan-400 transition">
                Quantum Climatology Model Predicts Pacific El Niño Shift 30 Days
                Early
              </h3>
              <p className="text-[11px] text-gray-500">
                Deep ensemble array networks reshape agricultural futures
                markets with hyper-accurate simulations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
          FOOTER & CTA
      ========================================== */}
      <footer className="relative z-10 border-t border-white/5 pt-24 pb-12 bg-[#09090B]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Big CTA Area */}
          <div className="text-center mb-24 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

            <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
              <span className="material-symbols-rounded text-sm">
                verified_user
              </span>
              ENTERPRISE SECURITY • API 4.0 ACCESS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to deploy LeedNews <br /> Intelligence?
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto mb-10">
              Integrate the real-time neural wire directly into your newsroom
              CMS, market trading algorithms, or automated subscriber channels.
            </p>

            {/* Email Input Mockup */}
            <div className="flex items-center justify-center max-w-md mx-auto bg-[#131315] border border-white/10 rounded-full p-1.5">
              <input
                type="email"
                placeholder="Enter corporate email for API key"
                className="flex-1 bg-transparent border-none outline-none text-white px-4 text-sm placeholder-gray-500"
              />
              <button className="bg-cyan-400 text-black font-bold text-sm px-6 py-2.5 rounded-full hover:bg-cyan-300 transition">
                Request Access
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500 font-mono">
              <span className="flex items-center gap-1">
                <span className="material-symbols-rounded text-sm">shield</span>{" "}
                500,000 Free Ingestions/Month
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-rounded text-sm">lock</span>{" "}
                SOC2 Type II Certified
              </span>
            </div>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12 pb-12 text-sm text-gray-500">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                LeedNews<span className="text-cyan-400">.</span>
              </div>
              <p className="text-xs leading-relaxed mb-4">
                Autonomous high-velocity news intelligence and neural audio
                media engine.
              </p>
              <p className="text-xs">● Sovereign Headless (v4.0)</p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold mb-2">
                PLATFORM & APIS
              </span>
              <a href="#" className="hover:text-cyan-400 transition">
                Streaming WebSockets
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Neural Audio Synthesis
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Ingestion Pipelines
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                API Reference
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold mb-2">
                INTELLIGENCE
              </span>
              <a href="#" className="hover:text-cyan-400 transition">
                Commercial Terms
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Console Access
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Signal Classification
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Status & Uptime
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold mb-2">
                TRUST & COMPLIANCE
              </span>
              <a href="#" className="hover:text-cyan-400 transition">
                Algorithmic Disclosure
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Privacy Architecture
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Security Protocols
              </a>
              <a href="#" className="hover:text-cyan-400 transition">
                Terms of Dispatch
              </a>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5 text-[10px] text-gray-600 font-mono uppercase tracking-widest">
            <p>© 2025 LeedNews Inc. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Clusters: Prime-US-East // Rev 4.9.1-EXP // Epoch: LIVE
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
