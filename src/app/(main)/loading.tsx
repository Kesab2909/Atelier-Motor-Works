export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-bg text-brand-text overflow-hidden">
      {/* Subtle Grain Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}
      ></div>
      <div className="flex flex-col items-center relative z-20 animate-fade-in-slow">
        <div className="text-amber-500 font-serif text-3xl tracking-widest mb-4">AN</div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Atelier North</div>
      </div>
    </div>
  );
}
