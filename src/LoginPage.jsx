import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, Mic, Hexagon } from "lucide-react"; // We will install lucide-react later

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  // Load Google Fonts + inject Tailwind config equivalent (colors/fonts)
  useEffect(() => {
    // Google Fonts
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.href = "https://fonts.gstatic.com";
    preconnect2.crossOrigin = "anonymous";
    document.head.appendChild(preconnect2);

    const fontLink = document.createElement("link");
    fontLink.rel = "stylesheet";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap";
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(preconnect1);
      document.head.removeChild(preconnect2);
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen w-full font-sans text-slate-200 overflow-x-hidden selection:bg-[#00f2fe] selection:text-[#05070a] flex flex-col justify-between"
      style={{ backgroundColor: "#05070a" }}
    >
      {/* ==================== CUSTOM CSS ==================== */}
      <style>{`
        .font-display { font-family: 'Syne', sans-serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

        .liquid-glass-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(19,19,21,0.65) 45%, rgba(9,9,11,0.85) 100%);
          backdrop-filter: blur(28px) saturate(160%);
          -webkit-backdrop-filter: blur(28px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow:
            0 20px 50px -10px rgba(0,0,0,0.8),
            0 0 40px -5px rgba(0,242,254,0.12),
            inset 0 1px 1px 0 rgba(255,255,255,0.25),
            inset 0 -1px 2px 0 rgba(0,242,254,0.15);
        }

        .specular-highlight {
          position: absolute;
          top: -30px;
          left: 15%;
          width: 160px;
          height: 90px;
          background: radial-gradient(ellipse, rgba(0,242,254,0.25) 0%, rgba(255,255,255,0.1) 40%, transparent 70%);
          filter: blur(20px);
          pointer-events: none;
        }

        .glow-button {
          background: linear-gradient(135deg, #131722 0%, #0d121c 100%);
          border: 1px solid rgba(0,242,254,0.45);
          box-shadow: 0 4px 20px -2px rgba(0,242,254,0.35), inset 0 1px 1px rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        .glow-button:hover {
          background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
          color: #05070a;
          border-color: #00f2fe;
          box-shadow: 0 6px 30px 2px rgba(0,242,254,0.65), inset 0 1px 2px rgba(255,255,255,0.5);
          transform: translateY(-1px);
        }

        @keyframes orbGlow {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            filter: drop-shadow(0 0 50px rgba(0,242,254,0.65)) drop-shadow(0 0 100px rgba(79,172,254,0.3));
          }
          50% {
            transform: translate(-50%, -50%) scale(1.04);
            filter: drop-shadow(0 0 65px rgba(0,242,254,0.8)) drop-shadow(0 0 130px rgba(79,172,254,0.45));
          }
        }
        .animated-orb { animation: orbGlow 8s ease-in-out infinite; }

        @keyframes rippleDrift {
          0%   { transform: translateY(0) scaleY(1);     opacity: 0.35; }
          50%  { transform: translateY(-4px) scaleY(1.05); opacity: 0.55; }
          100% { transform: translateY(0) scaleY(1);     opacity: 0.35; }
        }
        .water-ripple { animation: rippleDrift 6s ease-in-out infinite; }
      `}</style>

      {/* ==================== SCENIC BACKGROUND ==================== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        {/* Base deep sky */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #040812, #091528, #04060a)",
          }}
        ></div>

        {/* Vertical light ray from moon */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-full blur-3xl pointer-events-none opacity-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,242,254,0.04), transparent 70%)",
          }}
        ></div>

        {/* Glowing moon / orb (subtle, opacity-30) */}
        <div
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-48 h-48 md:w-60 md:h-60 rounded-full animated-orb pointer-events-none opacity-30 blur-[1px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(165,243,252,0.35), rgba(0,242,254,0.25), rgba(103,232,249,0.15))",
          }}
        >
          <div
            className="absolute inset-0 rounded-full blur-md opacity-60"
            style={{ backgroundColor: "rgba(0,242,254,0.2)" }}
          ></div>
        </div>

        {/* Aurora sheen */}
        <div
          className="absolute top-[18%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 blur-2xl opacity-40"
          style={{
            background:
              "linear-gradient(to top, rgba(0,242,254,0.06), transparent 70%)",
          }}
        ></div>

        {/* Far mountain range */}
        <svg
          className="absolute bottom-[24%] left-0 w-full h-80 min-w-[1000px] opacity-60"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            d="M0,180 L180,90 L380,210 L590,60 L800,190 L980,110 L1180,180 L1340,70 L1440,130 L1440,320 L0,320 Z"
            fill="#0d1b2a"
          ></path>
          <path
            d="M0,180 L180,90 L380,210 L590,60 L800,190 L980,110 L1180,180 L1340,70 L1440,130"
            stroke="#00f2fe"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          ></path>
        </svg>

        {/* Midground ridge */}
        <svg
          className="absolute bottom-[16%] left-0 w-full h-72 min-w-[1000px] opacity-90"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 280"
        >
          <defs>
            <linearGradient
              id="midMountainGrad"
              x1="0%"
              x2="0%"
              y1="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0e1724" />
              <stop offset="100%" stopColor="#060b13" />
            </linearGradient>
          </defs>
          <path
            d="M0,160 L140,90 L320,180 L480,120 L720,220 L910,130 L1100,190 L1260,100 L1440,170 L1440,280 L0,280 Z"
            fill="url(#midMountainGrad)"
          ></path>
          <path
            d="M0,160 L140,90 L320,180 L480,120 L720,220 L910,130 L1100,190 L1260,100 L1440,170"
            stroke="#00f2fe"
            strokeOpacity="0.3"
            strokeWidth="2"
          ></path>
        </svg>

        {/* Water / lake base */}
        <div
          className="absolute bottom-0 left-0 w-full h-[22%] border-t border-cyan-500/10"
          style={{
            background: "linear-gradient(to top, #05070a, #060c16, #0a1424)",
          }}
        >
          <div
            className="water-ripple absolute top-0 left-1/2 -translate-x-1/2 w-44 md:w-64 h-full blur-md"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,242,254,0.3), rgba(0,242,254,0.15), transparent)",
            }}
          ></div>
          <div
            className="absolute top-2 left-[20%] w-60 h-[1.5px] blur-[1px]"
            style={{ backgroundColor: "rgba(0,242,254,0.4)" }}
          ></div>
          <div
            className="absolute top-6 left-[42%] w-80 h-[2px] blur-[1px]"
            style={{ backgroundColor: "rgba(0,242,254,0.6)" }}
          ></div>
          <div
            className="absolute top-12 left-[35%] w-96 h-[1.5px] blur-[1px]"
            style={{ backgroundColor: "rgba(0,242,254,0.35)" }}
          ></div>
          <div
            className="absolute top-16 left-[52%] w-48 h-[1px] blur-[1px]"
            style={{ backgroundColor: "rgba(0,242,254,0.3)" }}
          ></div>
        </div>

        {/* Left foreground hill & reeds */}
        <svg
          className="absolute -bottom-2 -left-6 w-96 md:w-[480px] h-60 opacity-95 pointer-events-none"
          fill="none"
          viewBox="0 0 400 240"
        >
          <path
            d="M-20,240 Q110,180 230,190 Q320,200 370,240 Z"
            fill="#040609"
          ></path>
          <path
            d="M60,185 Q50,110 35,70 Q45,115 65,185 Z"
            fill="#06090f"
          ></path>
          <path
            d="M75,190 Q85,100 95,50 Q85,110 80,190 Z"
            fill="#05080e"
          ></path>
          <path
            d="M100,195 Q125,120 140,80 Q120,130 105,195 Z"
            fill="#040609"
          ></path>
          <path
            d="M130,200 Q150,135 175,95 Q150,140 135,200 Z"
            fill="#070b12"
          ></path>
          <path
            d="M160,202 Q190,150 220,115 Q185,155 165,202 Z"
            fill="#040609"
          ></path>
          <path d="M40,200 Q20,130 5,90 Q25,135 45,200 Z" fill="#040609"></path>
        </svg>

        {/* Right foreground rocks & foliage */}
        <svg
          className="absolute -bottom-4 -right-4 w-96 md:w-[460px] h-64 opacity-95 pointer-events-none"
          fill="none"
          viewBox="0 0 400 240"
        >
          <path
            d="M40,240 Q120,195 240,190 Q340,185 420,240 Z"
            fill="#030508"
          ></path>
          <path
            d="M280,190 Q270,120 250,75 Q272,120 285,190 Z"
            fill="#05080e"
          ></path>
          <path
            d="M305,192 Q320,105 340,60 Q322,115 310,192 Z"
            fill="#070b13"
          ></path>
          <path
            d="M335,198 Q365,125 390,85 Q360,135 340,198 Z"
            fill="#040609"
          ></path>
          <path
            d="M250,195 Q230,135 210,95 Q235,140 255,195 Z"
            fill="#05080f"
          ></path>
        </svg>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(5,7,10,0.8) 100%)",
          }}
        ></div>
      </div>

      {/* ==================== HEADER ==================== */}
      <header className="relative z-20 w-full px-6 py-6 md:px-12 flex items-center justify-between">
        <Link
          to="/"
          className="group flex items-center space-x-3 text-white focus:outline-none"
        >
          <div
            className="relative flex items-center justify-center w-9 h-9 rounded-lg border transition-colors"
            style={{
              backgroundColor: "#09090b",
              borderColor: "rgba(0,242,254,0.4)",
              boxShadow: "0 0 15px rgba(0,242,254,0.2)",
            }}
          >
            <span
              className="font-display font-extrabold text-lg"
              style={{ color: "#00f2fe" }}
            >
              L
            </span>
            <span
              className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#00f2fe" }}
            ></span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-widest uppercase text-white group-hover:text-[#00f2fe] transition-colors">
              LeedNews
            </span>
            <span className="text-[9px] tracking-widest text-slate-400 uppercase -mt-0.5">
              Liquid Obsidian Edition
            </span>
          </div>
        </Link>

        <div className="hidden sm:flex items-center space-x-4 text-xs">
          <div
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md"
            style={{ backgroundColor: "rgba(9,9,11,0.6)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-ping"
              style={{ backgroundColor: "#00f2fe" }}
            ></span>
            <span className="text-slate-300 font-medium">
              Global Dispatch: Live
            </span>
          </div>
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Help
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            Editorial Policy
          </a>
        </div>
      </header>

      {/* ==================== MAIN LOGIN CARD ==================== */}
      <main className="relative z-10 flex-grow flex items-center justify-center px-4 py-8 md:py-12">
        <div className="relative w-full max-w-[390px] sm:max-w-[420px] rounded-2xl p-7 md:p-9 liquid-glass-card transition-all duration-300">
          <div className="specular-highlight"></div>

          {/* Close button */}
          <Link
            to="/"
            aria-label="Close Login Modal"
            className="absolute top-4 right-4 w-7 h-7 rounded-lg border border-white/15 text-slate-300 hover:text-[#00f2fe] flex items-center justify-center transition-all duration-200"
            style={{ backgroundColor: "rgba(9,9,11,0.8)" }}
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </Link>

          {/* Header */}
          <div className="text-center pt-2 pb-6 md:pb-7">
            <h1 className="font-display font-bold text-2xl md:text-3xl text-white tracking-wide">
              Login
            </h1>
            <p className="text-xs text-slate-400 mt-1 font-light tracking-wide">
              Access your personalized editorial feed
            </p>
          </div>

          {/* Form */}
          <form
            className="space-y-6"
            method="POST"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Email */}
            <div className="relative group">
              <input
                id="email-input"
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full py-2.5 px-4 pr-10 text-sm text-white placeholder-slate-400 font-sans tracking-wide rounded-full focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: "rgba(9,9,11,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 0 15px rgba(0,242,254,0.2)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#00f2fe")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                }
              />
              <div className="absolute right-4 bottom-3 text-slate-400 group-focus-within:text-[#00f2fe] transition-colors pointer-events-none">
                <i className="fa-regular fa-envelope text-sm"></i>
              </div>
            </div>

            {/* Password */}
            <div className="relative group pt-1">
              <input
                id="password-input"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full py-2.5 px-4 pr-10 text-sm text-white placeholder-slate-400 font-sans tracking-wide rounded-full focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: "rgba(9,9,11,0.6)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  boxShadow: "0 0 15px rgba(0,242,254,0.2)",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#00f2fe")}
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")
                }
              />
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 bottom-3 text-slate-400 hover:text-white group-focus-within:text-[#00f2fe] transition-colors focus:outline-none"
              >
                <i
                  className={`fa-solid ${showPassword ? "fa-lock-open" : "fa-lock"} text-sm`}
                ></i>
              </button>
            </div>

            {/* Utility row */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center space-x-2 cursor-pointer select-none group">
                <input
                  type="checkbox"
                  name="remember"
                  className="w-3.5 h-3.5 rounded text-[#00f2fe] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                  style={{
                    backgroundColor: "#09090b",
                    borderColor: "rgba(255,255,255,0.25)",
                    accentColor: "#00f2fe",
                  }}
                />
                <span className="text-slate-300 group-hover:text-slate-100 transition-colors">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-slate-400 hover:text-[#00f2fe] transition-colors hover:underline focus:outline-none"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit */}
            <div className="pt-3">
              <button
                type="submit"
                className="glow-button w-full py-2.5 md:py-3 px-4 rounded-xl text-sm font-semibold text-white tracking-wide uppercase flex items-center justify-center space-x-2 group"
              >
                <span>Login</span>
                <i className="fa-solid fa-arrow-right-long text-xs opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all"></i>
              </button>
            </div>

            {/* Register */}
            <div className="text-center pt-2">
              <p className="text-xs text-slate-400">
                Don't have an account?{" "}
                <a
                  onClick={() => navigate("/register")}
                  href="#"
                  className="font-semibold text-white hover:text-[#00f2fe] transition-colors underline underline-offset-4 ml-1"
                  style={{ textDecorationColor: "rgba(0,242,254,0.4)" }}
                >
                  Register
                </a>
              </p>
            </div>
          </form>

          {/* Security badge */}
          <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-center space-x-2 text-[10px] text-slate-500 uppercase tracking-widest">
            <i className="fa-solid fa-shield-halved text-[#00f2fe]/80 text-[11px]"></i>
            <span>256-Bit Encrypted LeedNet Gateway</span>
          </div>
        </div>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer
        className="relative z-10 w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 border-t border-white/[0.05] backdrop-blur-sm"
        style={{ backgroundColor: "rgba(5,7,10,0.6)" }}
      >
        <div className="flex items-center space-x-4 mb-2 sm:mb-0">
          <span>© 2025 LeedNews Media Group Ltd.</span>
          <span className="inline-block w-1 h-1 rounded-full bg-slate-700"></span>
          <span className="text-slate-400">Obsidian Editorial Core</span>
        </div>
        <div className="flex items-center space-x-5 text-slate-400">
          <a href="#" className="hover:text-[#00f2fe] transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-[#00f2fe] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#00f2fe] transition-colors">
            System Telemetry
          </a>
        </div>
      </footer>
    </div>
  );
}
