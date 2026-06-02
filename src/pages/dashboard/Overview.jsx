import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import { 
  dashboardMetrics 
} from '../../utils/mockData';
import { 
  Cpu, 
  Activity, 
  Database, 
  TrendingUp, 
  Radio, 
  AlertTriangle,
  Play,
  RotateCw,
  Plus
} from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function Overview() {
  const [feed, setFeed] = useState(dashboardMetrics.activityFeed);
  const [nodes, setNodes] = useState(dashboardMetrics.networkNodes);

  // Injects a mock event alert into the log
  const handleInjectAlert = () => {
    const alertTypes = [
      { type: 'security', message: 'Shield isolated rogue ping request on Node-Frankfurt-1', user: 'SecCore Bot', severity: 'warning' },
      { type: 'network', message: 'Bandwidth peak matched 94% on Node-Silicon-2', user: 'Traffic Agent', severity: 'warning' },
      { type: 'deployment', message: 'Edge environment variables updated across EU clusters', user: 'Config Daemon', severity: 'info' }
    ];
    const target = alertTypes[Math.floor(Math.random() * alertTypes.length)];
    const newAlert = {
      id: Date.now(),
      type: target.type,
      message: target.message,
      user: target.user,
      time: 'Just now',
      severity: target.severity
    };
    setFeed(prev => [newAlert, ...prev.slice(0, 4)]);
  };

  // Re-routes node power state (Offline/Degraded -> Online)
  const handleToggleNode = (id) => {
    setNodes(prev => prev.map(n => {
      if (n.id === id) {
        let newStatus = 'online';
        let newLoad = Math.floor(Math.random() * 40) + 40;
        if (n.status === 'online') {
          newStatus = 'degraded';
          newLoad = 15;
        } else if (n.status === 'degraded') {
          newStatus = 'offline';
          newLoad = 0;
        }
        return { ...n, status: newStatus, load: newLoad };
      }
      return n;
    }));
  };

  const getSeverityStyle = (sev) => {
    switch (sev) {
      case 'error': return 'bg-red-500/15 border-red-500/30 text-red-400';
      case 'warning': return 'bg-amber-500/15 border-amber-500/30 text-amber-400';
      case 'success': return 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400';
      default: return 'bg-yofs-cyan/15 border-yofs-cyan/30 text-yofs-cyan';
    }
  };

  return (
    <div className="space-y-12">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold font-display text-white">SaaS System Core Overview</h1>
          <p className="text-xs text-yofs-slate">Telemetry readings synced: Live</p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleInjectAlert}
          icon={Plus}
        >
          Inject Metric Log
        </Button>
      </div>

      {/* KPI metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {dashboardMetrics.kpis.map((kpi, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-yofs-cyan/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-yofs-cyan/5 rounded-bl-full pointer-events-none" />
            <span className="block text-[10px] text-yofs-slate uppercase tracking-wider mb-2 font-semibold">{kpi.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-white font-display">{kpi.value}</span>
              <span className="text-[10px] text-emerald-400 font-semibold">{kpi.change}</span>
            </div>
            <span className="block text-[10px] text-yofs-slate mt-2">{kpi.detail}</span>
          </div>
        ))}
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Core Line Area Chart */}
        <div className="lg:col-span-8 glass-panel p-8 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Bandwidth Usage (24 Hours)</h3>
              <p className="text-[10px] text-yofs-slate">Compares global edge loading vs allocated SLA line</p>
            </div>
            <div className="flex gap-4 text-[10px]">
              <span className="flex items-center gap-1 text-yofs-cyan"><span className="w-1.5 h-1.5 rounded-full bg-yofs-cyan" /> Usage</span>
              <span className="flex items-center gap-1 text-yofs-slate"><span className="w-1.5 h-1.5 rounded-full bg-yofs-slate" /> Allocated Max</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dashboardMetrics.bandwidthChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="bandwidthGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#00F0FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2E47" vertical={false} />
                <XAxis dataKey="time" stroke="#60728F" fontSize={9} />
                <YAxis stroke="#60728F" fontSize={9} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A1424', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px' }}
                  labelStyle={{ color: '#00F0FF', fontSize: '11px', fontWeight: 'bold' }}
                  itemStyle={{ color: '#E6F1FF', fontSize: '11px' }}
                />
                <Area type="monotone" dataKey="load" name="Edge usage (Tbps)" stroke="#00F0FF" strokeWidth={2} fillOpacity={1} fill="url(#bandwidthGlow)" />
                <Area type="monotone" dataKey="limit" name="SLA Limit" stroke="#334E70" strokeWidth={1} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Load Performance Chart */}
        <div className="lg:col-span-4 glass-panel p-8 rounded-2xl">
          <div className="mb-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">AI Inference Load</h3>
            <p className="text-[10px] text-yofs-slate">Task volume per weekday</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dashboardMetrics.aiLoadChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2E47" vertical={false} />
                <XAxis dataKey="day" stroke="#60728F" fontSize={9} />
                <YAxis stroke="#60728F" fontSize={9} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0A1424', border: '1px solid rgba(0, 240, 255, 0.2)', borderRadius: '8px' }}
                  itemStyle={{ color: '#00F0FF', fontSize: '11px' }}
                />
                <Bar dataKey="requests" name="Tasks (M)" fill="url(#barGradient)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7000FF" />
                    <stop offset="100%" stopColor="#00F0FF" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Network Nodes and Activity Feeds */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Nodes Status Console */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-2xl space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Active Telecom Edge Nodes</h3>
            <p className="text-[10px] text-yofs-slate">Toggle power state to test backup failover routines</p>
          </div>

          <div className="divide-y divide-yofs-lightnavy/30">
            {nodes.map((node) => (
              <div key={node.id} className="py-4 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    node.status === 'online' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30' :
                    node.status === 'degraded' ? 'bg-amber-500 shadow-lg shadow-amber-500/30' :
                    'bg-red-500 shadow-lg shadow-red-500/30'
                  }`} />
                  <div>
                    <span className="block text-xs font-bold text-white">{node.name}</span>
                    <span className="block text-[9px] text-yofs-slate">{node.region}</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="block text-xs text-white font-semibold">{node.load}%</span>
                    <span className="block text-[8px] text-yofs-slate uppercase tracking-wider">Node Load</span>
                  </div>
                  <button
                    onClick={() => handleToggleNode(node.id)}
                    className="w-7 h-7 rounded-lg border border-yofs-lightnavy bg-yofs-navy/50 flex items-center justify-center text-yofs-lightslate hover:text-yofs-cyan hover:border-yofs-cyan/30 transition-all"
                    title="Toggle Node Power"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Logs */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-2xl space-y-6">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Live System Event Log</h3>
            <p className="text-[10px] text-yofs-slate">Diagnostic event streams</p>
          </div>

          <div className="space-y-3">
            {feed.map((evt) => (
              <div key={evt.id} className={`p-3 border rounded-xl flex items-start gap-2.5 text-xs ${getSeverityStyle(evt.severity)}`}>
                {evt.severity === 'error' || evt.severity === 'warning' ? (
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                ) : (
                  <Activity className="w-4 h-4 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="leading-snug">{evt.message}</p>
                  <div className="flex items-center gap-2 mt-1.5 text-[9px] text-yofs-slate">
                    <span>Source: {evt.user}</span>
                    <span>•</span>
                    <span>{evt.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Overview;
