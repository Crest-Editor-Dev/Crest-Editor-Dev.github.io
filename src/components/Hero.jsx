import React, { useState } from 'react';
import { Download, Github, Terminal, ArrowRight, Play, Check, Copy, Cpu, Shield, Zap } from 'lucide-react';
import CrestLogo, { CrestLogoSVG } from './CrestLogo';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard?.writeText('curl -sSL https://crest-editor.dev/install.sh | bash');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10 bg-zed-glow opacity-60"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20 radial-mask"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Release Pill Badge */}
        <a
          href="https://github.com/Crest-Editor-Dev/Crest-Editor"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 px-3 py-1 rounded-full border border-panel-border bg-panel/70 hover:border-brand-cyan/40 hover:bg-panel transition mb-8 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-brand-cyan"></span>
          <span className="text-xs font-mono text-slate-300">
            Crest-Editor v0.1-alpha is now live
          </span>
          <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-brand-cyan transition-transform group-hover:translate-x-0.5" />
        </a>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.08]">
          The desktop-grade editor,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-indigo-400">
            engineered for Android.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
          High-performance mobile development without compromises. Powered by{' '}
          <span className="text-slate-200 font-medium">Monaco</span>, native{' '}
          <span className="text-slate-200 font-medium">Jetpack Compose</span>, and a built-in{' '}
          <span className="text-slate-200 font-medium">PRoot Linux sandbox</span>.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
          <a
            href="#download"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition shadow-lg shadow-white/5 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download for Android</span>
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">APK</span>
          </a>

          <a
            href="https://github.com/Crest-Editor-Dev/Crest-Editor"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-panel-border bg-panel/60 hover:bg-panel hover:border-slate-600 text-slate-200 font-medium text-sm transition active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Feature Pills */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-brand-cyan" />
            <span>VS Code Monaco Engine</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>PRoot Linux Environment</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Material 3 Native Compose</span>
          </div>
        </div>

        {/* Mock Window Preview (Zed Aesthetic) */}
        <div className="mt-12 w-full max-w-5xl rounded-xl border border-panel-border/80 bg-panel/90 shadow-2xl shadow-black/80 overflow-hidden text-left">
          {/* Window Title Bar */}
          <div className="px-4 py-2.5 bg-canvas/60 border-b border-panel-border/60 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-3 font-mono text-[11px] text-slate-300 flex items-center gap-1.5">
                <CrestLogoSVG className="w-3.5 h-3.5 text-brand-cyan" />
                crest-workspace / src / EditorEngine.kt
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-slate-500">
              <span className="hidden sm:inline">UTF-8</span>
              <span className="text-brand-cyan">Kotlin 2.0</span>
            </div>
          </div>

          {/* Editor Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 bg-[#090d16]">
            <div className="flex gap-4">
              <div className="select-none text-slate-600 text-right pr-2 border-r border-panel-border/40 font-mono">
                {Array.from({ length: 11 }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <pre className="flex-1 overflow-x-auto">
                <code>
                  <span className="text-purple-400">package</span> com.crest.editor.core{'\n'}
                  {'\n'}
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">CrestEngine</span>(context: Context) : <span className="text-emerald-300">MobileIDE</span> {'{'}{'\n'}
                  {'    '}<span className="text-purple-400">val</span> monaco = <span className="text-blue-400">MonacoBridge</span>(touchOptimized = <span className="text-rose-400">true</span>){'\n'}
                  {'    '}<span className="text-purple-400">val</span> linuxRootfs = <span className="text-blue-400">PRootEnvironment</span>.initialize(){'\n'}
                  {'\n'}
                  {'    '}<span className="text-purple-400">fun</span> <span className="text-blue-400">launchTerminalSession</span>(): <span className="text-emerald-300">TerminalFlow</span> {'{'}{'\n'}
                  {'        '}<span className="text-slate-500">// Native PTY bridge with GPU accelerated rendering</span>{'\n'}
                  {'        '}<span className="text-purple-400">return</span> linuxRootfs.spawnShell(workingDir = <span className="text-emerald-300">"/data/projects"</span>){'\n'}
                  {'    '}{'}'}{'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>

          {/* Bottom Terminal Bar Status */}
          <div className="px-4 py-1.5 bg-panel-border/30 border-t border-panel-border/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> PRoot: active
              </span>
              <span className="hidden sm:inline">arch: aarch64</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <span>Ln 9, Col 14</span>
              <span className="text-brand-cyan">Monaco 0.50</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
