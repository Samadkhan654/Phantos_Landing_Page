import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { PhantosLogo } from './PhantosLogo';

export function Navigation() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 15, 0)', 'rgba(10, 10, 15, 0.8)']
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );
  const borderBottom = useTransform(
    scrollY,
    [0, 50],
    ['1px solid rgba(30, 32, 40, 0)', '1px solid rgba(30, 32, 40, 1)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {/* Pulsing aura background */}
            <div className="absolute inset-0 bg-brand-primary/20 blur-[8px] rounded-full scale-125 animate-pulse" />
            <PhantosLogo size={42} className="relative z-10 transition-all filter drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
          </div>
          <span className="font-black text-xl tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-text-primary to-[#A5B4FC]">
            Phantos AI
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#live-demo" className="hover:text-white transition-colors">Live Demo</a>
          <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
          <a href="#built-with" className="hover:text-white transition-colors">Built With</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Samadkhan654/Phantos-AI" target="_blank" rel="noreferrer" className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold border border-border-dark rounded-full hover:bg-white/5 transition-colors">
            View on GitHub
          </a>
          <a href="https://phantos-ai.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex px-5 py-2 text-sm font-semibold bg-brand-primary text-white rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:brightness-110 transition-all">
            Launch Agent App
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
