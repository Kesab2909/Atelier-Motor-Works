"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import settings from "@/data/settings.json";
import projects from "@/data/projects.json";
import articles from "@/data/articles.json";
import testimonials from "@/data/testimonials.json";
import CapacityIndicator from "@/components/ui/CapacityIndicator";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Ledger fades out after 15% scroll
  const ledgerY = useTransform(scrollYProgress, [0, 0.15], ["0px", "12px"]);
  const ledgerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const featuredProject = projects.find(p => p.isFeatured) || projects[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] overflow-x-hidden">
      {/* 1. Full-screen Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] w-full flex flex-col overflow-hidden bg-[#0B0B0B]">
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <Image 
            src="/images/hero.jpg"
            alt="Atelier North Workshop" 
            fill 
            className="object-cover opacity-40 mix-blend-luminosity sepia-[0.2]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/95 via-[#0B0B0B]/40 to-[#0B0B0B]/95" />
        </motion.div>

        {/* Center: Monumental Typography */}
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-6 py-32">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[#BFA37E] text-[10px] uppercase tracking-[0.15em] font-semibold mb-8"
          >
            METAL. MEMORY. MASTERY.
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl max-w-5xl leading-[1.1] mb-12 text-[#F5F2EB] tracking-tight"
          >
            Restoration is maintenance.<br/>
            Reanimation is <span className="italic text-[#C8C2B6]">devotion.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-[24px] items-center"
          >
            <Link href="/contact" className="bg-[#BFA37E] text-[#0B0B0B] px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-[#F5F2EB] transition-colors duration-700">
              Begin the Commission Conversation
            </Link>
            <Link href="/work" className="text-[#F5F2EB] uppercase tracking-[0.2em] text-[10px] font-semibold border-b border-[#F5F2EB]/30 pb-1 hover:border-[#BFA37E] hover:text-[#BFA37E] transition-colors duration-700">
              Examine the Archives 
            </Link>
          </motion.div>
          
          <motion.div 
            style={{ y: ledgerY, opacity: ledgerOpacity }}
            className="md:hidden mt-8 text-[#C8C2B6] text-xs"
          >
            Only 3 slots remaining — Q4 2027
          </motion.div>
        </div>

        {/* Desktop Ledger */}
        <motion.div style={{ y: ledgerY, opacity: ledgerOpacity }} className="absolute inset-0 pointer-events-none z-20">
          <div className="pointer-events-auto w-full h-full relative">
            <CapacityIndicator />
          </div>
        </motion.div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="pt-[240px] pb-[160px] bg-[#0B0B0B] relative z-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="editorial-grid items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="col-span-4 md:col-span-5 md:col-start-2"
            >
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-12 text-[#F5F2EB]">
                We do not build cars.<br/>
                We rebuild <span className="italic text-[#BFA37E]">memories.</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#BFA37E]/50 mb-12"></div>
              <p className="text-[#C8C2B6] leading-[1.8] max-w-md text-sm md:text-base">
                In an industry obsessed with speed and superficial perfection, we operate with museum-like silence and mechanical obsession. Every nut, bolt, and panel is an opportunity to honor the original creator's intent. Our atelier is a sanctuary for vintage machines that deserve a second, definitive life.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-4 md:col-span-5 md:col-start-8 mt-16 md:mt-0"
            >
              <div className="relative h-[600px] w-full">
                <Image 
                  src="/images/workshop/workshop-bench.jpg" 
                  alt="Workshop Craftsmanship" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Commission */}
      <section className="py-[144px] bg-[#121212] relative overflow-hidden border-t border-[#1F1F1F]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="editorial-grid mb-16 items-end"
          >
            <div className="col-span-4 md:col-span-8">
              <span className="text-[#BFA37E] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 block">Featured Study</span>
              <h2 className="font-serif text-5xl md:text-7xl text-[#F5F2EB]">{featuredProject.title}</h2>
            </div>
            <div className="col-span-4 md:col-span-4 flex md:justify-end mt-8 md:mt-0">
              <Link href={`/work/${featuredProject.slug}`} className="group flex items-center gap-3 text-[#C8C2B6] uppercase tracking-[0.2em] text-[10px] font-semibold hover:text-[#BFA37E] transition-colors duration-700">
                Examine Dossier <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            </div>
          </motion.div>

          <div className="editorial-grid">
            <div className="col-span-4 md:col-span-8 relative h-[60vh] md:h-[80vh] group overflow-hidden">
              <Link href={`/work/${featuredProject.slug}`}>
                <Image 
                  src={featuredProject.heroImage} 
                  alt={featuredProject.title} 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </Link>
            </div>
            <div className="col-span-4 md:col-span-4 flex flex-col justify-between mt-8 md:mt-0">
              <div className="relative h-[40vh] w-full overflow-hidden mb-12 hidden md:block border border-[#BFA37E]/20">
                <Image 
                  src={featuredProject.gallery[0] || "/images/commissions/commission-014/dashboard-restoration.jpg"} 
                  alt="Commission Detail" 
                  fill 
                  className="object-cover grayscale"
                  sizes="25vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-y-12 gap-x-8 border-t border-[#BFA37E]/30 pt-12">
                <div>
                  <p className="text-[#C8C2B6] text-[9px] uppercase tracking-[0.2em] mb-2">Chassis</p>
                  <p className="font-serif text-lg text-[#F5F2EB]">{featuredProject.vehicle}</p>
                </div>
                <div>
                  <p className="text-[#C8C2B6] text-[9px] uppercase tracking-[0.2em] mb-2">Labor</p>
                  <p className="font-serif text-lg text-[#F5F2EB]">{featuredProject.duration}</p>
                </div>
                <div>
                  <p className="text-[#C8C2B6] text-[9px] uppercase tracking-[0.2em] mb-2">Budget</p>
                  <p className="font-serif text-lg text-[#F5F2EB]">{featuredProject.budget}</p>
                </div>
                <div>
                  <p className="text-[#C8C2B6] text-[9px] uppercase tracking-[0.2em] mb-2">Status</p>
                  <p className="font-serif text-lg text-[#BFA37E]">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Before/After Teaser */}
      <section className="py-[144px] bg-[#0B0B0B]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <span className="text-[#BFA37E] text-[10px] uppercase tracking-[0.2em] font-semibold mb-6 block">Resurrection</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5F2EB]">Visual Transformation</h2>
          </div>
          <div className="max-w-6xl mx-auto border border-[#1F1F1F] p-4 bg-[#121212]">
            <BeforeAfterSlider 
              beforeImage="/images/restoration/bare-metal.jpg"
              afterImage="/images/restoration/finishing.jpg"
            />
          </div>
        </div>
      </section>

      {/* 5. Process Preview */}
      <section className="py-[144px] bg-[#121212] border-y border-[#1F1F1F]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-[96px]"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#F5F2EB]">The Archival Method</h2>
            <p className="text-[#C8C2B6] leading-[1.8] text-sm md:text-base">
              We do not take shortcuts. Our six-step process ensures that every vehicle is documented, engineered, and finished to absolute perfection.
            </p>
          </motion.div>

          <div className="editorial-grid gap-y-24">
            {[
              { title: "Inspection", desc: "Forensic analysis of the chassis, mechanicals, and provenance.", img: "/images/workshop/workshop-wide.jpg" },
              { title: "Disassembly", desc: "Microscopic cataloging and labeling of every original fastener.", img: "/images/workshop/workshop-bench.jpg" },
              { title: "Metalwork", desc: "Chassis reinforcement and rust eradication to millimeter tolerances.", img: "/images/workshop/workshop-metalwork.jpg" },
              { title: "Fabrication", desc: "Coachbuilding techniques applied to preserve historical integrity.", img: "/images/workshop/workshop-welding.jpg" },
              { title: "Powertrain", desc: "Engine blueprinting and transaxle recalibration.", img: "/images/workshop/workshop-engine-assembly.jpg" },
              { title: "Finish", desc: "Period-correct materials and uncompromising reassembly.", img: "/images/workshop/workshop-upholstery.jpg" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-4 md:col-span-6 group cursor-pointer"
              >
                <div className="relative h-[400px] mb-12 overflow-hidden">
                  <Image 
                    src={step.img} 
                    alt={step.title} 
                    fill 
                    className="object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 left-6 text-[#BFA37E] font-mono text-lg tracking-tighter mix-blend-difference">
                    0{i + 1}
                  </div>
                </div>
                <h3 className="font-serif text-3xl mb-4 text-[#F5F2EB]">{step.title}</h3>
                <p className="text-[#C8C2B6] text-sm leading-[1.8] max-w-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-[96px] text-center">
            <Link href="/process" className="inline-block border border-[#BFA37E]/50 text-[#F5F2EB] px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-[#BFA37E] hover:text-[#0B0B0B] transition-colors duration-700">
              Examine the Full Methodology
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Collectors' Ledger — Auto Sliding Testimonial Rail */}
<section className="py-[140px] bg-[#0B0B0B] border-t border-[#1F1F1F] overflow-hidden">
  <div className="container mx-auto px-6 md:px-12 mb-14">
    <span className="text-[#BFA37E] text-[10px] uppercase tracking-[0.3em] font-semibold block mb-4">
      Collector Archive
    </span>

    <h2 className="font-serif text-5xl md:text-7xl text-[#F5F2EB] mb-6">
      The Collectors' Ledger
    </h2>

    <p className="text-[#C8C2B6] text-base md:text-lg leading-[1.8] max-w-2xl">
      Eight collectors. Eight philosophies. Eight machines returned to life with
      uncompromising discipline and historical integrity.
    </p>
  </div>

  <div className="relative">
    <div className="flex gap-6 w-max animate-[marquee_45s_linear_infinite]">
      {[...testimonials, ...testimonials].map((t, i) => (
        <div
          key={i}
          className="w-[360px] md:w-[420px] bg-[#111111] border border-[#1F1F1F] p-8 flex-shrink-0 hover:border-[#BFA37E]/40 transition-colors duration-700"
        >
          <div className="text-[#BFA37E] mb-6">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L16.411 14.593H10.222V3H21V12.084L15.918 21H14.017ZM4.819 21L7.213 14.593H1.024V3H11.802V12.084L6.719 21H4.819Z"/>
            </svg>
          </div>

          <p className="text-[#F5F2EB] font-serif text-xl leading-[1.6] mb-8">
            “{t.narrative.split('. ').slice(0, 2).join('. ')}.”
          </p>

          <div className="border-t border-[#1F1F1F] pt-5">
            <p className="text-[#BFA37E] uppercase tracking-[0.2em] text-[10px] font-semibold">
              {t.author}
            </p>

            <p className="text-[#C8C2B6] text-[10px] uppercase tracking-[0.15em] mt-2">
              {t.archetype}
            </p>

            <p className="text-[#6E6658] text-[10px] uppercase tracking-[0.15em] mt-1">
              {t.commission}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>
</section>

      {/* 7. Journal Preview */}
      <section className="pt-[100px] pb-[80px] bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#1F1F1F] pb-8">
            <h2 className="font-serif text-5xl md:text-7xl text-[#F5F2EB]">The Archives</h2>
            <Link href="/journal" className="group flex items-center gap-3 text-[#C8C2B6] uppercase tracking-[0.2em] text-[10px] font-semibold hover:text-[#BFA37E] transition-colors duration-700 mt-8 md:mt-0">
              Read All Volumes <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
            {/* Featured Article */}
            <div className="md:col-span-7">
              <Link href={`/journal/${articles[0].slug}`} className="group block">
                <div className="relative h-[50vh] md:h-[70vh] w-full mb-8 overflow-hidden">
                  <Image 
                    src={articles[0].image} 
                    alt={articles[0].title} 
                    fill 
                    className="object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>
                <div className="flex items-center gap-6 text-[#C8C2B6] text-[9px] uppercase tracking-[0.2em] mb-4">
                  <span>{articles[0].date}</span>
                  <div className="w-8 h-[1px] bg-[#BFA37E]/50"></div>
                  <span className="text-[#BFA37E]">Vol. I</span>
                </div>
                <h3 className="font-serif text-4xl md:text-5xl mb-6 text-[#F5F2EB] group-hover:text-[#BFA37E] transition-colors duration-700 leading-[1.1]">{articles[0].title}</h3>
                <p className="text-[#C8C2B6] text-sm md:text-base leading-[1.8] max-w-lg">{articles[0].excerpt}</p>
              </Link>
            </div>

            {/* Secondary Articles List */}
            <div className="md:col-span-5 flex flex-col justify-start">
              {articles.slice(1, 4).map((article, i) => (
                <Link href={`/journal/${article.slug}`} key={i} className="group block border-b border-[#1F1F1F] py-8 first:pt-0">
                  <div className="flex items-center gap-6 text-[#C8C2B6] text-[9px] uppercase tracking-[0.2em] mb-3">
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-[#F5F2EB] group-hover:text-[#BFA37E] transition-colors duration-700 leading-tight">{article.title}</h3>
                  <p className="text-[#C8C2B6] text-xs leading-[1.6] line-clamp-3">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="pt-[80px] md:pt-[100px] pb-[140px] md:pb-[180px] bg-[#0B0B0B] text-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#BFA37E] text-[10px] uppercase tracking-[0.3em] font-semibold mb-8 block">Appointment Only</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-16 text-[#F5F2EB] leading-[1.1] tracking-tight">
            Resurrect your <span className="italic text-[#C8C2B6]">legacy.</span>
          </h2>
          <Link href="/contact" className="bg-[#F5F2EB] text-[#0B0B0B] px-12 py-6 uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-[#BFA37E] hover:text-[#0B0B0B] transition-colors duration-700">
            Request Private Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
