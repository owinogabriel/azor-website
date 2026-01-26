import { ArrowRight } from "lucide-react";
import { STRATEGIES } from "../../../constants";

export const Strategies = ({ expandedId, onToggle }) => {
  const strategies = STRATEGIES;

  return (
    <section id="strategies" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900">
            Strategy Framework
          </h2>
          <p className="text-slate-500 mt-2">The thinking behind the making.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((s) => (
            <div
              key={s.id}
              className="group bg-white border border-slate-200 p-8 rounded-[2rem] transition-all hover:shadow-2xl hover:border-transparent"
            >
              <div className="bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {s.description}
              </p>
              <button
                onClick={() => onToggle(s.id)}
                className="text-xs font-black uppercase tracking-widest flex items-center group-hover:text-blue-600"
              >
                {expandedId === s.id ? "Show Less" : "Learn More"}{" "}
                <ArrowRight size={14} className="ml-2" />
              </button>
              {expandedId === s.id && (
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                  {s.details.map((d, i) => (
                    <div
                      key={i}
                      className="text-xs text-slate-400 flex items-center"
                    >
                      <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />{" "}
                      {d}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
