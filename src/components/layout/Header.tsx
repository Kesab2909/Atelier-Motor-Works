"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import CapacityIndicator from "@/components/ui/CapacityIndicator";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Process", href: "/process" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
    { label: "Waitlist", href: "/waitlist" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-brand-bg/80 backdrop-blur-md border-b border-brand-border py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="group flex flex-col" onClick={() => setMobileMenuOpen(false)}>
            <span className="font-serif text-2xl tracking-wide text-brand-text group-hover:text-brand-primary transition-colors duration-500">Atelier North</span>
            <span className="text-[0.65rem] uppercase tracking-widest text-brand-muted mt-1 font-semibold">Motor Works</span>
          </Link>

          <div className="hidden lg:block ml-8">
            <CapacityIndicator />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 relative group ${
                  pathname.startsWith(link.href) ? "text-brand-primary" : "text-brand-text hover:text-brand-primary"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-brand-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              </Link>
            ))}
            <Link href="/portal" className="text-sm uppercase tracking-widest text-brand-muted hover:text-brand-text transition-colors duration-300 ml-4">
              Client Portal
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-brand-text hover:text-brand-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-bg flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl text-brand-text hover:text-brand-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="w-12 h-[1px] bg-brand-border my-4"></div>
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-brand-muted hover:text-brand-text transition-colors duration-300"
              >
                Client Portal
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
