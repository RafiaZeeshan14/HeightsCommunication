import { FaArrowRight, FaBolt, FaGlobe, FaHeadset, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Network Planning",
    text: "Clear infrastructure roadmaps for homes, teams, and growing organizations.",
    icon: FaNetworkWired,
  },
  {
    title: "Digital Connectivity",
    text: "Fast, reliable communication systems shaped around daily operations.",
    icon: FaGlobe,
  },
  {
    title: "Support Desk",
    text: "Responsive technical support that keeps customers connected and confident.",
    icon: FaHeadset,
  },
];

const stats = [
  ["24/7", "service readiness"],
  ["99%", "uptime focus"],
  ["3x", "faster response goals"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="flex items-center gap-3" href="#top" aria-label="Heights Communication home">
          <span className="grid h-11 w-11 place-items-center rounded bg-[#0c4b8e] text-white shadow-lg shadow-[#0c4b8e]/20">
            <FaBolt aria-hidden="true" />
          </span>
          <span className="text-lg font-bold text-[#172033]">Heights Communication</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-[#526071] md:flex">
          <a className="transition hover:text-[#0c4b8e]" href="#services">Services</a>
          <a className="transition hover:text-[#0c4b8e]" href="#coverage">Coverage</a>
          <a className="transition hover:text-[#0c4b8e]" href="#contact">Contact</a>
        </nav>
        <a
          className="inline-flex h-11 items-center gap-2 rounded bg-[#129c84] px-4 text-sm font-semibold text-white shadow-lg shadow-[#129c84]/20 transition hover:bg-[#0d806d]"
          href="#contact"
        >
          Get started
          <FaArrowRight aria-hidden="true" className="text-xs" />
        </a>
      </header>

      <section id="top" className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded border border-[#d8e3ef] bg-white/80 px-3 py-2 text-sm font-semibold text-[#0c4b8e] shadow-sm">
            <FaShieldAlt aria-hidden="true" />
            Communication built for dependable growth
          </div>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] text-[#172033] sm:text-6xl lg:text-7xl">
            Connected service for people who cannot afford signal gaps.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526071]">
            Heights Communication helps customers plan, launch, and maintain reliable communication systems with calm support and practical technology choices.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#0c4b8e] px-6 font-semibold text-white shadow-xl shadow-[#0c4b8e]/20 transition hover:bg-[#083b72]" href="#contact">
              Talk to us
              <FaArrowRight aria-hidden="true" className="text-sm" />
            </a>
            <a className="inline-flex h-12 items-center justify-center rounded border border-[#c9d7e5] bg-white px-6 font-semibold text-[#172033] transition hover:border-[#0c4b8e] hover:text-[#0c4b8e]" href="#services">
              View services
            </a>
          </div>
        </div>

        <div className="relative min-h-[430px] rounded-lg border border-white/70 bg-white/75 p-4 shadow-2xl shadow-[#0c4b8e]/10 backdrop-blur">
          <div className="grid h-full min-h-[398px] content-between rounded bg-[#172033] p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-[#94f0df]">Live Operations</span>
              <span className="rounded bg-white/10 px-3 py-1 text-xs font-semibold">Online</span>
            </div>
            <div className="space-y-5">
              {stats.map(([value, label]) => (
                <div key={label} className="flex items-end justify-between border-b border-white/10 pb-4">
                  <span className="text-5xl font-bold">{value}</span>
                  <span className="max-w-32 text-right text-sm text-white/70">{label}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="h-2 rounded bg-[#129c84]" />
              <span className="h-2 rounded bg-[#f4b942]" />
              <span className="h-2 rounded bg-[#4c8ddf]" />
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection id="services" className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase text-[#129c84]">Services</p>
            <h2 className="mt-3 text-4xl font-bold text-[#172033]">A practical stack for communication teams.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-lg border border-[#d8e3ef] bg-[#f8fafc] p-6">
                  <span className="grid h-12 w-12 place-items-center rounded bg-[#0c4b8e] text-white">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-[#172033]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[#526071]">{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="coverage" className="py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-[#0c4b8e]">Coverage</p>
            <h2 className="mt-3 text-4xl font-bold text-[#172033]">Local attention with scalable systems.</h2>
          </div>
          <p className="text-lg leading-8 text-[#526071]">
            Start with a focused landing page, then grow into service areas, plans, support workflows, and lead capture. This foundation is ready for the full design pass.
          </p>
        </div>
      </AnimatedSection>

      <footer id="contact" className="bg-[#172033] py-12 text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold">Heights Communication</p>
            <p className="mt-2 text-white/70">Reliable connections, responsive support, clear next steps.</p>
          </div>
          <a className="inline-flex h-12 items-center justify-center rounded bg-[#f4b942] px-6 font-bold text-[#172033] transition hover:bg-[#ffd166]" href="mailto:hello@heightscommunication.com">
            hello@heightscommunication.com
          </a>
        </div>
      </footer>
    </main>
  );
}
