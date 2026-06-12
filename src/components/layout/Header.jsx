import { navItems } from "@/data/site";
import BrandMark from "@/components/ui/BrandMark";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-30">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <BrandMark />
        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/90 lg:flex">
          {navItems.map((item, index) => (
            <a key={item.href} className={`nav-link ${index === 0 ? "nav-link-active" : ""}`} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink href="#contact" className="hidden h-11 px-5 sm:inline-flex">
          Get A Quote
        </ButtonLink>
      </div>
    </header>
  );
}
