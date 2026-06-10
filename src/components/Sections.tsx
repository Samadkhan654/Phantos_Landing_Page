import * as React from 'react';
import { motion } from 'motion/react';
import { EyeOff, RefreshCcw, RefreshCw } from 'lucide-react';

export function Problem() {
  return (
    <section id="the-problem" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-danger text-sm font-bold tracking-widest uppercase mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Agents Fail Silently</h2>
          <p className="text-xl text-text-secondary">And nobody knows until damage is done.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ProblemCard
            icon={<EyeOff className="w-6 h-6 text-brand-danger" />}
            title="Silent, Confident Failures"
            quote="Three weeks later caught it summarising data that didn't exist. Formatted neatly, looked exactly like the real outputs."
            source="Real developer, Reddit r/AI_Agents"
          />
          <ProblemCard
            icon={<RefreshCcw className="w-6 h-6 text-brand-danger" />}
            title="Agents Wrong About Themselves"
            quote="Mine reported a profit that didn't exist for days. When I questioned the number, it DEFENDED it."
            source="Real developer, Reddit r/AI_Agents"
          />
          <ProblemCard
            icon={<RefreshCw className="w-6 h-6 text-brand-danger" />}
            title="Every Session Starts From Zero"
            quote="Agents have no way to learn from mistakes. They'll try the same broken steps every time."
            source="Real developer, Reddit r/AI_Agents"
          />
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl font-semibold leading-tight text-text-primary mb-4">
            "99% of AI production failures are detected by users — not the system itself."
          </p>
          <p className="text-text-muted">Industry observation</p>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ icon, title, quote, source }: { icon: React.ReactNode, title: string, quote: string, source: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-[#0A0A0F]/80 backdrop-blur-md border border-border-dark p-8 rounded-[32px] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-danger/20" />
      <div className="w-12 h-12 bg-brand-danger/10 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <blockquote className="text-text-secondary italic mb-6 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
        — {source}
      </div>
    </motion.div>
  );
}

export function Features() {
  const featuresList = [
    {
      icon: "⚡", iconColor: "text-brand-primary",
      title: "Real-Time Quality Scoring",
      description: "Every response evaluated instantly by an LLM judge across 4 dimensions: Accuracy, Helpfulness, Completeness, Honesty. Color-coded scores appear in under 2 seconds."
    },
    {
      icon: "🔍", iconColor: "text-brand-secondary",
      title: "Self-State Verification",
      description: "Agent queries Arize Phoenix for what it ACTUALLY did — not relying on its own potentially drifted memory. External source of truth prevents the 'profit that never existed' scenario."
    },
    {
      icon: "🧠", iconColor: "text-brand-accent",
      title: "Failure Pattern Detection",
      description: "Phoenix MCP analysis identifies which topics, question types, and scenarios trigger poor performance. Self-improvement is targeted, not random."
    },
    {
      icon: "⚔️", iconColor: "text-brand-danger",
      title: "Agent vs Agent Battle Mode",
      description: "Watch Phantos AI compete against an unmonitored baseline agent. Same questions. Same model. Dramatically different quality over time. Gap grows wider every conversation."
    },
    {
      icon: "🛡️", iconColor: "text-brand-primary",
      title: "Real-Time Hallucination Blocking",
      description: "Before showing any response, Phantos AI runs a hallucination check. Confidently wrong answers are intercepted before the user ever sees them."
    },
    {
      icon: "💎", iconColor: "text-brand-secondary",
      title: "Agent Memory Palace",
      description: "Visual knowledge graph showing everything the agent has learned. Nodes pulse when accessed. New learnings materialize with particle animations."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-text-muted text-sm font-bold tracking-widest uppercase mb-4 block">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything Judges Are Looking For</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#111419]/50 backdrop-blur-xl border border-border-dark p-8 rounded-[32px] hover:border-text-muted hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative group"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary opacity-0 group-hover:opacity-10 rounded-[32px] pointer-events-none transition-opacity duration-300" />
              
              <div className={`text-4xl mb-6 ${feature.iconColor} drop-shadow-md`}>{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
