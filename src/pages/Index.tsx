import { motion, useScroll, useSpring } from "framer-motion";
import { pageContainer } from "@/lib/animations";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import StatsBar from "@/components/portfolio/StatsBar";

export default function Index() {

  // scroll progress
  const { scrollYProgress } = useScroll();

  // smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background bg-gradient-hero noise-bg overflow-hidden">

      {/* scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed top-0 left-0 right-0
          h-[3px]
          origin-left
          bg-primary
          z-50
          shadow-[0_0_10px_rgba(255,0,0,0.7)]
        "
      />

      {/* ambient glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 blur-[140px] pointer-events-none" />

      <motion.main
        className="relative z-10 mx-auto max-w-4xl px-6 pb-24"
        variants={pageContainer}
        initial="hidden"
        animate="show"
      >
        <HeroSection />

        <div className="mt-10">
          <StatsBar />
        </div>

        <div className="mt-12">
          <ProjectsSection />
        </div>

        <div className="mt-12">
          <ExperienceSection />
        </div>

        <div className="mt-12">
          <SkillsSection />
        </div>

        <footer className="pt-14 pb-6 border-t border-border mt-16">
          <p className="text-xs text-muted-foreground font-mono text-center tracking-wider uppercase">
            © {new Date().getFullYear()} Arfan Asgar
          </p>
        </footer>
      </motion.main>
    </div>
  );
}