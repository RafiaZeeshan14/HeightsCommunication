import Header from "@/components/layout/Header";
import BackToTop from "@/components/ui/BackToTop";
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import InsightsSection from "@/components/sections/InsightsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden ">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <BackToTop />
      <ClientsSection />
    </>
  );
}
