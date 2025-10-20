import { CustomCursor } from '@/components/CustomCursor';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { JourneySection } from '@/components/JourneySection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <CustomCursor />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
