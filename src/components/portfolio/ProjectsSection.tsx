import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { fadeInItem, staggerContainer } from "@/lib/animations";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <motion.section variants={fadeInItem} className="space-y-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Featured Projects</h2>
        <div className="flex-1 line-accent" />
      </div>
      <motion.div className="grid gap-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </motion.div>
    </motion.section>
  );
}
