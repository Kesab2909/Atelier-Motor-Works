"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import settings from "@/data/settings.json";

export default function AboutPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            The Atelier
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-muted max-w-2xl text-lg"
          >
            Located in {settings.location}, Atelier North is a sanctuary for vintage machines that demand preservation.
          </motion.p>
        </div>

        {/* Founder Story */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[600px] w-full border border-brand-border"
            >
              <Image 
                src="/images/interior/dashboard-gauges.jpg" 
                alt="Founder in Workshop" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-brand-primary text-xs uppercase tracking-widest font-semibold mb-4 block">Genesis</span>
              <h2 className="font-serif text-4xl mb-6">Born from Obsession</h2>
              <div className="w-12 h-[1px] bg-brand-border mb-8"></div>
              <p className="text-brand-muted leading-relaxed mb-6">
                Atelier North was not founded to be a high-volume collision shop or a restomod factory. It was born from a singular obsession with mechanical purity. Our founder spent two decades rebuilding engines in a dimly lit garage before realizing that true preservation requires an uncompromising environment.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Today, our facility operates more like a laboratory than a traditional garage. We believe that to properly restore a machine, one must first respect its creator. We do not seek to reinvent; we seek to refine, preserve, and reanimate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Space */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl mb-6">The Environment</h2>
            <p className="text-brand-muted leading-relaxed">
              Our 12,000 square foot facility is climate-controlled, surgically clean, and entirely dedicated to the craft. From our engine clean-room to our in-house upholstery studio, every zone is designed to foster absolute concentration.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "/images/workshop/workshop-metalwork.jpg",
              "/images/workshop/workshop-wide.jpg",
              "/images/interior/leather-seat.jpg"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-80 w-full"
              >
                <Image src={img} alt={`Facility ${i+1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
