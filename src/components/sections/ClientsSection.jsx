import { advantages, clients } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientsSection() {
  return (
    <section id="clients" className="soft-section px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-center text-xs font-bold uppercase tracking-wide text-[#7ac70c]">Let&apos;s Introduce Us</p>
        <div className="mt-5 flex items-center gap-4">
          <button className="logo-arrow" aria-label="Previous clients">‹</button>
          <div className="logo-strip">
            {clients.map((client) => (
              <span key={client}>{client}</span>
            ))}
          </div>
          <button className="logo-arrow" aria-label="Next clients">›</button>
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Why Choose Us" title="We Deliver More Than Just Campaigns" align="center" />
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;
              return (
                <article key={advantage.title} className="advantage-card">
                  <span className={`text-5xl ${advantage.color}`}>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#06122f]">{advantage.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#617089]">{advantage.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
