import React from 'react';
import { AlertOctagon, RotateCw } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function ServerError() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center p-6">
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6 animate-pulse">
        <AlertOctagon className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-bold font-display text-white mb-2">500: Satellite Handover Failure</h1>
      <p className="text-yofs-slate text-sm max-w-sm mb-8 leading-relaxed">
        The cognitive compiler encountered an execution overload while parsing telemetry packet arrays. Try refreshing the link buffer.
      </p>
      <Button variant="primary" onClick={handleReload} icon={RotateCw}>
        Refresh Link Buffer
      </Button>
    </div>
  );
}
export default ServerError;
