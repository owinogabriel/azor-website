import { Target, Award, Users, Shirt, Coffee, MousePointer2 } from 'lucide-react';

// Navigation
export const NAVIGATION_ITEMS = ['Home', 'Services', 'Strategies', 'Contact'];

// Stats
export const STATS = [
  { number: "500+", label: "Products Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24hr", label: "Turnaround Time" },
  { number: "15+", label: "Material Options" }
];

// Strategies
export const STRATEGIES = [
  {
    id: 1,
    title: "Strategic Foundation",
    icon: Target,
    tag: "Phase 01",
    description: "Gather essential intelligence about your brand and audience to build an unshakeable market foundation.",
    details: ["Audience profiling", "Competitive analysis", "Brand Audit (SWOT)", "Management review"]
  },
  {
    id: 2,
    title: "Authority Positioning",
    icon: Award,
    tag: "Phase 02",
    description: "Cultivate radical trust through consistent value delivery and high-impact thought leadership.",
    details: ["Authority content blogs", "Niche identification", "80/20 Value Framework", "Unique messaging"]
  },
  {
    id: 3,
    title: "Human-Centric Branding",
    icon: Users,
    tag: "Phase 03",
    description: "Humanize your corporate identity by leading with authentic, relatable personal brands.",
    details: ["Executive persona dev", "Social leadership", "Direct engagement", "Scalable connections"]
  }
];

// Production Services
export const PRODUCTION_SERVICES = [
  {
    title: "Custom Jerseys",
    desc: "Premium sublimation and screen printing for sports teams and corporate apparel.",
    icon: Shirt,
    color: "bg-blue-600",
    img: "/images/shirt.png"
  },
  {
    title: "Branded Drinkware",
    desc: "High-quality UV printing on cups, mugs, and bottles that last.",
    icon: Coffee,
    color: "bg-indigo-600",
    img: "/images/drinkware.png"
  },
  {
    title: "Vinyl Stickers",
    desc: "Weather-proof, die-cut stickers for guerilla marketing and brand recognition.",
    icon: MousePointer2,
    color: "bg-slate-900",
    img: "https://images.unsplash.com/photo-1572375958540-bb2a6d10b324?auto=format&fit=crop&q=80&w=600"
  }
];

export const PRODUCT_TAGS = ["Jerseys", "Cups", "Stickers"];

// Process Steps
export const PROCESS_STEPS = [
  { step: "01", title: "Consult", desc: "Share your vision and requirements" },
  { step: "02", title: "Design", desc: "We create mockups for your approval" },
  { step: "03", title: "Produce", desc: "High-quality printing begins" },
  { step: "04", title: "Deliver", desc: "Fast shipping to your doorstep" }
];

// Testimonials
export const TESTIMONIALS = [
  { 
    name: "Sarah Johnson", 
    role: "Marketing Director", 
    company: "TechCorp", 
    quote: "The jersey quality exceeded our expectations. Our entire team loves them!" 
  },
  { 
    name: "Mike Chen", 
    role: "Event Coordinator", 
    company: "StartupHub", 
    quote: "Fast turnaround and excellent customer service. Will definitely order again." 
  },
  { 
    name: "Lisa Rodriguez", 
    role: "Brand Manager", 
    company: "GrowthLabs", 
    quote: "AZoR helped us bring our brand to life with amazing print quality." 
  }
];