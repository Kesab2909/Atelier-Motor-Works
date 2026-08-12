"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { 
    title: "Discovery", 
    desc: "Every commission begins with a conversation. We dissect your vision, analyze the donor vehicle's provenance, and establish the mechanical and aesthetic constraints. We do not accept every project; we only take on commissions where we can add undisputed value.",
    img: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    title: "Documentation", 
    desc: "Before a single bolt is turned, the vehicle undergoes forensic documentation. Hundreds of photographs are taken. Wiring harnesses are mapped. Original paint thickness is measured. We must understand exactly what the vehicle was before we decide what it will become.",
    img: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    title: "Disassembly", 
    desc: "The teardown is methodical. The vehicle is stripped to its bare chassis. Every component is bagged, tagged, and entered into our digital registry. This is where we uncover the hidden sins of past mechanics and the true extent of the structural degradation.",
    img: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    title: "Fabrication", 
    desc: "Rust is excised with surgical precision. Weak points in the original chassis are reinforced using modern metallurgy. We recreate unobtainable panels by hand on the English wheel. The body is aligned to tolerances far tighter than the original factory specifications.",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    title: "Mechanical", 
    desc: "Engines are not merely rebuilt; they are blueprinted. We balance rotating assemblies to the gram. Transmissions are re-geared for modern traffic. Suspension geometry is corrected. The soul of the machine is re-engineered for another fifty years of abuse.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    title: "Finish", 
    desc: "Bare metal is sealed in epoxy primer before enduring hundreds of hours of block sanding. Period-correct paints are applied, or custom hues are mixed to your exact specification. Interiors are re-trimmed in Scottish leather and German square-weave carpet.",
    img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    title: "Delivery", 
    desc: "After 500 miles of shakedown testing, the vehicle is presented to you. You receive the keys, the documentation dossier, and a machine that is fundamentally better than the day it left the factory decades ago.",
    img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-32 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
          >
            The Restoration Ritual
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-muted text-lg leading-relaxed"
          >
            We approach automotive restoration not as mechanics, but as preservationists. Our seven-step methodology guarantees uncompromising quality and historical integrity.
          </motion.p>
        </div>

        <div className="space-y-32">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh] overflow-hidden group">
                <Image 
                  src={step.img} 
                  alt={step.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-brand-primary font-serif text-xl md:text-2xl mb-4 block">Phase 0{idx + 1}</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">{step.title}</h2>
                <div className="w-12 h-[1px] bg-brand-border mb-8"></div>
                <p className="text-brand-muted text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center border-t border-brand-border pt-20"
        >
          <h2 className="font-serif text-4xl mb-8">Begin Your Commission</h2>
          <Link href="/contact" className="inline-block bg-brand-text text-brand-bg px-10 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors duration-500">
            Submit an Inquiry
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
