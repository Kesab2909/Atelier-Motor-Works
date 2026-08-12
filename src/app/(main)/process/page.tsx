"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { 
    title: "Discovery & Provenance", 
    desc: "Every commission begins with an interrogation of history. We dissect your vision, analyze the donor vehicle's provenance, and establish the mechanical and aesthetic constraints. We do not accept every project; we only take on commissions where we can add undisputed value.",
    annotation: "Archival Research • Authenticity Verification",
    img: "/images/philosophy.jpg"
  },
  { 
    title: "Forensic Documentation", 
    desc: "Before a single bolt is turned, the vehicle undergoes forensic documentation. Hundreds of photographs are taken. Wiring harnesses are mapped. Original paint thickness is measured. We must understand exactly what the vehicle was before we decide what it will become.",
    annotation: "Micro-metric Measurement • Digital Registry Entry",
    img: "/images/blur.jpg"
  },
  { 
    title: "Methodical Teardown", 
    desc: "The teardown is methodical. The vehicle is stripped to its bare chassis. Every component is bagged, tagged, and entered into our digital registry. This is where we uncover the hidden sins of past mechanics and the true extent of the structural degradation.",
    annotation: "Component Cataloging • Degradation Analysis",
    img: "/images/inspection.jpg"
  },
  { 
    title: "Metal Reconstruction", 
    desc: "Rust is excised with surgical precision. Weak points in the original chassis are reinforced using modern metallurgy. We recreate unobtainable panels by hand on the English wheel. The body is aligned to tolerances far tighter than the original factory specifications.",
    annotation: "Lead-Loading • Period-Correct Spot Welding",
    img: "/images/welding.jpg"
  },
  { 
    title: "Powertrain Reanimation", 
    desc: "Engines are not merely rebuilt; they are blueprinted. We balance rotating assemblies to the gram. Transmissions are re-geared for modern traffic. Suspension geometry is corrected. The soul of the machine is re-engineered for another fifty years of abuse.",
    annotation: "Zero-Hour Tolerances • Flow-Bench Calibration",
    img: "/images/engine.jpg"
  },
  { 
    title: "Surface & Tactile Finish", 
    desc: "Bare metal is sealed in epoxy primer before enduring hundreds of hours of block sanding. Period-correct paints are applied, or custom hues are mixed to your exact specification. Interiors are re-trimmed using authentic leather and historically accurate textiles.",
    annotation: "Epoxy Sealing • Period-Correct Weaves",
    img: "/images/assembly.jpg"
  },
  { 
    title: "Road Validation", 
    desc: "After 500 miles of shakedown testing, the vehicle is presented to you. You receive the keys, the documentation dossier, and a machine that is fundamentally better than the day it left the factory decades ago.",
    annotation: "500-Mile Shakedown • Dossier Finalization",
    img: "/images/grille.jpg"
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-40 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 block"
          >
            Methodology
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 leading-[1.1]"
          >
            The Restoration Ritual
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            We approach automotive restoration not as mechanics, but as preservationists. Our seven-step methodology guarantees uncompromising quality, mechanical purity, and historical integrity.
          </motion.p>
        </div>

        <div className="space-y-40">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-[55%] relative h-[60vh] md:h-[80vh] overflow-hidden group">
                <Image 
                  src={step.img} 
                  alt={step.title} 
                  fill 
                  className="object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-[0.22,1,0.36,1]" 
                />
              </div>
              <div className="w-full md:w-[45%] flex flex-col justify-center">
                <span className="text-brand-primary font-serif text-3xl md:text-4xl mb-6 block tracking-tighter">Chapter 0{idx + 1}</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.2]">{step.title}</h2>
                <div className="w-16 h-[1px] bg-brand-border mb-10"></div>
                <p className="text-brand-muted text-lg leading-[1.8] mb-12">{step.desc}</p>
                
                <div className="bg-brand-surface border border-brand-border p-6 flex flex-col">
                  <span className="text-brand-muted text-[9px] uppercase tracking-[0.2em] mb-2">Technical Annotation</span>
                  <span className="text-brand-text font-serif text-lg">{step.annotation}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-40 text-center border-t border-brand-border pt-32 mb-16"
        >
          <span className="text-brand-primary text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 block">Appointment Only</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-12">Begin the Commission Conversation</h2>
          <Link href="/contact" className="inline-block bg-brand-text text-brand-bg px-12 py-6 uppercase tracking-widest text-[10px] font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors duration-700">
            Request Private Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
