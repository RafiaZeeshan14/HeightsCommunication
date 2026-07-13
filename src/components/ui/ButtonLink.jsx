import { FaArrowRight } from "@/data/site";

const variants = {
  primary: "bg-[#075eff] text-white shadow-lg shadow-blue-700/25 hover:bg-[#0050da]",
  outline: "border border-white/35 bg-white/5 text-white hover:border-white/80 hover:bg-white/10",
  light: "border border-[#0d62ff] bg-white text-[#075eff] hover:bg-[#eef5ff]",
};

export default function ButtonLink({ children, href = "#", variant = "primary", icon = true, className = "", ...props }) {
  return (
    <a
      className={`inline-flex h-12 items-center justify-center gap-3 rounded-md px-6 text-sm font-semibold transition ${variants[variant]} ${className}`}
      href={href}
      {...props}
    >
      {children}
      {icon && <FaArrowRight aria-hidden="true" className="text-xs" />}
    </a>
  );
}
