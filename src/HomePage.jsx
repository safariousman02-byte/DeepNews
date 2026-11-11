import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [activePill, setActivePill] = useState("All Dispatches");

  // Load required Google Fonts and Material Symbols
  useEffect(() => {
    // Fonts
    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Syne:wght@600;700;800&display=swap";
    document.head.appendChild(fontLink);

    // Material Symbols
    const symbolLink = document.createElement("link");
    symbolLink.rel = "stylesheet";
    symbolLink.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    document.head.appendChild(symbolLink);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(symbolLink);
    };
  }, []);

  const pills = [
    "All Dispatches",
    "Frontier AI & Compute",
    "Geopolitics",
    "Quantum Networks",
    "Capital Markets",
    "Culture & Form",
  ];

  return (
    <div className="bg-[#131315] font-sans text-[#e5e1e4] min-h-screen relative selection:bg-[#00f2fe] selection:text-[#006a70]">
      {/* ==================== CUSTOM STYLES ==================== */}
      <style>{`
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-display { font-family: 'Syne', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        ::-webkit-scrollbar { display: none; }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(1.06); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>

      {/* ==================== ATMOSPHERIC BACKGROUND ==================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040812] via-[#091528] to-[#04060a]"></div>

        {/* Celestial Orb */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-gradient-to-b from-[#00f2fe]/40 via-[#00dce6]/20 to-transparent blur-3xl animate-pulse-slow shadow-[0_0_80px_rgba(0,242,254,0.35)]"></div>
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#6ff6ff]/20 blur-xl"></div>

        {/* Mountains & Water Horizon */}
        <div className="absolute bottom-0 left-0 right-0 h-[420px] w-full">
          <svg
            className="absolute bottom-16 w-full h-64 preserve-3d"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              d="M0,224L60,197.3C120,171,240,117,360,128C480,139,600,213,720,218.7C840,224,960,160,1080,144C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"
              fill="#070b14"
              fillOpacity="0.85"
              stroke="#00f2fe"
              strokeOpacity="0.2"
              strokeWidth="1.5"
            ></path>
            <path
              d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,144C1120,139,1280,181,1360,202.7L1440,224L1440,320L0,320Z"
              fill="#030509"
              fillOpacity="0.95"
              stroke="#00dce6"
              strokeOpacity="0.3"
              strokeWidth="1.5"
            ></path>
          </svg>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#020306] to-transparent">
            <div className="w-full h-px bg-[#00f2fe]/25 mt-2 blur-[0.5px]"></div>
            <div className="w-3/4 mx-auto h-px bg-[#00dce6]/20 mt-3 blur-[1px]"></div>
            <div className="w-1/2 mx-auto h-px bg-[#00f2fe]/15 mt-3 blur-[1.5px]"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(14,14,16,0.85)_100%)]"></div>
      </div>

      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e10]/65 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
        <div className="h-20 w-full px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/15 via-[#131722]/90 to-[#090b10] border border-[#00f2fe]/40 p-2 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,242,254,0.35)] backdrop-blur-md transition-all duration-300 group-hover:border-[#00f2fe] group-hover:shadow-[0_0_25px_rgba(0,242,254,0.6)]">
              <svg
                className="w-5 h-5 text-[#00f2fe] transition-transform duration-300 group-hover:scale-105"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M4 4v13a3 3 0 0 0 3 3h13"
                  stroke="url(#cyan-grad)"
                ></path>
                <circle cx="20" cy="20" r="2" fill="#00f2fe"></circle>
                <path
                  d="M8 8l4 4-4 4"
                  stroke="currentColor"
                  strokeOpacity="0.6"
                  strokeWidth="1.8"
                ></path>
                <defs>
                  <linearGradient
                    id="cyan-grad"
                    x1="4"
                    y1="4"
                    x2="20"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00f2fe"></stop>
                    <stop offset="1" stopColor="#4facfe"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2fe] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]"></span>
              </span>
            </div>
            <span className="font-display text-xl tracking-wider uppercase font-extrabold leading-none text-white">
              LEEDNEWS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-[#0e0e10]/40 backdrop-blur-md">
            <Link
              to="/"
              className="px-4 py-1 transition-all duration-200 bg-[#00f2fe] text-[#006a70] font-semibold rounded-lg shadow-[0_0_12px_#00f2fe] text-sm"
            >
              Home
            </Link>
            <a
              href="#"
              className="px-4 py-1 font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200 text-sm"
            >
              Article
            </a>
            <a
              href="#"
              className="px-4 py-1 font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200 text-sm"
            >
              Categories
            </a>
            <a
              href="#"
              className="px-4 py-1 font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200 text-sm"
            >
              Search
            </a>
            <Link
              to="/login"
              className="px-4 py-1 font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200 text-sm"
            >
              Login
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:block text-sm text-[#b9cacb] hover:text-white transition-colors px-2 py-1"
            >
              Help
            </a>
            <Link
              to="/login"
              className="w-8 h-8 rounded-full bg-[#e0fdff] flex items-center justify-center hover:bg-[#00f2fe] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#00373a] text-[18px]">
                person
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="relative z-10 w-full pt-20 min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full px-6 lg:px-12 py-10 max-w-[1440px] mx-auto flex flex-col gap-10">
            {/* 1. CATEGORY PILLS */}
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
                {pills.map((pill) => (
                  <button
                    key={pill}
                    onClick={() => setActivePill(pill)}
                    className={`relative px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                      activePill === pill
                        ? "bg-[#2a2a2c]/90 text-[#00f2fe] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,242,254,0.3)]"
                        : "bg-[#1c1b1d]/60 hover:bg-[#2a2a2c]/80 text-[#b9cacb] hover:text-white"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {activePill === pill && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]"></span>
                      )}
                      {pill}
                    </span>
                    {activePill === pill && (
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00f2fe]/20 to-[#00dce6]/10 pointer-events-none"></div>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* 2. HERO SECTION & SIDEBAR */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* HERO CARD (8 Cols) */}
              <article className="lg:col-span-8 group relative rounded-xl overflow-hidden bg-gradient-to-br from-white/[0.08] via-[#131315]/[0.65] to-[#0e0e10]/[0.85] backdrop-blur-[28px] p-6 md:p-10 flex flex-col justify-between shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_40px_-5px_rgba(0,242,254,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_-1px_2px_0_rgba(0,242,254,0.15)] transition-all duration-500 hover:shadow-[0_25px_60px_-8px_rgba(0,0,0,0.9),0_0_50px_0px_rgba(0,242,254,0.22)]">
                <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#00f2fe]/15 blur-3xl pointer-events-none group-hover:bg-[#00f2fe]/25 transition-all duration-700"></div>
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#3196e6]/20 blur-3xl pointer-events-none"></div>

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#00f2fe]/15 text-[#00f2fe] text-[11px] font-bold uppercase tracking-wider shadow-sm">
                        Monograph Lead #094
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#849495]"></span>
                      <span className="text-[11px] font-bold text-[#b9cacb] uppercase tracking-wider">
                        8 min read
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#849495] text-[11px] font-bold">
                      <span className="material-symbols-outlined text-[15px] text-[#00f2fe]">
                        schedule
                      </span>
                      <span>14 MINS AGO</span>
                      <span>•</span>
                      <span className="text-[#e5e1e4] font-semibold">
                        ELENA ROSTOVA
                      </span>
                    </div>
                  </div>

                  <h1 className="font-display text-3xl md:text-5xl lg:text-[56px] text-white font-extrabold tracking-tight leading-[1.08] mt-2 group-hover:text-[#e0fdff] transition-colors duration-300">
                    The Subterranean Silicon Cartography: Mapping Sovereign
                    Compute Across Nordic Depths.
                  </h1>

                  <p className="text-lg text-[#b9cacb] max-w-3xl font-light leading-relaxed">
                    Buried 300 meters beneath crystalline Fennoscandian granite,
                    geothermal-liquid arrays redefine computational territorial
                    integrity, insulating autonomous LLM foundations from
                    climate instability and physical kinetic disruption.
                  </p>
                </div>

                {/* Featured Image */}
                <div className="relative z-10 my-6 w-full h-72 rounded-lg overflow-hidden bg-[#0e0e10] shadow-inner">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt="Subterranean Data Center"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDubM0MscMQFUyqXBr28GdluFnWnZOXVorpn2PCncTNdEqAPLQTfwkR8QafKSqZuLT0hX4-tG0pOTRcjhLSWkZGGpLPecmY7qz1lQXsJuahw6eshJZg9MK_X2bc8ObGDMOoX_9rtv31wvk0stNqnvV1o3nwVel0ipAzi0lTwUsWTTrWvwREzSgknquTBXZAHwUbQDeBKC2CngCMR4-sbQuE3qDvuR5_XTt89VNSSw8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-[#0e0e10]/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-bold text-[#00dce6] bg-[#0e0e10]/70 backdrop-blur-md px-3 py-1.5 rounded">
                    <span>
                      COORDINATES: 67°51'01"N 20°13'18"E [KIRUNA SECTOR 09]
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>
                      COOLING FLOW: OPTIMAL (3.8°C)
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="#"
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#2a2a2c] to-[#353437] text-[#00f2fe] font-display font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,254,0.25),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:scale-[1.02] transition-all duration-200"
                    >
                      <span>Read Full Monograph</span>
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                    <button className="px-4 py-3 rounded-lg bg-[#1c1b1d]/70 hover:bg-[#2a2a2c] text-white font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm">
                      <span className="material-symbols-outlined text-[#00f2fe] text-[20px]">
                        graphic_eq
                      </span>
                      <span>Audio Briefing (11:40)</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-10 h-10 rounded-lg bg-[#1c1b1d]/80 hover:bg-[#2a2a2c] text-[#b9cacb] hover:text-[#00f2fe] flex items-center justify-center transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        bookmark
                      </span>
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-[#1c1b1d]/80 hover:bg-[#2a2a2c] text-[#b9cacb] hover:text-[#00f2fe] flex items-center justify-center transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-[20px]">
                        share
                      </span>
                    </button>
                  </div>
                </div>
              </article>

              {/* SIDEBAR (4 Cols) */}
              <aside className="lg:col-span-4 flex flex-col gap-6">
                {/* Audio Stream */}
                <div className="rounded-xl p-4 bg-gradient-to-br from-white/[0.08] via-[#131315]/[0.65] to-[#0e0e10]/[0.85] backdrop-blur-[28px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_40px_-5px_rgba(0,242,254,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.25)] flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse"></span>
                      <span className="font-display text-xl text-white font-semibold">
                        Curatorial Stream
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#00dce6] bg-[#00f2fe]/10 px-2 py-0.5 rounded">
                      DIRECT FEED
                    </span>
                  </div>
                  <p className="text-[13px] text-[#b9cacb]">
                    Synthetic synthesis of latest research memos and market
                    friction points.
                  </p>

                  {/* Waveform */}
                  <div className="h-16 w-full rounded-lg bg-[#0e0e10]/90 px-3 py-2 flex items-center gap-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f2fe]/10 to-transparent pointer-events-none"></div>
                    <div className="flex items-end justify-between w-full h-full gap-[3px]">
                      {[
                        4, 8, 11, 6, 12, 9, 5, 10, 7, 12, 4, 9, 11, 6, 8, 3,
                      ].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full ${i % 3 === 0 ? "bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" : "bg-[#00f2fe]/50"}`}
                          style={{ height: `${h * 4}px` }}
                        ></span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[13px] text-[#b9cacb] font-mono">
                      03:42 / 18:20
                    </span>
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-[#201f22] flex items-center justify-center text-white hover:text-[#00f2fe]">
                        <span className="material-symbols-outlined text-[16px]">
                          replay_10
                        </span>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-[#00f2fe] text-[#00373a] font-bold flex items-center justify-center shadow-[0_0_12px_#00f2fe]">
                        <span className="material-symbols-outlined text-[18px]">
                          play_arrow
                        </span>
                      </button>
                      <button className="w-8 h-8 rounded-full bg-[#201f22] flex items-center justify-center text-white hover:text-[#00f2fe]">
                        <span className="material-symbols-outlined text-[16px]">
                          forward_30
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Wire Dispatches */}
                <div className="rounded-xl p-4 bg-gradient-to-br from-white/[0.08] via-[#131315]/[0.65] to-[#0e0e10]/[0.85] backdrop-blur-[28px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_40px_-5px_rgba(0,242,254,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.25)] flex flex-col flex-1 justify-between gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/5">
                    <h2 className="font-display text-xl text-white font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#00f2fe] text-[20px]">
                        bolt
                      </span>
                      Obsidian Wire
                    </h2>
                    <span className="text-[11px] font-bold text-[#849495] tracking-wider">
                      CH-12
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {[
                      {
                        time: "09:12 UTC",
                        tag: "SYSTEMIC RISKS",
                        title:
                          "Photonic Switch Latency Halved in TSMC Pilot Fab Run",
                      },
                      {
                        time: "08:45 UTC",
                        tag: "GEO-ENERGY",
                        title:
                          "Reykjavik Energy Accord Caps High-Density AI Cluster Exports",
                      },
                      {
                        time: "07:20 UTC",
                        tag: "CURRENCY",
                        title:
                          "Synthetic Dollar Arbitrage Widens Across Tokyo Settlement Nodes",
                      },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="group/item flex flex-col gap-1 p-2 rounded-lg hover:bg-[#2a2a2c]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold text-[#849495]">
                          <span className="text-[#00f2fe] font-semibold">
                            {item.time}
                          </span>
                          <span>{item.tag}</span>
                        </div>
                        <p className="text-[15px] text-white group-hover/item:text-[#e0fdff] transition-colors font-medium leading-tight">
                          {item.title}
                        </p>
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-[#849495]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]"></span>
                      24-HR NETWORK FLUX: +18.4%
                    </span>
                    <a
                      href="#"
                      className="text-[#00f2fe] font-semibold hover:underline"
                    >
                      DISPATCH ARCHIVE →
                    </a>
                  </div>
                </div>
              </aside>
            </section>

            {/* 3. LATEST ARTICLES GRID */}
            <section className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#00f2fe]">
                    Investigative Dossiers
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl text-white font-extrabold mt-1">
                    Deep Field Intelligence
                  </h2>
                </div>
                <p className="text-[15px] text-[#b9cacb] max-w-md">
                  Peer-evaluated examinations of algorithmic governance,
                  frontier substrate physics, and evolving monetary mechanics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    tag: "Tech & Compute",
                    time: "6 MIN READ",
                    author: "DR. MARCUS VANCE",
                    title: "Autonomous Consensus in Multi-Agent Swarms",
                    desc: "Decentralized negotiation primitives allowing thousands of specialized LLM sub-routines to execute settlement without arbitration latency.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdf_lQpOKQPQI8wTmkEmloXK3CrJX94uyFJmucczjBIHC4YwbMuqRoGpMbZEk48mY_c9lXLP2T05c6FH4PxKurnHVALDlfTtg_js9O-G5gkBJ3PUDq3Ly55f_iYhWl-Xu7Q_WlvaBS2GjYQsnWVazCnbvKHcqJqa_mMYFcEIYve252W5t64I7XFRGF445aou91Uds0goi0dQW_rlvu0-QCd1oZvt7itO6PKQXUBb4",
                  },
                  {
                    tag: "Capital Markets",
                    time: "12 MIN READ",
                    author: "THOMAS K. CHEN",
                    title:
                      "Synthetic Sovereign Debt: Algorithmic Liquidity Inversions",
                    desc: "How high-frequency collateral engines constructed out-of-band balance sheets exceeding G7 sovereign yields during rapid rate shifts.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmIK7sgXdk7uUYKYU8CfxBho7ph_OLSp4aQ07bFPK4h8w0YB1EmSbv8MYhYpSeDbd7IU4WB51CAR8skxFt5C9WpIGm5yvPqrFy2ejmqMmavxkVKScZf9G_DBU1CmqoWakyc4vVhUEErkpIRwuTlXh8mpzBGg_GUyESGhF1U-QxrgEkSkrryeO5CqkqEzAZi7aC6FlPKtaSBuV-ncrNfP0PZJmgd9wrLh1-4cGT2RI",
                  },
                  {
                    tag: "Geopolitics",
                    time: "15 MIN READ",
                    author: "AURA LILIENTHAL",
                    title: "The Geneva Accord on Kinetic Machine Ethics",
                    desc: "Inside the confidential multilateral ratification of kill-switch latency ceilings for autonomous perimeter interdiction platforms.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAk39AlOo4Qm4pEqK9I6WAVk3gUqinp-umYOH1_pZllr5hF80RIDkuqncKtpMnXgFhc1A6whlzh5OWjSIxVAlBZm1SybeL4KHJm-Qg9lCaNVfJPv1GqQAM1DMD7FpC1OBw8YZXFO782Tw3cVqTzq1uYp7ccBSpDyU5R8D4xnws4ATKrOnUQFigeMOSZ_WdMhbdA6eiEVSdjvPVIDx6w6P4lnurgIzTYFG14IVFFbI",
                  },
                  {
                    tag: "Hardware",
                    time: "9 MIN READ",
                    author: "VALERIE HYMAN",
                    title: "2D Transition Metal Chalcogenides in Sub-1nm Logic",
                    desc: "Overcoming gate dielectrics through atomic monolayers: how post-silicon lithography is transitioning from cleanrooms to volume fabrication.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3UZd1ZxpZTi6QLCn4qqFgE_xDRxBqYKTlHbl4KaG6hLQO-U2nmjKnybK3vQh-UZRbL4DoY-fQOqJKcj52HxL5a9wXckxowfE07p18Q4qdEhLHwyR0C8bpYqMQBpwxEpEHKpwcyqFxqnzPq5izCjxHmoPyKQtDBiM_h0fLgJ-M4cP7Z57g2tUx_W5whR_Mp0PwfePKjCgEO_Jov_CkohMwoCyD4u2vbJEfI2EJIKQ",
                  },
                  {
                    tag: "Cryptography",
                    time: "14 MIN READ",
                    author: "KJELL NORDSTRÖM",
                    title:
                      "Subsea Quantum Key Distribution in Baltic Corridors",
                    desc: "Hardening underwater optic repeater trunks against quantum interception through continuous phase-randomized decoy-state protocols.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXX3l_4U_WYZ8AIcJ8eTbsYcBMvfA6LlDFIqKcp2vVEi9h-Mb_-52Q6FI7hbnAhhS65OF8fDbODuCKVs4MU8fY1he1yS5h5eAKlS7CzUs_jlzYpTHv8f5eA75aWa2EwFPz3F29YfrBT9e8LS11iP2UZdd5fbUOdXptIQchMYivSMzsJP4GpKpOmp3d9uou_egYYjioZh58_DOKzmqddmIVcvPj_LQqS8Cxu6pdpXA",
                  },
                  {
                    tag: "Culture & Form",
                    time: "7 MIN READ",
                    author: "SAMIRA AL-MANSOOR",
                    title: "The Geopolitics of Non-Latin Typography Foundries",
                    desc: "Resisting automated Unicode homogenization: independent type studios pioneering native digital aesthetics across Asia and the Levant.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPIIg9HeyqTdiV9V551Sr2RlGt6GoYoLhCZUXnQR5m0moM5utLD_8u0B0YUeapjz4staVwIlb010cqpfbQTsdDvzqbfDhEv6Yc4exJa5ZfJXute4NBcVV2rh0ZwaDmwIq_ctzyDQHcT0Y8a3Io0oCy7pqLvUs9RJRdVDhnYmExwdn_liAtC8B3dpEtBPY-BnHMF-Xer75X8oZeOFP5wP0SJrM2dLfE6_-Bz73yEN0",
                  },
                ].map((article, idx) => (
                  <article
                    key={idx}
                    className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-white/[0.08] via-[#131315]/[0.65] to-[#0e0e10]/[0.85] backdrop-blur-[28px] p-4 flex flex-col justify-between shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_40px_-5px_rgba(0,242,254,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.25),inset_0_-1px_2px_0_rgba(0,242,254,0.15)] hover:shadow-[0_25px_60px_-8px_rgba(0,0,0,0.95),0_0_45px_0_rgba(0,242,254,0.25)] transition-all duration-300"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="relative w-full h-48 rounded-lg overflow-hidden bg-[#0e0e10]">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          alt={article.title}
                          src={article.img}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent"></div>
                        <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0e0e10]/80 backdrop-blur-md text-[#00f2fe] text-[11px] font-bold tracking-wider uppercase">
                          {article.tag}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#849495] mt-1">
                        <span>{article.time}</span>
                        <span>{article.author}</span>
                      </div>
                      <h3 className="font-display text-xl text-white font-bold group-hover:text-[#6ff6ff] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-[15px] text-[#b9cacb] line-clamp-2">
                        {article.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 mt-2">
                      <span className="text-[11px] font-bold text-[#00f2fe] uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer">
                        Explore Model{" "}
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </span>
                      <button className="w-8 h-8 rounded-lg bg-[#2a2a2c]/50 hover:bg-[#2a2a2c] text-[#b9cacb] hover:text-[#00f2fe] flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-[16px]">
                          bookmark
                        </span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="relative z-40 w-full bg-[#0e0e10]/70 backdrop-blur-md border-t border-white/5">
        <div className="w-full px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-[13px] text-[#849495]">
            <span className="text-[#b9cacb]">
              © 2025 LeedNews Media Group Ltd.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#849495]">
            <a href="#" className="hover:text-[#00f2fe] transition-colors">
              Privacy Directive
            </a>
            <a href="#" className="hover:text-[#00f2fe] transition-colors">
              Terms of Service
            </a>
            <div className="flex items-center gap-1.5 text-[#b9cacb]/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]/70"></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
