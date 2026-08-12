"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2, Clock, LogOut } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("atelier_auth") !== "commission-014") {
      router.push("/portal");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("atelier_auth");
    router.push("/portal");
  };

  if (!isAuthenticated) return <div className="min-h-screen bg-brand-bg"></div>;

  const timeline = [
    { phase: "Discovery", status: "complete", date: "Jan 12, 2026" },
    { phase: "Documentation", status: "complete", date: "Feb 05, 2026" },
    { phase: "Disassembly", status: "complete", date: "Mar 18, 2026" },
    { phase: "Fabrication", status: "complete", date: "Jun 30, 2026" },
    { phase: "Mechanical", status: "active", date: "In Progress" },
    { phase: "Finish", status: "pending", date: "Est. Nov 2026" },
    { phase: "Delivery", status: "pending", date: "Est. Mar 2027" }
  ];

  const documents = [
    { title: "Restoration Agreement", type: "PDF", size: "1.2 MB" },
    { title: "Material Specifications", type: "PDF", size: "4.5 MB" },
    { title: "Paint Codes - Slate Grey", type: "PDF", size: "0.8 MB" },
    { title: "Engine Build Sheet", type: "PDF", size: "2.1 MB" },
    { title: "Provenance Notes", type: "PDF", size: "3.4 MB" }
  ];

  return (
    <div className="bg-brand-bg min-h-screen pb-24 pt-32">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-brand-primary text-xs uppercase tracking-widest font-semibold mb-2 block">Client Dashboard</span>
            <h1 className="font-serif text-4xl md:text-5xl">Commission 014</h1>
            <p className="text-brand-muted font-serif italic text-lg mt-2">1973 Porsche 911T</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors font-semibold"
          >
            <LogOut size={14} /> Secure Logout
          </button>
        </div>

        {/* Progress Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-surface border border-brand-border p-8 md:p-12 mb-12"
        >
          <div className="flex justify-between items-end mb-6">
            <h2 className="font-serif text-2xl">Project Status</h2>
            <span className="font-serif text-4xl text-brand-primary">68%</span>
          </div>
          <div className="w-full h-2 bg-brand-bg mb-6 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "68%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-brand-primary"
            ></motion.div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div>
              <p className="text-brand-muted text-[10px] uppercase tracking-widest mb-1">Current Phase</p>
              <p className="text-brand-text">Mechanical Rebuild</p>
            </div>
            <div>
              <p className="text-brand-muted text-[10px] uppercase tracking-widest mb-1">Est. Completion</p>
              <p className="text-brand-text">March 2027</p>
            </div>
            <div>
              <p className="text-brand-muted text-[10px] uppercase tracking-widest mb-1">Lead Artisan</p>
              <p className="text-brand-text">David Reynolds</p>
            </div>
            <div>
              <p className="text-brand-muted text-[10px] uppercase tracking-widest mb-1">VIN Reference</p>
              <p className="text-brand-text">9113101234</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Timeline */}
          <div className="md:col-span-4">
            <h3 className="font-serif text-2xl mb-8 border-b border-brand-border pb-4">Timeline</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-border before:to-transparent">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full border-4 border-brand-bg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 -translate-x-1/2 
                    ${item.status === 'complete' ? 'bg-brand-primary' : item.status === 'active' ? 'bg-brand-text animate-pulse' : 'bg-brand-border'}`}
                  ></div>
                  <div className={`w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="flex flex-col">
                      <span className={`font-serif text-lg ${item.status === 'active' ? 'text-brand-primary' : 'text-brand-text'}`}>{item.phase}</span>
                      <span className="text-brand-muted text-xs uppercase tracking-widest mt-1">{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Docs & Gallery */}
          <div className="md:col-span-8 flex flex-col gap-12">
            
            {/* Documents */}
            <div>
              <h3 className="font-serif text-2xl mb-8 border-b border-brand-border pb-4">Archives & Specs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {documents.map((doc, i) => (
                  <div key={i} className="bg-brand-surface border border-brand-border p-6 flex justify-between items-center group hover:border-brand-primary transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <FileText className="text-brand-muted group-hover:text-brand-primary transition-colors" size={20} strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-semibold text-brand-text mb-1">{doc.title}</p>
                        <p className="text-[10px] uppercase tracking-widest text-brand-muted">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <Download className="text-brand-muted group-hover:text-brand-primary transition-colors" size={16} />
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Progress Gallery */}
            <div>
              <h3 className="font-serif text-2xl mb-8 border-b border-brand-border pb-4">Latest Dispatches</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square w-full">
                  <Image src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Engine block" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="relative aspect-square w-full">
                  <Image src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Suspension detail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
