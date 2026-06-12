export default function BrandMark({ compact = false }) {
  return (
    <a className="flex items-center gap-3" href="#home" aria-label="Heights Communications home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-xl font-bold tracking-wide text-white">HEIGHTS</span>
          <span className="block text-[0.68rem] font-semibold tracking-[0.18em] text-white/80">COMMUNICATIONS</span>
        </span>
      )}
    </a>
  );
}
