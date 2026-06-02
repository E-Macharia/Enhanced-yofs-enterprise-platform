import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../../components/ui/Button';
import { validateLoginForm } from '../../utils/validation';
import { ShieldCheck, Mail, Lock, Loader2, ArrowLeft } from 'lucide-react';

export function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (serverError) setServerError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Client validate
    const validation = validateLoginForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate network authentication delay
    setTimeout(() => {
      const result = login(formData.email, formData.password);
      setIsSubmitting(false);
      
      if (result.success) {
        navigate('/dashboard');
      } else {
        setServerError(result.error);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-yofs-dark flex items-center justify-center px-6 relative py-12">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-yofs-cyan/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yofs-purple/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        {/* Go back */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-xs text-yofs-lightslate hover:text-yofs-cyan transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to website
        </Link>

        {/* Card */}
        <div className="glass-panel p-8 rounded-2xl">
          <div className="text-center space-y-2 mb-8">
            <div className="w-12 h-12 rounded-xl bg-yofs-cyan/15 border border-yofs-cyan/20 flex items-center justify-center text-yofs-cyan mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-white font-display">System Core Gateway</h1>
            <p className="text-xs text-yofs-slate">
              Enter credentials to unlock administrative controls.
            </p>
          </div>

          {serverError && (
            <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
              {serverError}
            </div>
          )}

          {/* Quick instructions alert */}
          <div className="mb-6 p-3 bg-yofs-cyan/5 border border-yofs-cyan/15 rounded-xl text-[11px] text-yofs-cyan leading-relaxed">
            <span className="font-bold block uppercase tracking-wider mb-0.5">Mock Access:</span>
            Use Email: <code className="bg-yofs-dark/80 px-1 py-0.5 rounded text-white">admin@yofs.com</code> and Password: <code className="bg-yofs-dark/80 px-1 py-0.5 rounded text-white">admin123</code>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-semibold text-yofs-lightslate uppercase">Core Email</label>
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
                  } rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                  placeholder="admin@yofs.com"
                />
              </div>
              {errors.email && <p className="text-[10px] text-red-400 mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs font-semibold text-yofs-lightslate uppercase">Gate Passphrase</label>
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
                  } rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none transition-colors disabled:opacity-50`}
                  placeholder="••••••••"
                />
              </div>
              {errors.password && <p className="text-[10px] text-red-400 mt-1">{errors.password}</p>}
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              className="w-full py-3"
              disabled={isSubmitting}
              icon={isSubmitting ? Loader2 : null}
            >
              {isSubmitting ? 'Verifying Gateway Identity...' : 'Unlock Systems'}
            </Button>
          </form>

          <div className="text-center mt-6">
            <span className="text-xs text-yofs-slate">
              Need temporary security allocation?{' '}
              <Link to="/register" className="text-yofs-cyan hover:underline">
                Create user context
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
