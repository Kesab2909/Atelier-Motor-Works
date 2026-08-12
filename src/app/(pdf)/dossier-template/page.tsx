"use client";

import Image from "next/image";

export default function DossierTemplate() {
  return (
    <div className="w-[8.5in] min-h-[11in] mx-auto bg-white print:bg-white text-black print:text-black font-sans shadow-2xl print:shadow-none">
      
      {/* 1. Cover Page */}
      <div className="w-[8.5in] h-[11in] flex flex-col justify-between p-16 break-after-page relative overflow-hidden bg-[#0B0B0B] text-[#F5F2EB]">
        <div className="absolute inset-0 z-0 opacity-50 mix-blend-luminosity">
           <Image src="/images/commissions/commission-014/beauty-detail.jpg" alt="Cover" fill className="object-cover" sizes="8.5in" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/30 to-[#0B0B0B]/90 z-10"></div>
        <div className="relative z-20 flex flex-col justify-between h-full">
          <header className="flex justify-between items-start">
             <div className="text-[#BFA37E] font-serif text-3xl tracking-widest">AN</div>
             <div className="text-right">
               <p className="uppercase tracking-[0.2em] text-[10px] text-[#C8C2B6]">Atelier North</p>
               <p className="uppercase tracking-[0.2em] text-[10px] text-[#C8C2B6]">Motor Works</p>
             </div>
          </header>
          <div className="mb-24 text-center">
             <h4 className="text-[#BFA37E] uppercase tracking-[0.3em] text-[12px] mb-6">Restoration Dossier</h4>
             <h1 className="font-serif text-8xl font-light tracking-tight leading-none mb-8">Commission<br/>014</h1>
             <p className="text-[#C8C2B6] font-light max-w-md mx-auto leading-[2] text-sm uppercase tracking-widest">The Concours Standard</p>
          </div>
        </div>
      </div>

      {/* 2. Vehicle Identity */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col justify-center bg-[#FAFAFA]">
        <h2 className="font-serif text-5xl mb-12 text-[#0B0B0B] border-b border-[#BFA37E] pb-6 inline-block pr-24">Vehicle Identity</h2>
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex justify-between border-b border-stone-300 pb-3">
              <span className="text-stone-500 uppercase tracking-[0.2em] text-[10px]">Chassis Number</span>
              <span className="font-serif text-[#0B0B0B] text-sm">9113600412</span>
            </div>
            <div className="flex justify-between border-b border-stone-300 pb-3">
              <span className="text-stone-500 uppercase tracking-[0.2em] text-[10px]">Engine Type</span>
              <span className="font-serif text-[#0B0B0B] text-sm">Type 911/83 (2.7L)</span>
            </div>
            <div className="flex justify-between border-b border-stone-300 pb-3">
              <span className="text-stone-500 uppercase tracking-[0.2em] text-[10px]">Transmission</span>
              <span className="font-serif text-[#0B0B0B] text-sm">Type 915/08</span>
            </div>
            <div className="flex justify-between border-b border-stone-300 pb-3">
              <span className="text-stone-500 uppercase tracking-[0.2em] text-[10px]">Exterior Color</span>
              <span className="font-serif text-[#0B0B0B] text-sm">Light Yellow (117)</span>
            </div>
            <div className="flex justify-between border-b border-stone-300 pb-3">
              <span className="text-stone-500 uppercase tracking-[0.2em] text-[10px]">Interior</span>
              <span className="font-serif text-[#0B0B0B] text-sm">Black Leatherette (11)</span>
            </div>
            <div className="flex justify-between border-b border-stone-300 pb-3">
              <span className="text-stone-500 uppercase tracking-[0.2em] text-[10px]">Production Date</span>
              <span className="font-serif text-[#0B0B0B] text-sm">April 1973</span>
            </div>
          </div>
          <div className="relative h-[24rem]">
             <Image src="/images/commissions/commission-014/final-reveal.jpg" alt="Vehicle Identity" fill className="object-cover" sizes="4in" />
          </div>
        </div>
      </div>

      {/* 3. Provenance */}
      <div className="w-[8.5in] h-[11in] break-after-page flex flex-col relative bg-[#0B0B0B]">
        <div className="h-[55%] relative w-full">
           <Image src="/images/commissions/commission-014/provenance.jpg" alt="Provenance" fill className="object-cover grayscale opacity-90 mix-blend-luminosity" sizes="8.5in" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] to-transparent"></div>
        </div>
        <div className="h-[45%] p-16 text-[#F5F2EB] flex flex-col justify-start">
          <h2 className="font-serif text-4xl mb-6">Provenance</h2>
          <div className="w-12 h-0.5 bg-[#BFA37E] mb-8"></div>
          <div className="columns-2 gap-12 text-xs leading-[2.2] text-[#C8C2B6]">
            <p className="mb-4">Discovered in a temperature-controlled hangar in Geneva, Commission 014 arrived at our atelier as a matching-numbers rolling chassis. The vehicle had been off the road since 1989, preserved in a state of suspended animation by its second owner, a prominent Swiss horologist.</p>
            <p>The unbroken chain of ownership and original Swiss registration documents confirmed its elite status. Its life began in the winding alpine passes, raced sparingly in period before being sequestered away. It stands today as a time capsule of motorsport heritage.</p>
          </div>
        </div>
      </div>

      {/* 4. Restoration Philosophy */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col justify-center items-center text-center bg-white">
        <h2 className="font-serif text-4xl mb-8 text-[#0B0B0B]">Restoration Philosophy</h2>
        <div className="w-16 h-px bg-[#BFA37E] mb-12"></div>
        <p className="max-w-xl text-sm leading-[2.4] text-stone-600 mb-16">
          Our mandate was not simply to repair, but to resurrect the machine while preserving the irreplaceable soul etched into its chassis over fifty years. Every original stamp, factory imperfection, and wear pattern was cataloged before the teardown began. We approach each commission with reverence, bridging the gap between concours perfection and authentic patina.
        </p>
        <div className="relative w-full h-80">
           <Image src="/images/commissions/commission-014/inspection-polish.jpg" alt="Philosophy" fill className="object-cover" sizes="8.5in" />
        </div>
      </div>

      {/* 5. Timeline */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-[#FAFAFA] flex flex-col">
        <h2 className="font-serif text-4xl mb-12 text-[#0B0B0B]">Timeline of Works</h2>
        <div className="grid grid-cols-12 gap-8 flex-grow">
          <div className="col-span-4 relative">
             <Image src="/images/commissions/commission-014/teardown.jpg" alt="Timeline" fill className="object-cover grayscale" sizes="3in" />
          </div>
          <div className="col-span-8 flex flex-col justify-center space-y-10 pl-8">
             <div className="relative border-l border-[#BFA37E] pl-6 pb-2">
                <div className="absolute w-2 h-2 bg-[#BFA37E] -left-[4.5px] top-1.5 rounded-full"></div>
                <span className="text-[#BFA37E] uppercase tracking-[0.2em] text-[9px] block mb-2">Phase I • Discovery</span>
                <h3 className="font-serif text-xl text-[#0B0B0B] mb-2">Cataloging & Disassembly</h3>
                <p className="text-xs text-stone-500 leading-relaxed">Systematic teardown documenting every fastener, seal, and component's condition.</p>
             </div>
             <div className="relative border-l border-[#BFA37E] pl-6 pb-2">
                <div className="absolute w-2 h-2 bg-[#BFA37E] -left-[4.5px] top-1.5 rounded-full"></div>
                <span className="text-[#BFA37E] uppercase tracking-[0.2em] text-[9px] block mb-2">Phase II • Foundation</span>
                <h3 className="font-serif text-xl text-[#0B0B0B] mb-2">Metalwork & Media Blasting</h3>
                <p className="text-xs text-stone-500 leading-relaxed">Chassis stripped to bare metal, exposing structural integrity and enabling precise fabrication.</p>
             </div>
             <div className="relative border-l border-[#BFA37E] pl-6 pb-2">
                <div className="absolute w-2 h-2 bg-[#BFA37E] -left-[4.5px] top-1.5 rounded-full"></div>
                <span className="text-[#BFA37E] uppercase tracking-[0.2em] text-[9px] block mb-2">Phase III • Resurgence</span>
                <h3 className="font-serif text-xl text-[#0B0B0B] mb-2">Powertrain & Paint</h3>
                <p className="text-xs text-stone-500 leading-relaxed">Engine rebuild to zero-hour specs, matched with a concourse-quality Light Yellow application.</p>
             </div>
             <div className="relative border-l border-[#BFA37E] pl-6 pb-2 border-transparent">
                <div className="absolute w-2 h-2 bg-[#BFA37E] -left-[4.5px] top-1.5 rounded-full"></div>
                <span className="text-[#BFA37E] uppercase tracking-[0.2em] text-[9px] block mb-2">Phase IV • Culmination</span>
                <h3 className="font-serif text-xl text-[#0B0B0B] mb-2">Assembly & Shakedown</h3>
                <p className="text-xs text-stone-500 leading-relaxed">Final mating of components, interior trimming, and rigorous dynamic testing.</p>
             </div>
          </div>
        </div>
      </div>

      {/* 6. Workshop Documentation */}
      <div className="w-[8.5in] h-[11in] p-0 break-after-page bg-black relative">
        <div className="absolute inset-0">
           <Image src="/images/commissions/commission-014/primer-stage.jpg" alt="Workshop Doc" fill className="object-cover opacity-60 mix-blend-luminosity" sizes="8.5in" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B0B]/90 to-transparent"></div>
        <div className="relative z-10 w-full h-full p-16 flex flex-col justify-end text-[#F5F2EB]">
           <p className="text-[#BFA37E] uppercase tracking-[0.3em] text-[10px] mb-4">In Process</p>
           <h2 className="font-serif text-5xl mb-6">Workshop<br/>Documentation</h2>
           <p className="max-w-sm text-xs leading-[2] text-[#C8C2B6]">Precision at every stage. The primer application is critical to the final aesthetic, demanding a surgically clean environment and masterful technique.</p>
        </div>
      </div>

      {/* 7. Fabrication */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page flex flex-col bg-white">
        <h2 className="font-serif text-4xl mb-8 text-[#0B0B0B]">Fabrication</h2>
        <div className="w-16 h-px bg-[#BFA37E] mb-10"></div>
        <div className="text-xs leading-[2.2] text-[#121212] mb-10 columns-2 gap-12">
          <p>Decades of exposure necessitated extensive structural intervention. The chassis was media-blasted to bare metal, revealing areas of oxidation in the longitudinals and suspension pickup points. Using factory-gauge steel and period-correct spot-welding techniques, we fabricated replacement panels that perfectly mimic the original factory seams.</p>
          <p>Every repair was lead-loaded, avoiding modern plastic fillers entirely. The artisanal approach to metal shaping ensures structural rigidity and authenticity, preserving the car’s original geometry perfectly.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 flex-grow">
          <div className="relative h-full">
             <Image src="/images/commissions/commission-014/fabrication.jpg" alt="Fabrication 1" fill className="object-cover" sizes="4in" />
          </div>
          <div className="relative h-full">
             <Image src="/images/commissions/commission-014/metalwork-detail.jpg" alt="Fabrication 2" fill className="object-cover" sizes="4in" />
          </div>
        </div>
      </div>

      {/* 8. Engine */}
      <div className="w-[8.5in] h-[11in] break-after-page flex flex-col relative bg-[#FAFAFA]">
        <div className="h-[60%] relative w-full">
           <Image src="/images/commissions/commission-014/engine-rebuild.jpg" alt="Engine Rebuild" fill className="object-cover" sizes="8.5in" />
        </div>
        <div className="h-[40%] p-16 flex flex-col justify-center">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-serif text-4xl text-[#0B0B0B]">The Powertrain</h2>
            <span className="text-[#BFA37E] uppercase tracking-[0.2em] text-[10px]">Matching Numbers</span>
          </div>
          <p className="text-xs leading-[2] text-stone-600">The beating heart of the RS required microscopic precision. The magnesium case was completely cleaned, measured, and line-bored back to zero-hour tolerances. We retained the original Bosch mechanical fuel injection (MFI) pump, recalibrating it on our flow bench to exact factory delivery curves. Every fastener, bracket, and linkage was replated in period-correct finishes.</p>
        </div>
      </div>

      {/* 9. Interior */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-[#0B0B0B] text-[#F5F2EB] flex flex-col">
        <h2 className="font-serif text-4xl mb-8">Interior Craftsmanship</h2>
        <div className="w-16 h-px bg-[#BFA37E] mb-12"></div>
        <div className="grid grid-cols-12 gap-12 flex-grow">
           <div className="col-span-5 flex flex-col justify-center">
             <p className="text-xs leading-[2.2] text-[#C8C2B6] mb-8">The cabin is a study in tactile feedback and minimalist purpose. The lightweight sport seats were dismantled, frames powder-coated, and padding replaced with modern, durable equivalents.</p>
             <p className="text-xs leading-[2.2] text-[#C8C2B6]">Upholstered in correct grain black leatherette, the aroma instantly transports the driver to 1973. The thin-rimmed steering wheel provides the exact tactile interface required to command the road.</p>
           </div>
           <div className="col-span-7 relative h-full">
             <Image src="/images/commissions/commission-014/dashboard-restoration.jpg" alt="Dashboard" fill className="object-cover" sizes="5in" />
           </div>
        </div>
      </div>

      {/* 10. Final Photography */}
      <div className="w-[8.5in] h-[11in] p-0 break-after-page relative bg-black">
        <div className="absolute inset-0">
           <Image src="/images/commissions/commission-014/delivery.jpg" alt="Final Reveal" fill className="object-cover" sizes="8.5in" priority />
        </div>
      </div>

      {/* 11. Letter from the Atelier */}
      <div className="w-[8.5in] h-[11in] p-24 break-after-page bg-white flex flex-col justify-center items-center text-center">
        <div className="text-[#BFA37E] font-serif text-3xl tracking-widest mb-16">AN</div>
        <h2 className="font-serif text-4xl mb-12 text-[#0B0B0B]">Letter from the Atelier</h2>
        <div className="text-sm leading-[2.4] text-stone-600 space-y-6 max-w-lg mb-16">
          <p>When Commission 014 arrived, it was tired but honest. The challenge with a vehicle of this pedigree is restraint. It is easy to over-restore, to make a machine more perfect than it ever was when it left the factory. We resisted that temptation.</p>
          <p>The resulting vehicle does not feel like a new car—it feels like a meticulously cared-for original that has simply cheated time. It has been a privilege to be the custodians of this resurrection.</p>
          <p>Drive it with purpose.</p>
        </div>
        <div className="border-t border-stone-200 pt-8 w-64 text-center">
          <p className="font-serif italic text-2xl mb-2 text-[#0B0B0B]">Elara North</p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Founder & Master Restorer</p>
        </div>
      </div>

      {/* 12. Archive Index */}
      <div className="w-[8.5in] h-[11in] p-16 break-after-page bg-[#FAFAFA] flex flex-col">
        <h2 className="font-serif text-4xl mb-4 text-[#0B0B0B]">Archive Index</h2>
        <p className="text-[#BFA37E] uppercase tracking-[0.2em] text-[10px] mb-12">Commission 014 Document Register</p>
        
        <div className="grid grid-cols-2 gap-16 flex-grow">
          <div className="space-y-6">
            <div className="border-b border-stone-300 pb-2">
              <p className="text-xs font-serif text-[#0B0B0B]">001. Original Bill of Sale (Copy)</p>
            </div>
            <div className="border-b border-stone-300 pb-2">
              <p className="text-xs font-serif text-[#0B0B0B]">002. Swiss Registration Records</p>
            </div>
            <div className="border-b border-stone-300 pb-2">
              <p className="text-xs font-serif text-[#0B0B0B]">003. Certificate of Authenticity</p>
            </div>
            <div className="border-b border-stone-300 pb-2">
              <p className="text-xs font-serif text-[#0B0B0B]">004. Engine Dyno Output Report</p>
            </div>
            <div className="border-b border-stone-300 pb-2">
              <p className="text-xs font-serif text-[#0B0B0B]">005. Fabrication Measurements & Specs</p>
            </div>
            <div className="border-b border-stone-300 pb-2">
              <p className="text-xs font-serif text-[#0B0B0B]">006. Suspension Geometry Sign-off</p>
            </div>
            <div className="border-b border-stone-300 pb-2">
              <p className="text-xs font-serif text-[#0B0B0B]">007. Paint Chemistry & Application Log</p>
            </div>
          </div>
          <div className="relative h-full grayscale opacity-80">
             <Image src="/images/commissions/commission-014/archive-garage.jpg" alt="Archive" fill className="object-cover" sizes="4in" />
          </div>
        </div>
        
        <div className="mt-8 flex justify-between items-center text-stone-400 text-[10px] uppercase tracking-[0.2em]">
          <span>Atelier North Motor Works</span>
          <span>End of Dossier</span>
        </div>
      </div>

    </div>
  );
}
