import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AdvantagesSection from '../components/AdvantagesSection';
import DemoSection from '../components/DemoSection';
import PricingSection from '../components/PricingSection';
import WelcomeSection from '../components/WelcomeSection';

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const hash = location.hash.slice(1);
    const el = document.getElementById(hash);

    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.hash]);
  return (
    <>
      <WelcomeSection />

      <AdvantagesSection />

      <PricingSection />

      <DemoSection />
    </>
  );
};

export default LandingPage;
