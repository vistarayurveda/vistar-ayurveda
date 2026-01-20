import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import vistarLogo from "@/assets/vistar-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={vistarLogo}
                alt="Vistar Ayurveda"
                className="h-12 w-auto rounded-lg"
              />
              <span className="font-display text-xl font-semibold text-foreground">
                Vistar Ayurveda
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium Ayurvedic wellness products for better health and
              vitality. Trusted by thousands across India.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">
                100% Natural & Ayurvedic
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#benefits"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>vistarayurveda@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9999198108</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Disclaimer */}
          <div className="flex-2 text-muted-foreground text-xs leading-relaxed">
            <h3 className="mb-1 text-sm font-medium text-foreground">
              Disclaimer
            </h3>
            <p>
              * This product is a{" "}
              <span className="text-foreground font-medium">
                dietary supplement
              </span>{" "}
              and is not intended to diagnose, treat, cure, or prevent any
              disease. Individual results may vary from person to person.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex-1 text-muted-foreground text-xs md:text-right">
            © {new Date().getFullYear()} Vistar Ayurveda. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
