import { TESTIMONIALS } from "../../../constants";

export const Testimonials = () => {
  const testimonials = TESTIMONIALS
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black">Trusted by Teams</h2>
          <p className="text-slate-500 mt-2">What our clients say about us</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-slate-600 text-sm italic">"{testimonial.quote}"</p>
              <div className="mt-4 text-xs font-bold text-blue-600">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};