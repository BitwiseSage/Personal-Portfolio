import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { fadeInItem } from "@/lib/animations";

export default function SkillsSection() {
  return (
    <motion.section className="space-y-6 pt-8" variants={fadeInItem}>
      
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
          Arsenal
        </h2>
        <div className="flex-1 line-accent" />
      </div>

      <div className="grid gap-px bg-border sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="
              group
              bg-card
              p-5
              space-y-3
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_18px_rgba(255,0,0,0.6)]
              hover:border-primary
            "
          >
            
            <div className="flex items-center gap-2">
              <div className="h-3 w-0.5 bg-primary" />
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                {group.category}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    inline-flex items-center 
                    border border-primary 
                    px-3 py-1
                    text-[11px] font-mono tracking-wider text-primary
                    transition-all duration-300
                    hover:scale-105
                    hover:shadow-[0_0_12px_rgba(255,0,0,0.6)]
                    hover:bg-primary/10
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </motion.section>
  );
}