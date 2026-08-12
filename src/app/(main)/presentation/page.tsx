"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PresentationPage() {
  return (
    <div className="bg-brand-bg text-brand-text min-h-screen">
      <div className="w-full h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Presentation Cover" 
            fill 
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center px-8"
        >
          <div className="text-amber-500 font-serif text-5xl tracking-[0.3em] mb-12">AN</div>
          <h1 className="font-serif text-5xl md:text-8xl font-light tracking-tight mb-8">
            The Pursuit of <br />
            <span className="italic text-stone-400">Mechanical Truth</span>
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto text-xl tracking-wide font-light">
            A bespoke presentation for prospective commissions.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl mb-8">Our Philosophy</h2>
          <div className="w-12 h-px bg-amber-500 mb-8"></div>
          <p className="text-stone-400 leading-relaxed text-lg mb-6">
            We do not simply restore cars. We resurrect the soul of the machine. Every commission is a historical artifact, treated with the reverence of a museum piece but engineered for the visceral thrill of the open road.
          </p>
          <p className="text-stone-400 leading-relaxed text-lg">
            Our atelier takes on a maximum of three commissions per year, ensuring uncompromising attention to detail and a true partnership with the collector.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative h-[600px] w-full"
        >
           <Image 
            src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Philosophy" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </div>
  );
}
