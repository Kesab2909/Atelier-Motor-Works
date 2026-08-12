"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";
import { ArrowLeft, Download } from "lucide-react";
import { useState, useEffect } from "react";
import DossierModal from "@/components/ui/DossierModal";

export default function WorkDetailPage() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const found = projects.find(p => p.slug === slug);
    if (found) setProject(found);
  }, [slug]);

  if (!project) {
    return <div className="min-h-screen bg-brand-bg flex items-center justify-center text-brand-primary">Authenticating commission...</div>;
  }

  return (
    <div className="bg-brand-bg min-h-screen">
      <DossierModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* 1. Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden flex flex-col justify-end pb-16">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={project.heroImage} 
            alt={project.title} 
            fill 
            className="object-cover opacity-50 mix-blend-luminosity"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <Link href="/work" className="inline-flex items-center gap-3 text-brand-muted hover:text-brand-primary transition-colors text-[10px] uppercase tracking-[0.2em] font-semibold mb-12">
            <ArrowLeft size={12} /> Back to Collection
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-brand-text tracking-tight leading-[1.1]"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-brand-primary text-2xl font-serif italic"
          >
            {project.vehicle}
          </motion.p>
        </div>
      </section>

      {/* 2. Specs Grid */}
      <section className="py-[96px] bg-brand-surface border-y border-brand-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="editorial-grid">
            <div className="col-span-4 md:col-span-3">
              <p className="text-brand-muted text-[10px] uppercase tracking-[0.2em] mb-3">Duration</p>
              <p className="font-serif text-2xl text-brand-text">{project.duration || 'N/A'}</p>
            </div>
            {project.budget && (
              <div className="col-span-4 md:col-span-3">
                <p className="text-brand-muted text-[10px] uppercase tracking-[0.2em] mb-3">Investment</p>
                <p className="font-serif text-2xl text-brand-text">{project.budget}</p>
              </div>
            )}
            {project.specs && Object.entries(project.specs).map(([key, value]) => (
              <div key={key} className="col-span-4 md:col-span-3">
                <p className="text-brand-muted text-[10px] uppercase tracking-[0.2em] mb-3">{key}</p>
                <p className="font-serif text-2xl text-brand-text">{String(value)}</p>
              </div>
            ))}
          </div>

          {project.buildSheet && (
            <div className="mt-[96px] border-t border-brand-primary/30 pt-[96px]">
              <h3 className="font-serif text-4xl mb-12 text-brand-text">Factory Provenance</h3>
              <div className="editorial-grid">
                {Object.entries(project.buildSheet).map(([key, value]) => (
                  <div key={key} className="col-span-4 md:col-span-3 mb-8 md:mb-0">
                    <p className="text-brand-muted text-[10px] uppercase tracking-[0.2em] mb-3">{key}</p>
                    <p className="font-serif text-xl text-brand-primary">{String(value)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Story */}
      <section className="py-[144px]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="editorial-grid">
            <div className="col-span-4 md:col-span-4 mb-16 md:mb-0">
              <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 block">The Brief</span>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 border border-brand-border px-8 py-5 hover:border-brand-primary hover:text-brand-primary transition-colors duration-700 group text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-text"
              >
                <Download size={14} className="group-hover:-translate-y-1 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                Download Print Dossier
              </button>
            </div>
            <div className="col-span-4 md:col-span-8">
              <p className="text-brand-text text-2xl md:text-3xl leading-[1.6] font-serif mb-16 tracking-tight">
                {project.summary}
              </p>
              
              {project.sections && project.sections.length > 0 ? (
                <div className="space-y-[96px]">
                  {project.sections.map((section: any, idx: number) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h3 className="font-serif text-3xl mb-8 text-brand-text">{section.heading}</h3>
                      <div className="w-12 h-[1px] bg-brand-primary/30 mb-8"></div>
                      <p className="text-brand-muted leading-[2] text-sm md:text-base max-w-2xl">
                        {section.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <p className="text-brand-muted leading-[2] max-w-2xl">
                  {project.story}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-[96px] bg-brand-surface border-t border-brand-border">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col gap-16 md:gap-24">
              {project.gallery.map((img: string, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden"
                >
                  <Image 
                    src={img} 
                    alt={`${project.title} detail ${idx + 1}`} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]" 
                    sizes="100vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. CTA */}
      <section className="py-[144px] bg-brand-bg text-center border-t border-brand-border">
        <span className="text-brand-primary text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 block">Ready?</span>
        <h2 className="font-serif text-5xl md:text-6xl mb-12 text-brand-text">Envision Your Commission</h2>
        <Link href="/contact" className="inline-block bg-brand-text text-brand-bg px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-brand-primary transition-colors duration-700">
          Inquire Now
        </Link>
      </section>
    </div>
  );
}
