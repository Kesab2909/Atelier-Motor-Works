"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function DossierModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate download delay
    setTimeout(() => {
      // In a real scenario, this would be a real PDF file
      window.open("/dossier/commission-014.pdf", "_blank");
      onClose();
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 500);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-bg/90 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-brand-surface border border-brand-border p-10 shadow-2xl z-10"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-brand-muted hover:text-brand-text transition-colors">
              <X size={24} strokeWidth={1} />
            </button>
            <h3 className="font-serif text-3xl mb-4 text-brand-text">Restoration Dossier</h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-8 font-light">
              Enter your email to receive the full mechanical specifications, build sheet, and provenance notes for Commission 014.
            </p>
            
            {submitted ? (
              <div className="h-24 flex items-center justify-center">
                <span className="text-brand-primary text-sm uppercase tracking-widest animate-pulse">Preparing your dossier...</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary"
                  >
                    Email Address
                  </label>
                </div>
                <button type="submit" className="w-full bg-brand-text text-brand-bg hover:bg-brand-primary hover:text-brand-bg font-semibold uppercase tracking-widest text-xs py-4 transition-colors duration-500">
                  Download Document
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
