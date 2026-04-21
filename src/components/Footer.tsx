import { Mail, Instagram, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/50 bg-card/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Webro Studios
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building beautiful, fast, and SEO-friendly websites — with free maintenance forever.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#work" className="hover:text-foreground transition-colors">Our Work</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect With Us</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:webrostudios.in@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" /> webrostudios.in@gmail.com
              </a>
              <a
                href="https://www.instagram.com/webro.studios?igsh=dmo0enpkMmRrMnhz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" /> @webro.studios <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Webro Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;