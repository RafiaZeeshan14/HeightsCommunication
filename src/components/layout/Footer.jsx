import { socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020b1d] py-5 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 text-xs text-white/65 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© 2024 Heights Communications. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Sitemap</a>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#075eff]" href={link.href} aria-label={link.label}>
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
