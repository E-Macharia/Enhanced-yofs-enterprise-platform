import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { validateContactForm } from '../../utils/validation';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear specific error once user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate server POST request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success banner after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="py-20 sm:py-32 px-8 sm:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-semibold text-yofs-cyan uppercase tracking-widest">Connect Matrix</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white font-display">Contact Engineering & Sales</h1>
          <p className="text-slate-600 dark:text-yofs-slate text-sm sm:text-base leading-relaxed">
            Reach out to establish network allocations, configure dedicated cloud TPU slices, or schedule security reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 max-w-6xl mx-auto items-start">
          {/* Info Details */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass-panel p-8 rounded-2xl space-y-8">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 border-b border-yofs-lightnavy/50 pb-2">Direct Gateways</h3>
              
              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-yofs-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-yofs-slate uppercase tracking-wider">Email Transit</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">architect@yofs.com</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-yofs-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-yofs-slate uppercase tracking-wider">Vocal Link</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">+1 (555) 606-YOFS</span>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-yofs-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-500 dark:text-yofs-slate uppercase tracking-wider">Physical Junction</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-white">Quantum Tower Suite 42,<br />Silicon Heights, CA</span>
                </div>
              </div>
            </div>

            {/* Simulated Live System Health */}
            <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-emerald-500 bg-emerald-500/5 mt-8">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-white uppercase block">Core Gateway Uptime</span>
                  <span className="text-[10px] text-slate-500 dark:text-yofs-slate">All nodes executing within nominal bounds</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Dispatch Message</h3>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div className="text-xs">
                    <span className="block font-bold">Transmission Logged Successfully</span>
                    <span className="text-[10px] text-emerald-400/80">Our systems engineer nodes will process your message shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-semibold text-yofs-lightslate uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full bg-yofs-navy/50 border ${
                        errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                      } rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                      placeholder="Jane Doe"
                    />
                    {errors.name && <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1"><ShieldAlert className="w-3 h-3" />{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-semibold text-yofs-lightslate uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full bg-yofs-navy/50 border ${
                        errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                      } rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                      placeholder="jane@company.com"
                    />
                    {errors.email && <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1"><ShieldAlert className="w-3 h-3" />{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-semibold text-yofs-lightslate uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full bg-yofs-navy/50 border ${
                      errors.subject ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                    } rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                    placeholder="E.g., Quantum Fiber allocation"
                  />
                  {errors.subject && <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1"><ShieldAlert className="w-3 h-3" />{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-yofs-lightslate uppercase tracking-wider">Message Description</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full bg-yofs-navy/50 border ${
                      errors.message ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                    } rounded-lg px-4 py-3 text-sm text-white focus:outline-none transition-colors disabled:opacity-50 resize-none`}
                    placeholder="Outline your systems target and required integrations..."
                  ></textarea>
                  {errors.message && <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1"><ShieldAlert className="w-3 h-3" />{errors.message}</p>}
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={isSubmitting ? Loader2 : null}
                >
                  {isSubmitting ? 'Transmitting Core Signal...' : 'Transmit Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
