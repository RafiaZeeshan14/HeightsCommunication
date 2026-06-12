import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="rounded-t-xl bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="about-image-frame">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=80"
            alt="Heights Communications team in a modern office"
          />
        </div>
        <div className="relative">
          <span className="watermark-logo" aria-hidden="true">H</span>
          <SectionHeading eyebrow="About Us" title={<>18+ Years of Advertising <span className="text-[#075eff]">Excellence</span></>}>
            <p>
              Since 2007, Heights Communications has been involved in providing its clients with results-focused outdoor services and advertising solutions. Our blend of creativity, strategy and execution ensures every campaign leaves a lasting impact.
            </p>
          </SectionHeading>
          <ButtonLink href="#contact" variant="light" className="mt-8">
            More About Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
