import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export function TheStory() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-dark">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/5 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-4 block">The Story</span>
          <h2 className="text-4xl font-bold mb-4">Built From Real Research</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6">We didn't invent this problem.<br/><span className="text-text-muted text-xl font-normal">We found it on Reddit.</span></h3>
            
            <div className="space-y-4">
              <RedditPost text="My AI agent was giving correct answers while breaking internally" />
              <RedditPost text="AI agents fail in ways nobody writes about. Here's what I've actually seen." />
              <RedditPost text="My AI agent confidently gave me completely wrong information" />
            </div>
          </div>

          <div>
            <div className="bg-surface-dark border border-border-dark p-10 rounded-2xl relative shadow-xl hover:border-text-secondary transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-[50px] pointer-events-none" />
              
              <h3 className="text-3xl font-bold mb-2">Abdulsamadkhan Pathan</h3>
              <p className="text-brand-primary font-medium mb-6">Builder & Researcher</p>
              
              <ul className="space-y-4 mb-8 text-text-secondary">
                <li className="flex items-center gap-3"><span className="text-xl">🎓</span> Business student → AI builder</li>
                <li className="flex items-center gap-3"><span className="text-xl">🚀</span> Second hackathon season</li>
                <li className="flex items-center gap-3"><span className="text-xl">🛠️</span> Building what others only talk about</li>
              </ul>

              <div className="flex gap-4">
                <a href="https://github.com/Samadkhan654" target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full border border-border-dark hover:border-text-primary text-sm font-semibold transition-colors">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RedditPost({ text }: { text: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#1A1A1B] border border-[#343536] p-4 rounded-xl flex gap-4 items-start"
    >
      <div className="flex flex-col items-center text-[#D7DADC] pt-1">
        <ArrowUp className="w-5 h-5 text-[#FF4500]" />
        <span className="text-xs font-bold my-1">4.2k</span>
      </div>
      <div>
        <div className="text-xs text-[#818384] mb-1 font-medium">r/AI_Agents • Posted by u/developer</div>
        <h4 className="text-[#D7DADC] font-medium text-sm sm:text-base leading-snug">{text}</h4>
      </div>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative h-32 border-t border-border-dark bg-bg-dark px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center gap-12 font-bold mb-4 md:mb-0">
        <a href="https://cloud.google.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all text-sm">
          Google Cloud
        </a>
        <a href="https://ai.google.dev/" target="_blank" rel="noreferrer" className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all text-sm italic text-blue-400">
          Gemini 2.0
        </a>
        <a href="https://phoenix.arize.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all text-sm text-orange-400">
          Arize Phoenix
        </a>
        <a href="https://github.com/Arize-ai/openinference" target="_blank" rel="noreferrer" className="flex items-center gap-2 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all text-sm text-brand-secondary">
          OpenInference
        </a>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <span className="text-[10px] uppercase tracking-widest text-[#64748B] font-bold">Built by Abdulsamadkhan Pathan</span>
        <span className="text-[11px] text-[#94A3B8]">June 2026 Submission</span>
      </div>
    </footer>
  );
}
