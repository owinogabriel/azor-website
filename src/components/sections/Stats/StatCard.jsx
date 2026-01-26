export const StatCard = ({ number, label }) => (
  <div className="text-center group">
    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
      {number}
    </div>
    <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">
      {label}
    </div>
  </div>
);
