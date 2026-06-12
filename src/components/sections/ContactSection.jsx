import { contactDetails } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section px-5 py-14 text-white sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.78fr_0.45fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[#7ac70c]">Let&apos;s Work Together</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s Build Something <span className="text-[#7ac70c]">Extraordinary!</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
            Have a project in mind? Let&apos;s discuss how we can take your brand to greater heights.
          </p>
        </div>

        <div className="space-y-6 border-white/15 lg:border-l lg:pl-9">
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

        <form className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <input type="text" name="name" placeholder="Your Name" aria-label="Your Name" />
            <input type="email" name="email" placeholder="Your Email" aria-label="Your Email" />
            <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" />
            <input type="text" name="company" placeholder="Company / Organization" aria-label="Company or Organization" />
          </div>
          <textarea name="message" rows="4" placeholder="Tell us about your project..." aria-label="Tell us about your project" />
          <ButtonLink href="mailto:info@heights.com.pk" className="w-full sm:w-fit">
            Send Message
          </ButtonLink>
        </form>
      </div>
    </section>
  );
}
