import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Cpu, Radio, ShieldCheck, Activity, Mic, ChevronRight, HelpCircle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { ServiceCard } from '../../components/ServiceCard';
import { servicesData } from '../../utils/mockData';

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeDetails, setActiveDetails] = useState(null);

  const categories = ['All', 'Telecom & Networks', 'Cloud & Servers', 'AI & Analytics', 'Cybersecurity', 'Enterprise & Consulting', 'Research & Development'];

  const filteredServices = selectedCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === selectedCategory);

  const handleServiceClick = (service) => {
    setActiveDetails(service.id === activeDetails ? null : service.id);
  };

  return (
    <div className="py-20 sm:py-32 px-8 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">Solutions Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white font-display">Enterprise Platform Capabilities</h1>
          <p className="text-slate-600 dark:text-yofs-slate text-sm sm:text-base leading-relaxed">
            Discover our next-generation digital cores. We build systems that integrate intelligence directly into the network substrate.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setActiveDetails(null);
              }}
              className={`text-xs px-5 py-2.5 rounded-full border transition-all duration-300 font-medium ${
                selectedCategory === cat
                  ? 'bg-yofs-cyan border-yofs-cyan text-yofs-dark font-bold shadow-lg shadow-yofs-cyan/25'
                  : 'bg-yofs-navy/50 border-yofs-lightnavy/60 text-yofs-lightslate hover:text-yofs-cyan hover:border-yofs-cyan/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredServices.map((service) => (
            <div key={service.id} className="flex flex-col">
              <ServiceCard
                title={service.title}
                icon={service.icon}
                shortDescription={service.shortDescription}
                features={service.features}
                category={service.category}
                onClick={() => handleServiceClick(service)}
              />
              
              {/* Expandable Details drawer */}
              {activeDetails === service.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="glass-panel mt-3 p-5 rounded-2xl border-t-2 border-t-yofs-cyan/60 bg-[#0E1E36] shadow-xl space-y-4"
                >
                  <h4 className="text-xs font-bold text-yofs-cyan uppercase tracking-wider">Solution Blueprint</h4>
                  <p className="text-xs text-slate-700 dark:text-yofs-lightslate leading-relaxed">{service.longDescription}</p>
                  <div className="pt-2">
                    <h5 className="text-[10px] text-slate-500 dark:text-yofs-slate font-bold uppercase tracking-wider mb-2">Technical Standards:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((f, i) => (
                        <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-yofs-dark/60 border border-yofs-lightnavy text-yofs-cyan">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Architecture CTA */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center max-w-4xl mx-auto bg-gradient-to-br from-yofs-navy/70 to-yofs-lightnavy/70 border border-yofs-cyan/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display mb-4">Require a Tailored Corporate Architecture?</h2>
          <p className="text-slate-600 dark:text-yofs-slate text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Our systems engineers can deploy bespoke network links, localized TPU models, and secure private cloud clusters matching specific jurisdictional security parameters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" size="md">
                Schedule Architecture Review
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="md">
                Read Technology Thesis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
