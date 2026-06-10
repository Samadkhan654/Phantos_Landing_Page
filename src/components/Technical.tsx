import * as React from 'react';
import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import phantosDashboard from '../assets/images/phantos_dashboard_1780567603876.png';
import { Play, Pause, Volume2, Maximize, RotateCcw, AlertTriangle, ShieldCheck, Cpu, Code, Activity, HelpCircle } from 'lucide-react';

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

const CHAPTERS = [
  {
    id: 1,
    title: "1. Baseline Fault Execution",
    duration: 6,
    sub: "Failing silently with static guidelines",
    timestamp: "0:00",
    start: 0,
    end: 6
  },
  {
    id: 2,
    title: "2. OpenTelemetry & Trace Capture",
    duration: 6,
    sub: "Collecting nested execution tracks",
    timestamp: "0:06",
    start: 6,
    end: 12
  },
  {
    id: 3,
    title: "3. Phoenix Evaluator & Judge",
    duration: 6,
    sub: "Discovering cognitive policy drift",
    timestamp: "0:12",
    start: 12,
    end: 18
  },
  {
    id: 4,
    title: "4. Autonomous Improvement",
    duration: 6,
    sub: "Injecting precision corrective regulations",
    timestamp: "0:18",
    start: 18,
    end: 24
  }
];

export function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        const next = prev + 0.1;
        return next >= 24 ? 0 : parseFloat(next.toFixed(1));
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeChapterIndex = Math.min(Math.floor(currentTime / 6), CHAPTERS.length - 1);
  const activeChapter = CHAPTERS[activeChapterIndex];

  const formatTime = (time: number) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(parseFloat(e.target.value));
  };

  const selectChapter = (start: number) => {
    setCurrentTime(start);
    setIsPlaying(true);
  };

  return (
    <section id="demo-video" className="py-24 relative overflow-hidden border-t border-border-dark">
      <div className="absolute inset-0 bg-brand-secondary/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-sm font-bold tracking-widest uppercase mb-4 block">Simulation Walkthrough</span>
          <h2 className="text-4xl font-bold mb-4">Watch How Phantos AI Works</h2>
          <p className="max-w-xl mx-auto text-lg text-text-secondary">
            See our nested tracing layers, OpenTelemetry spans, and auto-corrective loops self-improve in a live interactive replay.
          </p>
        </div>

        {/* Dynamic Video Mockup Player */}
        <div className="bg-[#0B0D11] border border-border-dark rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
          
          {/* Top Window chrome */}
          <div className="h-10 border-b border-border-dark bg-[#07090C] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-brand-danger/80" />
            <div className="w-3 h-3 rounded-full bg-brand-accent/80" />
            <div className="w-3 h-3 rounded-full bg-brand-secondary/80" />
            <div className="mx-auto flex-1 text-center">
              <span className="bg-border-dark py-1 px-4 rounded text-xs text-text-muted font-mono">phantos-ai.com/simulation-replay.mov</span>
            </div>
          </div>

          {/* Interactive Player Viewport */}
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-border-dark min-h-[480px]">
            
            {/* LEFT COLUMN: Animated Screen Output */}
            <div 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex-1 bg-black/45 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group/screen min-h-[380px] cursor-pointer"
            >
              
              {/* Play / Pause Overlays with Blur */}
              <div className={`absolute inset-0 z-30 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 backdrop-blur-[3px] bg-black/40'}`}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-[0_0_35px_rgba(99,102,241,0.8)] border border-white/25 hover:scale-110 hover:shadow-[0_0_50px_rgba(99,102,241,1.0)] transition-all duration-300">
                    <Play size={28} className="ml-1 fill-white" />
                  </div>
                  <span className="text-xs font-mono font-black uppercase tracking-widest text-[#A5B4FC] drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] select-none">
                    Click to Custom Simulation Play
                  </span>
                </div>
              </div>

              {/* Hover Pause Indicator when playing */}
              {isPlaying && (
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/15 backdrop-blur-[1px]">
                  <div className="w-14 h-14 rounded-full bg-brand-primary/80 flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-white/10 hover:scale-105 transition-all duration-300">
                    <Pause size={22} className="fill-white" />
                  </div>
                </div>
              )}
              
              {/* Background accent ambient light */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-primary/10 blur-[100px] pointer-events-none" />
              
              {/* Screen Header */}
              <div className="relative z-10 flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
                  <span className="text-[10px] tracking-wider uppercase font-semibold text-brand-primary font-mono select-none">
                    AUTONOMOUS FEED Replay
                  </span>
                </div>
                <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono font-medium text-text-muted select-none">
                  PHASE: {activeChapter.timestamp} - {formatTime(currentTime)}
                </div>
              </div>

              {/* Dynamic Scene Content based on Chapter Timeline */}
              <div className="flex-1 flex flex-col justify-center relative z-10">
                {activeChapterIndex === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="border border-border-dark bg-bg-dark/80 p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-xs text-brand-accent font-semibold mb-2">
                        <HelpCircle size={14} />
                        <span>Baseline Customer Request:</span>
                      </div>
                      <p className="text-sm font-medium text-text-primary">
                        &quot;What is your return window/limits for standard customized configure laptops?&quot;
                      </p>
                    </div>

                    <div className="border border-brand-danger/20 bg-brand-danger/5 p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-xs text-brand-danger font-semibold mb-2">
                        <AlertTriangle size={14} className="animate-bounce" />
                        <span>Baseline Output (Failing Silently):</span>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed mb-3">
                        &quot;Unfortunately we do not support or accept order return policies for any customizable or specialized laptops. All configure sales are completely final.&quot;
                      </p>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-danger/20 text-brand-danger text-[10px] font-bold font-mono tracking-wider uppercase">
                        ✘ CONTRADICTION DETECTED BY EVALUATOR
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeChapterIndex === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="border border-border-dark bg-bg-dark/80 p-4 rounded-xl">
                      <div className="flex items-center justify-between text-xs text-brand-primary font-semibold mb-3">
                        <div className="flex items-center gap-2">
                          <Activity size={14} className="animate-pulse" />
                          <span>OpenTelemetry Nested Trace Spans:</span>
                        </div>
                        <span className="font-mono text-[10px] text-text-muted">ID: ph_tr_8f93a1</span>
                      </div>
                      
                      {/* Interactive Traces visualization list */}
                      <div className="space-y-2 font-mono text-[11px] leading-relaxed">
                        <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10">
                          <span className="text-brand-primary">⚙ span: post_chat_query</span>
                          <span className="text-brand-secondary text-[10px]">100% active (1.2s)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10 ml-4">
                          <span className="text-brand-accent">├── span: vector_store_doc_docs</span>
                          <span className="text-text-muted text-[10px]">completed (82ms)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10 ml-4">
                          <span className="text-indigo-400">├── span: call_gemini_2_0_flash</span>
                          <span className="text-text-muted text-[10px]">completed (212ms)</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10 ml-8">
                          <span className="text-brand-danger">└── span: contradiction_eval_guard</span>
                          <span className="text-brand-danger text-[10px] animate-pulse">intercepted (120ms)</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeChapterIndex === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="border border-border-dark bg-bg-dark/80 p-5 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-xs text-brand-accent font-semibold">
                          <Cpu size={14} />
                          <span>Arize Phoenix Evaluator Cognitive Scorecard:</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-brand-danger/10 text-brand-danger text-[10px] font-bold">FAIL IN EVAL</span>
                      </div>

                      {/* Score Metrics Grid */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                          <span className="text-[10px] text-text-muted uppercase block mb-1">Accuracy</span>
                          <span className="text-lg font-black text-brand-danger">41%</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                          <span className="text-[10px] text-text-muted uppercase block mb-1">Helpfulness</span>
                          <span className="text-lg font-black text-brand-accent">55%</span>
                        </div>
                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-center">
                          <span className="text-[10px] text-text-muted uppercase block mb-1">Contradiction</span>
                          <span className="text-lg font-black text-brand-danger">100%</span>
                        </div>
                      </div>

                      <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-text-secondary">
                        <p className="text-brand-danger mb-1 font-semibold">[CRITICAL DRIFT FOUND]:</p>
                        <p className="text-[11px] leading-normal">
                          &quot;Agent generated an incorrect rejection constraint contradicting standard Warranty policies Section 4-B.&quot;
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeChapterIndex === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="border border-brand-secondary/30 bg-brand-secondary/5 p-4 rounded-xl">
                      <div className="flex items-center justify-between text-xs text-brand-secondary font-semibold mb-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={14} className="text-brand-secondary" />
                          <span>Auto-Calibrated Target Ruleset Patch:</span>
                        </div>
                        <span className="text-[9px] font-mono text-brand-secondary">ACTIVE RULE INSTALLED</span>
                      </div>
                      <p className="text-xs font-mono text-text-secondary bg-black/40 p-2 rounded border border-border-dark mb-2">
                        &quot;SYSTEM_PROMPT_PATCH_8F93: Explicitly notify customized configurations standard laptops are returnable within 14 days under a 10% restocking charge.&quot;
                      </p>
                    </div>

                    <div className="border border-border-dark bg-bg-dark/80 p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-xs text-brand-secondary font-semibold mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                        <span>Self-Improved Output Result (Verified Successfully):</span>
                      </div>
                      <p className="text-sm font-medium text-text-primary mb-3">
                        &quot;Under our standard corporate Warranty Section 4-B policies, customized laptops can indeed be returned safely within a strict 14-day window. A minor 10% restocking charge is automatically applied.&quot;
                      </p>
                      <div className="flex justify-between items-center bg-brand-secondary/10 px-3 py-1.5 rounded border border-brand-secondary/20">
                        <span className="text-[10px] font-bold text-brand-secondary tracking-widest uppercase">✔ Autonomous Self-Improvement Complete</span>
                        <span className="text-xs font-mono font-bold text-brand-secondary">PHOENIX QUALITY: 0.89</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Status footer for left screen */}
              <div className="relative z-10 text-[10px] font-mono text-text-muted select-none flex justify-between items-center border-t border-white/5 pt-4 mt-6">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  REAL-TIME TRACING PIPELINE FEED
                </span>
                <span>UUID: samad_8f93a1</span>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Playlist / Chapters */}
            <div className="w-full lg:w-[350px] bg-[#07090C] p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-mono font-bold text-text-muted tracking-widest uppercase mb-4">
                  REPLAY STAGE PLAYLIST
                </h3>
                <div className="space-y-3">
                  {CHAPTERS.map((chap) => {
                    const isActive = activeChapter.id === chap.id;
                    return (
                      <div
                        key={chap.id}
                        onClick={() => selectChapter(chap.start)}
                        className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'bg-brand-primary/10 border-brand-primary shadow-[0_4px_15px_rgba(99,102,241,0.15)] scale-[1.01]'
                            : 'bg-white/[0.02] border-border-dark hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={`text-xs font-bold leading-normal transition-colors ${isActive ? 'text-brand-primary' : 'text-text-primary'}`}>
                            {chap.title}
                          </h4>
                          <span className="text-[10px] font-mono font-semibold text-text-muted">
                            {chap.timestamp}
                          </span>
                        </div>
                        <p className="text-[11px] text-text-secondary leading-normal">
                          {chap.sub}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-border-dark mt-6 text-center lg:text-left">
                <p className="text-[11px] text-text-muted leading-relaxed">
                  💡 <strong className="text-text-secondary">Interactive Simulation:</strong> Click any of the four stages above to seek immediately into that chapter of the autonomous self-corrector feed.
                </p>
              </div>
            </div>
          </div>

          {/* PLAYER CONTROLLER HUD */}
          <div className="bg-[#07090C] border-t border-border-dark py-4 px-6 flex flex-col sm:flex-row items-center gap-4">
            
            {/* Play controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-primary text-white hover:scale-105 transition-transform shadow-[0_4px_10px_rgba(99,102,241,0.3)]"
                title={isPlaying ? "Pause Simulator" : "Play Simulator"}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>

              <button
                onClick={() => setCurrentTime(0)}
                className="text-text-muted hover:text-text-primary transition-colors"
                title="Restart Replay"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Progress Track Slider */}
            <div className="flex-1 w-full flex items-center gap-3">
              <span className="text-xs font-mono font-medium text-text-muted select-none">
                {formatTime(currentTime)}
              </span>
              <div className="flex-1 relative flex items-center">
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="0.1"
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full accent-brand-primary h-1 bg-border-dark rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-brand-primary"
                  style={{
                    background: `linear-gradient(to right, #6366f1 ${((currentTime / 24) * 100).toFixed(2)}%, #1E293B ${((currentTime / 24) * 100).toFixed(2)}%)`
                  }}
                />
              </div>
              <span className="text-xs font-mono font-medium text-text-muted select-none">
                0:24
              </span>
            </div>

            {/* Utility icons */}
            <div className="flex items-center gap-3 text-text-muted">
              <button 
                onClick={() => setIsMuted(!isMuted)} 
                className="hover:text-text-primary transition-colors"
                title={isMuted ? "Unmute" : "Mute Simulation Audio"}
              >
                <Volume2 size={16} className={isMuted ? "opacity-40" : "opacity-100"} />
              </button>
              <button 
                onClick={() => setCurrentTime(currentTime)} 
                className="hover:text-text-primary transition-colors"
                title="Toggle Fullscreen"
              >
                <Maximize size={16} />
              </button>
            </div>
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

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border-dark bg-[#0D1117] relative">
          <div className="absolute top-0 left-0 w-full h-8 bg-[#161B22] border-b border-border-dark flex items-center px-4">
            <span className="text-xs font-mono text-text-muted">instrumentation.py</span>
          </div>
          <pre className="p-6 pt-12 text-sm font-mono text-[#C9D1D9] overflow-x-auto">
            <code>
{`from openinference.instrumentation.gemini import GeminiInstrumentor
from arize_phoenix import Client

# Initialize external observability
client = Client()

# Auto-instrument Google GenAI standard library
GeminiInstrumentor().instrument()

# Now every Gemini 2.0 Flash call is traced
# Phantos AI utilizes these traces via MCP
# to discover its own failure patterns`}
            </code>
          </pre>
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
    { name: "Google Cloud", icon: "☁️" },
    { name: "Gemini 2.0 Flash", icon: "🤖" },
    { name: "Arize Phoenix", icon: "🔍" },
    { name: "Google ADK", icon: "🛠️" },
    { name: "OpenInference", icon: "⚡" },
    { name: "FastAPI", icon: "🐍" },
    { name: "Streamlit", icon: "👑" },
    { name: "Python", icon: "🐍" }
  ];

  return (
    <section id="built-with" className="py-24 relative border-y border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
