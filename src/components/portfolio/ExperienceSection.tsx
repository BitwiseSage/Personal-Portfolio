import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import { fadeInItem } from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <motion.section className="space-y-8 pt-8" variants={fadeInItem}>

      {/* Experience (only shown if data exists) */}
      {experience.length > 0 && (
        <>
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
              Experience
            </h2>
            <div className="flex-1 line-accent" />
          </div>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                className="group relative border-l-2 border-border hover:border-primary/50 pl-6 py-5 transition-colors duration-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[5px] top-6 h-2 w-2 bg-card border-2 border-muted-foreground group-hover:border-primary group-hover:bg-primary transition-colors duration-300" />

                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="text-sm font-display font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-[10px] font-mono text-muted-foreground tracking-wider shrink-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs font-mono uppercase tracking-wider text-primary/80 mb-2">
                  {exp.company}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Education Section */}
      <div className="flex items-center gap-4 pt-4">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-primary">
          Education
        </h2>
        <div className="flex-1 line-accent" />
      </div>

      {/* Education Card */}
      <motion.div
        className="
        group
        border border-border
        bg-card
        p-6
        transition-all duration-300
        hover:border-primary
        hover:-translate-y-1
        hover:shadow-[0_0_18px_rgba(255,0,0,0.6)]
        "
      >
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-sm font-display font-bold">
            {education.degree}
          </h3>

          <span className="text-[10px] font-mono text-muted-foreground tracking-wider shrink-0">
            {education.period}
          </span>
        </div>

        <p className="text-xs font-mono uppercase tracking-wider text-primary/80 mt-1">
          {education.school}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {education.coursework.map((course) => (
            <span
              key={course}
              className="
              text-[10px] font-mono uppercase tracking-wider
              text-muted-foreground
              border border-border
              px-2.5 py-1
              transition-colors duration-300
              group-hover:border-primary
              "
            >
              {course}
            </span>
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}