import { STATS } from "../../../constants"
import { StatCard } from "./StatCard"


export const Stats = () => {
  <section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-col-2 md:grid-col-4 gap-8">
 {STATS.map((stat, i) => (
<StatCard key={i} {...stat} />
 ))}
</div>
</div>
  </section>
}