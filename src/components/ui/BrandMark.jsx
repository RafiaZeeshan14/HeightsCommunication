export default function BrandMark({ compact = false }) {
  return (
    <a className="relative block h-14 w-28 shrink-0 overflow-visible sm:h-14 sm:w-32 lg:h-14 lg:w-36" href="#home" aria-label="Heights Communications home">
      <img className="absolute left-0 top-1/2 h-20 w-auto -translate-y-1/2 drop-shadow-[0_12px_20px_rgba(0,90,255,0.28)] sm:h-22 lg:h-24" src="/logo.svg" alt="" aria-hidden="true" />
      {!compact && (
        <span className="sr-only">
          <span className="block text-xl font-bold tracking-wide text-white">HEIGHTS</span>
          <span className="block text-[0.68rem] font-semibold tracking-[0.18em] text-white/80">COMMUNICATIONS</span>
        </span>
      )}
    </a>
  );
}
