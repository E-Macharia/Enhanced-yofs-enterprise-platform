import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center p-6">
      <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
        <HelpCircle className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-bold font-display text-white mb-2">404: Node Disconnected</h1>
      <p className="text-yofs-slate text-sm max-w-sm mb-8 leading-relaxed">
        The system routing tables could not locate the requested page context. Check the address string and try again.
      </p>
      <Button variant="primary" onClick={() => navigate('/')} icon={ArrowLeft}>
        Return to Core Net
      </Button>
    </div>
  );
}
export default NotFound;
