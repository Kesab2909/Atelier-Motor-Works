"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CapacityIndicator from "@/components/ui/CapacityIndicator";

export default function WaitlistPage() {
  return (
    <div className="bg-brand-bg min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <span className="font-serif text-[40vw] text-brand-text">14</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-primary text-xs uppercase tracking-widest font-semibold mb-6 block">Capacity & Allocation</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
              Uncompromising Quality <br className="hidden md:block"/> Takes Time.
            </h1>
            <p className="text-brand-muted text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light">
              We operate a restricted allocation model. By limiting our intake, we guarantee that every commission receives the obsessive attention it demands.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <CapacityIndicator />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-brand-muted mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              We are currently accepting inquiries for late 2027 allocations. If you possess a vehicle of significant pedigree or wish to commission a ground-up build, please submit a formal inquiry.
            </p>
            <Link href="/contact" className="inline-block bg-brand-text text-brand-bg px-10 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors duration-500">
              Submit Inquiry
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
