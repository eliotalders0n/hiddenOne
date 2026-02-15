import { Box } from '@chakra-ui/react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import useAnalytics from '../hooks/useAnalytics';

export default function Portfolio() {
  useAnalytics();

  return (
    <Box>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
