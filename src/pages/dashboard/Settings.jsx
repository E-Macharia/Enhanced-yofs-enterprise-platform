import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { ShieldCheck, Bell, Key, Save, Check } from 'lucide-react';

export function Settings() {
  const [apiKey, setApiKey] = useState('yofs_live_qk928f01a8b9c24d8560fe28');
  const [isCopied, setIsCopied] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const [thresholds, setThresholds] = useState({
    bandwidthLimit: 85,
    tpuQuota: 90,
    ddosTolerance: 1500
  });

  const handleGenerateKey = () => {
    const chars = 'abcdef0123456789';
    let newKey = 'yofs_live_';
    for (let i = 0; i < 24; i++) {
      newKey += chars[Math.floor(Math.random() * chars.length)];
    }
    setApiKey(newKey);
    setIsCopied(false);
  };

  const handleCopyKey = () => {
    navigator.clipboard.writeText(apiKey);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold font-display text-white">SaaS Configuration & Settings</h1>
        <p className="text-xs text-yofs-slate">Configure alert parameters and fetch authentication API keys</p>
      </div>

      {saveSuccess && (
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-400 flex items-center gap-2">
          <Check className="w-4 h-4" />
          Settings successfully saved and compiled to global routing nodes.
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-10">
        {/* Metric Alert Thresholds */}
        <div className="glass-panel p-8 rounded-2xl space-y-8">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-yofs-lightnavy/50 pb-2">
            <Bell className="w-4 h-4 text-yofs-cyan" /> Alert Threshold Limits
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-yofs-lightslate uppercase">Bandwidth Notification (%)</label>
              <input
                type="number"
                min="50"
                max="100"
                value={thresholds.bandwidthLimit}
                onChange={(e) => setThresholds(prev => ({ ...prev, bandwidthLimit: Number(e.target.value) }))}
                className="w-full bg-yofs-navy/50 border border-yofs-lightnavy focus:border-yofs-cyan rounded-lg px-4 py-2 text-sm text-white focus:outline-none"
              />
              <span className="block text-[10px] text-yofs-slate">Triggers system logs if bandwidth utilization exceeds this target</span>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-semibold text-yofs-lightslate uppercase">Cognitive TPU Quota Alert (%)</label>
              <input
                type="number"
                min="50"
                max="100"
                value={thresholds.tpuQuota}
                onChange={(e) => setThresholds(prev => ({ ...prev, tpuQuota: Number(e.target.value) }))}
                className="w-full bg-yofs-navy/50 border border-yofs-lightnavy focus:border-yofs-cyan rounded-lg px-4 py-2 text-sm text-white focus:outline-none"
              />
              <span className="block text-[10px] text-yofs-slate">Triggers billing notifications before TPU core scaling events occur</span>
            </div>
          </div>
        </div>

        {/* Security / Decryption Settings */}
        <div className="glass-panel p-8 rounded-2xl space-y-8">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-yofs-lightnavy/50 pb-2">
            <ShieldCheck className="w-4 h-4 text-yofs-cyan" /> Security Policies
          </h3>

          <div className="space-y-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                defaultChecked 
                className="mt-1 rounded bg-yofs-navy border-yofs-lightnavy focus:ring-0 text-yofs-cyan"
              />
              <div>
                <span className="block text-xs font-bold text-white">Enable Quantum Key Distribution (QKD)</span>
                <span className="block text-[10px] text-yofs-slate leading-relaxed">Secures Layer 1 fiber lines using photon spin coordinates. Restarts optical junctions if decay drops below 95%.</span>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                defaultChecked 
                className="mt-1 rounded bg-yofs-navy border-yofs-lightnavy focus:ring-0 text-yofs-cyan"
              />
              <div>
                <span className="block text-xs font-bold text-white">Enable Threat Defense Auto-Block</span>
                <span className="block text-[10px] text-yofs-slate leading-relaxed">Automatically block suspect IP blocks scanning internal satellite registries.</span>
              </div>
            </label>
          </div>
        </div>

        {/* API Credentials */}
        <div className="glass-panel p-8 rounded-2xl space-y-8">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-yofs-lightnavy/50 pb-2">
            <Key className="w-4 h-4 text-yofs-cyan" /> Enterprise API Access
          </h3>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={apiKey}
                className="flex-1 bg-yofs-dark/80 border border-yofs-lightnavy rounded-lg px-4 py-2.5 text-xs text-yofs-cyan font-mono focus:outline-none"
              />
              <Button type="button" variant="secondary" size="sm" onClick={handleCopyKey}>
                {isCopied ? 'Copied' : 'Copy'}
              </Button>
            </div>
            
            <div className="flex justify-between items-center pt-2">
              <span className="text-[10px] text-yofs-slate">Warning: Generating a new key invalidates the existing credential token.</span>
              <Button type="button" variant="outline" size="sm" onClick={handleGenerateKey}>
                Regenerate Token
              </Button>
            </div>
          </div>
        </div>

        {/* Action button */}
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
          disabled={isSaving}
          icon={Save}
        >
          {isSaving ? 'Compiling configuration...' : 'Save Settings'}
        </Button>
      </form>
    </div>
  );
}
export default Settings;
