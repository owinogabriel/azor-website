import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => (
  <footer id="contact" className="bg-slate-950 text-white py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <span className="text-3xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              AZoR
            </span>
            <span className="text-slate-500 ml-1 font-semibold tracking-tight">
              Services
            </span>
          </span>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Premium branding strategy and high-fidelity physical production.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-6">
            Services
          </h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            <li>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Custom Jerseys
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Vinyl Stickers
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Branded Drinkware
              </a>
            </li>
            <li>
              <a
                href="#strategies"
                className="hover:text-blue-400 transition-colors"
              >
                Brand Strategy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Numbers Column */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-6">
            Connect
          </h4>
          <ul className="space-y-4 text-sm font-medium text-slate-500">
            <li className="flex items-center group">
              <Phone
                size={16}
                className="mr-3 text-blue-500 group-hover:scale-110 transition-transform"
              />
              <a
                href="tel:+254724687339"
                className="hover:text-white transition-colors"
              >
                +254 724 687 339
              </a>
            </li>
            <li className="flex items-center group">
              <Phone
                size={16}
                className="mr-3 text-blue-500 group-hover:scale-110 transition-transform"
              />

              <a
                href="tel:+254782471151"
                className="hover:text-white transition-colors"
              >
                +254 782 471 151
              </a>
            </li>
            <li className="flex items-center group">
              <Mail
                size={16}
                className="mr-3 text-blue-500 group-hover:scale-110 transition-transform"
              />

              <a
                href="mailto:azorservices@gmail.com"
                className="hover:text-white transition-colors"
              >
                azorservices@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* CTA Column */}
        <div className="flex flex-col items-start md:items-end">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-6">
            Ready to Start?
          </h4>
          <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/20 transition-all active:scale-95">
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-slate-900 flex flex-col md:row justify-between items-center gap-4 text-slate-600 text-xs">
        <p>© 2026 AZoR Branding & Production. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-400">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);
