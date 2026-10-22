import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="stars min-h-screen flex items-center justify-center bg-[#05070D] text-[#EEF1F7] px-4 py-12 font-['Plus_Jakarta_Sans'] relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-[-200px] left-1/2 w-[800px] h-[600px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(255,106,40,0.15),rgba(77,140,255,0.08)_50%,rgba(5,7,13,0)_100%)] pointer-events-none" />

      <div className="w-full max-w-md p-8 rounded-3xl bg-[#0E1320]/90 border border-white/10 backdrop-blur-md shadow-2xl space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight">Create Account</h1>
          <p className="text-sm text-[#A9B2C3]">Join Pyrosense research & safety community</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#8E98AB] uppercase tracking-wider mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="Hager Hassan" 
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E98AB] uppercase tracking-wider mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="astronaut@nasa.gov" 
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              required 
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8E98AB] uppercase tracking-wider mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF8A3D] to-[#FF5A1F] hover:brightness-110 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-[#A9B2C3]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#FF8A4C] hover:text-[#FFB38A] font-semibold transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}