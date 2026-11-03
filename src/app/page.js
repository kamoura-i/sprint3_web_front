import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SolutionSection from "./components/SolutionSection";
import HowItWorks from "./components/HowItWorks";
import AudienceSection from "./components/AudienceSection";
import GallerySection from "./components/GallerySection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return <>
    <Navbar />
    <main>
      <Hero />
      <SolutionSection />
      <HowItWorks />
      <AudienceSection />
      <GallerySection />
      <TeamSection />
      <ContactSection />
    </main>
    <Footer />
  </>;
}
