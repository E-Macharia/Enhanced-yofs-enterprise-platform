import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/Button';
import { validateRegisterForm } from '../../utils/validation';
import { ShieldAlert, UserPlus, Mail, Lock, User, Loader2, ArrowLeft } from 'lucide-react';

export function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (serverError) setServerError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    const validation = validateRegisterForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const result = register(formData.name, formData.email, formData.password);
      setIsSubmitting(false);
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setServerError('Identity registration failed. Please try again.');
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-yofs-dark flex items-center justify-center px-6 relative py-12">
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-yofs-cyan/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yofs-purple/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-xs text-yofs-lightslate hover:text-yofs-cyan transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to website
        </Link>

        <div className="glass-panel p-8 rounded-2xl">
          <div className="text-center space-y-2 mb-8">
            <div className="w-12 h-12 rounded-xl bg-yofs-cyan/15 border border-yofs-cyan/20 flex items-center justify-center text-yofs-cyan mx-auto mb-4">
              <UserPlus className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white font-display">Identity Provisioning</h1>
            <p className="text-xs text-yofs-slate">
              Provision a new user context on the YOFS platform.
            </p>
          </div>

          {serverError && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-[10px] font-semibold text-yofs-lightslate uppercase">Operator Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yofs-slate" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-yofs-navy/50 border ${
                    errors.name ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                  } rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                  placeholder="Jane Doe"
                />
              </div>
              {errors.name && <p className="text-[9px] text-red-400 mt-0.5">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-[10px] font-semibold text-yofs-lightslate uppercase">Operator Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yofs-slate" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-yofs-navy/50 border ${
                    errors.email ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                  } rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                  placeholder="jane@company.com"
                />
              </div>
              {errors.email && <p className="text-[9px] text-red-400 mt-0.5">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-[10px] font-semibold text-yofs-lightslate uppercase">Provision Passphrase</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yofs-slate" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-yofs-navy/50 border ${
                    errors.password ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                  } rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                  placeholder="Min 6 characters"
                />
              </div>
              {errors.password && <p className="text-[9px] text-red-400 mt-0.5">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label htmlFor="confirmPassword" className="block text-[10px] font-semibold text-yofs-lightslate uppercase">Verify Passphrase</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yofs-slate" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full bg-yofs-navy/50 border ${
                    errors.confirmPassword ? 'border-red-500/60 focus:border-red-500' : 'border-yofs-lightnavy focus:border-yofs-cyan'
                  } rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                  placeholder="Repeat passphrase"
                />
              </div>
              {errors.confirmPassword && <p className="text-[9px] text-red-400 mt-0.5">{errors.confirmPassword}</p>}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              className="w-full py-2.5 mt-4"
              disabled={isSubmitting}
              icon={isSubmitting ? Loader2 : null}
            >
              {isSubmitting ? 'Registering Operator Signal...' : 'Register Operator'}
            </Button>
          </form>

          <div className="text-center mt-6">
            <span className="text-xs text-yofs-slate">
              Already have security contexts?{' '}
              <Link to="/login" className="text-yofs-cyan hover:underline">
                Portal sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
