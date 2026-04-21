import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img 
            src="/favicon.jpeg" 
            alt="Webro Studios Logo" 
            className="w-8 h-8 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
            Webro Studios
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;