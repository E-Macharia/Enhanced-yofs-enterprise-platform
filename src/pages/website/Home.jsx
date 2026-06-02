import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Cpu, Radio, Shield, Users, Activity, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { ServiceCard } from '../../components/ServiceCard';
import { TestimonialCard } from '../../components/TestimonialCard';
import { servicesData, testimonialsData } from '../../utils/mockData';

export function Home() {
  const navigate = useNavigate();

  // Preview first 3 services
  const featuredServices = servicesData.slice(0, 3);
  // Preview first 2 testimonials
  const featuredTestimonials = testimonialsData.slice(0, 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-36 sm:pt-32 sm:pb-48 px-8 sm:px-12">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-yofs-cyan/10 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-10 right-1/10 w-[450px] h-[450px] bg-yofs-purple/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10 w-full">
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yofs-cyan/10 border border-yofs-cyan/20 text-yofs-cyan text-xs font-semibold uppercase tracking-wider"
            >
              <Radio className="w-3.5 h-3.5 animate-pulse text-yofs-cyan" />
              Autonomous 6G Networks & Cognitive Cloud
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]"
            >
              Architecting the <br />
              <span className="text-gradient">Cognitive Core</span> of <br />
              Enterprise Telecommunications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-yofs-slate text-base sm:text-lg leading-relaxed max-w-xl"
            >
              YOFS integrates decentralized AI model clusters directly within sub-millisecond quantum fiber backbones, enabling autonomous scaling, threat isolation, and digital twins at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/services')}
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Tech Stack
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/login')}
              >
                Access SaaS Portal
              </Button>
            </motion.div>
          </div>

          {/* Hero abstract graphic */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-[400px] h-[400px] relative"
            >
              {/* Spinning core */}
              <div className="absolute inset-0 rounded-full border border-yofs-cyan/20 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-8 rounded-full border border-dashed border-yofs-purple/30 animate-[spin_8s_linear_infinite_reverse]" />
              <div className="absolute inset-16 rounded-full border border-yofs-cyan/15 animate-[spin_20s_linear_infinite]" />
              
              {/* Glass Center */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-tr from-yofs-navy/90 to-[#1e345e]/90 backdrop-blur-xl border border-yofs-cyan/30 flex flex-col items-center justify-center text-center p-6 shadow-2xl animate-pulse-slow">
                <Cpu className="w-10 h-10 text-yofs-cyan mb-2" />
                <span className="text-xs text-yofs-cyan font-bold tracking-widest uppercase">YOFS CORE</span>
                <span className="text-2xl font-bold text-white mt-1">99.999%</span>
                <span className="text-[9px] text-yofs-slate uppercase tracking-wider">Uptime Assured</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-20 sm:py-28 bg-yofs-navy/30 border-y border-yofs-lightnavy/40 relative z-10 px-8 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Latency SLA', val: '< 0.9ms' },
            { label: 'Active Edge Nodes', val: '1.4M+' },
            { label: 'Network Bandwidth', val: '410 Tbps' },
            { label: 'Decentralized Qubits', val: '2,048 Q' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center md:text-left border-l border-yofs-lightnavy/60 pl-6">
              <span className="block text-xs uppercase tracking-widest text-yofs-slate mb-1">{stat.label}</span>
              <span className="text-2xl sm:text-4xl font-bold text-gradient font-display">{stat.val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-32 sm:py-48 px-8 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">Enterprise Offerings</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-display">Core Digital Transformatives</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm text-yofs-cyan hover:text-white transition-colors group">
              View all capabilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
          >
            {featuredServices.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  shortDescription={service.shortDescription}
                  features={service.features}
                  category={service.category}
                  onClick={() => navigate('/services')}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate Overview Grid */}
      <section className="py-32 sm:py-44 bg-yofs-navy/10 border-t border-yofs-lightnavy/30 px-8 sm:px-12 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-8">
            <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">System Overview</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">Reimagining Telecom Layer 1 to Layer 7</h2>
            <p className="text-yofs-slate text-sm sm:text-base leading-relaxed">
              We design and construct custom networks from physical optoelectronic routers to application-layer generative AI micro-models. This absolute control ensures that security profiles, speed guarantees, and billing records align synchronously.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-yofs-cyan/15 border border-yofs-cyan/20 flex items-center justify-center text-yofs-cyan shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Quantum Key Defense</h4>
                  <p className="text-xs text-yofs-slate leading-relaxed">Hardware keys encoded inside photon alignments blocking mathematical decryption.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-yofs-purple/15 border border-yofs-purple/20 flex items-center justify-center text-yofs-purple shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Self-Healing Edge Meshes</h4>
                  <p className="text-xs text-yofs-slate leading-relaxed">Automatic request rerouting during localized cable cuts or satellite disruptions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <Users className="w-8 h-8 text-yofs-cyan" />
              <h3 className="text-lg font-bold text-white">Dedicated Support SLA</h3>
              <p className="text-xs text-yofs-slate leading-relaxed">
                Direct telecom routing straight to specialized systems engineering nodes, bypassing basic customer queues entirely.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <BarChart className="w-8 h-8 text-yofs-purple" />
              <h3 className="text-lg font-bold text-white">Real-Time Audits</h3>
              <p className="text-xs text-yofs-slate leading-relaxed">
                Log network activity, data transfers, and AI operations directly into dashboard databases for auditable compliance reporting.
              </p>
            </div>
            <div className="glass-panel p-6 rounded-2xl sm:col-span-2 text-center flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-yofs-navy/80 to-yofs-lightnavy/80">
              <h4 className="text-lg font-semibold text-yofs-cyan">Ready to integrate?</h4>
              <p className="text-xs text-yofs-slate max-w-sm mt-1 mb-4">
                Unlock high-fidelity telemetry feeds, configure alert pipelines, and configure Gidi AI cores now.
              </p>
              <Button variant="outline" size="sm" onClick={() => navigate('/contact')}>
                Consult Architect
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-32 sm:py-48 px-8 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">Client Endorsements</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">Validated at Enterprise Scale</h2>
            <p className="text-yofs-slate text-sm">
              Discover how CTOs and heads of infrastructure are accelerating their backends using YOFS services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-5xl mx-auto">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
