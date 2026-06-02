// YOFS Enterprise Platform - Mock Data Source

export const servicesData = [
  // Category: Telecom & Networks
  {
    id: 'fiber-optic-cabling',
    title: 'Fiber Optic Cabling',
    icon: 'Radio',
    shortDescription: 'Industrial fiber infrastructure deployment featuring low dispersion and high durability cores.',
    longDescription: 'High-density fiber networks deployed across campus and metropolitan nodes, delivering high bandwidth scalability and structural resilience.',
    category: 'Telecom & Networks',
    features: ['Single-mode and multi-mode installations', 'Fusion splicing optimization', 'OTDR loss characterization']
  },
  {
    id: 'telecom-solutions',
    title: 'Telecommunications Solutions',
    icon: 'Radio',
    shortDescription: 'Enterprise VoIP, SD-WAN, and secure carrier integrations.',
    longDescription: 'Managed telecommunication pipelines integrating satellite relays and core cellular gateways for continuous communication channels.',
    category: 'Telecom & Networks',
    features: ['SIP Trunking scalability', 'Unified communications (UCaaS)', 'Satellite handover protocols']
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    icon: 'Network',
    shortDescription: 'Designing physical routing structures and high-speed switches.',
    longDescription: 'End-to-end design and installation of enterprise network switches, optical rings, and multi-gigabit access nodes.',
    category: 'Telecom & Networks',
    features: ['Optoelectronic transceiver mapping', 'Hardware failover structures', 'Dynamic capacity routing']
  },
  {
    id: 'network-management',
    title: 'Network Management Services',
    icon: 'Activity',
    shortDescription: 'Managed operations monitoring core bandwidth flows and network health.',
    longDescription: '24/7 network operations center checking for latency drops, packet losses, and hardware overheating logs.',
    category: 'Telecom & Networks',
    features: ['eBPF kernel telemetry tracing', 'Automated bandwidth shaping', 'Real-time alert routing']
  },
  {
    id: 'lan-wan-solutions',
    title: 'LAN/WAN Solutions',
    icon: 'Layers',
    shortDescription: 'Local and wide area networks built for rapid data transmission.',
    longDescription: 'Segmented local networking layers combined with global software-defined wide area transport mesh pipelines.',
    category: 'Telecom & Networks',
    features: ['VLAN division architectures', 'SD-WAN traffic scheduling', 'Zero packet loss pathways']
  },
  {
    id: 'wireless-networking',
    title: 'Wireless Networking',
    icon: 'Wifi',
    shortDescription: 'Secure high-density corporate Wi-Fi and 5G cellular access links.',
    longDescription: 'Deployment of corporate wireless systems using the latest protocols to support dense device clusters without drops.',
    category: 'Telecom & Networks',
    features: ['Enterprise Wi-Fi 7 routing', 'Private LTE / 5G core networks', 'Signal decay heatmap profiling']
  },
  {
    id: 'internet-solutions',
    title: 'Internet Solutions',
    icon: 'Globe',
    shortDescription: 'Dedicated Internet Access (DIA) lines with guaranteed SLAs.',
    longDescription: 'Symmetric high-speed commercial connections linking corporate headquarters directly to subsea transit lines.',
    category: 'Telecom & Networks',
    features: ['Symmetric gigabit bandwidth', '99.999% SLA availability', 'Direct peering with major CDNs']
  },

  // Category: Cloud & Servers
  {
    id: 'cloud-hosting',
    title: 'Cloud Hosting',
    icon: 'Cloud',
    shortDescription: 'Decentralized container hosting running on cognitive TPU arrays.',
    longDescription: 'Fully managed cloud application nodes deploying scalable, containerized micro-services with geo-aware request routing.',
    category: 'Cloud & Servers',
    features: ['Kubernetes cluster scaling', 'Multi-region replica caching', 'Auto-mitigated server starts']
  },
  {
    id: 'vps-hosting',
    title: 'VPS Hosting',
    icon: 'Server',
    shortDescription: 'Dedicated virtual servers with direct hypervisor administration.',
    longDescription: 'Private virtual nodes with high performance SSD partitions and direct kernel configurations.',
    category: 'Cloud & Servers',
    features: ['Isolated host nodes', 'Root terminal dashboard', 'Instant resource provisioning']
  },
  {
    id: 'server-management',
    title: 'Server Management',
    icon: 'Cpu',
    shortDescription: 'Proactive operating system patching, tracking, and recovery.',
    longDescription: 'Managed systems engineering maintaining host nodes, running backup intervals, and deploying OS patches.',
    category: 'Cloud & Servers',
    features: ['Ansible automated playbooks', 'Resource capacity reporting', 'Kernel patch deployment']
  },
  {
    id: 'backup-disaster-recovery',
    title: 'Backup & Disaster Recovery',
    icon: 'HardDrive',
    shortDescription: 'Redundant file archiving with sub-minute switch overrides.',
    longDescription: 'Continuous byte-level synchronization to multiple remote locations, allowing rapid node failovers in the event of local hardware outages.',
    category: 'Cloud & Servers',
    features: ['Byte-level snapshot records', 'RTO under 60 seconds', 'Zero-knowledge database vaults']
  },

  // Category: AI & Analytics
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    icon: 'BarChart',
    shortDescription: 'Converting complex log pools into clear actionable dashboards.',
    longDescription: 'Analyzing large-scale data logs to extract structural performance insights, using custom models to identify trends.',
    category: 'AI & Analytics',
    features: ['Complex log processing', 'Anomaly correlation algorithms', 'Visual telemetry reports']
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    icon: 'PieChart',
    shortDescription: 'Live analytics dashboard layers monitoring corporate metrics.',
    longDescription: 'Enterprise reporting pipelines integrating database metrics into interactive widgets to support operational planning.',
    category: 'AI & Analytics',
    features: ['Dynamic widget builder', 'Multi-source database feeds', 'Executive summary exports']
  },
  {
    id: 'ai-automation',
    title: 'AI Automation',
    icon: 'Brain',
    shortDescription: 'Automating high-volume database entry and customer support channels.',
    longDescription: 'Deploying deep learning agents inside legacy workflows to automate document parsing, sorting, and communications.',
    category: 'AI & Analytics',
    features: ['RAG workflow models', 'Automated document indexing', 'Process friction minimization']
  },
  {
    id: 'machine-learning-solutions',
    title: 'Machine Learning Solutions',
    icon: 'Cpu',
    shortDescription: 'Custom model development matching predictive maintenance demands.',
    longDescription: 'Custom model training and deployment matching predictive maintenance demands and system load forecasts.',
    category: 'AI & Analytics',
    features: ['Custom weights compilation', 'Edge model execution wrappers', 'Real-time telemetry inference']
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    icon: 'Bot',
    shortDescription: 'Stateful cognitive agents carrying out complex back-office workflows.',
    longDescription: 'Autonomous software systems built with cognitive reasoning capabilities to manage databases, parse files, and coordinate actions.',
    category: 'AI & Analytics',
    features: ['Stateful goal resolution', 'Secure API call hooks', 'Audit logging systems']
  },
  {
    id: 'dashboard-development',
    title: 'Dashboard Development',
    icon: 'LayoutDashboard',
    shortDescription: 'Designing sleek and modern user control consoles.',
    longDescription: 'Front-end engineering creating high-performance interactive interfaces, featuring real-time data visualizers.',
    category: 'AI & Analytics',
    features: ['React-based custom layouts', 'Websocket live updates', 'Mobile viewport scaling']
  },

  // Category: Cybersecurity
  {
    id: 'cybersecurity-solutions',
    title: 'Cybersecurity Solutions',
    icon: 'Shield',
    shortDescription: 'Multi-layered corporate defense systems using proactive shields.',
    longDescription: 'Intrusion detection systems deployed at the hardware and virtualization layers, monitoring data flows to block threats.',
    category: 'Cybersecurity',
    features: ['eBPF kernel-level detection', 'Automated network sandboxes', 'Active defense models']
  },
  {
    id: 'digital-forensics',
    title: 'Digital Forensics',
    icon: 'Search',
    shortDescription: 'Deconstruct incident roots to detail exploit actions.',
    longDescription: 'Post-incident analysis reconstructing memory contents, log registries, and file alterations to trace threat vectors.',
    category: 'Cybersecurity',
    features: ['Memory dump analysis', 'Log timeline reconstruction', 'Proof of origin identification']
  },
  {
    id: 'security-audits',
    title: 'Security Audits',
    icon: 'FileText',
    shortDescription: 'Evaluating systems compliance against ISO 27001 standards.',
    longDescription: 'Comprehensive scanning of network architectures, code directories, and system configurations to discover vulnerabilities.',
    category: 'Cybersecurity',
    features: ['Vulnerability scans', 'Configuration security reviews', 'Compliance gap analysis']
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    icon: 'ShieldAlert',
    shortDescription: 'Rapid threat containment and recovery services.',
    longDescription: 'On-demand security response units stepping in to contain active malware threats, block compromised keys, and restore services.',
    category: 'Cybersecurity',
    features: ['Containment under 15 minutes', 'System root recovery', 'Threat mitigation briefings']
  },

  // Category: Enterprise & Consulting
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    icon: 'Activity',
    shortDescription: 'Scrutinizing operational workflows to uncover optimization potential.',
    longDescription: 'Auditing back-office communication paths and database integrations to identify system inefficiencies.',
    category: 'Enterprise & Consulting',
    features: ['Friction mapping', 'Resource bottleneck checks', 'ROI forecast models']
  },
  {
    id: 'enterprise-consulting',
    title: 'Enterprise Consulting',
    icon: 'Users',
    shortDescription: 'Strategic alignment sessions to map modern infrastructure upgrades.',
    longDescription: 'High-level advisory sessions detailing technology roadmaps, system scaling models, and budgeting parameters.',
    category: 'Enterprise & Consulting',
    features: ['Technology scaling design', 'Migration feasibility reports', 'SLA definition maps']
  },
  {
    id: 'erp-crm-solutions',
    title: 'ERP & CRM Solutions',
    icon: 'Database',
    shortDescription: 'Seamless implementation of custom management frameworks.',
    longDescription: 'Designing and deploying integrated business management panels to track resources, log client histories, and automate invoicing.',
    category: 'Enterprise & Consulting',
    features: ['Data migration bridges', 'Custom module development', 'Cross-platform sync APIs']
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    icon: 'Activity',
    shortDescription: 'Migrating manual processes to stateful online layers.',
    longDescription: 'Assisting legacy brands in redesigning their core structures, introducing cloud solutions and automated tools.',
    category: 'Enterprise & Consulting',
    features: ['Legacy server migration', 'API integration audits', 'Continuous training programs']
  },

  // Category: Research & Development
  {
    id: 'technology-research',
    title: 'Technology Research',
    icon: 'Search',
    shortDescription: 'Investigating next-generation telecommunication technologies.',
    longDescription: 'Investigative studies testing physical signal decay parameters in experimental materials and satellite layouts.',
    category: 'Research & Development',
    features: ['Advanced material testing', 'Signal decay benchmarking', 'Academic paper briefs']
  },
  {
    id: 'ai-research',
    title: 'AI Research',
    icon: 'Brain',
    shortDescription: 'Developing novel transformer architectures and pruning routines.',
    longDescription: 'Developing customized deep learning architectures and hardware-level optimization matrices to compress model footprint.',
    category: 'Research & Development',
    features: ['Transformer optimization', 'Context windows testing', 'Hardware acceleration scripts']
  },
  {
    id: 'market-research',
    title: 'Market Research',
    icon: 'BarChart',
    shortDescription: 'Detailing competitor network footprints and spectrum availability.',
    longDescription: 'Exhaustive surveys mapping regional cellular bands, fiber ownership structures, and service gaps.',
    category: 'Research & Development',
    features: ['Cellular band analysis', 'Competitor feature grids', 'Market demand forecasts']
  },
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    icon: 'HelpCircle',
    shortDescription: 'Providing direct engineering responses to specialized network questions.',
    longDescription: 'Dedicated systems advice helping teams design local switches and secure database connection lanes.',
    category: 'Research & Development',
    features: ['Direct developer calls', 'Architectural reviews', 'Integration checkups']
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: 'Code',
    shortDescription: 'Building high-performance custom application logic.',
    longDescription: 'Writing compiled applications utilizing modern architectures to deliver low-overhead calculations.',
    category: 'Research & Development',
    features: ['Optimized source bundles', 'Comprehensive API design', 'Automated testing routines']
  },
  {
    id: 'enterprise-integration',
    title: 'Enterprise Systems Integration',
    icon: 'Layers',
    shortDescription: 'Unifying disparate databases via real-time message brokers.',
    longDescription: 'Linking old systems and modern cloud servers together using event streams and message queue brokers.',
    category: 'Research & Development',
    features: ['Message queue deployment', 'Data sync validations', 'Legacy adapter scripting']
  }
];

export const portfolioData = [
  {
    id: 'subsea-fiber-optic',
    title: 'Global Subsea Fiber Interconnect',
    category: 'Fiber optic installations',
    client: 'TransPacific Transit Co.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800',
    description: 'Designed and deployed a stateful low-dispersion fiber link connecting California to Tokyo with redundant orbital satellite handover routes.',
    stats: { speed: '240 Tbps', latency: '0.82ms', distance: '8,200 km' }
  },
  {
    id: 'multi-region-cloud',
    title: 'Cognitive Multi-Region Cloud Node',
    category: 'Cloud deployments',
    client: 'Nexus Financial Systems',
    image: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=800',
    description: 'Constructed an auto-scaling Kubernetes cluster deployed over 4 global zones featuring zero-cold start nodes and decentralized backups.',
    stats: { nodes: '12,000+', uptime: '99.9997%', loadTime: 'Sub-ms' }
  },
  {
    id: 'sd-wan-mesh',
    title: 'Global SD-WAN Mesh Overlay',
    category: 'Enterprise networking systems',
    client: 'Vanguard Industrial Corp.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    description: 'Implemented a software-defined wide area network linking 140 remote manufacturing sites with stateful failover routines.',
    stats: { locations: '140 sites', packetLoss: '0.00%', bandwidth: '10 Gbps' }
  },
  {
    id: 'saas-controller-ui',
    title: 'Gidi SaaS Controller UI',
    category: 'AI dashboards',
    client: 'YOFS Systems Core',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    description: 'Developed an administrative SaaS portal featuring real-time websocket metrics, KPI cards, and event injectors.',
    stats: { refresh: '100ms', widgets: '42 modules', charts: 'Recharts' }
  },
  {
    id: 'quantum-key-blockade',
    title: 'Quantum Key Distribution Blockade',
    category: 'Cybersecurity projects',
    client: 'Apex Defense Labs',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    description: 'Deployed a physical layer security protocol encoding encryption keys inside photon spins to prevent decryption scanners.',
    stats: { keyRate: '128 kbps', decay: '2.4%', integrity: '100%' }
  },
  {
    id: 'telemetry-pipeline',
    title: 'Sub-ms Real-time Telemetry Pipeline',
    category: 'Data analytics platforms',
    client: 'AeroSpace Global LLC',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    description: 'Built a real-time event analytics dashboard handling over 10 million concurrent signal logs per minute.',
    stats: { ingest: '10M/min', delay: '< 0.5ms', nodes: '1,200' }
  },
  {
    id: 'digital-twin-shipping',
    title: 'Digital Twin Shipping Simulation',
    category: 'Business transformation projects',
    client: 'Atlantic Cargo Matrix',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
    description: 'Created a high-fidelity physical simulation of ship hulls and weather patterns to forecast arrival windows.',
    stats: { fuelSave: '18.4%', accuracy: '96.2%', efficiency: '+22%' }
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: 'Dr. Evelyn Vance',
    role: 'Chief Technology Officer',
    company: 'Nexus Dynamics',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    quote: 'YOFS has completely overhauled our digital backend. Their Quantum Fiber backbone dropped our cross-ocean backup sync times from hours to seconds.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Director of Security Systems',
    company: 'Vanguard Aerospace',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    quote: 'We operate under highly sensitive regulatory frameworks. The YOFS Zero-Trust Shield blockaded three separate highly advanced persistent threats within its first week.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Chen',
    role: 'Head of Infrastructure',
    company: 'NeoWare Robotics',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    quote: 'Our fleet of robotics relies heavily on edge compute models. Deploying the YOFS Edge Mesh has saved us substantial cloud egress billing while improving control latency.',
    rating: 5
  }
];

export const dashboardMetrics = {
  kpis: [
    { label: 'Active Edge Nodes', value: '1,420,938', change: '+12.4%', changeType: 'increase', detail: 'Online global nodes' },
    { label: 'Network Bandwidth', value: '412.8 Tbps', change: '+8.2%', changeType: 'increase', detail: 'Real-time traffic load' },
    { label: 'AI Inference Tasks', value: '82.4M', change: '+32.1%', changeType: 'increase', detail: 'Last 24 hours' },
    { label: 'Active SaaS Clients', value: '8,941', change: '+4.5%', changeType: 'increase', detail: 'Enterprise tiers' }
  ],
  bandwidthChart: [
    { time: '00:00', load: 120, limit: 500, cost: 42 },
    { time: '03:00', load: 80, limit: 500, cost: 38 },
    { time: '06:00', load: 190, limit: 500, cost: 45 },
    { time: '09:00', load: 380, limit: 500, cost: 72 },
    { time: '12:00', load: 450, limit: 500, cost: 89 },
    { time: '15:00', load: 410, limit: 500, cost: 82 },
    { time: '18:00', load: 360, limit: 500, cost: 68 },
    { time: '21:00', load: 240, limit: 500, cost: 50 }
  ],
  aiLoadChart: [
    { day: 'Mon', requests: 42.1, latency: 48 },
    { day: 'Tue', requests: 45.4, latency: 44 },
    { day: 'Wed', requests: 58.9, latency: 52 },
    { day: 'Thu', requests: 62.4, latency: 49 },
    { day: 'Fri', requests: 75.8, latency: 41 },
    { day: 'Sat', requests: 80.2, latency: 39 },
    { day: 'Sun', requests: 82.4, latency: 38 }
  ],
  activityFeed: [
    { id: 1, type: 'security', message: 'Shield core blocked anomalous IP scan on Node-Tokyo-42', user: 'System Defense', time: '2 mins ago', severity: 'warning' },
    { id: 2, type: 'deployment', message: 'Edge code version 2.4.9 successfully distributed to all clusters', user: 'Jenkins Bot', time: '12 mins ago', severity: 'info' },
    { id: 3, type: 'billing', message: 'Nexus Dynamics upgraded subscription tier to Unlimited Cognitive Cloud', user: 'Stripe Hook', time: '1 hour ago', severity: 'success' },
    { id: 4, type: 'network', message: 'Node-London-3 degraded due to localized ISP fiber cutover', user: 'Network Daemon', time: '3 hours ago', severity: 'error' }
  ],
  networkNodes: [
    { id: 'node-tokyo', name: 'Tokyo-Core-1', region: 'Asia-East', load: 78, status: 'online' },
    { id: 'node-silicon', name: 'SV-Core-2', region: 'US-West', load: 92, status: 'online' },
    { id: 'node-frankfurt', name: 'Frankfurt-Core-1', region: 'EU-Central', load: 45, status: 'online' },
    { id: 'node-london', name: 'London-Edge-3', region: 'EU-West', load: 12, status: 'degraded' },
    { id: 'node-sydney', name: 'Sydney-Edge-1', region: 'AP-South', load: 0, status: 'offline' }
  ]
};
