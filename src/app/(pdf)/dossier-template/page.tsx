"use client";

import Image from "next/image";

export default function DossierTemplate() {
  return (
    <div className="w-[8.5in] min-h-[11in] mx-auto bg-white print:bg-white text-black print:text-black font-sans">
      
      {/* Page 1: Cover Page */}
      <div className="w-[8.5in] h-[11in] flex flex-col justify-between p-16 break-after-page relative overflow-hidden bg-[#0B0B0B] text-[#F5F2EB]">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
           <Image src="/images/hero.jpg" alt="Cover" fill className="object-cover" sizes="8.5in" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-[#0B0B0B]/20 z-10"></div>
        <div className="relative z-20 flex flex-col justify-between h-full">
          <header className="flex justify-between items-start">
             <div className="text-[#BFA37E] font-serif text-3xl tracking-widest">AN</div>
             <div className="text-right">
               <p className="uppercase tracking-[0.2em] text-[10px] text-[#C8C2B6]">Atelier North</p>
               <p className="uppercase tracking-[0.2em] text-[10px] text-[#C8C2B6]">Motor Works</p>
             </div>
          </header>
          <div className="mb-24">
             <h4 className="text-[#BFA37E] uppercase tracking-[0.2em] text-[10px] mb-4">Restoration Dossier</h4>
             <h1 className="font-serif text-7xl font-light tracking-tight leading-none mb-6">Commission<br/>014</h1>
             <p className="text-[#C8C2B6] font-light max-w-sm leading-[1.8] text-sm">A complete archive of the restoration, provenance, and specifications for the 1973 Porsche 911 Carrera RS.</p>
          </div>
        </div>
      </div>

      {/* Page 2: Provenance */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col justify-center">
        <h2 className="font-serif text-4xl mb-8 text-[#0B0B0B]">Provenance & History</h2>
        <div className="w-16 h-px bg-[#BFA37E] mb-12"></div>
        <div className="grid grid-cols-2 gap-12">
          <div className="text-xs leading-[2] text-[#121212]">
            <p className="mb-6">Discovered in a temperature-controlled hangar in Geneva, Commission 014 arrived at our atelier as a matching-numbers rolling chassis. The vehicle had been off the road since 1989, preserved in a state of suspended animation by its second owner, a prominent Swiss horologist.</p>
            <p>Our mandate was not simply to repair, but to resurrect the machine while preserving the irreplaceable soul etched into its chassis over fifty years. Every original stamp, factory imperfection, and wear pattern was cataloged before the teardown began. The unbroken chain of ownership and original Swiss registration documents confirmed its elite status.</p>
          </div>
          <div className="relative h-72 bg-stone-100">
             <Image src="/images/philosophy.jpg" alt="Provenance" fill className="object-cover grayscale" sizes="4in" />
          </div>
        </div>
      </div>

      {/* Page 3: Specifications */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-[#FAFAFA]">
        <h2 className="font-serif text-4xl mb-12 text-center text-[#0B0B0B]">Factory Specifications</h2>
        <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm">
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px]">Chassis Number</span>
            <span className="font-serif text-[#0B0B0B]">9113600412</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px]">Engine Type</span>
            <span className="font-serif text-[#0B0B0B]">Type 911/83 (2.7L)</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px]">Transmission</span>
            <span className="font-serif text-[#0B0B0B]">Type 915/08</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px]">Paint Code</span>
            <span className="font-serif text-[#0B0B0B]">Light Yellow (117)</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px]">Interior</span>
            <span className="font-serif text-[#0B0B0B]">Black Leatherette (11)</span>
          </div>
          <div className="flex justify-between border-b border-stone-200 pb-2">
            <span className="text-stone-500 uppercase tracking-wider text-[10px]">Delivery Date</span>
            <span className="font-serif text-[#0B0B0B]">April 1973</span>
          </div>
        </div>
        <div className="mt-16 relative h-96 w-full">
           <Image src="/images/classic.jpg" alt="Specs" fill className="object-cover grayscale" sizes="8.5in" />
        </div>
      </div>
      
      {/* Page 4: Engine Rebuild */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col">
        <h2 className="font-serif text-4xl mb-8 text-[#0B0B0B]">Engine & Drivetrain</h2>
        <div className="w-16 h-px bg-[#BFA37E] mb-12"></div>
        <div className="relative h-80 w-full mb-12 bg-black">
           <Image src="/images/engine.jpg" alt="Engine" fill className="object-cover" sizes="8.5in" />
        </div>
        <div className="columns-2 gap-12 text-xs leading-[2] text-[#121212]">
          <p className="mb-4">The beating heart of the RS, the 2.7-liter mechanically injected flat-six, required microscopic precision. The magnesium case was completely cleaned, measured, and line-bored back to zero-hour tolerances. We retained the original Bosch mechanical fuel injection (MFI) pump, recalibrating it on our flow bench to exact factory delivery curves.</p>
          <p>Every fastener, bracket, and linkage was replated in period-correct yellow zinc or black oxide. The distinctive fiberglass engine shroud was painstakingly restored using original resins to maintain its slightly translucent, raw appearance—a hallmark of authentic 1970s Porsche motorsport engineering.</p>
        </div>
      </div>

      {/* Page 5: Interior Craftsmanship */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-[#0B0B0B] text-[#C8C2B6]">
        <h2 className="font-serif text-4xl mb-8 text-[#F5F2EB]">Interior Craftsmanship</h2>
        <div className="w-16 h-px bg-[#BFA37E] mb-12"></div>
        <div className="grid grid-cols-2 gap-12 h-full">
           <div className="relative h-[650px]">
             <Image src="/images/interior.jpg" alt="Interior" fill className="object-cover opacity-80 mix-blend-luminosity" sizes="4in" />
           </div>
           <div className="flex flex-col justify-center">
             <p className="text-xs leading-[2] mb-8">The cabin of Commission 014 is a study in tactile feedback and minimalist purpose. The lightweight Recaro sport seats were completely dismantled, their steel frames powder-coated, and the horsehair padding replaced with modern, durable equivalents that match original densities.</p>
             <p className="text-xs leading-[2]">Upholstered in correct grain black leatherette with Perlon corduroy inserts, the aroma inside the cabin instantly transports the driver to Stuttgart, 1973. The thin-rimmed steering wheel was re-wrapped in top-grain leather, providing the exact tactile interface required to command the front wheels.</p>
           </div>
        </div>
      </div>

      {/* Page 6: Fabrication & Metalwork */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col justify-center">
        <h2 className="font-serif text-4xl mb-8 text-[#0B0B0B]">Fabrication & Metalwork</h2>
        <div className="w-16 h-px bg-[#BFA37E] mb-12"></div>
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="relative h-64 bg-stone-100">
             <Image src="/images/welding.jpg" alt="Welding" fill className="object-cover grayscale" sizes="4in" />
          </div>
          <div className="text-xs leading-[2] text-[#121212] flex flex-col justify-center">
            <p className="mb-4">Decades of exposure necessitated extensive structural intervention. The chassis was media-blasted to bare metal, revealing areas of oxidation in the longitudinals and suspension pickup points.</p>
            <p>Using factory-gauge steel and period-correct spot-welding techniques, we fabricated replacement panels that perfectly mimic the original factory seams. Every repair was lead-loaded, avoiding modern plastic fillers entirely.</p>
          </div>
        </div>
        <div className="relative h-64 w-full bg-stone-100">
           <Image src="/images/metalwork.jpg" alt="Chassis bare metal" fill className="object-cover grayscale" sizes="8.5in" />
        </div>
      </div>

      {/* Page 7: Workshop Photography */}
      <div className="w-[8.5in] h-[11in] p-0 break-after-page bg-black grid grid-cols-2 grid-rows-3 gap-1 relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
           <h2 className="font-serif text-5xl text-white mix-blend-difference uppercase tracking-[0.3em] text-center">In <br/> Process</h2>
        </div>
        <div className="relative w-full h-full"><Image src="/images/blur.jpg" alt="Workshop 1" fill className="object-cover opacity-80" sizes="4.25in" /></div>
        <div className="relative w-full h-full"><Image src="/images/inspection.jpg" alt="Workshop 2" fill className="object-cover opacity-80" sizes="4.25in" /></div>
        <div className="relative w-full h-full col-span-2"><Image src="/images/assembly.jpg" alt="Workshop 3" fill className="object-cover opacity-60 grayscale" sizes="8.5in" /></div>
        <div className="relative w-full h-full"><Image src="/images/gauges.jpg" alt="Workshop 4" fill className="object-cover opacity-80 grayscale" sizes="4.25in" /></div>
        <div className="relative w-full h-full bg-[#0B0B0B] flex items-center justify-center"><p className="text-[#C8C2B6] uppercase tracking-[0.2em] text-[10px]">Atelier North / 3420 Hours</p></div>
      </div>

      {/* Page 8: Artisan Notes & Final Letter */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-[#FAFAFA] flex flex-col justify-center">
        <h2 className="font-serif text-4xl mb-12 text-[#0B0B0B]">Artisan Notes</h2>
        <div className="text-xs leading-[2] text-[#121212] space-y-6 max-w-2xl">
          <p>When Commission 014 arrived, it was tired but honest. The challenge with a vehicle of this pedigree is restraint. It is easy to over-restore, to make a machine more perfect than it ever was when it left the factory. We resisted that temptation.</p>
          <p>The imperfections in the fiberglass ducktail were preserved, as they tell the story of early composite manufacturing. The mechanical injection pump retains its original casting marks, unpolished. The resulting vehicle does not feel like a new car—it feels like a meticulously cared-for original that has simply cheated time.</p>
          <p>It has been a privilege to be the custodians of this resurrection. Drive it with purpose.</p>
          <div className="pt-12">
            <p className="font-serif italic text-2xl mb-1 text-[#0B0B0B]">Elara North</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8C2B6]">Founder & Master Restorer</p>
          </div>
        </div>
      </div>

      {/* Page 9: Certificate of Authenticity */}
      <div className="w-[8.5in] h-[11in] p-24 flex flex-col items-center justify-center text-center relative border-[12px] border-[#0B0B0B]/5 bg-white">
         <div className="absolute top-16 text-[#BFA37E] font-serif text-2xl tracking-widest">AN</div>
         <h1 className="font-serif text-5xl mb-6 text-[#0B0B0B]">Certificate of Authenticity</h1>
         <p className="text-[#BFA37E] tracking-[0.2em] uppercase text-[10px] mb-16">Commission 014</p>
         <p className="max-w-md mx-auto text-xs leading-[2] text-[#121212] mb-16">This document certifies that the vehicle bearing chassis number 9113600412 has undergone a complete, nut-and-bolt concours restoration by Atelier North Motor Works. All work has been performed to exact period specifications, utilizing authentic materials and artisanal techniques.</p>
         
         <div className="flex justify-between w-full max-w-md mt-12 pt-8 border-t border-stone-200">
            <div className="text-left">
               <div className="font-serif italic text-xl mb-2 text-[#0B0B0B]">Elara North</div>
               <div className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Master Restorer</div>
            </div>
            <div className="text-right">
               <div className="text-xs font-medium mb-2 font-serif text-[#0B0B0B]">October 14, 2026</div>
               <div className="text-[9px] uppercase tracking-[0.2em] text-stone-500">Date of Delivery</div>
            </div>
         </div>
      </div>

    </div>
  );
}
