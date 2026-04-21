import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-28 px-6 gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's bring your dream website to life!
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Partner with Webro Studios and get a stunning, high-performing website — with free maintenance forever. Let's make it happen.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact" className="inline-flex items-center gap-2">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;