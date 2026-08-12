"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center p-12 bg-brand-surface border border-brand-border"
      >
        <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="text-brand-red" size={24} />
        </div>
        <h2 className="font-serif text-3xl mb-4 text-brand-text">A System Fault Occurred</h2>
        <p className="text-brand-muted text-sm leading-relaxed mb-8">
          The requested operation could not be completed. Our technicians have been notified of the telemetry failure.
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => reset()}
            className="w-full bg-brand-text text-brand-bg px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors"
          >
            Attempt Recovery
          </button>
          <Link
            href="/"
            className="w-full bg-transparent border border-brand-border text-brand-text px-6 py-3 uppercase tracking-widest text-xs font-semibold hover:border-brand-text transition-colors"
          >
            Return to Atelier
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
