import { motion } from "framer-motion";
import { Rocket, Palette, TrendingUp, Code2, Smartphone, BarChart3 } from "lucide-react";

const services = [
  { icon: Rocket, title: "Fast Delivery", description: "Your website, live and polished in record time — without compromising on quality." },
  { icon: TrendingUp, title: "SEO-Optimized", description: "We bake SEO into every page so your audience can actually find you." },
  { icon: Palette, title: "Beautiful Design", description: "Stunning, modern designs that captivate your audience and build trust." },
  { icon: Code2, title: "Clean Code", description: "Well-structured, scalable code that's easy to maintain and extend." },
  { icon: Smartphone, title: "Mobile-First", description: "Responsive designs that look perfect on every screen size." },
  { icon: BarChart3, title: "Performance", description: "Blazing-fast load times and optimized performance out of the box." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 gradient-hero">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Affordable pricing without compromise — every project gets our full attention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card shadow-soft border border-border/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-6">
                <s.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;