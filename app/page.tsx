import HeroSection from "../Components/herosection/Herosection";
import WellnessSection from "../Components/cards/Wellnesssection";
import NewsletterSignup from "../Components/cards/Newslettersignup";
import StatsSection from "../Components/cards/Statssection";
import MGUniqueHero from "../Components/cards/MGHeroSection";
import LeadersSection from "../Components/cards/LeadersSection";
import FAQSection from "../Components/cards/FAQSection";
import TestimonialSection from "../Components/cards/TestimonialSection";
import TherapyCardList from "../Components/cards/TherapyCardList";  
import FooterSection from "../Components/cards/Footer";





export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <HeroSection />
      <WellnessSection/>
      <NewsletterSignup/>
      <MGUniqueHero/>
      <StatsSection/>
       {/* <LeadersSection /> */}
     <FAQSection />
    <TestimonialSection />
      <TherapyCardList />
      <FooterSection />
    </main>
  );
}
