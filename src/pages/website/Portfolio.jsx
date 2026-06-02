import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioCard } from '../../components/PortfolioCard';
import { portfolioData } from '../../utils/mockData';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Fiber optic installations', 'Cloud deployments', 'Enterprise networking systems', 'AI dashboards', 'Cybersecurity projects', 'Data analytics platforms', 'Business transformation projects'];

  const filteredPortfolio = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(item => item.category === activeFilter);

  return (
    <div className="py-20 sm:py-32 px-8 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">Case Records</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white font-display">Enterprise Deployments</h1>
          <p className="text-slate-600 dark:text-yofs-slate text-sm sm:text-base leading-relaxed">
            Review detailed case reports from global industries utilizing our sub-millisecond networks and cognitive cores.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium ${
                activeFilter === filter
                  ? 'bg-yofs-cyan border-yofs-cyan text-yofs-dark font-bold shadow-lg shadow-yofs-cyan/25'
                  : 'bg-yofs-navy/50 border-yofs-lightnavy/60 text-yofs-lightslate hover:text-yofs-cyan hover:border-yofs-cyan/40'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Case grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredPortfolio.map((project) => (
            <div key={project.id} className="h-full">
              <PortfolioCard
                title={project.title}
                category={project.category}
                client={project.client}
                image={project.image}
                description={project.description}
                stats={project.stats}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
