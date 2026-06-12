import { FaArrowRight, heroSlides, heroStats } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import HeroShowcase from "@/components/ui/HeroShowcase";
import StatItem from "@/components/ui/StatItem";

export default function HeroSection() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden px-5 pb-12 pt-32 text-white sm:px-8 lg:px-12 lg:pt-36 2xl:px-16">
      <div className="grid w-full gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-center">
        <div className="hero-copy relative z-10">
          <div className="hero-copy-ambient" aria-hidden="true" />
          <div className="hero-bubble hero-bubble-blue" aria-hidden="true" />
          <div className="hero-bubble hero-bubble-green" aria-hidden="true" />
          <p className="text-sm font-bold uppercase tracking-wide text-[#7ac70c]">Since 2007</p>
          <h1 className="mt-5 max-w-2xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Advertising <br/> That Creates <span className="text-[#7ac70c]">Impact.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/82">
            Heights Communications delivers creative advertising, branding, and outdoor media solutions that help brands connect, engage and grow.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#services">Explore Services</ButtonLink>
            <ButtonLink href="#portfolio" variant="outline">
              View Portfolio
            </ButtonLink>
          </div>
        </div>

        <div className="relative z-10 min-h-[520px] lg:min-h-[570px]">
          <HeroShowcase items={heroSlides} />
        </div>
      </div>

      <div className="relative z-10 mt-10 w-full border-t border-white/15 pt-7">
        <div className="flex flex-wrap items-center gap-x-12 gap-y-5 xl:gap-x-8">
          {heroStats.map((stat, index) => (
            <StatItem key={stat.label} isPrimary={index === 0} {...stat} />
          ))}
        </div>
      </div>

      <a className="sr-only" href="#about">
        Next section <FaArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}
