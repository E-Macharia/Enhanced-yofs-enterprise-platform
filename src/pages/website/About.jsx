import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, Milestone, Rocket } from 'lucide-react';

export function About() {
  const [selectedTimelineNode, setSelectedTimelineNode] = useState(2);

  const timelineData = [
    { year: '2022', title: 'Foundation & Seed Phase', desc: 'YOFS established to explore sub-millisecond optoelectronic networks.' },
    { year: '2024', title: '6G Network Core Release', desc: 'Succeeded in linking low-Earth orbit satellite terminals to optical fiber matrices.' },
    { year: '2025', title: 'Cognitive TPU Integration', desc: 'Introduced deep neural architectures running on-site directly inside routing nodes.' },
    { year: '2026', title: 'Enterprise Platform Launch', desc: 'Completed full SaaS dashboard controls and autonomous digital twin platforms.' }
  ];

  const values = [
    { title: 'Deterministic Speed', icon: Cpu, desc: 'We do not build speculative queues. Our network pathways are guaranteed down to the microsecond level.' },
    { title: 'Absolute Protection', icon: Shield, desc: 'Employing quantum key encryption at standard physical layers, rendering mathematical hacks obsolete.' },
    { title: 'Continuous Evolution', icon: Target, desc: 'Constantly training cognitive assistants and edge models to pre-emptively balance load demands.' }
  ];

  return (
    <div className="py-20 sm:py-32 px-8 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">Our Blueprint</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white font-display">Forging the Telecom Horizon</h1>
          <p className="text-slate-600 dark:text-yofs-slate text-sm sm:text-base leading-relaxed">
            YOFS was established by a team of telecom architects and machine learning researchers to solve a single bottleneck: traditional networks separating processing compute from bandwidth transit.
          </p>
        </div>

        {/* Mission grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">Unifying Computations & Connectivity</h2>
            <p className="text-slate-600 dark:text-yofs-slate text-sm leading-relaxed">
              Modern digital systems suffer from structural latency. When data has to travel from an IoT sensor to a remote data center cluster, receive processing, and return, control loops fail. 
            </p>
            <p className="text-slate-600 dark:text-yofs-slate text-sm leading-relaxed">
              At YOFS, we eliminate transit latency by hosting compiler and model hardware inside our optical junction hubs. Computing occurs mid-transit, delivering true zero-latency processing capabilities globally.
            </p>
          </div>
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden bg-gradient-to-tr from-yofs-navy/50 to-yofs-lightnavy/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yofs-purple/10 rounded-bl-full blur-2xl" />
            <Rocket className="w-10 h-10 text-yofs-cyan mb-6" />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Enterprise Mission</h3>
            <blockquote className="text-slate-700 dark:text-yofs-lightslate text-sm italic leading-relaxed">
              "To deliver bulletproof, quantum-secured global telemetry matrices and cognitive automation servers, enabling enterprises to manage operations with full, real-time visibility."
            </blockquote>
          </div>
        </div>

        {/* Timeline roadmap */}
        <div className="space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">Technology Timeline</h2>
            <p className="text-slate-600 dark:text-yofs-slate text-sm">Click each epoch to inspect technology breakthroughs.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline nodes */}
            <div className="grid grid-cols-4 gap-4 relative mb-8">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-yofs-lightnavy/60 -translate-y-1/2 z-0" />
              {timelineData.map((node, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                  <button
                    onClick={() => setSelectedTimelineNode(index)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 border ${
                      selectedTimelineNode === index
                        ? 'bg-yofs-cyan border-yofs-cyan text-yofs-dark shadow-lg shadow-yofs-cyan/20 scale-110'
                        : 'bg-yofs-navy border-yofs-lightnavy text-yofs-lightslate hover:border-yofs-cyan/35'
                    }`}
                  >
                    {node.year}
                  </button>
                </div>
              ))}
            </div>

            {/* Selected Node Details */}
            <motion.div
              key={selectedTimelineNode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-6 rounded-2xl text-center max-w-xl mx-auto border-t-2 border-t-yofs-cyan"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{timelineData[selectedTimelineNode].title}</h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-yofs-lightslate leading-relaxed">
                {timelineData[selectedTimelineNode].desc}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display text-center">Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl space-y-4">
                <div className="w-10 h-10 rounded-lg bg-yofs-cyan/15 flex items-center justify-center text-yofs-cyan">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{v.title}</h3>
                <p className="text-xs text-slate-600 dark:text-yofs-slate leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
