import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export function TestimonialCard({ quote, name, role, company, rating, avatar }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-yofs-cyan/40 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <Quote className="absolute top-6 right-6 w-12 h-12 text-yofs-cyan/5 group-hover:text-yofs-cyan/10 transition-colors duration-300" />
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yofs-cyan text-yofs-cyan" />
          ))}
        </div>
        <p className="text-slate-800 dark:text-white italic text-base leading-relaxed mb-8">"{quote}"</p>
      </div>
      
      <div className="flex items-center gap-4 mt-auto border-t border-yofs-lightnavy pt-6">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full border border-yofs-cyan/20 object-cover"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-800 dark:text-white">{name}</h4>
          <span className="text-xs text-yofs-cyan block">{role}</span>
          <span className="text-[10px] text-slate-500 dark:text-yofs-slate uppercase tracking-wider block">{company}</span>
        </div>
      </div>
    </motion.div>
  );
}
