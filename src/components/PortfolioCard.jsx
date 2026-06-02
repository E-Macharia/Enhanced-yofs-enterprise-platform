import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function PortfolioCard({ title, category, client, image, description, stats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-panel rounded-2xl overflow-hidden group hover:border-yofs-cyan/50 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yofs-dark via-transparent to-transparent opacity-85" />
        <span className="absolute bottom-4 left-4 px-3 py-1 text-xs font-semibold bg-yofs-cyan/25 border border-yofs-cyan/40 text-yofs-cyan rounded-full backdrop-blur-md">
          {category}
        </span>
      </div>
      
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-xs text-slate-500 dark:text-yofs-slate uppercase tracking-wider block mb-1">Client: {client}</span>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-yofs-cyan transition-colors duration-300 flex items-center justify-between">
            {title}
            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yofs-cyan" />
          </h3>
          <p className="text-slate-600 dark:text-yofs-slate text-sm leading-relaxed mt-3 mb-6">{description}</p>
        </div>
        
        {stats && (
          <div className="grid grid-cols-3 gap-2 border-t border-yofs-lightnavy pt-4 mt-auto">
            {Object.entries(stats).map(([key, val]) => (
              <div key={key} className="text-center">
                <span className="block text-[10px] text-slate-500 dark:text-yofs-slate uppercase tracking-widest">{key}</span>
                <span className="font-semibold text-xs sm:text-sm text-yofs-cyan">{val}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
