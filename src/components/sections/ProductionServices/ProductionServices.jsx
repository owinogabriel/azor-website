import { CheckCircle2 } from "lucide-react";
import { PRODUCTION_SERVICES } from "../../../constants";

export const ProductionServices = () => {
  //  destructuring for cleaner code
  const [jerseys, cups, stickers] = PRODUCTION_SERVICES;

  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900">
              Production Studio
            </h2>
            <p className="text-slate-500 mt-2">
              High-fidelity printing on premium materials.
            </p>
          </div>
          <div className="flex space-x-2">
            {PRODUCTION_SERVICES.map((s) => (
              <span
                key={s.title}
                className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-bold text-slate-400"
              >
                {s.title.split(" ").pop()}{" "}
                {/* Grabs 'Jerseys', 'Drinkware', etc. */}
              </span>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* 1. Jersey Card (Big) */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={jerseys.img}
              alt={jerseys.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="bg-blue-600 p-2 rounded-lg w-fit mb-4">
                <jerseys.icon size={20} />
              </div>
              <h3 className="text-3xl font-black">{jerseys.title}</h3>
              <p className="text-slate-200 max-w-md">{jerseys.desc}</p>
            </div>
          </div>

          {/* 2. Sticker Card (Compact) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-[2rem] shadow-lg bg-slate-900">
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative h-full flex flex-col justify-center p-8 text-center">
              <div className="mx-auto bg-white/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                <stickers.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-black text-white">
                {stickers.title}
              </h3>
              <p className="text-slate-400 text-sm mt-2">{stickers.desc}</p>
              <button className="mt-6 text-xs font-bold tracking-widest uppercase text-blue-400 hover:text-white transition-colors">
                Order Samples →
              </button>
            </div>
          </div>

          {/* 3. Drinkware Card */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={cups.img}
              alt={cups.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-indigo-900/40 group-hover:bg-indigo-900/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <h3 className="text-2xl font-black text-white drop-shadow-md">
                {cups.title}
              </h3>
            </div>
          </div>

          {/* 4. Static Content Card */}
          <div className="md:col-span-8 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 flex flex-col justify-center shadow-sm relative overflow-hidden">
            {/* Subtle Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 -mr-10 -mt-10" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black mb-4 text-slate-900 text-center md:text-left">
                Don't have a design?
              </h3>

              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed text-center md:text-left max-w-2xl">
                Our studio team specializes in turning abstract ideas into
                print-ready masterpieces. We optimize every logo for fabric,
                ceramic, and vinyl.
              </p>

              {/* Icons Container: Column on Mobile, Row on Desktop */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center text-sm font-bold text-slate-800 bg-slate-50 md:bg-transparent p-3 md:p-0 rounded-xl w-full md:w-auto justify-center md:justify-start border border-slate-100 md:border-none">
                  <CheckCircle2
                    size={20}
                    className="mr-3 text-green-500 flex-shrink-0"
                  />
                  <span>Vector Ready</span>
                </div>

                <div className="flex items-center text-sm font-bold text-slate-800 bg-slate-50 md:bg-transparent p-3 md:p-0 rounded-xl w-full md:w-auto justify-center md:justify-start border border-slate-100 md:border-none">
                  <CheckCircle2
                    size={20}
                    className="mr-3 text-green-500 flex-shrink-0"
                  />
                  <span>Color Matching</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
