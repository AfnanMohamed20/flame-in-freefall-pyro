'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authApi } from '../lib/api';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'form' | 'otp'>('form');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [assignedModule, setAssignedModule] = useState('HARMONY'); 

  // OTP
  const [verificationId, setVerificationId] = useState('');
  const [otp, setOtp] = useState('');
  
  const [error, setError] = useState('');

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== passwordConfirmation) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await authApi.register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        assigned_module: assignedModule,
      });

      if (response.verification_id) {
        setVerificationId(response.verification_id);
        setStep('otp');
      }
    } catch (err: any) {
      setError(err?.message || 'Registration failed. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authApi.verifyOtp({
        verification_id: verificationId,
        otp,
      });

      if (response.token) {
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        router.push('/dashboard');
      }
    } catch (err: any) {
      setError(err?.message || 'Incorrect verification code.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-[#EEF1F7] font-['Plus_Jakarta_Sans'] flex items-center justify-center p-6 relative overflow-x-hidden selection:bg-[#FF6A28] selection:text-white z-10">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(125,184,255,0.12),transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-[420px] p-8 rounded-3xl bg-[#080B13]/90 border border-white/10 backdrop-blur-xl flex flex-col gap-6 shadow-2xl relative z-10">
        
        <div className="flex flex-col gap-1 text-center">
          <h1 className="m-0 font-['Space_Grotesk'] font-bold text-2xl text-white">
            {step === 'form' ? 'Create Account' : 'Verify Email'}
          </h1>
          <p className="m-0 text-xs text-[#8E98AB]">
            {step === 'form' ? 'Join PyroNova Research Portal' : 'Enter the OTP sent to your email'}
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
            {error}
          </div>
        )}

        {step === 'form' ? (
         
          <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#C3CAD8]">Full Name</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Vance"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#C3CAD8]">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="researcher@gmail.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#C3CAD8]">Assigned Module</label>
              <select
                value={assignedModule}
                onChange={(e) => setAssignedModule(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#080B13] border border-white/10 text-sm text-white focus:outline-none focus:border-[#7DB8FF] transition-all"
              >
                <option value="HARMONY">HARMONY Module</option>
                <option value="KIBO">KIBO Module</option>
                <option value="COLUMBUS">COLUMBUS Module</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#C3CAD8]">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#C3CAD8]">Confirm Password</label>
              <input 
                type="password" 
                required
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#7DB8FF] to-[#4D8CFF] text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
            >
              {loading ? 'Sending OTP...' : 'Get Started'}
            </button>
          </form>
        ) : (
          
          <form onSubmit={handleVerifyOtpSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-[#C3CAD8]">Enter 4-Digit OTP</label>
              <input 
                type="text" 
                required
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="1771"
                className="w-full px-4 py-3 text-center tracking-widest text-lg rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#6F7A8F] focus:outline-none focus:border-[#7DB8FF] transition-all"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#7DB8FF] to-[#4D8CFF] text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer border-0 flex items-center justify-center gap-2"
            >
              {loading ? 'Verifying...' : 'Complete Registration'}
            </button>
          </form>
        )}

        <div className="text-center text-xs text-[#8E98AB]">
          Already have an account?{' '}
          <Link href="/login" className="text-[#7DB8FF] font-semibold hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}