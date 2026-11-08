import React from "react";
import {
  Hexagon,
  Lock,
  Eye,
  Fingerprint,
  Link as LinkIcon,
} from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#08080A] text-white font-sans flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* =========================================
          TOP TELEMETRY BAR
      ========================================== */}
      <div className="absolute top-6 left-0 right-0 flex justify-center items-center gap-6 text-[10px] font-mono text-gray-500 tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          FEED TELEMETRY ACTIVE
        </div>
        <span className="text-gray-700">|</span>
        <div>NODE 08-EAST</div>
        <span className="text-gray-700">|</span>
        <div className="flex items-center gap-1">
          <span className="text-cyan-400">⌁</span> LATENCY 1.2MS
        </div>
      </div>

      {/* =========================================
          LOGIN CARD
      ========================================== */}
      <div className="relative z-10 w-full max-w-md liquid-border bg-[#101014]/80 backdrop-blur-2xl rounded-3xl p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold tracking-tight mb-3">
            <Hexagon className="text-cyan-400 w-8 h-8 fill-cyan-400/20" />
            LeedNews<span className="text-cyan-400">.</span>
            <span className="bg-cyan-500/20 text-cyan-400 text-[10px] px-2 py-0.5 rounded-md border border-cyan-500/30 ml-1 tracking-widest uppercase">
              Enterprise
            </span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed px-4">
            Enter your terminal cipher or telemetry API token to synchronize
            with the intelligence stream.
          </p>
        </div>

        {/* Toggle Tabs */}
        <div className="flex bg-[#09090B] border border-white/5 rounded-xl p-1 mb-6">
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium bg-[#1C1C1E] text-white shadow-sm border border-white/5">
            <Fingerprint className="w-4 h-4 text-cyan-400" />
            Biometric / Cipher
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium text-gray-500 hover:text-white transition">
            <LinkIcon className="w-4 h-4" />
            Direct Gateway
          </button>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Analyst Identifier */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                Analyst Identifier
              </label>
              <span className="text-[9px] text-cyan-400 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Verified SSL
              </span>
            </div>
            <div className="relative flex items-center bg-[#09090B] border border-white/10 rounded-xl focus-within:border-cyan-500/50 transition">
              <span className="pl-4 text-gray-500">@</span>
              <input
                type="text"
                defaultValue="v.kovacs@leednews.internal"
                className="w-full bg-transparent border-none outline-none text-sm text-white px-3 py-3.5 placeholder-gray-600"
              />
            </div>
          </div>

          {/* Terminal Cipher */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                Terminal Cipher
              </label>
              <a
                href="#"
                className="text-[9px] text-amber-500 hover:text-amber-400 transition"
              >
                Forgot cipher?
              </a>
            </div>
            <div className="relative flex items-center bg-[#09090B] border border-white/10 rounded-xl focus-within:border-cyan-500/50 transition">
              <span className="pl-4 text-gray-500">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                defaultValue="password123"
                className="w-full bg-transparent border-none outline-none text-sm text-white px-3 py-3.5 placeholder-gray-600 tracking-widest"
              />
              <button
                type="button"
                className="pr-4 text-gray-500 hover:text-white transition"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative flex items-center justify-center w-4 h-4 rounded bg-cyan-500 text-black shadow-[0_0_10px_rgba(0,242,254,0.3)]">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-xs text-gray-300 group-hover:text-white transition">
              Retain telemetry token on this host
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold text-sm py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition duration-300 mt-2"
          >
            Authenticate & Enter Console{" "}
            <span className="material-symbols-rounded text-lg">
              arrow_forward
            </span>
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <span className="relative bg-[#101014] px-3 text-[9px] font-mono tracking-widest text-gray-500 uppercase">
            OR FEDERATED SSO
          </span>
        </div>

        {/* SSO Buttons */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <button className="flex flex-col items-center justify-center gap-2 bg-[#09090B] border border-white/10 rounded-xl py-3 hover:bg-white/5 transition">
            <span className="text-lg">🐙</span>
            <span className="text-[10px] font-medium text-gray-300">
              GitHub
            </span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 bg-[#09090B] border border-white/10 rounded-xl py-3 hover:bg-white/5 transition">
            <span className="text-lg text-cyan-400">⚙️</span>
            <span className="text-[10px] font-medium text-gray-300">
              Okta SAML
            </span>
          </button>
          <button className="flex flex-col items-center justify-center gap-2 bg-[#09090B] border border-white/10 rounded-xl py-3 hover:bg-white/5 transition">
            <span className="text-lg text-red-500">G</span>
            <span className="text-[10px] font-medium text-gray-300">
              Google
            </span>
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#09090B] border border-white/5 px-3 py-1.5 rounded-full text-[9px] font-mono text-gray-500">
            <Lock className="w-3 h-3" /> AES-256 GCM HARDWARE ENCRYPTED // NODE
            804-QX
          </div>
          <div className="flex justify-center gap-4 text-[10px] text-gray-600 pt-2">
            <a href="#" className="hover:text-gray-400">
              Request Analyst Access
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400">
              Compliance Documentation
            </a>
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM TELEMETRY BAR
      ========================================== */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-6 text-[10px] font-mono text-gray-600 tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          CLUSTER: PRIME-US-EAST
        </div>
        <div>REV 4.9.1-EXP</div>
        <div>EPOCH: LIVE</div>
      </div>
    </div>
  );
}
