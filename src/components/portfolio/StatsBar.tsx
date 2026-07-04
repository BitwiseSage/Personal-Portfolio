import { motion } from "framer-motion";
import { fadeInItem } from "@/lib/animations";

const stats = [
  { label: "Projects Built", value: "8+" },
  { label: "GitHub Repositories", value: "7+" },
  { label: "Years Coding", value: "3+" },
  { label: "GPA", value: "7.88" }
];

export default function StatsBar() {
  return (
    <motion.section variants={fadeInItem} className="py-8 relative">

      {/* subtle glow background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[200px] bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border relative">

        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="
              group bg-card p-6 text-center
              transition-all duration-300
              hover:-translate-y-1
              hover:border-primary
              hover:shadow-[0_0_18px_rgba(255,0,0,0.35)]
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="
              text-2xl md:text-3xl font-heading tracking-wide
              text-gradient
              group-hover:scale-110
              transition-transform duration-300
            ">
              {stat.value}
            </div>

            <div className="
              text-[10px] font-mono uppercase tracking-widest
              text-muted-foreground mt-1
              group-hover:text-primary
              transition-colors
            ">
              {stat.label}
            </div>

          </motion.div>
        ))}

      </div>
    </motion.section>
  );
}