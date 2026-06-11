import * as React from 'react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import phantosDashboard from '../assets/images/phantos_dashboard_1780567603876.png';
import { Play, Pause, Volume2, Maximize, RotateCcw, AlertTriangle, ShieldCheck, Cpu, Code, Activity, HelpCircle, Terminal, Layers, Gauge, Database } from 'lucide-react';

const STEPS = [
  { icon: "💬", text: "Agent answers customer question using Gemini 2.0 Flash" },
  { icon: "🔍", text: "Every decision traced to Arize Phoenix in real time" },
  { icon: "⚖️", text: "LLM judge scores response: Accuracy, Helpfulness, Honesty" },
  { icon: "🔄", text: "Agent queries its OWN traces via Phoenix MCP Server" },
  { icon: "🧠", text: "Detects failure patterns, generates improvement rules" },
  { icon: "📈", text: "Quality score rises. Mistake never repeated." }
];

export function Solution() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 1000); // cycle through the 6 steps over 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-surface-dark border-y border-border-dark">
      <div className="absolute inset-0 bg-brand-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-secondary text-sm font-bold tracking-widest uppercase mb-4 block">The Solution</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Phantos AI Closes The Loop</h2>
        </div>

        {/* Animated Flow Diagram */}
        <div className="hidden lg:flex items-center justify-between mb-20">
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center text-center relative group">
              <div 
                className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 transition-all duration-500 z-10 bg-surface-dark border-2
                  ${activeStep === idx 
                    ? 'border-brand-primary shadow-[0_0_20px_rgba(99,102,241,0.6)] scale-110' 
                    : 'border-border-dark group-hover:border-text-muted'}`}
              >
                {step.icon}
              </div>
              <p className={`text-xs px-2 font-medium transition-colors duration-500 ${activeStep === idx ? 'text-text-primary' : 'text-text-muted'}`}>
                {step.text}
              </p>
              
              {/* Arrow linking to next */}
              {idx < STEPS.length - 1 && (
                <div className="absolute top-10 left-1/2 w-full h-[2px] bg-border-dark -z-0">
                  <div 
                    className="h-full bg-brand-primary transition-all duration-1000"
                    style={{ 
                      width: activeStep >= idx ? '100%' : '0%',
                      opacity: activeStep > idx ? 0.3 : (activeStep === idx ? 1 : 0)
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="flex flex-col lg:hidden space-y-6 mb-16">
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div 
                className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-2xl transition-all duration-500 border-2
                  ${activeStep === idx 
                    ? 'border-brand-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] bg-surface-dark' 
                    : 'border-border-dark bg-bg-dark'}`}
              >
                {step.icon}
              </div>
              <p className={`text-sm ${activeStep === idx ? 'text-text-primary' : 'text-text-muted'}`}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-12 border-t border-border-dark relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center bg-bg-dark p-4 rounded-full border border-border-dark z-20">
            <span className="text-brand-secondary font-bold text-sm">+117%</span>
            <span className="text-text-muted text-xs">Improvement</span>
          </div>

        <div className="bg-[#111419]/50 border border-border-dark p-8 rounded-[32px] backdrop-blur-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-danger/5 blur-3xl pointer-events-none" />
          <h3 className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-6">Before Self-Improvement</h3>
          <div className="text-6xl font-black text-brand-danger mb-4 tracking-tighter">0.41</div>
          <div className="h-4 bg-border-dark rounded-full overflow-hidden mb-4">
            <div className="h-full bg-brand-danger/50 w-[41%]" />
          </div>
          <p className="text-sm text-text-secondary font-medium">Topic: Return Policy Question</p>
        </div>

        <div className="bg-[#111419]/50 border border-brand-secondary/30 p-8 rounded-[32px] backdrop-blur-xl relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.1)]">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 blur-3xl pointer-events-none" />
          <h3 className="text-[10px] uppercase tracking-wider text-text-muted font-bold mb-6">After Self-Improvement</h3>
          <div className="text-6xl font-black text-brand-secondary mb-4 tracking-tighter">0.89</div>
          <div className="h-4 bg-border-dark rounded-full overflow-hidden mb-4">
            <div className="h-full bg-brand-secondary w-[89%]" />
          </div>
          <p className="text-sm text-text-secondary font-medium">Same Question, Better Answer</p>
        </div>
        </div>
      </div>
    </section>
  );
}

const HOTSPOTS = [
  {
    id: 1,
    x: '9%',
    y: '5%',
    title: 'Phantos AI Core Logo',
    description: 'The glowing cybernetic eye represents real-time neural observation and autonomous correction tracking.',
  },
  {
    id: 2,
    x: '38%',
    y: '45%',
    title: 'Customer Help Desk Console',
    description: 'An interactive interface allowing customers to verify customized warranties, system specs, and return rules.',
  },
  {
    id: 3,
    x: '75%',
    y: '55%',
    title: 'OTel Spans Trace Tree',
    description: 'Underlying OpenTelemetry span chains mapped dynamically to Arize Phoenix for automatic pattern evaluation.',
  },
  {
    id: 4,
    x: '6%',
    y: '48%',
    title: 'System Actions Console',
    description: 'Triggers diagnostic commands, active hotkey syncs, and system simulation playback speeds.',
  },
  {
    id: 5,
    x: '28%',
    y: '14%',
    title: 'Agent Health Index',
    description: 'Monitors combined cognitive metric weight models (Accuracy, Defenses, Self-Correction, Knowledge base drift).'
  }
];

export function LiveDemo() {
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);

  return (
    <section id="live-demo" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">See It Self-Improve In Real Time</h2>
          <p className="text-xl text-text-secondary">Watch the quality score rise from 0.41 to 0.89 in a single self-improvement cycle.</p>
        </div>

        <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-2xl mb-12 relative group/mockup">
          <div className="h-10 border-b border-border-dark bg-bg-dark flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-danger" />
            <div className="w-3 h-3 rounded-full bg-brand-accent" />
            <div className="w-3 h-3 rounded-full bg-brand-secondary" />
            <div className="mx-auto flex-1 text-center">
              <span className="bg-border-dark py-1 px-4 rounded text-xs text-text-muted font-mono">phantos-ai.vercel.app</span>
            </div>
          </div>
          <div className="relative bg-bg-dark/95 border-b border-border-dark overflow-hidden select-none">
            {/* Main Interactive Screenshot Image */}
            <img 
              src={phantosDashboard} 
              alt="Phantos AI Cockpit Dashboard Interface"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover opacity-90 group-hover/mockup:opacity-100 transition-opacity duration-500"
            />

            {/* Glowing Interactive Hotspots */}
            {HOTSPOTS.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-20"
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setHoveredHotspot(spot.id)}
                onMouseLeave={() => setHoveredHotspot(null)}
              >
                {/* Visual pulse ring */}
                <div className="relative flex items-center justify-center cursor-pointer">
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-brand-primary opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-primary border border-white" />
                </div>

                {/* Info Tooltip Card */}
                {hoveredHotspot === spot.id && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-30 w-64 p-4 rounded-xl border border-brand-primary bg-bg-dark/95 backdrop-blur-md shadow-[0_10px_30px_rgba(99,102,241,0.4)] transition-all duration-300 pointer-events-none">
                    <p className="font-bold text-xs text-brand-primary tracking-wide uppercase mb-1">{spot.title}</p>
                    <p className="text-[11px] text-text-secondary leading-relaxed font-sans">{spot.description}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Premium backdrop glow layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/20 to-transparent pointer-events-none" />
            
            {/* Interactive Overlay Button */}
            <div className="absolute bottom-6 right-6 z-10">
              <a 
                href="https://phantos-ai.vercel.app/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-primary text-white text-xs font-semibold shadow-[0_4px_20px_rgba(99,102,241,0.5)] hover:scale-105 transition-transform"
              >
                <span>▶</span> Explore Simulator Cockpit
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="https://phantos-ai.vercel.app/" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-3 bg-brand-primary text-white rounded-full font-semibold transition-colors hover:bg-brand-primary/90 text-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
            ▶ Launch Full Dashboard
          </a>
          <a href="https://github.com/Samadkhan654/Phantos-AI" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-text-secondary text-text-primary rounded-full font-semibold transition-colors hover:border-text-primary text-center">
            📖 View Source Code
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="px-4 py-2 rounded-full border border-border-dark text-xs font-semibold text-text-secondary tracking-wide uppercase bg-surface-dark">⚡ 90-second demo</span>
          <span className="px-4 py-2 rounded-full border border-border-dark text-xs font-semibold text-text-secondary tracking-wide uppercase bg-surface-dark">🤖 Live Gemini responses</span>
          <span className="px-4 py-2 rounded-full border border-border-dark text-xs font-semibold text-text-secondary tracking-wide uppercase bg-surface-dark">🔍 Real Phoenix traces</span>
        </div>
      </div>
    </section>
  );
}

export function DemoVideoSection() {
  const [hasPlayedVideo, setHasPlayedVideo] = useState(false);

  return (
    <section id="demo-video" className="py-24 relative overflow-hidden border-t border-border-dark">
      <div className="absolute inset-0 bg-brand-secondary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 block">DEMO VIDEO</span>
          <h2 className="text-4xl font-bold mb-4">Watch How Phantos AI Works</h2>
          <p className="max-w-xl mx-auto text-lg text-text-secondary">
            See our nested tracing layers, OpenTelemetry spans, and auto-corrective loops in a 3-minute walk-through presentation.
          </p>
        </div>

        {/* Dynamic Video Mockup Player */}
        <div className="bg-[#0B0D11] border border-border-dark rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative max-w-4xl mx-auto">
          
          {/* Top Window chrome */}
          <div className="h-10 border-b border-border-dark bg-[#07090C] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-danger/80" />
            <div className="w-3 h-3 rounded-full bg-brand-accent/80" />
            <div className="w-3 h-3 rounded-full bg-brand-secondary/80" />
            <div className="mx-auto flex-1 text-center">
              <span className="bg-border-dark py-1 px-4 rounded text-xs text-text-muted font-mono select-none">
                youtube.com/watch?v=vUG2pjiF880
              </span>
            </div>
          </div>

          {/* Player Viewport */}
          <div className="relative aspect-video w-full bg-black">
            {!hasPlayedVideo ? (
              /* Cinematic Preview Facade with Glowing Play Button and Blur */
              <div 
                onClick={() => setHasPlayedVideo(true)}
                className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center overflow-hidden group/video-facade"
              >
                {/* YouTube Thumbnail Background with subtle blend/blur */}
                <img
                  src="https://img.youtube.com/vi/vUG2pjiF880/maxresdefault.jpg"
                  alt="Phantos AI Demo Video Thumbnail"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/video-facade:scale-[1.02] transition-transform duration-700 blur-[2px]"
                />
                
                {/* Backdrop dark gradient & glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 z-10" />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-color z-10" />
                
                {/* Glowing centered play button and text */}
                <div className="relative z-20 flex flex-col items-center gap-6 p-4 text-center">
                  <div className="w-20 h-20 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-[0_0_40px_rgba(99,102,241,0.8)] border-2 border-white/30 group-hover/video-facade:scale-110 group-hover/video-facade:shadow-[0_0_60px_rgba(99,102,241,1.0)] transition-all duration-300">
                    <Play size={34} className="ml-1.5 fill-white text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white tracking-tight mb-2 drop-shadow-md">
                      Phantos AI Demo Video Walkthrough
                    </h3>
                    <p className="text-xs md:text-sm text-text-secondary max-w-md mx-auto leading-relaxed drop-shadow-sm px-4">
                      Watch how Phantos AI monitors itself, identifies failures, and hot-patches its system instructions autonomously.
                    </p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest uppercase font-semibold text-[#A5B4FC]">
                    🎬 CLICK TO LAUNCH VIDEO • PLAY DEMO
                  </span>
                </div>
              </div>
            ) : (
              /* Authentically embedded high quality YouTube video */
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/vUG2pjiF880?autoplay=1&rel=0&modestbranding=1"
                title="Phantos AI Demo Video Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0 shadow-2xl"
              ></iframe>
            )}
          </div>

          <div className="bg-[#07090C] border-t border-border-dark py-4 px-6 flex items-center justify-between font-mono text-[11px] text-text-muted">
            <span className="flex items-center gap-2 select-none">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              PLAYING FROM OFFICIAL YOUTUBE STREAM
            </span>
            <a 
              href="https://youtu.be/vUG2pjiF880" 
              target="_blank" 
              rel="noreferrer" 
              className="text-brand-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              Open in YouTube ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Architecture() {
  return (
    <section id="architecture" className="py-24 relative bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 block">Architecture</span>
          <h2 className="text-4xl font-bold mb-4">Built on Open Standards</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider border-b border-border-dark pb-2 mb-2">Data Layer</h3>
            <ArchCard text="👤 User Question" />
            <div className="flex justify-center text-border-dark">↓</div>
            <ArchCard text="💬 Google ADK Agent" />
            <div className="flex justify-center text-border-dark">↓</div>
            <ArchCard text="🤖 Gemini 2.0 Flash" glow="border-brand-primary text-text-primary" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider border-b border-border-dark pb-2 mb-2">Observability Layer</h3>
            <ArchCard text="🔍 OpenInference" />
            <div className="flex justify-center text-border-dark">↓</div>
            <ArchCard text="📊 Arize Phoenix Cloud" glow="border-brand-accent text-text-primary" />
            <div className="flex justify-center text-border-dark">↓</div>
            <ArchCard text="⚡ Phoenix MCP Server" glow="border-brand-accent text-text-primary" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider border-b border-border-dark pb-2 mb-2">Improvement Layer</h3>
            <ArchCard text="📈 LLM Judge Evaluator" />
            <div className="flex justify-center text-border-dark">↓</div>
            <ArchCard text="🧠 Pattern Detector" />
            <div className="flex justify-center text-border-dark">↓</div>
            <ArchCard text="✅ Self-Improvement Engine" glow="border-brand-secondary text-brand-secondary transform scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
          </div>
        </div>

        {/* System Technical Specifications & Deep Dive */}
        <div className="mt-24 pt-16 border-t border-border-dark">
          <div className="text-center mb-16">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-4 block">Engine Specifications</span>
            <h3 className="text-3xl font-bold mb-4 text-white">System Deep-Dive & Execution Details</h3>
            <p className="max-w-2xl mx-auto text-sm text-text-secondary leading-relaxed">
              Our fully productionized, reactive stack built to satisfy ultra-low latency constraints and strict authentication boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="relative group p-6 rounded-2xl border border-border-dark bg-[#07090C] hover:border-brand-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Terminal size={20} />
                </div>
                <h4 className="text-lg font-bold text-white">1. Robust Core Full-Stack Runtime</h4>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mb-6">
                Because cold-starts and credentials security are critical for live enterprise environments, we bypassed Python-based Streamlit in favor of:
              </p>
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-primary block mb-1">Vite + React 19 (Single Page Application)</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Delivers an instant-load front-end experiencing zero lag, running on the latest React core fiber.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-primary block mb-1">Express (Node.js)</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    High-speed back-end serving as a secure proxy to interact with Google Gemini and Arize Phoenix Cloud, keeping your sensitive target API keys (and those of users) completely hidden from browser inspectors.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-primary block mb-1">TypeScript (strict mode)</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Controls end-to-end tracing payloads, rule structures, and metric calculations with absolute type safety.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-primary block mb-1">TSX & Esbuild</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Configured to compile the backend into a modular standalone file to minimize disk space and keep cold-boot latency below 50ms.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="relative group p-6 rounded-2xl border border-border-dark bg-[#07090C] hover:border-brand-accent/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Cpu size={20} />
                </div>
                <h4 className="text-lg font-bold text-white">2. High-Fidelity Observability & LLM Integration</h4>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mb-6">
                We replaced standard Python bindings with modern JS/TS Native OpenTelemetry instrumentation:
              </p>
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-accent block mb-1">@arizeai/phoenix-otel (OpenTelemetry SDK for Node)</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Auto-configures the core OpenTelemetry TracerProvider directly within our Express server. It intercepts input/output cycles, wraps them with context tracers, and safely ships the telemetry span stream to the PHANTOS_AI project on Arize Phoenix.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-accent block mb-1">@google/genai (Official Next-Gen SDK)</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Interacts with Gemini models via Google's modern SDK. It supports strict schema definitions (Type.OBJECT) to enforce deterministic JSON structures for our Judge Evaluator and Pattern Detector.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-accent block mb-1">Stateful Hybrid Cache Management</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Employs an intelligent dual-synchronization layer using regional browser client storage. This maintains historical telemetry traces, metrics, learning loops, and active rules intact even when backend containers are recycled or deployed serverless.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="relative group p-6 rounded-2xl border border-border-dark bg-[#07090C] hover:border-brand-secondary/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary">
                  <Layers size={20} />
                </div>
                <h4 className="text-lg font-bold text-white">3. Beautiful Editorial Design & Fluid Interactions</h4>
              </div>
              <p className="text-xs text-text-muted leading-relaxed mb-6">
                To elevate this solution far beyond standard visual presets, we introduced a bespoke visual language:
              </p>
              <div className="space-y-4 text-xs">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-secondary block mb-1">Tailwind CSS (Vite v4 Integration)</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Implements our distinctive theme. It uses deep muted slates, precise negative space, and modern grid systems.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-secondary block mb-1">Recharts</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Orchestrates the telemetry graphics, mapping historical overall trace performance, dimensional averages (Accuracy, Helpfulness, Completeness, Honesty), and self-correction event timelines.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-secondary block mb-1">Framer Motion (motion/react)</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Drives smooth layout transitions, micro-responses on interactive cards, sliding drawer reviews, and staggered entrants when adding new dynamic rules.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-brand-secondary block mb-1">Lucide React</span>
                  <p className="text-text-secondary leading-normal text-[11px]">
                    Supplies clean, standardized visual icons for node tracking, status gauges, policy breaches, and database sync processes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function ArchCard({ text, glow = "border-border-dark bg-[#0A0A0F]/80 text-text-secondary" }: { text: string, glow?: string }) {
  return (
    <div className={`p-4 rounded-2xl border text-center font-medium shadow-sm transition-all ${glow}`}>
      {text}
    </div>
  );
}

export function TechStack() {
  const techList = [
    { name: "Vite + React 19", icon: "⚛️" },
    { name: "Express (Node.js)", icon: "🟢" },
    { name: "TypeScript (Strict)", icon: "🟦" },
    { name: "Google GenAI SDK", icon: "🤖" },
    { name: "Arize Phoenix OTel", icon: "🔍" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Recharts Library", icon: "📊" },
    { name: "Framer Motion", icon: "✨" }
  ];

  return (
    <section id="built-with" className="py-24 relative border-y border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-sans">
        <h2 className="text-3xl font-bold mb-12">Powered By The Best</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {techList.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2, scale: 1.02 }}
              className="px-6 py-8 border border-border-dark rounded-xl bg-surface-dark flex flex-col items-center justify-center gap-3 hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-colors cursor-default"
            >
              <div className="text-3xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{tech.icon}</div>
              <div className="font-semibold text-sm text-text-secondary">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
