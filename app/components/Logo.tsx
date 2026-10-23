import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 text-white no-underline group min-h-[44px]">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF6A28] via-[#FF8A3D] to-[#4D8CFF] blur-md opacity-50 group-hover:opacity-90 transition-opacity duration-300" />
        
        <div className="relative w-full h-full rounded-2xl bg-[#070A12] border border-white/20 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm">
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* 1. Integrated Nodes & Orbit */}
            <path 
              d="M14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24" 
              stroke="url(#orbit-grad-1)" 
              strokeWidth="1.8" 
              strokeDasharray="3 3"
            />
            <path 
              d="M14 4C19.5228 4 24 8.47715 24 14C24 19.5228 19.5228 24 14 24" 
              stroke="url(#orbit-grad-2)" 
              strokeWidth="1.8" 
            />

            {/* 2. Integrated Team Nodes*/}
            <circle cx="14" cy="4" r="2" fill="#7DB8FF" />
            <circle cx="24" cy="14" r="2" fill="#FF8A3D" />
            <circle cx="14" cy="24" r="2" fill="#5FE3AA" />
            <circle cx="4" cy="14" r="2" fill="#B9A5FF" />

            {/* 3. Core Flame & Nova Star */}
            <path 
              d="M14 7L15.8 12.2L21 14L15.8 15.8L14 21L12.2 15.8L7 14L12.2 12.2L14 7Z" 
              fill="url(#core-flame)" 
            />
            <circle cx="14" cy="14" r="2" fill="#FFFFFF" />

            <defs>
              <linearGradient id="orbit-grad-1" x1="4" y1="4" x2="14" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7DB8FF" />
                <stop offset="1" stopColor="#5FE3AA" />
              </linearGradient>

              <linearGradient id="orbit-grad-2" x1="14" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFB067" />
                <stop offset="1" stopColor="#FF5A1F" />
              </linearGradient>

              <linearGradient id="core-flame" x1="7" y1="7" x2="21" y2="21" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFD175" />
                <stop offset="0.5" stopColor="#FF6A28" />
                <stop offset="1" stopColor="#E03E00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <span className="font-bold text-xl font-['Space_Grotesk'] tracking-tight text-white leading-none group-hover:text-[#FFB067] transition-colors">
          Pyro<span className="text-[#FF7A2E]">Nova</span>
        </span>
      </div>
    </Link>
  );
}