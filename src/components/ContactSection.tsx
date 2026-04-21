import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "dfa122b5-0d96-4046-9c3e-80e82831fa8b",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.description,
          subject: `New Message from ${formData.name} - Webro Studios`,
          from_name: "Webro Studios Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We've received your message and will get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", description: "" });
      } else {
        toast({
          variant: "destructive",
          title: "Error sending message",
          description: result.message || "Something went wrong. Please try again or email us directly.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Network error",
        description: "Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tell us about the website you dream of, and we'll make it a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-card"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-card"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className="bg-card"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">
                Describe Your Dream Website
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Tell us about the website you have in mind — purpose, features, inspiration, anything..."
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="bg-card resize-none"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? "Sending..." : (
                <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
              )}
            </Button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="p-6 rounded-2xl bg-card shadow-soft border border-border/50">
              <h3 className="text-lg font-semibold text-foreground mb-4">Reach Us Directly</h3>
              <div className="space-y-4">
                <a
                  href="mailto:webrostudios.in@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">webrostudios.in@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/webro.studios?igsh=dmo0enpkMmRrMnhz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Instagram className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Instagram</p>
                    <p className="text-sm font-medium text-foreground">@webro.studios</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl gradient-cta text-primary-foreground">
              <h3 className="text-lg font-semibold mb-2">Free Maintenance</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Every project comes with ongoing maintenance at no extra cost. We're with you beyond launch — always.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;