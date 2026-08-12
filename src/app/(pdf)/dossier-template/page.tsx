"use client";

import Image from "next/image";

export default function DossierTemplate() {
  return (
    <div className="w-[8.5in] min-h-[11in] mx-auto bg-white print:bg-white text-black print:text-black font-sans">
      
      {/* Cover Page */}
      <div className="w-[8.5in] h-[11in] flex flex-col justify-between p-16 break-after-page relative overflow-hidden bg-[#0c0c0c] text-white">
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Cover" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 z-10"></div>
        <div className="relative z-20 flex flex-col justify-between h-full">
          <header className="flex justify-between items-start">
             <div className="text-amber-500 font-serif text-3xl tracking-widest">AN</div>
             <div className="text-right">
               <p className="uppercase tracking-[0.2em] text-xs text-stone-400">Atelier North</p>
               <p className="uppercase tracking-[0.2em] text-xs text-stone-400">Motor Works</p>
             </div>
          </header>
          <div className="mb-24">
             <h4 className="text-amber-500 uppercase tracking-widest text-sm mb-4">Restoration Dossier</h4>
             <h1 className="font-serif text-6xl font-light tracking-tight leading-none mb-6">Commission<br/>014</h1>
             <p className="text-stone-300 font-light max-w-sm">A complete archive of the restoration, provenance, and specifications for the 1973 Porsche 911 Carrera RS.</p>
          </div>
        </div>
      </div>

      {/* Page 2: Provenance */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col justify-center">
        <h2 className="font-serif text-4xl mb-8">Provenance & History</h2>
        <div className="w-16 h-px bg-amber-500 mb-8"></div>
        <div className="grid grid-cols-2 gap-12">
          <div className="text-sm leading-relaxed text-stone-800">
            <p className="mb-4">Discovered in a temperature-controlled hangar in Geneva, Commission 014 arrived at our atelier as a matching-numbers rolling chassis. The vehicle had been off the road since 1989, preserved in a state of suspended animation by its second owner, a prominent Swiss horologist.</p>
            <p>Our mandate was not simply to repair, but to resurrect the machine while preserving the irreplaceable soul etched into its chassis over fifty years. Every original stamp, factory imperfection, and wear pattern was cataloged before the teardown began.</p>
          </div>
          <div className="relative h-64 bg-stone-100">
             <Image src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Provenance" fill className="object-cover grayscale" />
          </div>
        </div>
      </div>

      {/* Page 3: Specifications */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-stone-50">
        <h2 className="font-serif text-4xl mb-12 text-center">Factory Specifications</h2>
        <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-sm">
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-xs">Chassis Number</span>
            <span className="font-medium">9113600412</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-xs">Engine Type</span>
            <span className="font-medium">Type 911/83 (2.7L)</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-xs">Transmission</span>
            <span className="font-medium">Type 915/08</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-xs">Paint Code</span>
            <span className="font-medium">Light Yellow (117)</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-xs">Interior</span>
            <span className="font-medium">Black Leatherette (11)</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-xs">Delivery Date</span>
            <span className="font-medium">April 1973</span>
          </div>
        </div>
        <div className="mt-16 relative h-96 w-full">
           <Image src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Specs" fill className="object-cover" />
        </div>
      </div>
      
      {/* Page 4: Engine Rebuild */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col">
        <h2 className="font-serif text-4xl mb-8">Engine & Drivetrain</h2>
        <div className="w-16 h-px bg-amber-500 mb-12"></div>
        <div className="relative h-80 w-full mb-12 bg-black">
           <Image src="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Engine" fill className="object-cover" />
        </div>
        <div className="columns-2 gap-12 text-sm leading-relaxed text-stone-800">
          <p className="mb-4">The beating heart of the RS, the 2.7-liter mechanically injected flat-six, required microscopic precision. The magnesium case was completely cleaned, measured, and line-bored back to zero-hour tolerances. We retained the original Bosch mechanical fuel injection (MFI) pump, recalibrating it on our flow bench to exact factory delivery curves.</p>
          <p>Every fastener, bracket, and linkage was replated in period-correct yellow zinc or black oxide. The distinctive fiberglass engine shroud was painstakingly restored using original resins to maintain its slightly translucent, raw appearance—a hallmark of authentic 1970s Porsche motorsport engineering.</p>
        </div>
      </div>

      {/* Page 5: Interior Craftsmanship */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-[#0c0c0c] text-stone-300">
        <h2 className="font-serif text-4xl mb-8 text-white">Interior Craftsmanship</h2>
        <div className="w-16 h-px bg-amber-500 mb-12"></div>
        <div className="grid grid-cols-2 gap-12 h-full">
           <div className="relative h-full min-h-[400px]">
             <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Interior" fill className="object-cover opacity-80" />
           </div>
           <div className="flex flex-col justify-center">
             <p className="text-sm leading-relaxed mb-6">The cabin of Commission 014 is a study in tactile feedback and minimalist purpose. The lightweight Recaro sport seats were completely dismantled, their steel frames powder-coated, and the horsehair padding replaced with modern, durable equivalents that match original densities.</p>
             <p className="text-sm leading-relaxed">Upholstered in correct grain black leatherette with Perlon corduroy inserts, the aroma inside the cabin instantly transports the driver to Stuttgart, 1973. The thin-rimmed steering wheel was re-wrapped in top-grain leather, providing the exact tactile interface required to command the front wheels.</p>
           </div>
        </div>
      </div>

      {/* Page 6: Certificate of Authenticity */}
      <div className="w-[8.5in] h-[11in] p-24 flex flex-col items-center justify-center text-center relative border-[12px] border-stone-100">
         <div className="absolute top-16 text-amber-500 font-serif text-2xl tracking-widest">AN</div>
         <h1 className="font-serif text-5xl mb-6">Certificate of Authenticity</h1>
         <p className="text-stone-500 tracking-widest uppercase text-xs mb-16">Commission 014</p>
         <p className="max-w-md mx-auto text-sm leading-relaxed text-stone-700 mb-16">This document certifies that the vehicle bearing chassis number 9113600412 has undergone a complete, nut-and-bolt concours restoration by Atelier North Motor Works. All work has been performed to exact period specifications, utilizing authentic materials and artisanal techniques.</p>
         
         <div className="flex justify-between w-full max-w-md mt-12 pt-8 border-t border-stone-300">
            <div className="text-left">
               <div className="font-serif italic text-2xl mb-2 text-stone-800">Elara North</div>
               <div className="text-[10px] uppercase tracking-wider text-stone-500">Master Restorer</div>
            </div>
            <div className="text-right">
               <div className="text-sm font-medium mb-2">October 14, 2026</div>
               <div className="text-[10px] uppercase tracking-wider text-stone-500">Date of Delivery</div>
            </div>
         </div>
      </div>

    </div>
  );
}
