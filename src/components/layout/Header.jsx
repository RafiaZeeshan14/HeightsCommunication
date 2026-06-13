import { navItems } from "@/data/site";
import BrandMark from "@/components/ui/BrandMark";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Header() {
  return (
<header className="site-header absolute left-0 right-0 top-0 z-50">
  <div className="flex w-full items-center justify-between px-5 py-5 sm:px-8 lg:px-12 lg:py-6 2xl:px-16">
    <BrandMark />

    <nav className="hidden items-center gap-8 text-sm font-semibold text-white/90 lg:flex">
      {navItems.map((item, index) => (
        <a
          key={item.href}
          className={`nav-link ${index === 0 ? "nav-link-active" : ""}`}
          href={item.href}
        >
          {item.label}
        </a>
      ))}
    </nav>

    <ButtonLink
      href="#contact"
      className="h-11 px-5 text-sm sm:inline-flex lg:h-12 lg:px-6"
    >
      Get A Quote
    </ButtonLink>
  </div>
</header>
  );
}
