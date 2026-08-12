"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl mb-6"
          >
            Inquire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-muted text-lg"
          >
            Please provide comprehensive details regarding your vehicle and vision. Due to limited allocation, we carefully review all inquiries before acceptance.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
