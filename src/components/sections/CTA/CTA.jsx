import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => (
  <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-6">
        Ready to Make Your Mark?
      </h2>
      <p className="text-xl text-blue-100 mb-10">
        Let's turn your brand into something people can touch, wear, and share.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/quote"
          className="group relative bg-white text-blue-600 px-10 py-4 rounded-2xl font-black shadow-lg hover:shadow-[0_20px_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
        >
          {/* Subtle Shimmer Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

          <span className="relative z-10">Get a Quote</span>
          <ArrowRight
            size={18}
            className="relative z-10 group-hover:translate-x-1 transition-transform"
          />
        </Link>
        <Link
          to="/portfolio"
          className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center text-center"
        >
          View Portfolio
        </Link>
      </div>
    </div>
  </section>
);
