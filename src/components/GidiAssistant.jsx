import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Paperclip, Mic, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Live Emoji AI Agent Avatar representing GIDI
function GidiLiveAvatar({ size = 'md' }) {
  const containerSize = size === 'sm' ? 'w-8 h-8' : 'w-10 h-10';
  const emojiSize = size === 'sm' ? 'text-sm' : 'text-lg';
  
  return (
    <div className={`relative ${containerSize} rounded-full bg-gradient-to-tr from-yofs-cyan/20 to-yofs-purple/20 border border-yofs-cyan/35 flex items-center justify-center shadow-lg shadow-yofs-cyan/10 shrink-0 group`}>
      {/* Pulsing glow ring backdrop */}
      <span className="absolute inset-0 rounded-full bg-yofs-cyan/25 animate-ping opacity-60 pointer-events-none" style={{ animationDuration: '3s' }} />
      {/* Online indicator dot */}
      <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-[#0A1424] shadow-md" />
      {/* Bobbing chatbot emoji */}
      <span className={`animate-bounce ${emojiSize}`} style={{ animationDuration: '2.5s', display: 'inline-block' }}>
        🤖
      </span>
    </div>
  );
}

export function GidiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Welcome to YOFS. I am Gidi, your cognitive systems assistant. How can I assist you with our AI or network solutions today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Interactive File Upload refs and state
  const fileInputRef = useRef(null);
  const [attachedFile, setAttachedFile] = useState(null);

  // Voice recording simulation state
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(3);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Voice recording timer effect
  useEffect(() => {
    let interval = null;
    if (isRecording) {
      setRecordingSeconds(3);
      interval = setInterval(() => {
        setRecordingSeconds(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsRecording(false);
            
            // Populates input box with a simulated query
            const voiceQueries = [
              "Show me the status of the network nodes",
              "Tell me about Quantum 6G Security",
              "How do I log in to the SaaS dashboard"
            ];
            const randomQuery = voiceQueries[Math.floor(Math.random() * voiceQueries.length)];
            setInputValue(randomQuery);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const presetQuestions = [
    'What is YOFS?',
    'What technology do you use?',
    'Tell me about Quantum 6G Security',
    'How do I log in?'
  ];

  const getBotResponse = (text) => {
    const query = text.toLowerCase();
    
    if (query.includes('what is yofs') || query.includes('who are you') || query.includes('company')) {
      return "YOFS is a futuristic digital transformation company blending Cognitive AI Cloud architectures with secure, quantum-encrypted 6G telecommunications infrastructure.";
    }

    if (query.includes('technology') || query.includes('tech stack') || query.includes('how does it work') || query.includes('behind') || query.includes('substrate')) {
      return "YOFS operates on four pillars: (1) Quantum 6G Fiber Optics, (2) Cognitive AI Cloud routing, (3) Decentralized Edge Mesh computing clusters, and (4) Real-time Industrial Digital Twins. We weave neural processing directly into the networking layer.";
    }

    if (query.includes('6g') || query.includes('quantum') || query.includes('fiber') || query.includes('encryption') || query.includes('security') || query.includes('cryptography')) {
      return "Our physical lines utilize Dense Wavelength Division Multiplexing (DWDM) fiber optic cabling. For security, we layer on Quantum Key Distribution (QKD) protocols. Because intercepting quantum states collapses the data, our communication pipelines are completely impervious to eavesdropping.";
    }

    if (query.includes('ai') || query.includes('artificial intelligence') || query.includes('cognitive') || query.includes('neural') || query.includes('agent')) {
      return "We integrate custom Cognitive Neural Processors (CNPs) inside our datacenter hubs. These host autonomous AI agents that monitor telemetric signals, perform proactive load balances, and block security threats before they affect client systems.";
    }

    if (query.includes('edge') || query.includes('mesh') || query.includes('nodes') || query.includes('latency')) {
      return "Our Distributed Edge Mesh uses localized node networks (like Node Tokyo-42 or Frankfurt-1) to cache and process telemetry close to devices. By reducing the reliance on central data hubs, we achieve roundtrip speeds below 1 millisecond.";
    }

    if (query.includes('digital twin') || query.includes('twins') || query.includes('telemetry') || query.includes('virtualization')) {
      return "Industrial Digital Twins construct virtual, high-fidelity real-time models of physical logistics, shipping channels, and telecommunications clusters, letting operators test failover scenarios without risk.";
    }
    
    if (query.includes('network') || query.includes('status') || query.includes('online') || query.includes('downtime')) {
      return "All global edge nodes and satellite transceivers are currently operating within nominal parameters. Current aggregate core network latency is 0.85ms.";
    }
    
    if (query.includes('login') || query.includes('credentials') || query.includes('admin') || query.includes('sign in')) {
      return "You can explore our SaaS Admin Dashboard by logging in using the official credentials: Email 'admin@yofs.com' and Password 'admin123' on the Login page.";
    }
    
    if (query.includes('service') || query.includes('solutions') || query.includes('product')) {
      return "Our key services include the Cognitive AI Cloud, Quantum 6G Fiber Optics, Distributed Edge Mesh computing, and Industrial Digital Twins. Visit our Services page to read more.";
    }
    
    if (query.includes('price') || query.includes('billing') || query.includes('cost')) {
      return "Our enterprise subscription tiers start at $4,999/month, incorporating dedicated satellite bandwidth allocations and customized SLA guarantees.";
    }

    return "Thank you for that request. I can explain the tech behind YOFS (like Quantum 6G Fiber, Edge Mesh, and Cognitive AI Clouds) as well as live network diagnostics. Try asking 'what technology do you use?' or 'how does quantum security work?'.";
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim() && !attachedFile) return;

    const filePayload = attachedFile ? { ...attachedFile } : null;
    setAttachedFile(null); // Clear attachment state

    // Add user message
    const userMsg = { 
      id: Date.now(), 
      type: 'user', 
      text: textToSend || `Uploaded file: ${filePayload.name}`,
      file: filePayload 
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot latency (typing indicator)
    setTimeout(() => {
      let responseText = '';
      
      if (filePayload) {
        const ext = filePayload.name.split('.').pop().toLowerCase();
        if (['json', 'yaml', 'yml', 'txt', 'csv'].includes(ext)) {
          responseText = `Ingestion complete for file: "${filePayload.name}". Core parsing indicates normal system telemetry logs (load factor: 42%, active threads: 120). No routing packet drop logs found.`;
        } else if (['jpg', 'jpeg', 'png', 'gif', 'svg'].includes(ext)) {
          responseText = `Image payload processed: "${filePayload.name}". Optical density and fiber refraction mapping match nominal spectrum index levels.`;
        } else {
          responseText = `Ingestion successful for "${filePayload.name}" (${(filePayload.size / 1024).toFixed(1)} KB). Mapped variables successfully updated inside your regional cluster variables config.`;
        }
      } else {
        responseText = getBotResponse(textToSend);
      }
      
      const botMsg = { id: Date.now() + 1, type: 'bot', text: responseText };
      setIsTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend(inputValue);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachedFile({
        name: file.name,
        size: file.size
      });
    }
    // reset target value so same file can be selected again if removed
    e.target.value = '';
  };

  const triggerVoiceRecord = () => {
    setIsRecording(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Hidden file input */}
      <input 
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center text-white shadow-2xl relative"
        aria-label="Toggle Gidi Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-yofs-cyan rounded-full animate-ping" />
        )}
      </motion.button>

      {/* Chat window overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-16 right-0 w-[350px] sm:w-[400px] h-[500px] rounded-2xl glass-panel flex flex-col overflow-hidden shadow-2xl border border-yofs-cyan/20"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-yofs-navy to-yofs-lightnavy border-b border-yofs-cyan/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <GidiLiveAvatar size="md" />
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    GIDI AI
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </h3>
                  <span className="text-[10px] text-yofs-slate uppercase tracking-wider">Telecom & AI Co-Pilot</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-yofs-slate hover:text-yofs-cyan transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-yofs-dark/40">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {msg.type === 'user' ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 bg-yofs-cyan/20 text-yofs-cyan border border-yofs-cyan/30">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <GidiLiveAvatar size="sm" />
                    )}
                    <div className={`rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-yofs-cyan/20 to-yofs-cyan/10 border border-yofs-cyan/30 text-white rounded-tr-none'
                        : 'bg-yofs-navy/80 border border-yofs-lightnavy text-yofs-lightslate rounded-tl-none'
                    }`}>
                      {msg.text}
                      {/* Attached file bubble presentation */}
                      {msg.file && (
                        <div className="mt-2 p-2 bg-yofs-dark/60 rounded-lg border border-yofs-cyan/20 flex items-center gap-2 text-xs">
                          <Paperclip className="w-3.5 h-3.5 text-yofs-cyan shrink-0" />
                          <div className="truncate">
                            <span className="block font-semibold text-white truncate max-w-[150px]">{msg.file.name}</span>
                            <span className="block text-[9px] text-yofs-slate">{(msg.file.size / 1024).toFixed(1)} KB</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <GidiLiveAvatar size="sm" />
                    <div className="bg-yofs-navy/80 border border-yofs-lightnavy rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                      <span className="w-2 h-2 rounded-full bg-yofs-cyan animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-yofs-cyan animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-yofs-cyan animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Presets / Prompts */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-yofs-dark/20 border-t border-yofs-lightnavy/30">
                <span className="text-[10px] text-yofs-slate uppercase tracking-wider block mb-2">Suggested queries:</span>
                <div className="flex flex-wrap gap-2">
                  {presetQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-xs px-2.5 py-1 rounded-full bg-yofs-navy hover:bg-yofs-lightnavy border border-yofs-lightnavy hover:border-yofs-cyan/30 text-yofs-lightslate hover:text-yofs-cyan transition-all duration-300"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* File Attachment Chip Area (Shows above Input Box) */}
            {attachedFile && (
              <div className="px-4 py-2 bg-[#0A1424] border-t border-yofs-cyan/15 flex items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-2 text-xs text-yofs-cyan bg-yofs-cyan/10 px-2.5 py-1.5 rounded-lg border border-yofs-cyan/20 truncate">
                  <Paperclip className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate max-w-[200px] font-semibold">{attachedFile.name}</span>
                  <span className="text-[10px] text-yofs-slate">({(attachedFile.size / 1024).toFixed(1)} KB)</span>
                </div>
                <button 
                  onClick={() => setAttachedFile(null)}
                  className="text-yofs-slate hover:text-red-400 p-1 transition-colors"
                  title="Remove attachment"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Input Box Area */}
            {isRecording ? (
              <div className="p-4 bg-yofs-navy/95 border-t border-red-500/30 flex items-center justify-between gap-3 animate-fade-in">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">Listening...</span>
                </div>
                
                {/* Voice bar bouncing waves */}
                <div className="flex items-end gap-1 h-6">
                  <div className="w-1 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-5 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-6 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  <div className="w-1 h-4 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
                  <div className="w-1 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '600ms' }} />
                </div>

                <div className="text-xs font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                  0:0{recordingSeconds}
                </div>
                
                <button 
                  onClick={() => setIsRecording(false)} 
                  className="text-[10px] px-2 py-1 rounded bg-red-500/20 hover:bg-red-500/30 text-red-300 font-semibold border border-red-500/20 hover:border-red-500/40 transition-all"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="p-4 bg-yofs-navy/80 border-t border-yofs-cyan/15 flex items-center gap-3">
                {/* File attach button */}
                <button 
                  onClick={handleFileClick}
                  className="w-8 h-8 rounded-lg border border-yofs-lightnavy text-yofs-slate hover:text-yofs-cyan flex items-center justify-center transition-colors shrink-0"
                  title="Attach network file"
                >
                  <Paperclip className="w-4 h-4" />
                </button>

                <input
                  type="text"
                  placeholder="Ask GIDI..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1 bg-yofs-dark/50 border border-yofs-lightnavy focus:border-yofs-cyan focus:outline-none rounded-lg px-3 py-2 text-sm text-white placeholder:text-yofs-slate transition-colors min-w-0"
                />

                {/* Voice input button */}
                <button 
                  onClick={triggerVoiceRecord}
                  className="w-8 h-8 rounded-lg border border-yofs-lightnavy text-yofs-slate hover:text-yofs-cyan flex items-center justify-center transition-colors shrink-0"
                  title="Voice input"
                >
                  <Mic className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleSend(inputValue)}
                  className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center text-white shrink-0"
                  title="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
