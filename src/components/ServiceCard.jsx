import React from 'react';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

export function ServiceCard({ title, icon, shortDescription, features, category, onClick }) {
  const IconComponent = Icons[icon] || Icons.HelpCircle;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-panel p-6 rounded-2xl flex flex-col justify-between h-full relative overflow-hidden group cursor-pointer hover:border-yofs-cyan/50"
      onClick={onClick}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-yofs-cyan/5 rounded-bl-full transition-all duration-500 group-hover:bg-yofs-cyan/10" />
      <div>
        <div className="w-12 h-12 rounded-xl bg-yofs-cyan/10 border border-yofs-cyan/20 flex items-center justify-center text-yofs-cyan mb-6 group-hover:bg-yofs-cyan/20 group-hover:text-white transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">{category}</span>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-2 mb-3 group-hover:text-yofs-cyan transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 dark:text-yofs-slate text-sm leading-relaxed mb-6">{shortDescription}</p>
      </div>
      
      {features && (
        <ul className="space-y-2 border-t border-yofs-lightnavy pt-4">
          {features.slice(0, 3).map((feat, index) => (
            <li key={index} className="flex items-center text-xs text-slate-700 dark:text-yofs-lightslate">
              <span className="w-1.5 h-1.5 rounded-full bg-yofs-cyan mr-2" />
              {feat}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
