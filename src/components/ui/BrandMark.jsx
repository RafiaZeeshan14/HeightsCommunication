export default function BrandMark({ compact = false }) {
  return (
    <a className="flex items-center gap-3" href="#home" aria-label="Heights Communications home">
      <img className="h-14 w-auto drop-shadow-[0_12px_20px_rgba(0,90,255,0.28)] sm:h-16" src="/logo.svg" alt="" aria-hidden="true" />
      {!compact && (
        <span className="sr-only">
          <span className="block text-xl font-bold tracking-wide text-white">HEIGHTS</span>
          <span className="block text-[0.68rem] font-semibold tracking-[0.18em] text-white/80">COMMUNICATIONS</span>
        </span>
      )}
    </a>
  );
}
