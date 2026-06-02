import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Paperclip, Mic, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function GidiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Welcome to YOFS. I am Gidi, your cognitive systems assistant. How can I assist you with our AI or network solutions today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const presetQuestions = [
    'What is YOFS?',
    'Is the network online?',
    'How do I log in?',
    'What services are available?'
  ];

  const getBotResponse = (text) => {
    const query = text.toLowerCase();
    
    if (query.includes('what is yofs') || query.includes('who are you') || query.includes('company')) {
      return "YOFS is a futuristic digital transformation company blending Cognitive AI Cloud architectures with secure, quantum-encrypted 6G telecommunications infrastructure.";
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

    return "Thank you for that request. I am simulated to process information relating to YOFS network clusters, SaaS features, and credentials. Try asking about our 'network status' or 'login credentials'.";
  };

  const handleSend = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), type: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot latency (typing indicator)
    setTimeout(() => {
      const responseText = getBotResponse(textToSend);
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

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
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
                <div className="w-10 h-10 rounded-full bg-yofs-cyan/10 border border-yofs-cyan/30 flex items-center justify-center text-yofs-cyan">
                  <Bot className="w-5 h-5" />
                </div>
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
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      msg.type === 'user' 
                        ? 'bg-yofs-cyan/20 text-yofs-cyan border border-yofs-cyan/30' 
                        : 'bg-yofs-purple/20 text-yofs-purple border border-yofs-purple/30'
                    }`}>
                      {msg.type === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>
                    <div className={`rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-yofs-cyan/20 to-yofs-cyan/10 border border-yofs-cyan/30 text-white rounded-tr-none'
                        : 'bg-yofs-navy/80 border border-yofs-lightnavy text-yofs-lightslate rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full bg-yofs-purple/20 border border-yofs-purple/30 text-yofs-purple flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
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

            {/* Input Box */}
            <div className="p-4 bg-yofs-navy/80 border-t border-yofs-cyan/15 flex items-center gap-3">
              {/* File attach placeholder */}
              <button 
                onClick={() => alert('File upload UI trigger simulated. (Placeholder hook)')}
                className="w-8 h-8 rounded-lg border border-yofs-lightnavy text-yofs-slate hover:text-yofs-cyan flex items-center justify-center transition-colors"
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
                className="flex-1 bg-yofs-dark/50 border border-yofs-lightnavy focus:border-yofs-cyan focus:outline-none rounded-lg px-3 py-2 text-sm text-white placeholder:text-yofs-slate transition-colors"
              />

              {/* Voice input placeholder */}
              <button 
                onClick={() => alert('Voice input service initiated. Listening... (Placeholder hook)')}
                className="w-8 h-8 rounded-lg border border-yofs-lightnavy text-yofs-slate hover:text-yofs-cyan flex items-center justify-center transition-colors"
                title="Voice input"
              >
                <Mic className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleSend(inputValue)}
                className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center text-white"
                title="Send query"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
