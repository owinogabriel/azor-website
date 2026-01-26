import { Printer } from "lucide-react";

export const Hero = () => {
  return (
     <section
    id="Home"
    className="relative pt-32 pb-20 lg:pt-48 px-6 overflow-hidden"
  >
    <div className="max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-8">
        <Printer size={14} className="text-blue-600" />
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 ">
          Strategy & Production House
        </span>
      </div>

      <h1 className="text-5xl md:text-text-8xl font-black text-slate-900 tracking-tight mb-8 leading-[-0.9]">
        {" "}
        Brands You Can <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
          Touch & Feel
        </span>
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
        We don't just design your identity—we print it. From strategic
        positioning to custom jerseys, cups, and stickers.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#services"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-200 transition-all"
        >
          View Print Services
        </a>
        <a
          href="#strategies"
          className="bg-white border border-slate-200 px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
        >
          Branding Strategy
        </a>
      </div>
    </div>
  </section>
  )
 
};
