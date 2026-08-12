import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Generate static params for the 7 services
export function generateStaticParams() {
  return [
    { slug: "concours-restoration" },
    { slug: "mechanical-preservation" },
    { slug: "bespoke-commission" },
    { slug: "interior-trim" },
    { slug: "engine-rebuild" },
    { slug: "metal-fabrication" },
    { slug: "historic-research" },
  ];
}

const servicesData: Record<string, { title: string, subtitle: string, description: string, image: string }> = {
  "concours-restoration": {
    title: "Concours Restoration",
    subtitle: "Absolute authenticity, down to the original factory chalk marks.",
    description: "Our concours restorations are research-driven archaeological endeavors. We don't just make a car look new; we return it to the exact state it left the factory floor, utilizing period-correct materials, plating techniques, and assembly methods.",
    image: "/images/classic.jpg"
  },
  "mechanical-preservation": {
    title: "Mechanical Preservation",
    subtitle: "Protecting the soul of a survivor.",
    description: "For vehicles that have survived decades in their original state, restoration is often a crime against history. Our preservation service stabilizes decay, rebuilds mechanicals invisibly, and protects the hard-earned patina of a true survivor.",
    image: "/images/philosophy.jpg"
  },
  "bespoke-commission": {
    title: "Bespoke Commission",
    subtitle: "Your vision, engineered to perfection.",
    description: "For the collector who desires a machine tailored to their exact ergonomic and aesthetic preferences. We re-engineer classics with subtle modern enhancements, creating a vehicle that honors its heritage while performing flawlessly in the modern era.",
    image: "/images/inspection.jpg"
  },
  "interior-trim": {
    title: "Interior Trim & Upholstery",
    subtitle: "Period-correct textiles and uncompromising craftsmanship.",
    description: "Using original suppliers for leatherette, corduroy, and houndstooth, our interior shop rebuilds seats, dashboards, and headliners to factory specification, ensuring the tactile and olfactory experience of a brand new classic.",
    image: "/images/interior.jpg"
  },
  "engine-rebuild": {
    title: "Engine Rebuild & Calibration",
    subtitle: "The beating heart of the machine.",
    description: "From air-cooled flat-sixes to complex mechanical fuel injection systems, our engine room measures tolerances in microns. We balance rotating assemblies perfectly and run every engine on a dynamometer before it meets the chassis.",
    image: "/images/engine.jpg"
  },
  "metal-fabrication": {
    title: "Metal Fabrication",
    subtitle: "Shaping steel with traditional techniques.",
    description: "Rust repair is executed using TIG-welded butt joints and lead-loading, exactly as the factory did. We hand-form complex panels on the English wheel when original replacement parts are unavailable or inadequate.",
    image: "/images/hero.jpg"
  },
  "historic-research": {
    title: "Historic Research & Documentation",
    subtitle: "Uncovering the provenance of significant chassis.",
    description: "A vehicle's value is deeply tied to its history. Our research team scours factory archives, period racing records, and ownership chains to build a comprehensive, indisputable dossier of your vehicle's life.",
    image: "/images/metalwork.jpg"
  }
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg text-brand-text">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <Link href="/process" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-text transition-colors uppercase tracking-widest text-xs font-semibold">
            <ArrowLeft size={14} /> Back to Process
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h4 className="text-brand-primary uppercase tracking-[0.2em] text-xs font-semibold mb-6">Service Area</h4>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">{service.title}</h1>
            <p className="text-xl md:text-2xl font-light text-brand-muted italic mb-12 border-l-2 border-brand-primary pl-6">
              {service.subtitle}
            </p>
            <div className="prose prose-invert prose-stone max-w-none">
              <p className="text-lg leading-relaxed text-brand-muted">
                {service.description}
              </p>
            </div>
            
            <div className="mt-16 pt-12 border-t border-brand-border">
              <Link 
                href="/contact"
                className="inline-block bg-brand-text text-brand-bg px-8 py-4 uppercase tracking-widest text-sm font-semibold hover:bg-brand-primary hover:text-brand-bg transition-colors"
              >
                Inquire About This Service
              </Link>
            </div>
          </div>
          
          <div className="relative h-[600px] lg:h-[800px] w-full mt-12 lg:mt-0 grayscale hover:grayscale-0 transition-all duration-1000">
            <Image 
              src={service.image} 
              alt={service.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
