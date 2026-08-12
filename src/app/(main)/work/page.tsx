"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";

export default function WorkPage() {
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
            The Collection
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-muted max-w-2xl text-lg"
          >
            A curated selection of our most significant restorations. Each commission represents thousands of hours of mechanical obsession and artisanal devotion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 md:gap-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (idx % 2) * 0.2 }}
              className={`group ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div className="relative aspect-[4/5] w-full overflow-hidden mb-8">
                  <Image 
                    src={project.heroImage} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors duration-1000" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="font-serif text-3xl mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h2>
                    <p className="text-brand-muted text-sm">{project.vehicle}</p>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-brand-text/50 font-semibold">Explore</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
