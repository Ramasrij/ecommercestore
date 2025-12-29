import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive interfaces with attention to detail",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and exceptional user experience",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams with great communication",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold mb-4 block">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Turning ideas into{" "}
              <span className="text-gradient">digital reality</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              I'm a passionate full-stack developer with 5+ years of experience building 
              web applications. I specialize in React, TypeScript, and Node.js, with a 
              keen eye for design and user experience.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open source, or sharing knowledge through blog posts 
              and community events.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Python", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
