import Link from "next/link";
import settings from "@/data/settings.json";

export default function Footer() {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-24 pb-12 mt-auto relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-serif text-3xl tracking-wide text-brand-text">{settings.siteName}</span>
              <span className="text-xs uppercase tracking-widest text-brand-primary mt-2 font-semibold">{settings.tagline}</span>
            </Link>
            <p className="text-brand-muted max-w-sm text-sm leading-relaxed mb-8">
              {settings.description}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-text">Atelier</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li>{settings.location}</li>
              <li>
                <a href={`mailto:${settings.email}`} className="hover:text-brand-primary transition-colors duration-300">
                  {settings.email}
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-brand-primary transition-colors duration-300">
                  {settings.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-text">Archive</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li>
                <Link href="/work" className="hover:text-brand-primary transition-colors duration-300">Archive</Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-brand-primary transition-colors duration-300">Restoration Ritual</Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-brand-primary transition-colors duration-300">Workshop Journal</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-primary transition-colors duration-300">Atelier</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6 text-brand-text">Status</h4>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li>Annual Capacity: 18</li>
              <li>Remaining: 3</li>
              <li>Next Opening: Spring 2027</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-border text-xs text-brand-muted font-semibold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {settings.siteName}. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-text transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-text transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
