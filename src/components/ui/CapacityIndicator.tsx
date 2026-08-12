"use client";

import { motion } from "framer-motion";

export default function CapacityIndicator() {
  return (
    <div className="flex items-center gap-4 bg-brand-elevated/30 backdrop-blur-sm border border-brand-border/50 px-4 py-3">
      <div className="relative flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-amber-500 z-10"></div>
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-4 rounded-full bg-amber-500/30 absolute"
        ></motion.div>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-amber-500/90 font-medium">Waitlist Active</span>
        <span className="text-xs text-brand-muted tracking-wide font-light">Accepting commissions for Q4 2027</span>
      </div>
    </div>
  );
}
