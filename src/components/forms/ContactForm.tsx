"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

const steps = [
  { id: 1, title: "Vehicle" },
  { id: 2, title: "Condition" },
  { id: 3, title: "Outcome" },
  { id: 4, title: "Timeline" },
  { id: 5, title: "Budget" },
  { id: 6, title: "Connection" },
  { id: 7, title: "Final" }
];

export default function ContactForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    vehicle: "",
    year: "",
    matchingNumbers: "",
    condition: "",
    vision: "",
    timeline: "",
    budget: "",
    connection: "",
    name: "",
    email: "",
    phone: "",
    finalStatement: ""
  });

  const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 7));
  const handlePrev = () => setCurrentStep(prev => Math.max(prev - 1, 1));
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep !== 7) {
      handleNext();
      return;
    }
    
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `New Commission Inquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData
        }),
      });

      if (response.ok) {
        router.push("/thank-you");
      } else {
        setTimeout(() => {
          router.push("/thank-you");
        }, 800);
      }
    } catch (error) {
      setTimeout(() => {
        router.push("/thank-you");
      }, 800);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex justify-between items-center mb-16 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-brand-border -z-10"></div>
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center gap-4 bg-brand-bg px-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-serif transition-colors duration-500 border ${
              currentStep === step.id ? "bg-brand-primary border-brand-primary text-brand-bg" :
              currentStep > step.id ? "bg-brand-surface border-brand-border text-brand-primary" : "bg-brand-bg border-brand-border text-brand-muted"
            }`}>
              {currentStep > step.id ? <Check size={12} /> : `0${step.id}`}
            </div>
            <span className={`text-[9px] uppercase tracking-widest hidden md:block ${currentStep >= step.id ? "text-brand-text" : "text-brand-muted"}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-brand-surface p-8 md:p-16 border border-brand-border relative overflow-hidden min-h-[480px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-serif text-3xl mb-2">The Vehicle</h3>
                <p className="text-brand-muted text-sm">Tell us about the machine you wish to commission.</p>
              </div>
              <div className="space-y-6 mt-4">
                <div className="relative">
                  <input 
                    type="text" name="vehicle" required value={formData.vehicle} onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Chassis / Model Designation"
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                    Chassis / Model Designation (e.g., 1973 Porsche 911 Carrera RS)
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="text" name="year" required value={formData.year} onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Year"
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                    Year
                  </label>
                </div>
                <div className="relative mt-6">
                  <select 
                    name="matchingNumbers" required value={formData.matchingNumbers} onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                  >
                    <option value="" disabled className="bg-brand-bg text-brand-muted">Are engine and chassis numbers matching?</option>
                    <option value="Yes" className="bg-brand-bg">Yes, confirmed matching numbers</option>
                    <option value="No" className="bg-brand-bg">No, non-original engine</option>
                    <option value="Unknown" className="bg-brand-bg">Unknown / Need verification</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-serif text-3xl mb-2">Current Condition</h3>
                <p className="text-brand-muted text-sm">Describe its current state of preservation or decay.</p>
              </div>
              <div className="relative h-full">
                <textarea 
                  name="condition" required value={formData.condition} onChange={handleChange} rows={5}
                  className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent resize-none"
                  placeholder="Detail the structural integrity, originality, and any previous restorations."
                ></textarea>
                <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                  Detail the structural integrity, originality, and previous restorations.
                </label>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-serif text-3xl mb-2">Intended Outcome</h3>
                <p className="text-brand-muted text-sm">What is the ultimate goal for this machine?</p>
              </div>
              <div className="relative">
                <textarea 
                  name="vision" required value={formData.vision} onChange={handleChange} rows={5}
                  className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent resize-none"
                  placeholder="What is the historical or emotional goal for this commission?"
                ></textarea>
                <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                  Define your vision for the restoration.
                </label>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-serif text-3xl mb-2">Timeline</h3>
                <p className="text-brand-muted text-sm">When do you envision driving this vehicle?</p>
              </div>
              <div className="relative">
                <input 
                  type="text" name="timeline" required value={formData.timeline} onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                  placeholder="Desired Timeline"
                />
                <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                  Desired Timeline (e.g., Next year, Spring 2028)
                </label>
              </div>
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-serif text-3xl mb-2">Budget Range</h3>
                <p className="text-brand-muted text-sm">Our commissions require significant investment. Please define your bracket.</p>
              </div>
              <div className="relative mt-4">
                <select 
                  name="budget" required value={formData.budget} onChange={handleChange}
                  className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors appearance-none"
                >
                  <option value="" disabled className="bg-brand-bg text-brand-muted">Anticipated Budget Bracket</option>
                  <option value="Under $100k" className="bg-brand-bg">Under $100,000</option>
                  <option value="$100k–$250k" className="bg-brand-bg">$100,000 – $250,000</option>
                  <option value="$250k–$500k" className="bg-brand-bg">$250,000 – $500,000</option>
                  <option value="$500k+" className="bg-brand-bg">$500,000+</option>
                </select>
              </div>
            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div
              key="step6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-serif text-3xl mb-2">Personal Connection</h3>
                <p className="text-brand-muted text-sm">Why this vehicle? Why now?</p>
              </div>
              <div className="relative">
                <textarea 
                  name="connection" required value={formData.connection} onChange={handleChange} rows={5}
                  className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent resize-none"
                  placeholder="Share the history or emotional weight this vehicle carries for you."
                ></textarea>
                <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                  Share the history or emotional weight this vehicle carries for you.
                </label>
              </div>
            </motion.div>
          )}

          {currentStep === 7 && (
            <motion.div
              key="step7"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-serif text-3xl mb-2">Final Statement</h3>
                <p className="text-brand-muted text-sm">Provide your details to enter the atelier ledger.</p>
              </div>
              <div className="space-y-6 mt-4">
                <div className="relative">
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Full Name"
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Email Address"
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input 
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    className="w-full bg-transparent border-b border-brand-border px-0 py-3 text-brand-text focus:outline-none focus:border-brand-primary transition-colors peer placeholder-transparent"
                    placeholder="Phone Number"
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-brand-muted transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-primary pointer-events-none">
                    Phone Number
                  </label>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-12 pt-8 border-t border-brand-border">
          {currentStep > 1 ? (
            <button 
              type="button" 
              onClick={handlePrev}
              className="flex items-center gap-2 text-brand-muted hover:text-brand-text uppercase tracking-widest text-xs font-semibold transition-colors"
            >
              <ArrowLeft size={14} /> Back
            </button>
          ) : (
            <div></div>
          )}
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-brand-text text-brand-bg px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : currentStep === 7 ? "Request Private Consultation" : "Continue"}
            {!isSubmitting && currentStep !== 7 && <ArrowRight size={14} />}
          </button>
        </div>
      </form>
    </div>
  );
}
