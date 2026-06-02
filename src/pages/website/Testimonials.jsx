import React from 'react';
import { TestimonialCard } from '../../components/TestimonialCard';
import { testimonialsData } from '../../utils/mockData';
import { Button } from '../../components/ui/Button';

export function Testimonials() {
  return (
    <div className="py-20 sm:py-32 px-8 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">Client Feedback</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white font-display">Endorsed by Tech Architects</h1>
          <p className="text-slate-600 dark:text-yofs-slate text-sm sm:text-base leading-relaxed">
            Read comprehensive evaluations of our services by chief technology officers and infrastructure specialists.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                rating={testimonial.rating}
                avatar={testimonial.avatar}
              />
            </div>
          ))}
        </div>

        {/* Feedback invitation box */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center max-w-2xl mx-auto bg-gradient-to-tr from-yofs-navy/80 to-yofs-lightnavy/80 mt-20 sm:mt-32">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">Partner with YOFS</h3>
          <p className="text-xs text-slate-600 dark:text-yofs-slate mb-6">
            Are you currently running YOFS edge networks or AI clouds? Share your telemetry gains with the architectural community.
          </p>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => alert('Simulated review contribution hook.')}
          >
            Submit System Audit Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
