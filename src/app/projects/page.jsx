import Header from "@/components/layout/Header";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata = {
  title: "Projects | Heights Communications",
  description: "Explore events, activations, launches and campaigns delivered by Heights Communications.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header activeLabel="Portfolio" />
      <main>
        <section className="relative overflow-hidden bg-[#020b1d] px-5 pb-20 pt-36 text-white sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pb-28">
          <div className="absolute -right-28 -top-32 h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-52 left-[35%] h-[28rem] w-[28rem] rounded-full bg-lime-500/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto max-w-[96rem]">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#9be10c]">Our Portfolio</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Experiences Built to Be <span className="text-[#9be10c]">Remembered.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              From ambitious product launches to nationwide activations, explore how we transform ideas into meaningful brand experiences.
            </p>
          </div>
        </section>

        <ProjectsGallery />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <ClientsSection />
    </>
  );
}
