import { useState } from 'react';
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
import { ScrollProgressBar } from '@/components/ScrollProgressBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { InteractiveParticles } from '@/components/InteractiveParticles';
import { PageTransition, SectionTransition } from '@/components/PageTransition';

const Index = () => {
  const [reducedEffects, setReducedEffects] = useState(false);

  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <ThemeToggle />
      {/* Disable heavy visual effects when performance drops */}
      {!reducedEffects && <InteractiveParticles />}

      <PageTransition>
        <div className="relative min-h-screen">
          {!reducedEffects && <BackgroundEffects />}
          <CustomCursor />
          <FPSMonitor onLowFPS={() => setReducedEffects(true)} />
          <FloatingElements />

          <main className="relative z-10">
            <SectionTransition>
              <HeroSection />
            </SectionTransition>

            <LazySection>
              <SectionTransition>
                <AboutSection />
              </SectionTransition>
            </LazySection>

            <LazySection>
              <SectionTransition>
                <JourneySection />
              </SectionTransition>
            </LazySection>

            <LazySection>
              <SectionTransition>
                <SkillsSection />
              </SectionTransition>
            </LazySection>

            <LazySection>
              <SectionTransition>
                <ProjectsSection />
              </SectionTransition>
            </LazySection>

            <LazySection>
              <SectionTransition>
                <ContactSection />
              </SectionTransition>
            </LazySection>

            <Footer />
          </main>
        </div>
      </PageTransition>
    </>
  );
};

export default Index;
