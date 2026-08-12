"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function PortalLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    // If already authenticated, redirect
    if (sessionStorage.getItem("atelier_auth") === "commission-014") {
      router.push("/portal/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    
    setTimeout(() => {
      if (password === "commission-014") {
        sessionStorage.setItem("atelier_auth", password);
        router.push("/portal/dashboard");
      } else {
        setError(true);
        setIsAuthenticating(false);
        setPassword("");
      }
    }, 800);
  };

  return (
    <div className="bg-brand-bg min-h-screen flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-brand-surface border border-brand-border p-10 md:p-14 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-bg border border-brand-border rounded-full flex items-center justify-center text-brand-primary">
          <Lock size={16} />
        </div>
        
        <div className="text-center mb-10 mt-4">
          <h1 className="font-serif text-3xl text-brand-text mb-2">Client Portal</h1>
          <p className="text-brand-muted text-xs uppercase tracking-widest">Secure Access</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-8">
          <div className="relative">
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className={`w-full bg-transparent border-b ${error ? 'border-brand-red text-brand-red' : 'border-brand-border text-brand-text'} px-0 py-3 focus:outline-none focus:border-brand-primary transition-colors text-center font-serif text-lg tracking-widest placeholder-transparent peer`}
              placeholder="Enter Commission ID"
            />
            <label className="absolute left-1/2 -translate-x-1/2 -top-4 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
              Commission Key
            </label>
            {error && (
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-brand-red">
                Invalid Key
              </span>
            )}
          </div>
          <button 
            type="submit"
            disabled={isAuthenticating || !password}
            className="w-full bg-brand-text text-brand-bg px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors disabled:opacity-50 mt-4"
          >
            {isAuthenticating ? "Verifying..." : "Access Archives"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
