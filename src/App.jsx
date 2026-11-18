import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CrestLogo from './components/CrestLogo';

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-slate-100 flex flex-col selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      
      {/* Simple MVP Footer */}
      <footer className="border-t border-panel-border/60 py-8 bg-canvas">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2.5">
            <CrestLogo className="w-5 h-5" withGlow={false} />
            <span>© {new Date().getFullYear()} Crest Editor Dev. Built for mobile coders.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Crest-Editor-Dev" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">
              GitHub
            </a>
            <a href="https://github.com/Crest-Editor-Dev/Crest-Editor/blob/main/LICENSE" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition">
              License (GPL-3.0)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
