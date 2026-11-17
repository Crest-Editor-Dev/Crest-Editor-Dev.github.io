import React from 'react';
import { Github, Download } from 'lucide-react';
import CrestLogo from './CrestLogo';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-panel-border/70 bg-canvas/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo & Tag */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <CrestLogo className="w-8 h-8" withGlow={true} />
            <span className="font-bold tracking-tight text-base text-white group-hover:text-slate-100 transition">
              Crest<span className="text-brand-cyan">.</span>
            </span>
          </a>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-panel-border bg-panel text-[11px] font-mono text-brand-cyan">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Android 8.0+
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
          <a href="#features" className="hover:text-slate-100 transition-colors">Features</a>
          <a href="#editor" className="hover:text-slate-100 transition-colors">Editor Engine</a>
          <a href="#sandbox" className="hover:text-slate-100 transition-colors">Linux Sandbox</a>
          <a href="#ecosystem" className="hover:text-slate-100 transition-colors">Ecosystem</a>
        </nav>

        {/* Right CTA / GitHub */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Crest-Editor-Dev"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-panel border border-transparent hover:border-panel-border transition-all"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="#download"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-md bg-slate-100 hover:bg-white text-slate-950 transition-all shadow-sm hover:shadow-brand-cyan/10 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get APK</span>
          </a>
        </div>
      </div>
    </header>
  );
}
