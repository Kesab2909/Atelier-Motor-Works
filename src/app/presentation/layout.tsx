import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentation | Atelier North Motor Works",
  robots: { index: false, follow: false },
};

export default function PresentationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EB] min-h-screen font-sans selection:bg-[#BFA37E] selection:text-[#0B0B0B]">
      {/* Simplified, distraction-free header */}
      <header className="fixed top-0 w-full py-8 px-12 z-50 mix-blend-difference flex justify-between items-center pointer-events-none">
        <div className="flex flex-col">
          <span className="font-serif text-3xl tracking-wide text-[#F5F2EB]">Atelier North</span>
          <span className="text-[0.65rem] uppercase tracking-widest text-[#BFA37E] mt-1 font-semibold">Motor Works</span>
        </div>
        <div className="text-[0.65rem] uppercase tracking-[0.3em] text-[#C8C2B6]">
          Client Presentation Mode
        </div>
      </header>
      
      <main className="flex-grow flex flex-col pt-32">
        {children}
      </main>
    </div>
  );
}
