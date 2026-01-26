import React from "react";
import { PROCESS_STEPS } from "../../../constants";

export const ProcessTimeline = () => {
  // Define steps from our constants
  const steps = PROCESS_STEPS;

  return (
    <section className="py-24 px-6 bg-[#0a0f1d] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
            How We Work
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From conceptualizing your brand identity to the moment your custom
            merchandise arrives at your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((item, i) => (
            <div key={item.step} className="relative group">
              {/* Step Number with Gradient Text */}
              <div className="text-8xl font-black leading-none mb-6 transition-all duration-500 group-hover:-translate-y-2">
                <span className="bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent group-hover:from-blue-500/30">
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  {item.title}
                  <div className="h-px w-0 group-hover:w-8 bg-blue-500 ml-3 transition-all duration-500"></div>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Connecting Line (Only for Desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-[-20%] w-[30%] h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA for the process */}
        <div className="mt-20 text-center">
          <button className="bg-white/5 border border-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl text-sm font-bold hover:bg-white/10 transition-all">
            Questions about the process?{" "}
            <span className="text-blue-400 ml-2">Speak to a specialist →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
