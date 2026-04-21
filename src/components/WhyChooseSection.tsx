import { motion } from "framer-motion";
import { Zap, DollarSign, Search, Wrench, Shield, HeartHandshake } from "lucide-react";

const features = [
  { icon: DollarSign, title: "Affordable Pricing", description: "Premium quality websites at prices that won't break the bank. No hidden fees, ever." },
  { icon: Zap, title: "Fast & Efficient", description: "Quick turnaround without cutting corners — your website, live and polished in days." },
  { icon: Search, title: "SEO-Friendly", description: "Built from the ground up to rank well on Google and drive organic traffic." },
  { icon: Wrench, title: "Free Maintenance", description: "Ongoing updates, security patches, and support at absolutely no extra cost — forever." },
  { icon: Shield, title: "Secure & Reliable", description: "Your website is hosted on fast, secure servers with 99.9% uptime guaranteed." },
  { icon: HeartHandshake, title: "Dedicated Support", description: "We treat every client like a partner. Your success is personal to us." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyChooseSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Why Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose Webro?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Affordable, fast, efficient, and SEO-friendly — with ongoing maintenance at no extra cost.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group p-8 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;