import { motion } from "framer-motion";
import { Star, Github, ArrowUpRight } from "lucide-react";
import { fadeInItem } from "@/lib/animations";
import type { Project } from "@/data/portfolio";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      variants={fadeInItem}
      className="
        group relative
        border border-border
        bg-card
        overflow-hidden
        transition-all duration-500
        hover:border-primary
        hover:shadow-[0_0_25px_rgba(255,0,0,0.25)]
        hover:-translate-y-1
      "
    >
      {/* top glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* glow background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
        <div className="absolute -top-20 left-1/2 w-60 h-60 bg-primary/10 blur-3xl transform -translate-x-1/2" />
      </div>

      <div className="relative p-6">
        <div className="flex items-start justify-between mb-3">

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.stars && (
              <span className="inline-flex items-center gap-1 text-xs text-accent font-mono">
                <Star className="h-3 w-3" fill="currentColor" />
                {project.stars}
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 pl-8">
          {project.description}
        </p>

        <div className="flex items-center justify-between pl-8">

          {/* tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="
                  text-[10px] font-mono uppercase tracking-wider
                  text-muted-foreground
                  border border-border
                  px-2 py-1
                  transition-all duration-300
                  hover:border-primary
                  hover:text-primary
                  hover:shadow-[0_0_8px_rgba(255,0,0,0.5)]
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* links */}
          <div className="flex items-center gap-2">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2
                  text-muted-foreground
                  border border-transparent
                  transition-all duration-300
                  hover:text-primary
                  hover:border-primary
                  hover:shadow-[0_0_10px_rgba(255,0,0,0.6)]
                "
              >
                <Github className="h-4 w-4" />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2
                  text-muted-foreground
                  border border-transparent
                  transition-all duration-300
                  hover:text-accent
                  hover:border-accent
                  hover:shadow-[0_0_10px_rgba(0,255,200,0.6)]
                "
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
}