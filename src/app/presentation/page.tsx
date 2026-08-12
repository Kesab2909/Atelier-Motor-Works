"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import projects from "@/data/projects.json";

type Slide = {
  type: 'title' | 'chapter';
  title: string;
  subtitle?: string;
  text?: string;
  image: string;
};

export default function PresentationMode() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const project = projects.find(p => p.slug === 'commission-014');
  
  const slides: Slide[] = project ? [
    { type: 'title', title: project.title, subtitle: project.vehicle, image: project.heroImage, text: '' },
    ...(project.sections || []).map((s: any) => ({
      type: 'chapter' as const,
      title: s.heading,
      text: s.pullQuote || (s.text ? s.text.split('\n')[0].substring(0, 150) + '...' : ''),
      image: s.image
    })).filter((s: any) => s.image)
  ] : [];

  const handleNext = useCallback(() => {
    if (slides.length > 0) {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    if (slides.length > 0) {
      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    }
  }, [slides.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  if (!project || slides.length === 0) return <div className="bg-black min-h-screen text-white flex items-center justify-center">Loading Presentation...</div>;

  const slide = slides[currentSlide];

  return (
    <div className="bg-[#0B0B0B] min-h-screen w-full overflow-hidden relative cursor-none select-none" onClick={handleNext}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src={slide.image} 
            alt={slide.title} 
            fill 
            className="object-cover opacity-60 mix-blend-luminosity scale-105" 
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/50" />
          
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-16">
            {slide.type === 'title' ? (
              <>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                  className="text-[#BFA37E] text-[10px] uppercase tracking-[0.4em] font-semibold mb-8 block"
                >
                  Atelier North Motor Works
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1.5 }}
                  className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F5F2EB] tracking-tight leading-[1.1] mb-6"
                >
                  {slide.title}
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                  className="font-serif italic text-2xl md:text-3xl text-[#C8C2B6]"
                >
                  {slide.subtitle}
                </motion.h2>
              </>
            ) : (
              <div className="max-w-5xl mx-auto flex flex-col items-center mt-[40vh]">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1.2 }}
                  className="font-serif text-5xl md:text-7xl text-[#F5F2EB] mb-8"
                >
                  {slide.title}
                </motion.h2>
                <motion.div 
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  className="w-16 h-[1px] bg-[#BFA37E] mb-12 origin-center"
                />
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.5 }}
                  className="text-[#C8C2B6] font-serif italic text-2xl md:text-4xl leading-[1.4]"
                >
                  "{slide.text}"
                </motion.p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, idx) => (
          <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all duration-1000 ${idx === currentSlide ? 'bg-[#BFA37E] scale-150' : 'bg-[#C8C2B6]/30'}`} />
        ))}
      </div>
    </div>
  );
}
