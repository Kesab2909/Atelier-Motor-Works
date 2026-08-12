"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import settings from "@/data/settings.json";
import projects from "@/data/projects.json";
import articles from "@/data/articles.json";
import testimonials from "@/data/testimonials.json";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const featuredProject = projects.find(p => p.isFeatured) || projects[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Full-screen Hero */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <Image 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Atelier North Workshop" 
            fill 
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-brand-bg/20 to-brand-bg" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">{settings.tagline}</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-tight mb-8"
          >
            Restoration is maintenance. <br/>
            <span className="text-brand-primary">Reanimation is devotion.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-brand-muted text-lg max-w-2xl mb-12"
          >
            {settings.description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link href="/contact" className="bg-brand-text text-brand-bg px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors duration-500">
              Begin Your Commission
            </Link>
            <Link href="/work" className="group flex items-center gap-2 text-brand-text uppercase tracking-widest text-xs font-semibold transition-colors hover:text-brand-primary">
              View the Study 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy */}
      <section className="py-32 bg-brand-bg relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">We do not build cars. <br/>We rebuild memories.</h2>
              <div className="w-12 h-[1px] bg-brand-primary mb-8"></div>
              <p className="text-brand-muted leading-relaxed mb-6">
                In an industry obsessed with speed and superficial perfection, we operate with museum-like silence and mechanical obsession. Every nut, bolt, and panel is an opportunity to honor the original creator's intent.
              </p>
              <p className="text-brand-muted leading-relaxed">
                Our atelier is a sanctuary for vintage machines—primarily air-cooled Porsches and analog classics—that deserve a second, definitive life.
              </p>
            </div>
            <div className="relative h-[600px]">
              <Image 
                src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Workshop Philosophy" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Featured Commission */}
      <section className="py-32 bg-brand-surface relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="flex flex-col md:flex-row gap-12 items-end mb-16"
          >
            <div className="flex-1">
              <span className="text-brand-primary text-xs uppercase tracking-widest font-semibold mb-4 block">Featured Work</span>
              <h2 className="font-serif text-4xl md:text-6xl">{featuredProject.title}</h2>
            </div>
            <Link href={`/work/${featuredProject.slug}`} className="group flex items-center gap-2 text-brand-text uppercase tracking-widest text-xs font-semibold hover:text-brand-primary transition-colors">
              View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="relative h-[70vh] w-full mb-12 group overflow-hidden">
            <Link href={`/work/${featuredProject.slug}`}>
              <Image 
                src={featuredProject.heroImage} 
                alt={featuredProject.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              <div className="absolute inset-0 bg-brand-bg/30 group-hover:bg-transparent transition-colors duration-1000" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-brand-border pt-8">
            <div>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Vehicle</p>
              <p className="font-serif text-xl">{featuredProject.vehicle}</p>
            </div>
            <div>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Duration</p>
              <p className="font-serif text-xl">{featuredProject.duration}</p>
            </div>
            <div>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Budget</p>
              <p className="font-serif text-xl">{featuredProject.budget}</p>
            </div>
            <div>
              <p className="text-brand-muted text-xs uppercase tracking-widest mb-1">Status</p>
              <p className="font-serif text-xl text-brand-primary">Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Preview */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="font-serif text-4xl mb-6">The Restoration Ritual</h2>
            <p className="text-brand-muted leading-relaxed">
              We do not take shortcuts. Our seven-step process ensures that every vehicle is documented, engineered, and finished to absolute perfection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Inspection", desc: "Forensic analysis of the chassis, mechanicals, and provenance.", img: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "Metalwork", desc: "Chassis reinforcement, rust eradication, and panel gapping to millimeter tolerances.", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { title: "Finish", desc: "Period-correct materials, bare-metal resprays, and uncompromising reassembly.", img: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <Image src={step.img} alt={step.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <h3 className="font-serif text-2xl mb-3 flex items-center gap-4">
                  <span className="text-brand-primary text-sm">0{i + 1}</span> {step.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/process" className="inline-block border border-brand-border px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:border-brand-primary hover:text-brand-primary transition-colors duration-500">
              Explore the Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Before/After Teaser */}
      <section className="py-20 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl mb-4">Transformation</h2>
            <p className="text-brand-muted">Commission 014: 1973 Porsche 911T</p>
          </div>
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            afterImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          />
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-32 bg-brand-bg overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-border/50 z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="min-w-[85vw] md:min-w-[600px] snap-center bg-brand-surface p-12 md:p-16 border border-brand-border"
              >
                <div className="text-brand-primary mb-8">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.593H10.222V3H21V12.084L15.918 21H14.017ZM4.819 21L7.213 14.593H1.024V3H11.802V12.084L6.719 21H4.819Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl leading-relaxed mb-8">"{t.quote}"</h3>
                <div>
                  <p className="uppercase tracking-widest text-xs font-semibold text-brand-text mb-1">{t.author}</p>
                  <p className="text-brand-muted text-xs">{t.commission}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Journal Preview */}
      <section className="py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="font-serif text-4xl">From the Journal</h2>
            <Link href="/journal" className="group flex items-center gap-2 text-brand-text uppercase tracking-widest text-xs font-semibold hover:text-brand-primary transition-colors mt-6 md:mt-0">
              Read All Articles <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.slice(0, 2).map((article, i) => (
              <Link href={`/journal/${article.slug}`} key={i} className="group block">
                <div className="relative h-[300px] md:h-[400px] w-full mb-6 overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="flex items-center gap-4 text-brand-muted text-xs uppercase tracking-widest mb-4">
                  <span>{article.date}</span>
                  <div className="w-8 h-[1px] bg-brand-border"></div>
                </div>
                <h3 className="font-serif text-3xl mb-4 group-hover:text-brand-primary transition-colors">{article.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-40 bg-brand-bg text-center px-6">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-5xl md:text-7xl mb-8">Ready to resurrect your legacy?</h2>
          <p className="text-brand-muted text-lg mb-12">Our waitlist is currently at {settings.waitlist.duration}. We accept only {settings.waitlist.annualCapacity} commissions per year to ensure uncompromising quality.</p>
          <Link href="/contact" className="bg-brand-primary text-brand-bg px-10 py-5 uppercase tracking-widest text-xs font-semibold hover:bg-brand-text transition-colors duration-500">
            Inquire About a Commission
          </Link>
        </div>
      </section>
    </div>
  );
}
