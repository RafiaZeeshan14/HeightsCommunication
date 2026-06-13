import { contactDetails } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section px-4 py-14 text-white sm:px-6 lg:px-10">
      <div className="grid w-full gap-10 lg:grid-cols-[0.9fr_1fr_0.55fr] lg:items-center">
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
      </div>
    </section>
  );
}
