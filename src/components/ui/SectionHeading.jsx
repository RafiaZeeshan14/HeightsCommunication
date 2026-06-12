export default function SectionHeading({ eyebrow, title, align = "left", children, dark = false }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-wide text-[#7ac70c]">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${dark ? "text-white" : "text-[#06122f]"}`}>
        {title}
      </h2>
      {children && <div className={`mt-4 text-sm leading-7 ${dark ? "text-white/70" : "text-[#4e5a70]"}`}>{children}</div>}
    </div>
  );
}
