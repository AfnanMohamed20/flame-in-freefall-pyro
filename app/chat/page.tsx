'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/app/components/Logo';
import { chatApi } from '@/app/lib/api';

export default function ChatPage() {
  const [chats, setChats] = useState<any[]>([]);
  const [currentChatId, setCurrentChatId] = useState<number | undefined>(undefined);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string; sources?: string[] }[]>([]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);

  async function fetchChats() {
    try {
      const data = await chatApi.getChats();
      if (data.chats && data.chats.length > 0) {
        setChats(data.chats);
        const firstChatId = data.chats[0].id;
        setCurrentChatId(firstChatId);
        fetchChatHistory(firstChatId);
      }
    } catch (error) {
      console.error('Failed to load chats:', error);
    }
  }

  useEffect(() => {
    fetchChats();
  }, []);

  async function fetchChatHistory(chatId: number) {
    try {
      const data = await chatApi.getChatHistory(chatId);
      if (data.chat && data.chat.messages) {
        const formattedMessages = data.chat.messages.flatMap((m: any) => {
          const arr: { role: 'user' | 'ai'; text: string; sources?: string[] }[] = [];
          if (m.message) {
            arr.push({ role: 'user', text: m.message });
          }
          if (m.answer) {
            arr.push({
              role: 'ai',
              text: m.answer.answer || 'No response generated.',
              sources: m.answer.sources || m.answer.experimental_evidence?.map((e: any) => e.source) || []
            });
          }
          return arr;
        });
        setMessages(formattedMessages);
      }
    } catch (error) {
      console.error('Failed to load chat history:', error);
    }
  }

  const handleNewChat = async () => {
    try {
      const data = await chatApi.createChat();
      if (data.chat) {
        setChats([data.chat, ...chats]);
        setCurrentChatId(data.chat.id);
        setMessages([]);
      }
    } catch (error) {
      console.error('Failed to create chat:', error);
    }
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || draft;
    if (!query.trim() || typing) return;

    setDraft('');
    setTyping(true);
    setMessages((prev) => [...prev, { role: 'user', text: query }]);

    try {
      let chatId = currentChatId;

      if (!chatId) {
        const newChatRes = await chatApi.createChat();
        chatId = newChatRes.chat.id;
        setCurrentChatId(chatId);
        setChats((prev) => [newChatRes.chat, ...prev]);
      }

      const res = await chatApi.askAi({
        question: query,
        chat_id: chatId as number,
      });

      const aiAnswer = res.data?.answer?.answer || res.message || 'Response received.';
      const sources = res.data?.answer?.sources || [];

      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: aiAnswer, sources: sources }
      ]);

      fetchChats();
    } catch (error) {
      console.error('Failed to send message to AI:', error);
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: 'Sorry, an error occurred while communicating with the AI server.' }
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-[#EEF1F7] font-['Plus_Jakarta_Sans'] flex overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-72 p-5 border-r border-white/5 bg-[#080B13] hidden md:flex flex-col gap-5 flex-none h-screen sticky top-0 overflow-y-auto">
        <div className="flex items-center transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,138,61,0.6)] cursor-pointer">
                <Logo />
          </div>

        <button 
          onClick={handleNewChat}
          className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl border border-white/12 bg-white/[0.04] text-white font-semibold text-sm hover:bg-white/[0.08] transition-all cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
          New chat
        </button>

        <div className="flex flex-col gap-1">
          <div className="text-[11px] font-semibold text-[#6F7A8F] tracking-widest px-3 pb-2 uppercase">CHATS</div>
          {chats.map((chat) => (
            <button 
              key={chat.id} 
              onClick={() => {
                setCurrentChatId(chat.id);
                fetchChatHistory(chat.id);
              }}
              className={`flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl text-xs transition-all truncate cursor-pointer border-0 ${
                currentChatId === chat.id ? 'bg-white/10 text-white font-semibold' : 'text-[#A9B2C3] hover:text-white hover:bg-white/5 bg-transparent'
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-none"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
              <span className="truncate">{chat.title || `Chat #${chat.id}`}</span>
            </button>
          ))}
        </div>

        <nav className="mt-auto pt-4 border-t border-white/6 flex flex-col gap-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 text-sm transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/></svg>
            Dashboard
          </Link>
          <Link href="/guidelines" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 text-sm transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>
            Safety Guidelines
          </Link>
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 text-sm transition-all">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
            Home
          </Link>
        </nav>
      </aside>

      {/* Chat Workspace */}
      <main className="flex-1 flex flex-col h-screen bg-[radial-gradient(ellipse_at_50%_-20%,rgba(77,140,255,0.12),transparent_55%)]">
        
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/6 bg-[#05070D]/80 backdrop-blur-md flex-none">
          <div className="flex items-center gap-3">
            <span className="font-['Space_Grotesk'] font-semibold text-base text-white">Fire Safety Assistant</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#3DDC97]/12 text-[#5FE3AA]">API Connected</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-[800px] mx-auto flex flex-col gap-6">
            
            {messages.length === 0 && !typing && (
              <div className="flex flex-col items-center text-center gap-4 py-10">
                <div className="w-16 h-16 rounded-full bg-[radial-gradient(circle,#FFE3B0_0%,#FF7A2E_30%,rgba(77,163,255,0.9)_58%,rgba(77,163,255,0)_72%)] shadow-[0_0_40px_rgba(77,163,255,0.5)]" />
                <h1 className="m-0 font-['Space_Grotesk'] font-bold text-2xl md:text-3xl text-white tracking-tight">Ask anything about fire in space</h1>
                <p className="m-0 text-sm text-[#A9B2C3] max-w-[500px]">Answers come directly from NASA microgravity combustion backend records.</p>
              </div>
            )}

            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : 'items-start'}`}>
                {m.role === 'ai' && (
                  <span className="w-8 h-8 rounded-full flex-none bg-[radial-gradient(circle,#FFE3B0_0%,#FF7A2E_32%,rgba(77,163,255,0.9)_60%,rgba(77,163,255,0)_72%)] shadow-[0_0_15px_rgba(77,163,255,0.4)] mt-1" />
                )}
                <div className={`flex flex-col gap-2.5 max-w-[80%] ${m.role === 'user' ? 'items-end' : 'flex-1'}`}>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-gradient-to-r from-[#FF7A2E] to-[#FF5A1F] text-white rounded-br-xs' : 'bg-white/[0.04] border border-white/8 text-[#E2E6EE] rounded-bl-xs whitespace-pre-line'}`}>
                    {m.text}
                  </div>
                  
                  {m.sources && m.sources.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <span className="text-[10px] font-bold text-[#6F7A8F] tracking-widest uppercase">SOURCES</span>
                      {m.sources.map((src, sIdx) => (
                        <span key={sIdx} className="text-xs font-semibold px-3 py-1 rounded-full bg-[#4D8CFF]/12 border border-[#4D8CFF]/25 text-[#9DCBFF]">
                          {src}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex-none bg-[radial-gradient(circle,#FFE3B0_0%,#FF7A2E_32%,rgba(77,163,255,0.9)_60%,rgba(77,163,255,0)_72%)]" />
                <div className="flex gap-1.5 p-3.5 rounded-2xl bg-white/[0.05]">
                  <span className="w-2 h-2 rounded-full bg-[#C3CAD8] animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-[#C3CAD8] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-[#C3CAD8] animate-bounce [animation-delay:0.4s]" />
                </div>
                <span className="text-xs text-[#8E98AB]">PyroNova AI is analyzing combustion data...</span>
              </div>
            )}

          </div>
        </div>

        <div className="p-4 md:p-6 bg-[#05070D]/90 backdrop-blur-md border-t border-white/6 flex-none">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
            className="max-w-[800px] mx-auto flex items-center gap-3 p-2 pl-5 rounded-2xl bg-[#0E1320] border border-white/12 shadow-xl"
          >
            <input 
              type="text" 
              placeholder="Ask about cool flames, materials, suppression…" 
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="flex-1 bg-transparent border-0 outline-none text-white placeholder-[#6F7A8F] text-sm md:text-base py-2.5"
            />
            <button 
              type="submit" 
              aria-label="Send"
              className="w-11 h-11 rounded-xl bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] flex items-center justify-center text-white cursor-pointer hover:brightness-110 transition-all flex-none shadow-md shadow-orange-500/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
          </form>
          <div className="max-w-[800px] mx-auto text-center text-[11px] text-[#6F7A8F] pt-2">
            AI answers can be wrong. Verify safety-critical decisions against the cited NASA sources.
          </div>
        </div>

      </main>
    </div>
  );
}