import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  X,
  CheckCircle2,
  Zap,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const categories = [
    "All",
    "Jerseys",
    "Drinkware",
    "Stickers",
    "Corporate",
    "Security & Tech",
  ];

  const projects = [
    {
      id: 1,
      title: "Hakika Brand Identity Suite",
      category: "Corporate",
      client: "Hakika Shop & Mobile Accessories",
      description:
        "A comprehensive branding project for a local retail startup. We delivered a cohesive visual identity across multiple touchpoints: high-contrast typography for large-format outdoor signage and a bold, motivational DTF-printed staff uniform to build brand trust and professionalism.",
      specs: [
        "Large Format Vinyl Banner Printing",
        "High-Definition DTF T-Shirt Print",
        "Vibrant Outdoor-Grade Pigments",
        "Motivational Graphic Design",
      ],
      image: "/images/brand.png",
      size: "large",
    },
    {
      id: 2,
      title: "Sticker-Graphic Concept Tee",
      category: "Stickers",
      client: "AZoR Original",
      description:
        "A fusion of street-style sticker art and premium apparel. This piece features high-definition DTF (Direct to Film) printing to maintain the sharp edges and vibrant colors of a physical sticker on soft-touch cotton.",
      specs: [
        "High-Def DTF Print",
        "Sticker-Bomb Aesthetic",
        "100% Combed Cotton",
        "Crack-resistant graphics",
      ],
      image: "/images/sticker.png",
      size: "large",
    },
    {
      id: 3,
      title: "The AZoR Brand Identity",
      category: "Corporate",
      client: "Internal Brand",
      description:
        "Our own visual signature. The AZoR identity was engineered to represent the intersection of precision engineering and creative chaos. Utilizing high-contrast geometric forms and a vibrant digital-first color palette, the logo serves as a seal of quality for every project we touch. It’s not just a logo; it’s our promise of extraordinary craftsmanship.",
      specs: [
        "Geometric Minimalist Design",
        "Digital-First Color Theory",
        "Scalable Vector Architecture",
        "Multi-Platform Brand Guidelines",
      ],
      image: "/images/azor_logo_modern.svg",
      size: "small",
    },
    {
      id: 4,
      title: "Premium Branded Drinkware",
      category: "Drinkware",
      client: "Housty Streetware",
      description:
        "Beyond the storefront, we extended the Housty Streetware into the hands of their customers. These custom-printed cups utilize high-durability wrap-around printing techniques, ensuring the brand's bold typography and vibrant color palette remain crisp through daily use. A perfect blend of utility and marketing.",
      specs: [
        "High-Gloss Wrap Printing",
        "Heat-Resistant Finish",
        "Eco-Friendly Materials",
        "Full-Color Logo Accuracy",
      ],
      image: "/images/drinkware.png",
      size: "medium",
    },
    {
      id: 5,
      title: "Signature Streetwear Collection",
      category: "Corporate",
      client: "Azor Apparel Line",
      description:
        "A showcase of our premium textile capabilities. This collection features heavy-duty hoodies and tapered joggers engineered for the modern urban lifestyle. By utilizing advanced heat-press technology and high-GSM fabrics, we deliver comfort that doesn't compromise on durability or brand presence.",
      specs: [
        "Premium Fleece Hoodies",
        "Custom Tapered Joggers",
        "High-Pressure Heat Transfer",
        "Color-Fast Textile Pigments",
      ],
      image: "/images/apparel_line.png",
      size: "large",
    },
    {
      id: 6,
      title: "Elite Performance Jerseys",
      category: "Jerseys",
      client: "Athletic Departments",
      description:
        "Engineered for the pitch and the court. Our custom jerseys utilize breathable, moisture-wicking fabrics paired with precision-cut vinyl or sublimation printing. We focus on lightweight performance and high-visibility numbering to ensure athletes look professional while staying at peak performance.",
      specs: [
        "Moisture-Wicking Fabric",
        "Precision Vinyl Plotting",
        "Breathable Mesh Paneling",
        "Reinforced Stitching",
      ],
      image: "/images/jerseys.png",
      size: "medium",
    },
    {
      id: 7,
      title: "Integrated Surveillance Solutions",
      category: "Security & Tech",
      client: "Commercial & Residential Clients",
      description:
        "Beyond aesthetics, we provide peace of mind through precision technology. Our CCTV installation service focuses on 'Zero-Blind-Spot' mapping and high-definition remote monitoring. We integrate smart analytics with hardware to ensure your business or home is protected by the latest in digital surveillance and network security.",
      specs: [
        "4K Ultra-HD Smart Cameras",
        "Remote Mobile Access Setup",
        "Motion-Triggered Cloud Analytics",
        "Professional Cable Management",
      ],
      image: "/images/cctv_install.png",
      size: "large",
    },
    {
      id: 9,
      title: "Technical Command & Calibration",
      category: "Security & Tech",
      client: "System Integration",
      description:
        "Beyond the hardware, our team specializes in the digital heartbeat of your security. Here, our technician is shown performing final system calibrations—configuring DVR/NVR settings, optimizing network bandwidth, and ensuring the mobile viewing interface is synchronized for the client.",
      specs: [
        "Network Protocol Configuration",
        "Multi-Channel Syncing",
        "Firmware Optimization",
        "User Interface Handover",
      ],
      image: "/images/team_field_ops.png",
      size: "medium",
    },
    {
      id: 10,
      title: "Field Operations: Infrastructure Phase",
      category: "Security & Tech",
      client: "Site Deployment Team",
      description:
        "The AZoR technical crew in active deployment. This phase focuses on the physical backbone of a surveillance system—mounting high-performance hardware at optimal vantage points and managing complex cabling. Our team operates with a focus on safety, efficiency, and structural integrity.",
      specs: [
        "High-Altitude Equipment Mounting",
        "Structured Cabling Solutions",
        "Weather-Proof Hardware Sealing",
        "Active Site Safety Protocols",
      ],
      image: "/images/team_calibration.png",
      size: "medium",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-[#FDFDFF] text-slate-900 pb-24">
      {/* Header */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-slate-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all font-bold text-xs uppercase tracking-tighter"
          >
            <ArrowLeft size={16} /> Back to Studio
          </Link>
          <div
            className="flex gap-2 p-1 px-2 md:px-1 bg-slate-100/50 rounded-full overflow-x-auto md:overflow-visible max-w-full scrollbar-hide"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-4 py-1.5 rounded-full text-xs font-black transition-all whitespace-nowrap shrink-0
                  ${
                    filter === cat
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-slate-100 transition-all duration-500 hover:-translate-y-2 ${
                project.size === "large"
                  ? "md:col-span-2 md:row-span-2 h-[500px]"
                  : "h-[240px]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all p-8 flex flex-col justify-end">
                <p className="text-blue-400 text-xs font-black uppercase mb-1">
                  {project.category}
                </p>
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-white" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <div className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-50 bg-slate-100 hover:bg-red-50 hover:text-red-500 p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {/* Visuals Column */}
            <div className="w-full md:w-3/5 h-[300px] md:h-auto bg-slate-100">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Column */}
            <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col">
              <div className="flex-1">
                <span className="text-blue-600 text-xs font-black uppercase tracking-widest">
                  {selectedProject.category}
                </span>
                <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4 leading-tight">
                  {selectedProject.title}
                </h2>

                <div className="flex items-center gap-2 mb-8 text-slate-500 text-sm font-medium">
                  <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                  Produced for{" "}
                  <span className="text-slate-900 font-bold">
                    {selectedProject.client}
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.2em]">
                      The Story
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-[0.2em]">
                      Specifications
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProject.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-slate-50 p-3 rounded-xl"
                        >
                          <CheckCircle2 size={16} className="text-green-500" />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link
                  to="/quote"
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl shadow-slate-200"
                >
                  <Plus size={20} />
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;