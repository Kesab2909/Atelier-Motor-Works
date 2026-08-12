"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PresentationPage() {
  return (
    <div className="bg-[#0c0c0c] min-h-screen text-stone-100 selection:bg-amber-900/50 selection:text-amber-50">
      {/* Slide 1: Title */}
      <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.jpg"
            alt="Atelier North Presentation Cover"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6">
          <div className="text-amber-500 font-serif text-3xl tracking-widest mb-12">AN</div>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tight mb-8">Atelier North</h1>
          <p className="uppercase tracking-[0.3em] text-sm text-stone-400">Preservation • Restoration • Archival</p>
        </div>
      </section>

      {/* Slide 2: Philosophy */}
      <section className="min-h-screen w-full flex items-center py-24 border-b border-stone-800">
        <div className="container mx-auto px-6 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-6xl mb-12 text-amber-500/90">The Philosophy</h2>
              <p className="text-2xl md:text-3xl font-light leading-snug text-stone-300 mb-8">
                We believe that true luxury lies in history. A flawless respray tells no stories.
              </p>
              <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
                Our approach emphasizes mechanical perfection wrapped in authentic patina. We are custodians of automotive archaeology, dedicated to preserving the soul of early analog machines.
              </p>
            </div>
            <div className="relative h-[60vh] w-full bg-stone-900">
               <Image src="/images/philosophy.jpg" alt="Philosophy Image" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Capacity */}
      <section className="min-h-screen w-full flex flex-col justify-center py-24 border-b border-stone-800 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-24 text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-24">Allocation & Capacity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
               <span className="font-mono text-7xl text-amber-500 mb-6">18</span>
               <span className="uppercase tracking-widest text-xs text-stone-500">Annual Limit</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="font-mono text-7xl text-stone-100 mb-6">3,500</span>
               <span className="uppercase tracking-widest text-xs text-stone-500">Average Hours per Commission</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="font-serif text-5xl text-stone-100 mb-6 mt-4">2027</span>
               <span className="uppercase tracking-widest text-xs text-stone-500">Next Available Opening</span>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Case Study */}
      <section className="min-h-screen w-full flex items-center py-24 bg-black">
        <div className="container mx-auto px-6 md:px-24">
           <h2 className="font-serif text-4xl md:text-6xl mb-16">Commission 014</h2>
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 relative h-[50vh] lg:h-[70vh]">
                 <Image src="/images/classic.jpg" alt="Commission 014" fill className="object-cover" />
              </div>
              <div className="lg:col-span-4 flex flex-col justify-end space-y-12">
                 <div>
                    <h3 className="text-amber-500 uppercase tracking-widest text-xs mb-2">Subject</h3>
                    <p className="font-serif text-2xl text-stone-200">1973 Porsche 911 Carrera RS</p>
                 </div>
                 <div>
                    <h3 className="text-amber-500 uppercase tracking-widest text-xs mb-2">Outcome</h3>
                    <p className="text-stone-400 leading-relaxed text-sm">
                      A complete concourse-level mechanical restoration while preserving the exterior patina. Delivery accompanied by a 12-page archival dossier and Certificate of Authenticity.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
