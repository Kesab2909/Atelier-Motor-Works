"use client";

import { motion } from "framer-motion";

export default function CapacityIndicator() {
  return (
    <motion.div 
      className="hidden md:flex flex-col absolute bottom-12 left-6 md:left-12 w-[240px]"
    >
      <div className="w-full h-[1px] bg-[#BFA37E] mb-6"></div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-serif text-2xl text-[#BFA37E] leading-none mb-2 tracking-tighter">18</span>
          <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest text-[#C8C2B6]">Annual Capacity</span>
        </div>
        
        <div className="flex flex-col">
          <span className="font-serif text-2xl text-[#BFA37E] leading-none mb-2 tracking-tighter">03</span>
          <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest text-[#C8C2B6]">Remaining Slots</span>
        </div>
      </div>
      
      <div className="flex flex-col mt-8">
        <span className="font-serif text-2xl text-[#BFA37E] leading-none mb-2 tracking-tighter">Q4 2027</span>
        <span className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-widest text-[#C8C2B6]">Next Opening</span>
      </div>
    </motion.div>
  );
}
