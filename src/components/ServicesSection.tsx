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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
          >
            What We Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Affordable pricing without compromise — every project gets our full attention.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                borderColor: "hsl(var(--primary))"
              }}
              className="text-center p-8 rounded-2xl bg-card shadow-soft border border-black/10 transition-colors duration-300"
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