import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { ChatMessage, LoadingState } from '../src/types';
import { sendMessageToGemini } from '../services/gemini';

const MenuAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hungry? 🥙 I can help you pick the perfect bowl or sandwich!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || loadingState === LoadingState.LOADING) return;

    const userMessage: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoadingState(LoadingState.LOADING);

    try {
      // Convert messages to history format expected by the service
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(history, userMessage.text);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setLoadingState(LoadingState.IDLE);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I lost my train of thought. Try again?" }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-lazeez-green text-white p-4 rounded-full shadow-lg hover:bg-lime-600 transition-all transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Menu Assistant"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-400"></span>
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-[350px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col max-h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-lazeez-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-lazeez-green" />
              <h3 className="font-display tracking-wide text-lg">Flavor Guide</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-lazeez-green transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 h-[350px]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm font-sans leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-lazeez-dark text-white rounded-br-none'
                      : 'bg-lazeez-green text-black rounded-bl-none font-medium'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-gray-200 p-3 rounded-2xl rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about ingredients..."
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-lazeez-green focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={loadingState === LoadingState.LOADING || !inputValue.trim()}
              className="p-2 bg-lazeez-dark text-white rounded-full hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuAssistant;