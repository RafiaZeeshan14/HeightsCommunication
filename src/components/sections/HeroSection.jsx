import { FaArrowRight, heroSlides, heroStats } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import StatItem from "@/components/ui/StatItem";

export default function HeroSection() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden px-5 pb-12 pt-32 text-white sm:px-8 lg:pt-36">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative z-10">
          <p className="text-sm font-bold uppercase tracking-wide text-[#7ac70c]">Since 2007</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Advertising That Creates <span className="text-[#7ac70c]">Impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/82">
            Heights Communications delivers creative advertising, branding, and outdoor media solutions that help brands connect, engage and grow.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#services">Explore Services</ButtonLink>
            <ButtonLink href="#portfolio" variant="outline">
              View Portfolio
            </ButtonLink>
          </div>
        </div>

        <div className="relative z-10 min-h-[360px] lg:min-h-[520px]">
          <div className="hero-slides">
            {heroSlides.map((slide, index) => (
              <figure key={slide.title} className="hero-slide" style={{ "--slide-index": index }}>
                <img src={slide.image} alt="" />
                <figcaption>{slide.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 w-full max-w-7xl border-t border-white/15 pt-7">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>

      <a className="sr-only" href="#about">
        Next section <FaArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
