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
      <section className="py-[160px]">
        <div className="container mx-auto px-6 md:px-12">
          {/* Brief */}
          <div className="editorial-grid mb-[160px]">
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
              <p className="text-brand-text text-3xl md:text-5xl leading-[1.4] font-serif tracking-tight">
                {project.summary}
              </p>
            </div>
          </div>

          {/* Chapters */}
          {project.sections && project.sections.length > 0 ? (
            <div className="space-y-[160px] md:space-y-[240px]">
              {project.sections.map((section: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="editorial-grid items-start"
                >
                  {/* Chapter Heading (Left) */}
                  <div className="col-span-4 md:col-span-4 md:sticky md:top-32 mb-12 md:mb-0 pr-8">
                    <span className="text-brand-muted text-[10px] uppercase tracking-[0.2em] mb-4 block">Chapter {String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="font-serif text-4xl md:text-6xl mb-8 text-brand-text leading-[1.1]">{section.heading}</h3>
                    <div className="w-12 h-[1px] bg-brand-primary/30"></div>
                  </div>
                  
                  {/* Chapter Content (Right) */}
                  <div className="col-span-4 md:col-span-8">
                    {section.image && (
                      <div className="mb-16 relative w-full h-[50vh] md:h-[70vh]">
                        <Image src={section.image} alt={section.heading} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]" sizes="(max-width: 768px) 100vw, 66vw" />
                        {section.archivalCaption && (
                          <p className="absolute bottom-4 left-4 bg-brand-bg/90 p-4 text-[10px] uppercase tracking-[0.2em] text-brand-muted max-w-sm">
                            {section.archivalCaption}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="text-[#C8C2B6] leading-[2.2] text-sm md:text-base space-y-8">
                      {section.text.split('\n\n').map((paragraph: string, pIdx: number) => (
                        <p key={pIdx} className="max-w-3xl">{paragraph}</p>
                      ))}
                    </div>

                    {section.pullQuote && (
                      <blockquote className="my-20 border-l border-brand-primary pl-8 max-w-3xl">
                        <p className="font-serif text-3xl md:text-4xl text-brand-text italic leading-[1.3]">"{section.pullQuote}"</p>
                      </blockquote>
                    )}

                    {section.timeline && section.timeline.length > 0 && (
                      <div className="mt-20 bg-brand-surface p-8 md:p-12 border border-brand-border">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-primary mb-8 block">Archival Timeline</h4>
                        <ul className="space-y-6">
                          {section.timeline.map((item: any, tIdx: number) => (
                            <li key={tIdx} className="flex flex-col md:flex-row gap-4 border-b border-brand-border pb-6 last:border-0 last:pb-0">
                              <span className="font-serif text-brand-text min-w-[120px]">{item.date}</span>
                              <span className="text-brand-muted text-sm">{item.event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="editorial-grid">
               <div className="col-span-4 md:col-start-5 md:col-span-8">
                 <p className="text-[#C8C2B6] leading-[2.2] max-w-2xl text-lg">
                   {project.story}
                 </p>
               </div>
            </div>
          )}
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
      <section className="py-[160px] md:py-[240px] bg-brand-bg text-center border-t border-brand-border">
        <span className="text-brand-primary text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 block">Appointment Only</span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-16 text-brand-text leading-[1.1] tracking-tight">Begin the Commission <span className="italic text-brand-muted">Conversation.</span></h2>
        <Link href="/contact" className="inline-block bg-brand-text text-brand-bg px-12 py-6 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-brand-primary transition-colors duration-700">
          Request Private Consultation
        </Link>
      </section>
    </div>
  );
}
