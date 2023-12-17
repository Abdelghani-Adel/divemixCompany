import HomeBanner from "@/components/HomeBanner/HomeBanner";
import QuoteRequest from "@/components/QuoteRequest/QuoteRequest";
import AboutSection from "@/pages/home/AboutSection";
import ProvidersSection from "@/pages/home/ProvidersSection";
import ServicesSection from "@/pages/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <div className="container">
        <AboutSection />
        <ServicesSection />
        <div className="homeSection">
          <QuoteRequest />
        </div>
        <ProvidersSection />
      </div>
    </main>
  );
}
