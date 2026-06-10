import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Play, Github } from 'lucide-react';
import { PhantosLogo } from './PhantosLogo';

const PHRASES = [
  "Watches Itself",
  "Learns From Mistakes",
  "Never Repeats Errors"
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[115vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-primary opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary opacity-5 blur-[100px] rounded-full"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center font-sans">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-[10px] font-bold tracking-widest uppercase mb-8"
        >
          <PhantosLogo size={16} className="animate-pulse duration-1000 text-brand-primary filter drop-shadow-[0_0_4px_rgba(99,102,241,0.5)]" />
          <span>Google Cloud Hackathon — Arize Track</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.15] tracking-tight mb-16 md:mb-20 lg:mb-24"
        >
          The AI Agent That <br />
          <span className="block h-[2.5em] xs:h-[2em] sm:h-[1.5em] relative mt-3 sm:mt-5">
            <AnimatePresence mode="wait">
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-x-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent pb-2"
              >
                {PHRASES[phraseIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed mb-10"
        >
          Most AI agents fail silently. Phantos AI doesn't.
          Powered by Gemini 2.0 Flash and Arize Phoenix,
          it's the first agent that detects, traces, 
          and corrects its own mistakes — automatically.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <a
            href="https://phantos-ai.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(99,102,241,0.3)]"
          >
            <Play className="w-5 h-5 fill-current" />
            Launch Agent App
          </a>
          <a
            href="https://github.com/Samadkhan654/Phantos-AI"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-4 text-sm font-semibold border border-border-dark rounded-full hover:bg-white/5 transition-colors text-text-primary"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>

          <div className="flex flex-col items-center sm:items-start border-t sm:border-t-0 sm:border-l border-border-dark pt-4 sm:pt-0 sm:pl-6">
            <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold">Validated Result</span>
            <span className="text-lg font-black text-[#10B981]">+117% Quality Improvement</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-8 mb-20 text-sm font-medium text-text-muted select-none"
        >
          <span className="flex items-center gap-2"><span className="text-xl">🤖</span> Gemini 2.0 Flash</span>
          <span className="flex items-center gap-2"><span className="text-xl">🔍</span> Arize Phoenix</span>
          <span className="flex items-center gap-2"><span className="text-xl">☁️</span> Google Cloud</span>
          <span className="flex items-center gap-2"><span className="text-xl">⚡</span> OpenInference</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 pt-8 border-t border-border-dark"
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-black text-brand-secondary mb-1">0.41→<Counter value={0.89} /></div>
            <div className="text-[10px] uppercase text-text-muted tracking-wider font-bold">Quality Score</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-black text-text-primary mb-1">&lt;2s</div>
            <div className="text-[10px] uppercase text-text-muted tracking-wider font-bold">Eval Speed</div>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-black text-brand-primary mb-1">100%</div>
            <div className="text-[10px] uppercase text-text-muted tracking-wider font-bold">Trace Coverage</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(start + easeProgress * (end - start));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [value]);

  return <span>{count.toFixed(2)}</span>;
}
