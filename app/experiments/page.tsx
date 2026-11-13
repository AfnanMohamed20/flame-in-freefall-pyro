'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/app/components/Logo';

const EXPERIMENTS = [
  { id: 1, title: 'Saffire-I to III', subtitle: 'Spacecraft Fire Safety Demonstration', desc: 'Studies how fire spreads on materials in spacecraft conditions.', relevance: 95, tags: ['Flammability', 'Solid materials', 'See PSI'] },
  { id: 2, title: 'BASS', subtitle: 'Burning and Suppression of Solids', desc: 'Analyzes solid fuel combustion behavior under low-speed flows.', relevance: 92, tags: ['Flammability', 'Solid (fabrics, plastics)', 'MSG, fan-driven flow duct'] },
  { id: 3, title: 'BASS-II', subtitle: 'Burning and Suppression of Solids II', desc: 'Extends BASS with more materials and conditions.', relevance: 92, tags: ['Flammability', 'Solid (fabrics, plastics)', 'MSG, fan-driven flow duct'] },
  { id: 4, title: 'SAME / SAME-R', subtitle: 'Smoke and Aerosol Measurement Experiment', desc: 'Tests how smoke behaves and how detectors should measure it.', relevance: 91, tags: ['Detection', 'Smoke particles', 'Smoke and aerosol instrument'] },
  { id: 5, title: 'FLEX / FLEX-2', subtitle: 'Flame Extinguishment Experiment', desc: 'Puts out burning droplets by diluting the atmosphere with CO₂ and helium.', relevance: 80, tags: ['Suppression', 'Liquid droplets', 'CIR, MDCA'] },
  { id: 6, title: 'ACME BRE', subtitle: 'Burning Rate Emulator', desc: 'Studies material flammability in still air as a function of material properties.', relevance: 70, tags: ['Flammability', 'Gas (emulating solids)', 'CIR, ACME modular hardware'] },
  { id: 7, title: 'CFI-G', subtitle: 'Cool Flames Investigation with Gases', desc: 'Reached up to 85% oxygen with an inside-out flame from a spherical burner.', relevance: 60, tags: ['Fundamentals', 'Gas (propane etc.)', 'CIR, ACME modular hardware', 'High oxygen'] },
  { id: 8, title: 'SPICE', subtitle: 'Smoke Point In Co-flow Experiment', desc: 'Examines when flames start to produce smoke in a co-flowing airstream.', relevance: 55, tags: ['Fundamentals', 'Gas and solid', 'MSG, fan-driven flow duct'] },
  { id: 9, title: 'E-FIELD Flames', subtitle: 'Electric-Field Effects on Laminar Diffusion Flames', desc: 'Uses electric fields to mimic partial gravity in flames.', relevance: 55, tags: ['Fundamentals', 'Gas', 'CIR, ACME modular hardware', 'Partial-g proxy'] },
  { id: 10, title: 'DAFT / DAFT-2', subtitle: 'Dust and Aerosol Measurement Feasibility Test', desc: 'Reuses the SAME instrument to detect dust.', relevance: 51, tags: ['Detection', 'Dust', 'Smoke and aerosol instrument'] },
  { id: 11, title: 'SLICE', subtitle: 'Structure and Liftoff in Combustion Experiment', desc: 'Studies flame structure and liftoff in a flow duct.', relevance: 50, tags: ['Fundamentals', 'Gas and solid', 'MSG, fan-driven flow duct'] },
  { id: 12, title: 'CFI', subtitle: 'Cool Flames Investigation', desc: 'Studies cool flames on burning liquid droplets.', relevance: 45, tags: ['Fundamentals', 'Liquid droplets', 'CIR, MDCA'] },
];

export default function ExperimentsPage() {
  const [selectedEnv, setSelectedEnv] = useState('Spacecraft cabin');
  const [selectedGoal, setSelectedGoal] = useState('All goals');
  const [searchQuery, setSearchQuery] = useState('');
  
  
  const [activeTab, setActiveTab] = useState<'explore' | 'compare' | 'earth'>('explore');

  const [comparedIds, setComparedIds] = useState<number[]>([]);

  const toggleCompare = (id: number) => {
    if (comparedIds.includes(id)) {
      setComparedIds(comparedIds.filter(item => item !== id));
    } else {
      if (comparedIds.length >= 3) {
        alert('You can compare up to 3 experiments at a time.');
        return;
      }
      setComparedIds([...comparedIds, id]);
    }
  };

  const filteredExperiments = EXPERIMENTS.filter((exp) => {
    return exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           exp.desc.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const comparedExperiments = EXPERIMENTS.filter(exp => comparedIds.includes(exp.id));

  return (
    <div className="min-h-screen bg-[#05070D] text-[#EEF1F7] font-['Plus_Jakarta_Sans'] flex overflow-hidden">

      {/* Sidebar */}
      <aside className="w-72 p-6 border-r border-white/5 bg-[#080B13] hidden md:flex flex-col gap-6 flex-none h-screen sticky top-0 overflow-y-auto z-20">
        <div className="flex items-center transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,138,61,0.6)] cursor-pointer">
          <Logo />
        </div>

        <nav className="flex flex-col gap-1.5">
          <div className="text-[11px] font-semibold text-[#6F7A8F] tracking-widest px-3 pb-2 uppercase">MENU</div>
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/></svg>
            Dashboard
          </Link>
          <Link href="/chat" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>
            AI Chat
          </Link>

          <Link href="/experiments" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[rgba(255,106,40,0.18)] to-[rgba(255,106,40,0.04)] text-white font-medium text-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg>
            Experiments
          </Link>

          <Link href="/guidelines" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>
            Safety Guidelines
          </Link>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-[#A9B2C3] hover:text-white hover:bg-white/5 font-medium text-sm transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
            Home
          </Link>
        </nav>

        <div className="mt-auto p-4 rounded-2xl bg-[#4DA3FF]/[0.08] border border-[#4DA3FF]/20 flex flex-col gap-1.5">
          <div className="flex items-center gap-2 font-semibold text-xs text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3DDC97] animate-ping" /> Data synced
          </div>
          <div className="text-xs text-[#A9B2C3]">NASA PSI · NTRS · Active</div>
        </div>
      </aside>
      
      {/* Main Container */}
      <main className="flex-1 h-screen overflow-y-auto p-6 md:p-10 flex flex-col gap-8">
        
        {/* Title & Description */}
        <div className="flex flex-col gap-2">
          <h1 className="font-['Space_Grotesk'] font-bold text-3xl md:text-4xl text-white">Experiment explorer</h1>
          <p className="text-sm text-[#A9B2C3] max-w-2xl">
            Find the combustion investigations that matter most for where crews will live. Rank by environment, compare side by side, and see how the research helps on Earth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 border-b border-white/6 pb-4">
          <button 
            onClick={() => setActiveTab('explore')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border ${activeTab === 'explore' ? 'bg-white/10 text-white border-white/10' : 'bg-transparent text-[#8E98AB] border-transparent hover:text-white'}`}
          >
            Explore & rank
          </button>
          <button 
            onClick={() => setActiveTab('compare')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border ${activeTab === 'compare' ? 'bg-white/10 text-white border-white/10' : 'bg-transparent text-[#8E98AB] border-transparent hover:text-white'}`}
          >
            Compare ({comparedIds.length})
          </button>
          <button 
            onClick={() => setActiveTab('earth')}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm cursor-pointer border ${activeTab === 'earth' ? 'bg-white/10 text-white border-white/10' : 'bg-transparent text-[#8E98AB] border-transparent hover:text-white'}`}
          >
            Earth impact
          </button>
        </div>

        {activeTab === 'compare' ? (
          
          <div className="flex flex-col gap-6">
            <h2 className="font-['Space_Grotesk'] font-bold text-xl text-white">Side-by-Side Comparison</h2>
            {comparedExperiments.length === 0 ? (
              <div className="p-10 rounded-2xl bg-[#080B13] border border-white/10 text-center text-[#8E98AB] flex flex-col items-center gap-3">
                <p>No experiments selected for comparison yet.</p>
                <button 
                  onClick={() => setActiveTab('explore')} 
                  className="px-4 py-2 rounded-xl bg-[#FF6A28] text-white text-xs font-semibold cursor-pointer"
                >
                  Go back to Explore & rank
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {comparedExperiments.map((exp) => (
                  <div key={exp.id} className="p-6 rounded-2xl bg-[#080B13] border border-white/10 flex flex-col gap-4 relative">
                    <button 
                      onClick={() => toggleCompare(exp.id)}
                      className="absolute top-4 right-4 text-xs text-red-400 hover:text-red-300 cursor-pointer"
                    >
                      Remove ✕
                    </button>
                    <h3 className="font-['Space_Grotesk'] font-bold text-lg text-white pr-10">{exp.title}</h3>
                    <p className="text-xs text-[#8E98AB]">{exp.subtitle}</p>
                    <div className="flex justify-between items-center py-2 border-t border-b border-white/6 text-xs">
                      <span className="text-[#8E98AB]">Relevance Score:</span>
                      <span className="font-bold text-[#3DDC97]">{exp.relevance}</span>
                    </div>
                    <p className="text-xs text-[#E2E6EE] leading-relaxed">{exp.desc}</p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#C3CAD8]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : activeTab === 'earth' ? (
         
          <div className="p-8 rounded-3xl bg-[#080B13] border border-white/10 flex flex-col gap-4 max-w-3xl">
            <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-white">Earth Impact of Microgravity Combustion</h2>
            <p className="text-sm text-[#A9B2C3] leading-relaxed">
              Research conducted for spacecraft fire safety directly benefits life on Earth by improving ground-based industrial fire suppression systems, creating advanced clean-burning fuel engines, and refining smoke detection technologies in enclosed commercial buildings.
            </p>
          </div>
        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-12">
            
            {/* Filters and Search Controls */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#8E98AB]">Habitat environment</label>
                  <select 
                    value={selectedEnv}
                    onChange={(e) => setSelectedEnv(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-[#080B13] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4D8CFF]"
                  >
                    <option value="Spacecraft cabin">Spacecraft cabin</option>
                    <option value="Lunar base">Lunar base</option>
                    <option value="Mars habitat">Mars habitat</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#8E98AB]">Research goal</label>
                  <select 
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-[#080B13] border border-white/10 text-sm text-white focus:outline-none focus:border-[#4D8CFF]"
                  >
                    <option value="All goals">All goals</option>
                    <option value="Flammability">Flammability</option>
                    <option value="Suppression">Suppression</option>
                    <option value="Detection">Detection</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#8E98AB]">Search</label>
                  <input 
                    type="text"
                    placeholder="BASS, smoke, droplet..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#4D8CFF]"
                  />
                </div>
              </div>

              <div className="text-xs font-semibold text-[#8E98AB]">
                {filteredExperiments.length} of {EXPERIMENTS.length} investigations ranked for {selectedEnv}
              </div>

              {/* Experiments List */}
              <div className="flex flex-col gap-4">
                {filteredExperiments.map((exp, index) => {
                  const isCompared = comparedIds.includes(exp.id);
                  return (
                    <div key={exp.id} className="p-6 rounded-2xl bg-[#080B13] border border-white/10 flex flex-col gap-4 hover:border-white/20 transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-['Space_Grotesk'] text-xl font-bold text-[#8E98AB] w-6">{index + 1}</span>
                          <div className="flex flex-col gap-1">
                            <h2 className="font-['Space_Grotesk'] font-bold text-lg text-white">{exp.title}</h2>
                            <p className="text-xs text-[#8E98AB]">{exp.subtitle}</p>
                            <p className="text-sm text-[#E2E6EE] pt-1">{exp.desc}</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 flex-none">
                          <span className="font-['Space_Grotesk'] font-bold text-2xl text-[#3DDC97]">{exp.relevance}</span>
                          <span className="text-[10px] font-semibold text-[#6F7A8F] tracking-widest uppercase">relevance</span>
                          <div className="w-24 h-1.5 bg-white/10 rounded-full mt-1 overflow-hidden">
                            <div className="h-full bg-[#3DDC97] rounded-full" style={{ width: `${exp.relevance}%` }} />
                          </div>
                        </div>
                      </div>

                      {/* Tags & Compare Button */}
                      <div className="flex items-center justify-between pt-2 border-t border-white/6 flex-wrap gap-3">
                        <div className="flex flex-wrap items-center gap-2">
                          {exp.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[#C3CAD8]">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <button 
                          onClick={() => toggleCompare(exp.id)}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                            isCompared 
                              ? 'bg-[#FF6A28] text-white border-[#FF6A28]' 
                              : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/10'
                          }`}
                        >
                          {isCompared ? 'Comparing ✓' : 'Compare'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Sidebar Target & Ranking Info */}
            <div className="flex flex-col gap-6">
              
              {/* Lunar Habitat Target Card */}
              <div className="p-6 rounded-3xl bg-[#080B13] border border-white/10 flex flex-col gap-4 shadow-xl">
                <h3 className="font-['Space_Grotesk'] font-bold text-base text-white">Lunar habitat target</h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-['Space_Grotesk'] font-extrabold text-3xl text-white">30%+</span>
                  <span className="text-xs text-[#8E98AB]">oxygen</span>
                </div>

                <div className="flex flex-col gap-2.5 pt-2 border-t border-white/6 text-xs">
                  <div className="flex justify-between text-[#8E98AB]">
                    <span>Pressure</span>
                    <span className="text-white font-semibold">10.2 psi or less</span>
                  </div>
                  <div className="flex justify-between text-[#8E98AB]">
                    <span>Earth air</span>
                    <span className="text-white font-semibold">21% at 14.7 psi</span>
                  </div>
                  <div className="flex justify-between text-[#8E98AB]">
                    <span>Increase</span>
                    <span className="text-[#FF8A4C] font-semibold">+43% oxygen</span>
                  </div>
                  <div className="flex justify-between text-[#8E98AB]">
                    <span>Spacesuit</span>
                    <span className="text-white font-semibold">100% at 4.3 psi</span>
                  </div>
                </div>

                <p className="text-xs text-[#8E98AB] leading-relaxed pt-2">
                  More oxygen makes materials much easier to ignite, so high-oxygen test data is weighted up for Lunar base and Pressurized rover.
                </p>
              </div>

              {/* How Ranking Works Card */}
              <div className="p-6 rounded-3xl bg-[#080B13] border border-white/10 flex flex-col gap-3 shadow-xl">
                <h3 className="font-['Space_Grotesk'] font-bold text-base text-white">How ranking works</h3>
                <p className="text-xs text-[#8E98AB] leading-relaxed">
                  Each experiment has a base score for how directly it informs crew fire safety. Environment adds adjustments: high-oxygen tests for Lunar and rover, a partial-gravity proxy for Lunar and Mars, and detection work for enclosed stations. This is a transparent heuristic, not an official NASA ranking.
                </p>
              </div>

            </div>

          </div>
        )}

      </main>
    </div>
  );
}