import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    service: "Jerseys",
    quantity: "",
    description: "",
    name: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const services = [
    {
      id: "Jerseys",
      label: "Jerseys",
      icon: "👕",
      desc: "Custom kits",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "Cups",
      label: "Cups",
      icon: "☕",
      desc: "Branded mugs",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      id: "Stickers",
      label: "Stickers",
      icon: "✨",
      desc: "Vinyl decals",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "Other",
      label: "Custom",
      icon: "🛠️",
      desc: "Other items",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `Hello AZoR! I'd like a quote:%0A%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Quantity:* ${formData.quantity}%0A` +
      `*Details:* ${formData.description || "N/A"}%0A%0A` +
      `*Name:* ${formData.name}`;

    window.open(`https://wa.me/254782471151?text=${message}`, "_blank");
  };

  const isFormValid = formData.name && formData.quantity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 text-slate-900 py-8 md:py-16 px-4 md:px-6 font-sans selection:bg-blue-100">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <Link
          to="/"
          className="group inline-flex items-center text-slate-500 hover:text-blue-600 mb-8 md:mb-16 transition-all font-medium"
        >
          <div className="p-2.5 rounded-xl group-hover:bg-blue-50 group-hover:shadow-sm transition-all mr-2">
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
          </div>
          <span className="group-hover:translate-x-0.5 transition-transform">
            Back to Home
          </span>
        </Link>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Header Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-sm font-bold border border-blue-100">
              <Sparkles size={14} className="animate-pulse" />
              Quote Request
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
                Ready to
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  level up
                </span>
                your brand?
              </h1>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                Share your vision and we'll craft a custom quote tailored just
                for you. Let's create something extraordinary together.
              </p>
            </div>

            {/* Trust Signals */}
            <div className="hidden lg:grid grid-cols-1 gap-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="p-2.5 bg-blue-50 rounded-xl">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">
                    Lightning Fast Response
                  </p>
                  <p className="text-sm text-slate-500">
                    We reply within 2 hours, guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="p-2.5 bg-green-50 rounded-xl">
                  <Users size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">500+ Happy Clients</p>
                  <p className="text-sm text-slate-500">
                    Trusted by brands across Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="p-2.5 bg-purple-50 rounded-xl">
                  <Shield size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800">Quality Guaranteed</p>
                  <p className="text-sm text-slate-500">
                    100% satisfaction or money back
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/20 border border-slate-100 p-8 md:p-12 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/5 to-pink-500/5 rounded-full blur-3xl -z-10"></div>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* 1. Service Selection */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-black text-slate-400 uppercase tracking-widest">
                      Select Service
                    </label>
                    {formData.service && (
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {formData.service} Selected
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {services.map((s) => {
                      const isSelected = formData.service === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, service: s.id })
                          }
                          className={`relative overflow-hidden text-left p-5 rounded-2xl border-2 transition-all duration-300 group ${
                            isSelected
                              ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg shadow-blue-100"
                              : "border-slate-100 hover:border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md"
                          }`}
                        >
                          {/* Gradient Background on Hover */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                          ></div>

                          <div className="relative">
                            <span
                              className={`text-3xl mb-3 block transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-105"}`}
                            >
                              {s.icon}
                            </span>
                            <p
                              className={`font-bold text-sm mb-0.5 transition-colors ${isSelected ? "text-blue-600" : "text-slate-800"}`}
                            >
                              {s.label}
                            </p>
                            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">
                              {s.desc}
                            </p>
                          </div>

                          {isSelected && (
                            <div className="absolute top-3 right-3 animate-in fade-in zoom-in duration-300">
                              <div className="p-1 bg-blue-600 rounded-full">
                                <CheckCircle2
                                  size={14}
                                  className="text-white"
                                />
                              </div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Personal & Project Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                      Your Name
                      <span className="text-red-500 text-xs">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-slate-50 border-2 rounded-2xl px-5 py-4 outline-none transition-all duration-300 ${
                          focusedField === "name"
                            ? "bg-white border-blue-500 ring-4 ring-blue-500/10 shadow-lg shadow-blue-100"
                            : formData.name
                              ? "border-green-200 bg-green-50/30"
                              : "border-slate-100 hover:border-slate-200"
                        }`}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      {formData.name && focusedField !== "name" && (
                        <CheckCircle2
                          size={18}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                        />
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                      Quantity
                      <span className="text-red-500 text-xs">*</span>
                    </label>
                    <div className="relative">
                      <input
                        required
                        type="number"
                        placeholder="How many units?"
                        value={formData.quantity}
                        onFocus={() => setFocusedField("quantity")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-slate-50 border-2 rounded-2xl px-5 py-4 outline-none transition-all duration-300 ${
                          focusedField === "quantity"
                            ? "bg-white border-blue-500 ring-4 ring-blue-500/10 shadow-lg shadow-blue-100"
                            : formData.quantity
                              ? "border-green-200 bg-green-50/30"
                              : "border-slate-100 hover:border-slate-200"
                        }`}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                      />
                      {formData.quantity && focusedField !== "quantity" && (
                        <CheckCircle2
                          size={18}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Description */}
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 ml-1 flex items-center gap-2">
                    Additional Details
                    <span className="text-slate-400 text-xs font-normal">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about sizes, colors, design preferences, deadlines, or any special requirements..."
                    value={formData.description}
                    onFocus={() => setFocusedField("description")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-slate-50 border-2 rounded-2xl px-5 py-4 outline-none transition-all duration-300 resize-none ${
                      focusedField === "description"
                        ? "bg-white border-blue-500 ring-4 ring-blue-500/10 shadow-lg shadow-blue-100"
                        : "border-slate-100 hover:border-slate-200"
                    }`}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 relative overflow-hidden group ${
                      isFormValid
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <MessageSquare size={22} className="relative z-10" />
                    <span className="relative z-10">
                      Get Quote via WhatsApp
                    </span>
                    <div className="absolute right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300">
                      →
                    </div>
                  </button>

                  <div className="flex items-center justify-center gap-6 text-xs text-slate-400 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 size={14} className="text-green-500" />
                      No credit card required
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-blue-500" />
                      Response within 24h
                    </span>
                  </div>
                </div>
              </form>
            </div>

            {/* Mobile Trust Signals */}
            <div className="lg:hidden grid grid-cols-1 gap-3 mt-6">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                <Clock size={18} className="text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">
                  Lightning fast response (2h)
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100">
                <Users size={18} className="text-green-600" />
                <span className="text-sm font-semibold text-slate-700">
                  500+ happy clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
