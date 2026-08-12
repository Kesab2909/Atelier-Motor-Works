"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <div className="bg-brand-bg min-h-screen flex items-center justify-center pt-24 pb-12 text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-20 h-20 mx-auto border border-brand-primary rounded-full flex items-center justify-center mb-10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl mb-6 text-brand-text">Dossier Received</h1>
          <p className="text-brand-muted text-lg leading-relaxed mb-12">
            Your inquiry has been successfully transmitted to our atelier. Our team will review the provided details and contact you within 3-5 business days to discuss the feasibility of your commission.
          </p>
          
          <Link href="/" className="inline-block border border-brand-border px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors duration-500">
            Return to Atelier
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
