import { motion } from "framer-motion";
import { Github, Linkedin, Copy, Check, ChevronRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { fadeInItem } from "@/lib/animations";
import { useState } from "react";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      className="relative pt-20 md:pt-32 pb-12 space-y-8"
      variants={fadeInItem}
    >
      {/* Background glow */}
      <div className="absolute -top-32 left-1/2 w-[600px] h-[600px] bg-primary/10 blur-[140px] pointer-events-none -translate-x-1/2" />

      {/* Decorative vertical line */}
      <motion.div
        className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
      />

      <div className="pl-8 relative">

        {/* Availability */}
        {profile.available && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              {profile.availableFor}
            </span>
          </motion.div>
        )}

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-heading tracking-wide leading-none"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-foreground">
            {profile.name.split(" ")[0]}
          </span>
          <br />
          <span className="text-gradient">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div
          className="mt-4 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-px w-8 bg-primary/60" />
          <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
            {profile.title}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-sm text-muted-foreground leading-relaxed max-w-md mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {profile.bio}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center gap-3 pt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={copyEmail}
            className="
              group inline-flex items-center gap-2
              bg-primary px-5 py-2.5
              text-xs font-semibold uppercase tracking-wider
              text-primary-foreground
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_18px_rgba(255,0,0,0.7)]
            "
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}

            {copied ? "Copied" : "Email Me"}

            <ChevronRight className="h-3 w-3 opacity-50 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              border border-border bg-card
              p-2.5 text-muted-foreground
              transition-all duration-300
              hover:text-primary
              hover:border-primary
              hover:shadow-[0_0_12px_rgba(255,0,0,0.6)]
            "
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              border border-border bg-card
              p-2.5 text-muted-foreground
              transition-all duration-300
              hover:text-primary
              hover:border-primary
              hover:shadow-[0_0_12px_rgba(255,0,0,0.6)]
            "
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>

      </div>
    </motion.section>
  );
}