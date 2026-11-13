import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ArticlePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#131315] text-[#e5e1e4] min-h-screen relative selection:bg-[#00f2fe] selection:text-[#00373a] font-sans">
      {/* ==================== CUSTOM STYLES & FONTS ==================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=Syne:wght@600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
        
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
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-[#2a2a2c]/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <span className="font-display text-xl text-[#00f2fe] font-extrabold">
                L
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]"></span>
            </div>
            <span className="font-display text-xl tracking-wider uppercase font-extrabold leading-none text-white">
              LEEDNEWS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-[#0e0e10]/40 backdrop-blur-md">
            <Link
              to="/home"
              className="px-4 py-1.5 text-sm font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <a
              href="#"
              className="px-4 py-1.5 text-sm font-semibold text-[#00f2fe] bg-[#2a2a2c] rounded-lg shadow-[inset_0_1px_1px_rgba(0,242,254,0.3)]"
            >
              Article
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-sm font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200"
            >
              Categories
            </a>
            <a
              href="#"
              className="px-4 py-1.5 text-sm font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200"
            >
              Search
            </a>
            <Link
              to="/login"
              className="px-4 py-1.5 text-sm font-semibold text-[#b9cacb] hover:text-white hover:bg-[#2a2a2c]/50 rounded-lg transition-all duration-200"
            >
              Login
            </Link>
          </nav>

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

      {/* ==================== READING PROGRESS BAR ==================== */}
      <div className="fixed top-20 left-0 right-0 z-40 h-[2px] bg-[#0e0e10]/80 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#00f2fe] via-[#00dce6] to-[#6ff6ff] shadow-[0_0_8px_#00f2fe] transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="relative z-10 w-full pt-20 min-h-screen">
        <div className="relative w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-12 py-6 lg:py-10">
          {/* Specular Auras */}
          <div className="absolute top-10 left-1/4 w-[500px] h-[350px] bg-[#00f2fe]/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-96 right-10 w-[420px] h-[320px] bg-[#3196e6]/10 rounded-full blur-[160px] pointer-events-none"></div>

          {/* 1. ARTICLE MASTHEAD */}
          <header className="relative mb-10 z-10">
            <h1 className="font-display text-3xl md:text-5xl lg:text-[56px] text-[#e0fdff] tracking-tight font-extrabold max-w-5xl leading-[1.1]">
              Architectures of Silence: How Subterranean Data Vaults Redefined
              Global Sovereign Memory
            </h1>
            <p className="text-lg md:text-xl text-[#b9cacb] max-w-4xl mt-6 leading-relaxed font-light">
              Four hundred meters beneath Svalbard permafrost, cryogenic silicon
              arrays silently preserve the cryptographic bedrock of
              post-national legal states.
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8 pt-4 border-t border-[#3a494b]/30 text-[#849495] text-xs font-semibold">
              <div className="flex items-center gap-2 text-[#e5e1e4]">
                <span className="material-symbols-outlined text-[16px] text-[#00f2fe]">
                  calendar_today
                </span>
                <span>October 24, 2026</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2 text-[#e5e1e4]">
                <span className="material-symbols-outlined text-[16px] text-[#00dce6]">
                  timelapse
                </span>
                <span>9 min read (2,410 words)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2 text-[#00dce6]">
                <span className="material-symbols-outlined text-[16px]">
                  fingerprint
                </span>
                <span className="uppercase tracking-widest text-[11px]">
                  SHA-512 Ledger Signed
                </span>
              </div>
            </div>
          </header>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* PRIMARY READING STREAM (Cols 1-8) */}
            <article className="lg:col-span-8 flex flex-col gap-6">
              {/* Hero Image */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-[#0e0e10]">
                <div
                  className="w-full h-72 sm:h-96 md:h-[460px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5iuab1kW4osyRQa7FdtvEo28WL7mh4CO61RsYGMVYAygHhXqeGT6JE78Vq7PGRpFzehtpvpu77aKny7gNBkuyUIYVl6mpidiSSLGJehDgpgtN4X0s7fIdms2MjeCJaQ_I0DtyEEhGby9uKpAkuHrIbGl8ngpwTrGe55voSrZU1Tx-kAWUQkvkGnioXooZtDmfssk_38LNc7HIB0vx9PKzhWTM4gIgDLHn-nC7YUM')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-bold text-[#b9cacb] bg-[#0e0e10]/80 backdrop-blur-md px-3 py-2 rounded-lg">
                  <span>
                    Fig 01.1 // Longyearbyen Cryo-Silo Terminal Delta-9
                    (Altitude: -420m)
                  </span>
                  <span className="text-[#00f2fe] tracking-widest">
                    ENCRYPTED TELEMETRY STREAM
                  </span>
                </div>
              </div>

              {/* Byline & Audio */}
              <div className="rounded-xl p-4 bg-[#201f22]/60 backdrop-blur-2xl shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3 overflow-hidden">
                    <div className="w-12 h-12 rounded-full ring-2 ring-[#00f2fe]/40 overflow-hidden bg-[#2a2a2c]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Marcus Vance"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRs3goJiny7Wq9VH2JTChMXbWazHs7N3roeS6rPSJ9OgvXIFvP0u5I7brlSL_7Ha4zQ2MlEF7C56g7k_3d6kEDcjnBeM9f--QINp-8Fdd7MNn8vTDDSQhwVVPjhMjT8sEHLyQkSxsg83CLaa76GvKe8tFMcHDKjBXPm0M_Qd9IxvOzV-pXFjw5zNQoATsy987aYjfL0l9Htri7RwVRqN8uve7Uopu7nOMmB-iGxT4"
                      />
                    </div>
                    <div className="w-12 h-12 rounded-full ring-2 ring-[#00dce6]/50 overflow-hidden bg-[#2a2a2c]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Elena Rostova"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOoaqIQdQwVMNG5b1pGliZzcxuL8bCXykYIL-Y_nPObVg0kj3F62OlqhRrrAF1PFx0ajaR9JtmFCL2v4lNDvOOIb88dex4tYYr0TNL9Zp6wY2mGOc8Mt7mqzuZ7aPZYYAazPMKQGRFXNuql4u_TsIU37eeggeHu_dq_hfDK1LMh6-DHKNy4AsXvojrNGwmNk7EOB8vXTVLTt5XbcmumtjpTgCcfJeIlyz2DP7FpC4"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display text-lg text-[#e0fdff] font-semibold">
                        Marcus Vance
                      </span>
                      <span className="text-[#849495] text-sm">&</span>
                      <span className="font-display text-lg text-[#e0fdff] font-semibold">
                        Elena Rostova
                      </span>
                    </div>
                    <span className="text-xs text-[#b9cacb]">
                      Lead Geopolitical Fellow & Algorithmic Sovereignty Chair
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-[#0e0e10]/80 px-4 py-2 rounded-lg">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`w-9 h-9 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#3196e6] text-[#00373a] flex items-center justify-center shadow-[0_0_12px_rgba(0,242,254,0.4)] hover:scale-105 transition-all ${isPlaying ? "ring-2 ring-[#00f2fe]" : ""}`}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {isPlaying ? "pause" : "play_arrow"}
                    </span>
                  </button>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase text-[#00f2fe] tracking-wider">
                      Synthesized Cast
                    </span>
                    <span className="text-[13px] text-[#b9cacb]">
                      Voice: Neural-Obsidian 06 (9m 12s)
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Sticky Actions */}
              <div className="sticky top-24 z-30 flex items-center justify-between p-2.5 rounded-xl bg-[#2a2a2c]/80 backdrop-blur-xl shadow-lg">
                <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201f22] hover:bg-[#39393b] text-white hover:text-[#00f2fe] transition-all text-xs font-semibold whitespace-nowrap">
                    <span className="material-symbols-outlined text-[16px] text-[#00f2fe]">
                      link
                    </span>{" "}
                    Copy Link
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201f22] hover:bg-[#39393b] text-white hover:text-[#00f2fe] transition-all text-xs font-semibold whitespace-nowrap">
                    <span className="material-symbols-outlined text-[16px] text-[#9bcbff]">
                      bookmark
                    </span>{" "}
                    Vault Save
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201f22] hover:bg-[#39393b] text-white hover:text-[#00f2fe] transition-all text-xs font-semibold whitespace-nowrap">
                    <span className="material-symbols-outlined text-[16px] text-[#00dce6]">
                      download_for_offline
                    </span>{" "}
                    Markdown (.md)
                  </button>
                </div>
                <div className="hidden sm:flex items-center gap-2 pl-3">
                  <span className="text-[11px] font-bold text-[#849495] uppercase tracking-wider">
                    Cipher: AES-GCM-256
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]"></span>
                </div>
              </div>

              {/* Editorial Text Content */}
              <div className="p-6 sm:p-10 rounded-2xl bg-[#201f22]/70 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#00f2fe]/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="text-[17px] md:text-lg text-[#e5e1e4] leading-loose space-y-6 relative z-10">
                  <p className="first-letter:float-left first-letter:text-[56px] first-letter:font-display first-letter:font-bold first-letter:mr-3 first-letter:text-[#00f2fe] first-letter:leading-[0.8] first-letter:pr-1">
                    Underneath three hundred meters of Arctic metamorphic gneiss
                    and perpetually hardened cryosols, quiet has been engineered
                    into a tangible geopolitical asset. The bunker corridors of
                    the Longyearbyen Sovereignty Preserve do not echo with the
                    fan noise of enterprise data centers. Instead, they hum with
                    an imperceptible sub-audible pulsation of closed-cycle
                    liquid nitrogen loops, maintaining solid-state
                    barium-titanate memories at eighty kelvins.
                  </p>
                  <p className="text-[#b9cacb]">
                    In this sub-zero sanctuary, thirty-four global
                    jurisdictions—spanning coastal archipelago states facing
                    rising tides to landlocked European administrative
                    unions—now deposit their irrevocable civic registries,
                    treaty hashes, and sovereign constitutions. The premise is
                    as radical as it is pragmatic: when digital infrastructure
                    on the surface is threatened by autonomous kinetic
                    escalation, unconstrained coronal mass ejections, and
                    recursive algorithmic contamination, the only surviving
                    state is an entombed one.
                  </p>
                </div>

                {/* Pull Quote */}
                <figure className="my-10 relative p-8 rounded-xl bg-[#2a2a2c]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden">
                  <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00f2fe] via-[#00dce6] to-[#3196e6]"></div>
                  <span className="material-symbols-outlined absolute -top-4 -right-2 text-[120px] text-[#00f2fe]/10 select-none pointer-events-none">
                    format_quote
                  </span>
                  <blockquote className="font-display text-xl md:text-2xl text-[#e0fdff] font-semibold leading-snug relative z-10">
                    “When sovereign legitimacy can be wiped clean by a directed
                    geomagnetic event, the state ceases to be a flag: it becomes
                    a geological deposit.”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 text-xs font-semibold text-[#849495]">
                    <span className="w-4 h-px bg-[#00f2fe]"></span>
                    <span className="text-[#00dce6] uppercase tracking-widest">
                      Dr. Marcus Vance
                    </span>
                    <span>// Keynote, Geneva Cryptographic Accord</span>
                  </figcaption>
                </figure>

                {/* Section 1 */}
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-[#00f2fe] tracking-[0.25em] uppercase">
                      Phase 01
                    </span>
                    <span className="h-px flex-1 bg-[#3a494b]/40"></span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-[#e0fdff] font-bold tracking-tight">
                    I. The Thermal Geopolitics of Permafrost Silicon
                  </h2>
                  <p className="text-[15px] text-[#b9cacb] leading-relaxed">
                    Standard compute paradigms treat cooling as an operational
                    expenditure; subterranean deep-strata vaults treat
                    thermodynamic stillness as an existential boundary layer.
                    Traditional cloud sovereignty frameworks relied on border
                    patrols and fiber-optic routing choke-points. Yet in an era
                    dominated by hyper-localized kinetic strikes and
                    electromagnetic pulses, territorial borders on cartographic
                    projections offer zero defensibility.
                  </p>
                  <p className="text-[15px] text-[#b9cacb] leading-relaxed">
                    The Svalbard facility leverages natural geothermal
                    dissipation through permafrost strata. Silicon clusters
                    operate within hyper-vacuumed titanium cylinders, immune to
                    corrosive atmospheric moisture and isolated from global
                    satellite relays. Data ingest occurs through single-strand
                    quantum key encrypted fiber links embedded along abandoned
                    mining shafts, equipped with pneumatic explosive severed
                    pins designed to physically disconnect upon perimeter
                    compromise.
                  </p>
                </div>

                {/* Technical Diagram */}
                <div className="my-8 p-5 rounded-xl bg-[#0e0e10] shadow-inner font-mono">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3a494b]/20">
                    <div className="flex items-center gap-2 text-[#00f2fe] text-[11px] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">
                        schema
                      </span>
                      <span>Sub-Surface Strata Profile</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#849495]">
                      GEO-REV 4.981-L
                    </span>
                  </div>

                  <div className="w-full overflow-x-auto py-2">
                    <svg
                      className="w-full min-w-[560px] h-auto select-none"
                      fill="none"
                      viewBox="0 0 720 220"
                    >
                      <rect
                        fill="#201f22"
                        height="40"
                        opacity="0.6"
                        width="720"
                        x="0"
                        y="0"
                      ></rect>
                      <text
                        className="text-[11px] font-mono"
                        fill="#849495"
                        x="16"
                        y="24"
                      >
                        0.00m // Atmospheric Surface / Glacial Till
                      </text>
                      <rect
                        fill="#1c1b1d"
                        height="50"
                        opacity="0.8"
                        width="720"
                        x="0"
                        y="45"
                      ></rect>
                      <text
                        className="text-[11px] font-mono"
                        fill="#849495"
                        x="16"
                        y="74"
                      >
                        -120m // Continuous Permafrost (Cryo-Matrix -8°C)
                      </text>
                      <rect
                        fill="#131315"
                        height="55"
                        width="720"
                        x="0"
                        y="100"
                      ></rect>
                      <text
                        className="text-[11px] font-mono"
                        fill="#849495"
                        x="16"
                        y="132"
                      >
                        -280m // Solid Basalt Shield & Faraday Mesh Enclosure
                      </text>
                      <rect
                        fill="#0e0e10"
                        height="60"
                        width="720"
                        x="0"
                        y="160"
                      ></rect>
                      <text
                        className="text-[11px] font-mono font-bold"
                        fill="#00f2fe"
                        x="16"
                        y="194"
                      >
                        -400m // Primary Cryptographic Vault Array
                      </text>

                      <line
                        stroke="#3a494b"
                        strokeDasharray="4 4"
                        strokeWidth="2"
                        x1="240"
                        x2="240"
                        y1="20"
                        y2="175"
                      ></line>
                      <line
                        stroke="#3a494b"
                        strokeDasharray="4 4"
                        strokeWidth="2"
                        x1="480"
                        x2="480"
                        y1="20"
                        y2="175"
                      ></line>

                      <rect
                        fill="#201f22"
                        height="42"
                        rx="4"
                        stroke="#00f2fe"
                        strokeWidth="1.5"
                        width="280"
                        x="220"
                        y="168"
                      ></rect>
                      <circle
                        className="animate-ping"
                        cx="236"
                        cy="189"
                        fill="#00f2fe"
                        r="4"
                      ></circle>
                      <circle cx="236" cy="189" fill="#00f2fe" r="4"></circle>
                      <text
                        className="text-[12px] font-mono font-semibold"
                        fill="#e5e1e4"
                        x="252"
                        y="193"
                      >
                        SOVEREIGN CORE ARRAY
                      </text>
                      <text
                        className="text-[10px] font-mono"
                        fill="#6ff6ff"
                        x="510"
                        y="193"
                      >
                        STATUS: CRYOPRESERVED
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Annotation Callout */}
                <div className="my-6 p-4 rounded-xl bg-[#2a2a2c]/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#00f2fe] text-[20px] mt-0.5">
                    comment
                  </span>
                  <div className="flex flex-col text-sm">
                    <span className="text-[11px] font-bold uppercase text-[#00f2fe]">
                      Verified Annotation // Legal Informatics Caucus
                    </span>
                    <p className="text-[#e5e1e4] mt-1">
                      “Under Article IX of the Svalbard Sub-Surface Accord, no
                      single sovereign power can trigger total state data
                      liquidation without unanimous attestation from seven
                      independent non-aligned algorithmic trustees.”
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-[#3a494b]/30 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#353437]/80 text-[#e5e1e4] text-xs font-semibold">
                      #CryoCompute
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#353437]/80 text-[#e5e1e4] text-xs font-semibold">
                      #SovereignData
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#353437]/80 text-[#e5e1e4] text-xs font-semibold">
                      #ArcticSanctuaries
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* SIDEBAR (Cols 9-12) */}
            <aside className="lg:col-span-4 flex flex-col gap-6">
              {/* Status Hardware Monitor */}
              <div className="p-6 rounded-2xl bg-[#201f22]/70 backdrop-blur-2xl shadow-xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00f2fe] animate-pulse shadow-[0_0_8px_#00f2fe]"></span>
                    <span className="text-[11px] font-bold text-[#00f2fe] uppercase tracking-widest">
                      Svalbard Sub-Node
                    </span>
                  </div>
                  <span className="font-mono text-[#849495] text-xs font-bold">
                    CHAMBER-B4
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-lg bg-[#0e0e10]/80 flex flex-col">
                    <span className="text-[10px] font-bold text-[#849495] uppercase">
                      Core Temp
                    </span>
                    <span className="font-display text-xl text-[#e0fdff] font-bold mt-1">
                      77.4 K
                    </span>
                    <span className="text-[11px] text-[#00dce6] mt-0.5">
                      Liquid N2 Optimal
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0e0e10]/80 flex flex-col">
                    <span className="text-[10px] font-bold text-[#849495] uppercase">
                      Parity Hash
                    </span>
                    <span className="font-display text-xl text-[#e0fdff] font-bold mt-1">
                      100.0%
                    </span>
                    <span className="text-[11px] text-emerald-400 mt-0.5">
                      Zero Degradation
                    </span>
                  </div>
                </div>

                <div className="relative w-full h-36 rounded-lg overflow-hidden bg-[#0e0e10] flex items-center justify-center">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2OHUujXZBUwzsPO_OBjy7u1KCk98TVHYsiAzV8WitoDcIMRxX0vdOjTb0qW5kdH4ej_kJkC-0L6uCCPhOF-POB7hbK7cbtTbv5aiNZbGQXgfpcYSo9dxb2DOKr6L51BD18IeDIoF1dinPfL47Fxw53r0gf4zRu06e_I0B2uqz9J6BqgY9oQ4uQ2we40tg7-YhMs0qlWsrDhk0pOdV0aee60veUp_RI8pYgSoL0nk')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-[#0e0e10]/50 backdrop-blur-[1px] flex flex-col items-center justify-center p-3 text-center">
                    <span className="material-symbols-outlined text-[#00f2fe] text-[28px]">
                      lock
                    </span>
                    <span className="text-[11px] font-bold text-[#e5e1e4] uppercase tracking-wider mt-1">
                      Sub-Permafrost Uplink
                    </span>
                    <span className="font-mono text-[11px] text-[#00dce6]">
                      78.2232° N, 15.6267° E
                    </span>
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-lg bg-[#2a2a2c] hover:bg-[#39393b] text-[#e0fdff] text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  <span className="material-symbols-outlined text-[16px] text-[#00f2fe]">
                    file_download
                  </span>{" "}
                  Download BibTeX
                </button>
              </div>

              {/* Investigators Bios */}
              <div className="p-6 rounded-2xl bg-[#201f22]/70 backdrop-blur-2xl shadow-xl space-y-4">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00f2fe] text-[18px]">
                    group
                  </span>
                  <span className="text-[11px] font-bold text-[#e0fdff] uppercase tracking-widest">
                    Dossier Investigators
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#2a2a2c]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Marcus Vance"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaZD8x69xpGcYdO5V89QZBkx-H_Yf3fg3HfYFdbox-OWF3qeJUpUASh3XE5-JyPjq5or-SmrfXH9DzUvCQYdpdGUAaO2N10GHp0_8bcrPUjVe_feF_hq5tWyCosjzjUfYoViQJTI0uSeGt81DWlEx_lV_fuOL9fM_YBuBMGU35mMk5XoGQHIUaYdVdcDncqHWD7t9eC9NgP8e7RYLCyF0qyoDUxbM2Syt3glXkGJ8"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-sm font-semibold text-white">
                        Dr. Marcus Vance
                      </span>
                      <span className="text-[13px] text-[#849495] leading-snug mt-1">
                        Author of *Subterranean Leviathans* (2024). Specializes
                        in cold-region hardware sanctuaries.
                      </span>
                    </div>
                  </div>
                  <div className="h-px bg-[#3a494b]/30"></div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-[#2a2a2c]">
                      <img
                        className="w-full h-full object-cover"
                        alt="Elena Rostova"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IrO82hJAWd9gh2q_GWTLa50DkWcSL_fE_iOUsMvQKYTkSVyYunQqfTi5_aHSXB5ozTtG-_1WyIJX8YgxWBBJ7OCwNzQERGV1caCCJ0bH61Kydu7-G7wlQAOEEQhcK2Sx36FDaBEwPxsJKsu--X5Eqoj44I1ksopWwpRvx3qwI1AXn2vNwFnpY7EsPq-bTGfNFDkoKbRXodFSOa7Uq04paKR8xXLJvS-D98uViiM"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-sm font-semibold text-white">
                        Elena Rostova, LL.M.
                      </span>
                      <span className="text-[13px] text-[#849495] leading-snug mt-1">
                        Chair of Algorithmic Jurisprudence at Oxford Digital
                        Annex.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* RELATED ARTICLES */}
          <section className="mt-16 pt-10 border-t border-[#3a494b]/30">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6">
              <div>
                <span className="text-[11px] font-bold text-[#00f2fe] tracking-[0.25em] uppercase">
                  Extended Research
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-[#e0fdff] font-bold mt-1">
                  Related Intelligence Monographs
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  tag: "Oceanic Nodes",
                  time: "7 min read",
                  title:
                    "The Abyssal Commons: Fiber-Optic Sovereignty in International Waters",
                  author: "Kieran Patel",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhZTiHc46bCqPkb3sEQr79wKVW7RvXIyFxWd6i8MQAgO7WX4zuXu2-XmJSx-oqM7U5OxyXaJIK569mr9Oi9Vm9Vn0Mqa8bdb7ITC1ToeNz8zCcRwE-6Wrt9nGhGpuOT_Go9zQ5xWD9un00qlOKRVUHSF5Rk5Dqe0KFhOFzBUW8jsgvgQ4w5BBlX2WDli9Q2u8CkrCkT2sXMZPTGEQRfo46AgzN-wJGcULoSeEsync",
                },
                {
                  tag: "Geomagnetics",
                  time: "11 min read",
                  title:
                    "The Carrington Contingency: Hardening Civilian Grid Registers",
                  author: "Dr. Astrid Løwe",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQZO8FnmxRp_iscILX7L0iT9iC466mFRJ1MYRWTsGj148G9FQA9d_nh9EKS0CP2l3aF8uhMtnsnZLk3Zpi7nGDkF6vcQN5DEyErrjZQzSuU5-_GzxZIaWnxYhSu2iJxjXbz4ADbo3JYRktnPm4PGgSvQLcPjAphXLVICm3D6o7dA0XcqrfDMAvy7v-K5VGCrQcLU2NDNgS_dAA_8fIqA88zi_2VEaDzL4S36kWOcc",
                },
                {
                  tag: "Memory Media",
                  time: "14 min read",
                  title:
                    "Barium-Ferrite and Quartz: The Century-Scale Storage Substrates",
                  author: "Thorne & Vance",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLvQ2Cg3DDUFrpDJUKIm-_1c1M00n9XwPIXnO8sYHLwZERPObLrL-QiHu24_hhywww1oWDhzOd9cFcmoVmV5GnbH45KFLUWGa5OLpTs3ujwcAHMjZykOTMZBHG2YrCF4v8k0b4KF1tNyj1vVYXE12iQRmT8MY8Wxu9Ic1SYyFjlOYpP4MXQ6BsnQpEfer0yxGb95eHlLdTHs5BaQBe1450QALwrr5B1KFP0OME_94",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group rounded-2xl bg-[#201f22]/70 backdrop-blur-2xl shadow-xl p-4 flex flex-col justify-between hover:bg-[#2a2a2c]/80 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-[#0e0e10]">
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url('${card.img}')` }}
                      ></div>
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0e0e10]/80 backdrop-blur-md text-[11px] font-bold text-[#00f2fe] uppercase">
                        {card.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[#849495] text-xs font-semibold mb-2">
                      <span>Nov 12, 2026</span>
                      <span>•</span>
                      <span>{card.time}</span>
                    </div>
                    <h3 className="font-display text-lg text-[#e0fdff] group-hover:text-[#00f2fe] transition-colors line-clamp-2 leading-snug">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#3a494b]/30">
                    <span className="text-[11px] font-bold text-[#849495] uppercase">
                      By {card.author}
                    </span>
                    <span className="material-symbols-outlined text-[#00f2fe] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SUBSCRIBER PERSPECTIVES */}
          <section className="mt-16 pt-6 mb-10">
            <div className="p-6 md:p-10 rounded-2xl bg-[#201f22]/70 backdrop-blur-2xl shadow-2xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#3a494b]/30">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#00f2fe] text-[22px]">
                      verified_user
                    </span>
                    <h2 className="font-display text-xl md:text-2xl text-[#e0fdff] font-bold">
                      Subscriber Perspectives
                    </h2>
                  </div>
                  <p className="text-sm text-[#b9cacb] mt-1">
                    Peer-reviewed technical commentary from authenticated
                    institutional contributors.
                  </p>
                </div>
              </div>

              {/* Comment Box */}
              <div className="p-4 rounded-xl bg-[#0e0e10]/90 flex flex-col gap-3">
                <label className="text-[11px] font-bold text-[#849495] uppercase tracking-wider">
                  Draft Annotated Response (Requires Hardware Token)
                </label>
                <textarea
                  className="w-full bg-[#1c1b1d]/60 rounded-lg p-3 text-sm text-[#e5e1e4] placeholder-[#849495] focus:outline-none focus:ring-1 focus:ring-[#00f2fe] resize-none"
                  placeholder="Append cryptographically signed observation..."
                  rows="3"
                ></textarea>
                <div className="flex items-center justify-between flex-wrap gap-2 pt-1">
                  <div className="flex items-center gap-2 text-[#849495] text-xs font-semibold">
                    <span className="material-symbols-outlined text-[16px] text-[#00f2fe]">
                      shield
                    </span>
                    <span>
                      Signed identity will be publicly broadcast to LeedNews
                      Ledger
                    </span>
                  </div>
                  <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#00f2fe] to-[#3196e6] text-[#00373a] text-xs font-bold hover:shadow-[0_0_18px_rgba(0,242,254,0.4)] transition-all">
                    Submit Attestation
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-[#2a2a2c]/40 hover:bg-[#2a2a2c]/60 transition-colors flex flex-col gap-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#353437] flex items-center justify-center text-[#00f2fe] font-display font-bold text-sm">
                        KH
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm font-semibold text-[#e0fdff]">
                            Prof. Klaus Hauer
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] bg-[#00f2fe]/15 text-[#00f2fe] font-bold uppercase">
                            ETH Zurich
                          </span>
                        </div>
                        <span className="font-mono text-[#849495] text-xs">
                          PGP: 0x41C...392B • 3 hours ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#00dce6] bg-[#0e0e10] px-2.5 py-1 rounded">
                      <span className="material-symbols-outlined text-[14px]">
                        check_circle
                      </span>
                      <span className="text-[10px] font-bold uppercase">
                        Signature Valid
                      </span>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#b9cacb] leading-relaxed">
                    Dr. Vance correctly points to the thermodynamic isolation of
                    Longyearbyen. However, section I understates the
                    vulnerability of fiber-optic termination points. Our
                    simulation models indicate that surface junction boxes
                    remain vulnerable to sub-kiloton electromagnetic bursts.
                  </p>
                </div>
              </div>
            </div>
          </section>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
