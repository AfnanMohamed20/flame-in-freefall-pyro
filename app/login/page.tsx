'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-transparent text-[#EEF1F7] font-['Plus_Jakarta_Sans'] flex items-center justify-center p-6 relative overflow-x-hidden selection:bg-[#FF6A28] selection:text-white z-10 ">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(255,106,40,0.12),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[420px] p-8 rounded-3xl bg-[#080B13]/90 border border-white/10 backdrop-blur-xl flex flex-col gap-6 shadow-2xl relative z-10">
        <div className="flex flex-col gap-1 text-center">
          <h1 className="m-0 font-['Space_Grotesk'] font-bold text-2xl text-white">Welcome back</h1>
          <p className="m-0 text-xs text-[#8E98AB]">Access NASA Microgravity Research Platform</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#C3CAD8]">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="researcher@nasa.gov"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#FF8A4C] transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-[#C3CAD8]">Password</label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#FF8A4C] transition-all"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="mt-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] text-white font-semibold text-sm shadow-lg shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
          >
            {loading ? 'Authenticating...' : 'Sign In to Dashboard'}
          </button>
        </form>

        <div className="text-center text-xs text-[#8E98AB]">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-[#FF8A4C] font-semibold hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}