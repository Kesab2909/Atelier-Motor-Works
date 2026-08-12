"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-stone-100 selection:bg-amber-900/50 selection:text-amber-50">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/404-bg.jpg"
          alt="Abandoned Porsche silhouette"
          fill
          priority
          className="object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <span className="text-amber-500/80 font-mono tracking-[0.2em] text-sm uppercase mb-6 block">
            Error 404
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-serif tracking-tight mb-8">
            Some roads disappear <br />
            <span className="italic text-stone-400">into history.</span>
          </h1>
          <p className="text-stone-400 max-w-xl mx-auto text-lg leading-relaxed mb-12">
            The commission or journal entry you are looking for has been moved,
            archived, or never existed in our records.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/"
              className="group relative px-8 py-4 bg-stone-100 text-black font-medium tracking-wide uppercase text-sm overflow-hidden transition-colors hover:bg-stone-300"
            >
              <span className="relative z-10">Return to Atelier</span>
            </Link>
            <Link
              href="/work"
              className="group flex items-center gap-3 px-8 py-4 text-stone-300 font-medium tracking-wide uppercase text-sm hover:text-amber-500 transition-colors"
            >
              <span className="h-[1px] w-8 bg-stone-700 group-hover:bg-amber-500 group-hover:w-12 transition-all duration-500"></span>
              View Commissions
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Subtle Grain Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}
      ></div>
    </div>
  );
}
