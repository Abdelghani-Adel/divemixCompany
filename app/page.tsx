import HomeBanner from "@/components/HomeBanner/HomeBanner";
import AboutSection from "@/pages/home/AboutSection";
import ServicesSection from "@/pages/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <div className="container">
        <AboutSection />
        <ServicesSection />
      </div>
    </main>
  );
}
