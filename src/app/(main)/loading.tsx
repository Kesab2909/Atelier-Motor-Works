export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg text-brand-text">
      <div className="flex flex-col items-center">
        <div className="text-amber-500 font-serif text-3xl tracking-widest animate-pulse">AN</div>
        <div className="mt-8 w-24 h-[1px] bg-stone-800 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-amber-500 w-full origin-left animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
