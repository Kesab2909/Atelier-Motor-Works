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
    // We fetch it this way in client side for static JSON
    const found = projects.find(p => p.slug === slug);
    if (found) setProject(found);
  }, [slug]);

  if (!project) {
    return <div className="min-h-screen bg-brand-bg flex items-center justify-center text-brand-primary">Loading commission...</div>;
  }

  return (
    <div className="bg-brand-bg min-h-screen">
      <DossierModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-end pb-12">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src={project.heroImage} 
            alt={project.title} 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <Link href="/work" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-primary transition-colors text-xs uppercase tracking-widest font-semibold mb-8">
            <ArrowLeft size={14} /> Back to Collection
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-primary text-xl font-serif"
          >
            {project.vehicle}
          </motion.p>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-20 border-b border-brand-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-2">Duration</p>
              <p className="font-serif text-xl">{project.duration || 'N/A'}</p>
            </div>
            {project.budget && (
              <div>
                <p className="text-brand-muted text-xs uppercase tracking-widest mb-2">Budget</p>
                <p className="font-serif text-xl">{project.budget}</p>
              </div>
            )}
            {project.specs && Object.entries(project.specs).map(([key, value]) => (
              <div key={key}>
                <p className="text-brand-muted text-xs uppercase tracking-widest mb-2">{key}</p>
                <p className="font-serif text-xl">{String(value)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="font-serif text-3xl mb-8">The Challenge</h2>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-3 border border-brand-border px-6 py-4 hover:border-brand-primary hover:text-brand-primary transition-colors group text-xs uppercase tracking-widest font-semibold"
              >
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                Download Dossier
              </button>
            </div>
            <div className="md:col-span-8">
              <p className="text-brand-text text-xl md:text-2xl leading-relaxed font-serif">
                {project.summary}
              </p>
              <div className="w-12 h-[1px] bg-amber-500 my-12"></div>
              {project.sections && project.sections.length > 0 ? (
                <div className="space-y-12">
                  {project.sections.map((section: any, idx: number) => (
                    <div key={idx}>
                      <h3 className="font-serif text-2xl mb-4 text-stone-200">{section.heading}</h3>
                      <p className="text-stone-400 leading-loose whitespace-pre-wrap font-light">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-brand-muted leading-loose whitespace-pre-wrap">
                  {project.story || "This commission represents a deep dive into automotive archaeology. We started by stripping the chassis to bare metal, cataloging every imperfection and rust spot. Rather than hiding the vehicle's history, we chose to stabilize the patina while completely modernizing the underpinnings. The result is a machine that looks as though it has lived a thousand lives, yet drives with the precision of a modern sports car."}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-12 pb-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col gap-12">
              {project.gallery.map((img: string, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden"
                >
                  <Image src={img} alt={`${project.title} gallery image ${idx + 1}`} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Commission CTA */}
      <section className="py-32 bg-brand-surface text-center">
        <h2 className="font-serif text-4xl mb-8">Envision Your Commission</h2>
        <Link href="/contact" className="inline-block bg-brand-text text-brand-bg px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors duration-500">
          Inquire Now
        </Link>
      </section>
    </div>
  );
}
