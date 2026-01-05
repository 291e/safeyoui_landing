import { HeroSection } from "@/components/heroSection";
import { ServiceOverview } from "@/components/serviceOverview";
import { MainFeatures } from "@/components/mainFeatures";
import { BackgroundSection } from "@/components/backgroundSection";
import { UserScenarios } from "@/components/userScenarios";
import { FaqSection } from "@/components/faqSection";
import { FeaturesProvider } from "@/context/featuresContext";
import { ScenariosProvider } from "@/context/scenariosContext";
import { FaqProvider } from "@/context/faqContext";

export default function Home() {
  return (
    <FeaturesProvider>
      <ScenariosProvider>
        <FaqProvider>
          <div className="min-h-screen max-w-[1920px] mx-auto overflow-hidden">
            <HeroSection />
            <ServiceOverview />
            <MainFeatures />
            <BackgroundSection />
            <UserScenarios />
            <FaqSection />
          </div>
        </FaqProvider>
      </ScenariosProvider>
    </FeaturesProvider>
  );
}
