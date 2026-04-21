import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";

const projects = [
  { name: "Amaaradda", url: "https://www.amaaradda.space", description: "A vibrant community platform with modern design and seamless user experience.", tag: "Community" },
  { name: "Echoes of Poba", url: "https://www.echoesofpoba.in", description: "An immersive storytelling experience — beautifully designed and fully responsive.", tag: "Storytelling" },
];

const ShowcaseSection = () => {
  return (
    <section id="work" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Take a look at some of the projects we've brought to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group block p-8 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-card hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="inline-block mb-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">{p.tag}</span>
                  <h3 className="text-2xl font-semibold text-foreground">{p.name}</h3>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
              <div className="flex items-center gap-2 text-sm text-primary font-medium">
                <Globe className="w-4 h-4" />
                {p.url.replace('https://', '')}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;