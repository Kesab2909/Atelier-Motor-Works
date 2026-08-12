"use client";
import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string, afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group cursor-ew-resize select-none">
      {/* After Image (Base) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt="After restoration" fill className="object-cover" quality={90} priority />
        <div className="absolute top-8 right-8 bg-brand-bg/80 backdrop-blur-md px-4 py-2 border border-brand-border text-xs uppercase tracking-widest font-semibold text-brand-text">
          After
        </div>
      </div>
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0" 
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image src={beforeImage} alt="Before restoration" fill className="object-cover" quality={90} priority />
        <div className="absolute top-8 left-8 bg-brand-bg/80 backdrop-blur-md px-4 py-2 border border-brand-border text-xs uppercase tracking-widest font-semibold text-brand-primary">
          Before
        </div>
      </div>

      {/* Slider Line & Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[1px] bg-brand-primary/60 flex items-center justify-center cursor-ew-resize pointer-events-none transition-transform"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute w-8 h-8 rounded-full bg-brand-primary shadow-lg flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-brand-bg opacity-70"></div>
            <div className="w-0.5 h-3 bg-brand-bg opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Invisible Input for interaction */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
      />
    </div>
  );
}
