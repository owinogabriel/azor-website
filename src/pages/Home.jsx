import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../components/sections/Hero/Hero";
import { Stats } from "../components/sections/Stats/Stats";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useExpandableCard } from "../hooks/useExpandableCard";
import { useMobileMenu } from "../hooks/useMobileMenu";
import { ProductionServices } from "../components/sections/ProductionServices/ProductionServices";
import { ProcessTimeline } from "../components/sections/ProcessTimeline/ProcessTimeline";
import { Strategies } from "../components/sections/Strategies/Strategies";
import { Testimonials } from "../components/sections/Testimonials/Testimonials";
import { CTA } from "../components/sections/CTA/CTA";
import { Footer } from "../components/sections/Footer/Footer";
import { Navigation } from "../components/layout/Navigation/Navigation";

const Home = () => {
  const scrolled = useScrollPosition();
  const { isOpen: mobileMenuOpen, toggle: toggleMobileMenu } = useMobileMenu();
  const { expandedId, toggle: toggleStrategy } = useExpandableCard();
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [section]);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <Navigation
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobile={toggleMobileMenu}
      />
      <div id="home">
        <Hero />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="services">
        <ProductionServices />
      </div>
      <div id="process">
        <ProcessTimeline />
      </div>
      <div id="strategies">
        <Strategies expandedId={expandedId} onToggle={toggleStrategy} />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Home;