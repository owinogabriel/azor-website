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
        <div className="mt-20 text-center px-6">
          <div className="inline-flex flex-col items-center">
            {/* Subtle label above the main button */}
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Instant Support
            </span>

            <a
              href="https://wa.me/254782471151?text=Hello%20AZoR%20Services!%20I'm%20interested%20in%20a%20custom%20design/print%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col md:flex-row items-center gap-4 bg-slate-900 border border-white/10 px-10 py-5 rounded-[2rem] transition-all hover:border-green-500/50 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)] active:scale-95"
            >
              {/* Left Side: Question */}
              <span className="text-slate-100 text-sm md:text-base font-semibold border-b border-white/10 md:border-b-0 md:border-r md:pr-6 md:pb-0 pb-2">
                Questions about the process?
              </span>

              {/* Right Side: The Action */}
              <span className="flex items-center text-green-400 font-bold tracking-tight text-sm md:text-base group-hover:text-green-300 transition-colors">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat with a Specialist
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
