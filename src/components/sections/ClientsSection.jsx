import { advantages, clients } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="clients-loop-backdrop fixed z-50 px-4 py-3 sm:px-6 lg:px-10 pointer-events-none"
    >
      <div className="mx-auto w-full max-w-[96rem]">
        <div>
          <div className="clients-logo-track">
            {[false, true].map((duplicate) => (
              <div
                key={duplicate ? "duplicate" : "primary"}
                className="clients-logo-list"
                aria-hidden={duplicate || undefined}
              >
                {clients.map((client) => (
                  <div
                    key={client.name}
                    className="flex shrink-0 items-center justify-center pointer-events-auto"
                  >
                    <img
                      src={client.logo}
                      alt={duplicate ? "" : client.name}
                      decoding="async"
                      draggable="false"
                      className={`h-12 w-auto object-contain opacity-100 transition-transform duration-300 hover:scale-105 sm:h-14 md:h-16 ${
                        client.name === "Ghandhara"
                          ? "client-logo-wide"
                          : client.name === "outfitter"
                            ? "client-logo-outfitter"
                          : client.name === "DIB"
                            ? "client-logo-compact"
                            : ""
                      }`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="We Deliver More Than Just Campaigns"
            align="center"
          />

          <div className="why-glass-panel mt-10">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;

              return (
                <article key={advantage.title} className="why-glass-item">
                  <span
                    className={`why-glass-icon why-glass-icon-${advantage.accent} ${advantage.color}`}
                  >
                    <Icon aria-hidden="true" />
                  </span>

                  <div>
                    <h3 className={`why-glass-title ${advantage.color}`}>
                      {advantage.title}
                    </h3>
                    <p className="why-glass-text">{advantage.text}</p>
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
