import { CustomCursor } from '@/components/CustomCursor';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { JourneySection } from '@/components/JourneySection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { LoadingScreen } from '@/components/LoadingScreen';
import { FPSMonitor } from '@/components/FPSMonitor';
import { FloatingElements } from '@/components/FloatingElements';
import { LazySection } from '@/components/LazySection';

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <div className="relative min-h-screen">
        <BackgroundEffects />
        <CustomCursor />
        <FPSMonitor />
        <FloatingElements />
        
        <main className="relative z-10">
          <HeroSection />
          <LazySection>
            <AboutSection />
          </LazySection>
          <LazySection>
            <JourneySection />
          </LazySection>
          <LazySection>
            <SkillsSection />
          </LazySection>
          <LazySection>
            <ProjectsSection />
          </LazySection>
          <LazySection>
            <ContactSection />
          </LazySection>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Index;
