import { useNavigate } from "react-router-dom";
import { NAVIGATION_ITEMS } from "../../../constants";
import { Logo } from "../../common/logo/logo";
import { Menu, X } from "lucide-react";

export const Navigation = ({ scrolled, mobileMenuOpen, onToggleMobile }) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      // Update URL
      navigate(`/${sectionId.toLowerCase()}`);
      // Scroll to section
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-10">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                onClick={() => scrollToSection(item)}
                key={item}
                className="text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-blue-600 transition-all">
              Start Project
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={onToggleMobile}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};