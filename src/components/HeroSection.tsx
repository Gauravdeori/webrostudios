import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-accent/80 text-accent-foreground text-sm font-medium tracking-wide backdrop-blur-sm border border-black/10"
          >
            Web Design & Development Studio
          </motion.span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-foreground tracking-tight px-2">
            Webro Studios is with you
            <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-cta)' }}>— beyond launch.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-4">
            We don't just build your website — we maintain it, optimize it, and keep it thriving at absolutely no extra cost. Your success is our commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto border border-black/20">
              <a href="#contact">Get Started Today</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto border border-black/40">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;