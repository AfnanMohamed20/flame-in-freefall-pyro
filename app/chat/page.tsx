'use client';

import Link from 'next/link';
import { useState } from 'react';

const KNOWLEDGE_BASE = [
  {
    keys: ['blue', 'sphere', 'spherical', 'shape', 'round', 'look'],
    text: 'In microgravity there is no buoyancy, so hot combustion gases don’t rise and fresh air isn’t pulled in from below. Oxygen reaches the flame only by slow diffusion from every direction — which is why the flame forms a sphere around the fuel.\n\nThey look blue and dim because the flame produces less glowing soot. That matters for safety: a microgravity fire can be harder to see than one on Earth.',
    sources: ['FLEX', 'Drop towers']
  },
  {
    keys: ['cool', 'invisible', 'heptane', 'flex'],
    text: 'Cool flames are a low-temperature burning mode. During FLEX on the ISS, heptane droplets kept burning after the bright hot flame went out — the reaction continued at much lower temperature, with almost no visible light.\n\nWhy it matters:\n• A fire can look extinguished while chemistry is still running.\n• Re-ignition is possible if conditions change.\n• Detection should combine gas sensing and temperature, not cameras alone.',
    sources: ['FLEX', 'FLEX-2']
  },
  {
    keys: ['6001', 'test 1', 'standard', 'screen', 'material', 'flammab'],
    text: 'Not always. NASA-STD-6001 Test 1 is an upward-burning test in normal gravity, where buoyant flow is strong. Microgravity experiments showed some materials can keep burning in gentle, low-speed flow at oxygen levels that a 1 g test would rate as safe.\n\nRecommendation: keep Test 1 for screening, but add margin for low-flow microgravity, and re-test materials at the oxygen level of the target cabin atmosphere.',
    sources: ['BASS / BASS-II', 'SoFIE']
  },
  {
    keys: ['crew', 'first', 'respond', 'extinguish', 'suppress', 'what should', 'do if'],
    text: 'The evidence points to this order:\n1. Shut off ventilation in the affected module — airflow feeds microgravity flames.\n2. Remove power from the affected rack or equipment.\n3. Apply a portable extinguisher (CO₂ or water mist) at the source.\n4. Keep monitoring for re-ignition — flames can persist invisibly.\n5. Track CO, oxygen and pressure, and don masks until the air is cleared.',
    sources: ['BASS / BASS-II', 'Saffire I–VI', 'FLEX']
  },
  {
    keys: ['saffire', 'cygnus', 'large', 'big'],
    text: 'Saffire lit large fires inside uncrewed Cygnus cargo vehicles after they departed the ISS — the first spacecraft-scale fire tests in microgravity, using samples around a meter long.\n\nKey lessons:\n• Flames spread steadily across large samples in cabin-like airflow.\n• A fire measurably raises pressure and changes oxygen and combustion products in a closed vehicle.\n• The data validated the models used to size detection and suppression.',
    sources: ['Saffire I–VI']
  },
  {
    keys: ['moon', 'lunar', 'mars', 'artemis', '34', 'exploration', 'partial', 'gravity'],
    text: 'Two things change on Artemis-era missions:\n• Atmosphere — the proposed exploration atmosphere is 8.2 psia with 34% oxygen. Higher oxygen fraction makes most materials ignite and spread more easily.\n• Gravity — on the Moon (0.16 g) and Mars (0.38 g), buoyant flow is weak but present. Studies suggest some materials can be more flammable at partial gravity than in either 1 g or microgravity.\n\nMaterials approved for the ISS should be re-evaluated for these conditions.',
    sources: ['SoFIE', 'BASS / BASS-II']
  }
];

const FALLBACK_RESPONSE = {
  text: 'I couldn’t find a strong match in the indexed experiments for that question. Try asking about flame shape, cool flames, material screening, crew response, Saffire, or Moon and Mars conditions.',
  sources: ['Experiment catalog']
};

const SUGGESTIONS = [
  { title: 'Why are flames spherical and blue?', sub: 'Flame shape without gravity' },
  { title: 'What are cool flames?', sub: 'Invisible burning seen in FLEX' },
  { title: 'What should the crew do first if a fire starts?', sub: 'Response sequence' },
  { title: 'How do Moon and Mars missions change fire risk?', sub: 'Exploration atmosphere & partial gravity' }
];

const RECENT_CHATS = [
  'Is NASA-STD-6001 Test 1 conservative?',
  'What did Saffire teach us?',
  'Why are flames spherical and blue?',
  'What are cool flames?'
];

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string; sources?: string[] }[]>([]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || draft;
    if (!query.trim() || typing) return;

    const lower = query.toLowerCase();
    const matched = KNOWLEDGE_BASE.find((item) =>
      item.keys.some((k) => lower.includes(k))
    ) || FALLBACK_RESPONSE;

    setMessages((prev) => [...prev, { role: 'user', text: query }]);
    setDraft('');
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', text: matched.text, sources: matched.sources }
      ]);
      setTyping(false);
    }, 1100);
  };

  return (
    <div className="min-h-screen bg-[#05070D] text-[#EEF1F7] font-['Plus_Jakarta_Sans'] flex overflow-hidden">
      
      {/* Sidebar - Fixed Sticky */}
      <aside className="w-72 p-5 border-r border-white/5 bg-[#080B13] hidden md:flex flex-col gap-5 flex-none h-screen sticky top-0 overflow-y-auto">
        <Link href="/" className="flex items-center gap-3 text-white no-underline px-2">
          <span className="w-8 h-8 rounded-full bg-[radial-gradient(circle,#FFE3B0_0%,#FF7A2E_35%,rgba(77,163,255,0.9)_62%,rgba(77,163,255,0)_72%)] shadow-[0_0_18px_rgba(77,163,255,0.5)] flex-none" />
          <span className="font-['Space_Grotesk'] font-bold text-lg">PyroNova</span>
        </Link>

        <button 
          onClick={() => setMessages([])}
          className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl border border-white/12 bg-white/[0.04] text-white font-semibold text-sm hover:bg-white/[0.08] transition-all cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
          New chat
        </button>

        <div className="flex flex-col gap-1">
          <div className="text-[11px] font-semibold text-[#6F7A8F] tracking-widest px-3 pb-2 uppercase">RECENT</div>
          {RECENT_CHATS.map((chat, idx) => (
            <button 
              key={idx} 
              onClick={() => handleSend(chat)}
              className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl text-xs text-[#A9B2C3] hover:text-white hover:bg-white/5 transition-all truncate cursor-pointer bg-transparent border-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="flex-none"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
              <span className="truncate">{chat}</span>
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
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/6 bg-[#05070D]/80 backdrop-blur-md flex-none">
          <div className="flex items-center gap-3">
            <span className="font-['Space_Grotesk'] font-semibold text-base text-white">Fire Safety Assistant</span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#3DDC97]/12 text-[#5FE3AA]">RAG · 7 campaigns</span>
          </div>
        </div>

        {/* Chat Messages Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-[800px] mx-auto flex flex-col gap-6">
            
            {messages.length === 0 && !typing && (
              <div className="flex flex-col items-center text-center gap-4 py-10">
                <div className="w-16 h-16 rounded-full bg-[radial-gradient(circle,#FFE3B0_0%,#FF7A2E_30%,rgba(77,163,255,0.9)_58%,rgba(77,163,255,0)_72%)] shadow-[0_0_40px_rgba(77,163,255,0.5)]" />
                <h1 className="m-0 font-['Space_Grotesk'] font-bold text-2xl md:text-3xl text-white tracking-tight">Ask anything about fire in space</h1>
                <p className="m-0 text-sm text-[#A9B2C3] max-w-[500px]">Answers come from NASA microgravity combustion experiments, with sources for every claim.</p>
                
                {/* Suggestion Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-4">
                  {SUGGESTIONS.map((s, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleSend(s.title)}
                      className="text-left p-4 rounded-2xl border border-white/9 bg-white/[0.03] hover:border-[#FF8A4C]/50 hover:bg-[#FF6A28]/[0.06] transition-all cursor-pointer flex flex-col gap-1"
                    >
                      <span className="font-semibold text-sm text-white">{s.title}</span>
                      <span className="text-xs text-[#8E98AB]">{s.sub}</span>
                    </button>
                  ))}
                </div>
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
                <span className="text-xs text-[#8E98AB]">Searching experiment records…</span>
              </div>
            )}

          </div>
        </div>

        {/* Input Bar at Bottom */}
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