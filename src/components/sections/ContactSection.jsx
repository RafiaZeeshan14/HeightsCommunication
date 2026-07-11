import { contactDetails, socialLinks } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section px-4 py-14 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid w-full max-w-[1800px] gap-10 lg:grid-cols-[1.05fr_0.8fr_0.65fr] lg:items-center lg:gap-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#7ac70c]">Let&apos;s Work Together</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s Build Something <span className="text-[#7ac70c]">Extraordinary!</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            Have a project in mind? Let&apos;s discuss how we can take your brand to greater heights.
          </p>
        </div>

        <div className="grid gap-6 border-white/15 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:pl-10">
          {contactDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.lines.join("")} className="flex gap-4">
                <Icon className="mt-1 text-xl text-[#7ac70c]" aria-hidden="true" />
                <p className="text-sm leading-6 text-white/80">
                  {detail.lines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </p>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7ac70c]">Explore</p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70 lg:flex-col lg:gap-3">
            <a className="transition hover:text-white" href="#">Privacy Policy</a>
            <a className="transition hover:text-white" href="#">Terms &amp; Conditions</a>
            <a className="transition hover:text-white" href="#">Sitemap</a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white/80 transition hover:border-[#7ac70c]/60 hover:bg-[#7ac70c]/10 hover:text-white"
                  href={link.href}
                  aria-label={link.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <p className="mt-7 text-xs leading-5 text-white/45">
            &copy; 2024 Heights Communications.<br />All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
