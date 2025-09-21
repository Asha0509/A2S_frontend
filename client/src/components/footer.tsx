import { Mail, Phone, Calendar, Users, Video, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative" data-testid="footer">
      {/* Separator line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="bg-gradient-to-b from-card to-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Logo */}
          <div className="text-center mb-12">
            <div className="text-3xl font-bold text-primary mb-2 animate-pulse" data-testid="footer-logo">
              A2S
            </div>
            <p className="text-muted-foreground text-lg font-light">Aesthetics to Spaces</p>
          </div>
          
          {/* 3 Column Layout */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Quick Links */}
            <div className="space-y-6 group">
              <h3 className="text-xl font-semibold text-primary border-b-2 border-primary/20 pb-2 group-hover:border-primary/40 transition-colors duration-300" data-testid="quick-links-title">
                Quick Links
              </h3>
              <div className="space-y-4">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Plans & Features", href: "#plans" },
                  { label: "Vendor Waitlist", href: "#vendors" },
                  { label: "Contact", href: "#contact" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group/link flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                    data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover/link:font-medium transition-all duration-300">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Column 2: Services */}
            <div className="space-y-6 group">
              <h3 className="text-xl font-semibold text-primary border-b-2 border-blue-500/20 pb-2 group-hover:border-blue-500/40 transition-colors duration-300" data-testid="services-title">
                Services
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Property Search", href: "#" },
                  { label: "Interior & Vastu", href: "#" },
                  { label: "Vendor & Factory Onboarding", href: "#vendors" },
                  { label: "Smart Tools (AR/VR, AI Valuation, IoT)", href: "#features" }
                ].map((service, index) => (
                  <a
                    key={index}
                    href={service.href}
                    className="group/link flex items-center gap-2 text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-1"
                    data-testid={`service-${service.label.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover/link:font-medium transition-all duration-300">{service.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Column 3: Contact */}
            <div className="space-y-6 group">
              <h3 className="text-xl font-semibold text-primary border-b-2 border-green-500/20 pb-2 group-hover:border-green-500/40 transition-colors duration-300" data-testid="contact-title">
                Contact
              </h3>
              
              {/* Contact Information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 group/contact" data-testid="contact-email">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover/contact:bg-primary/20 transition-colors duration-300">
                    <Mail className="text-primary w-4 h-4" />
                  </div>
                  <a 
                    href="mailto:ravsil.a2s.co@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    data-testid="link-email"
                  >
                    ravsil.a2s.co@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3 group/contact" data-testid="contact-phone">
                  <div className="p-2 rounded-lg bg-green-500/10 group-hover/contact:bg-green-500/20 transition-colors duration-300">
                    <Phone className="text-green-600 w-4 h-4" />
                  </div>
                  <a 
                    href="tel:9703631298" 
                    className="text-muted-foreground hover:text-green-600 transition-colors duration-300 text-sm"
                    data-testid="link-phone"
                  >
                    9703631298
                  </a>
                </div>
              </div>
              
              {/* Encounters Section */}
              <div className="pt-4 border-t border-border/50">
                <h4 className="text-lg font-medium text-primary mb-4">Encounters</h4>
                <div className="space-y-3">
                  {[
                    { label: "Meet us at events", icon: Users, color: "purple" },
                    { label: "Schedule a call", icon: Calendar, color: "blue" },
                    { label: "Request a demo", icon: Video, color: "orange" }
                  ].map((encounter, index) => (
                    <button
                      key={index}
                      className="group/encounter w-full flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-sm"
                      data-testid={`encounter-${encounter.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className={`p-2 rounded-lg bg-${encounter.color}-500/10 group-hover/encounter:bg-${encounter.color}-500/20 transition-colors duration-300`}>
                        <encounter.icon className={`w-4 h-4 text-${encounter.color}-600`} />
                      </div>
                      <span className="text-sm text-muted-foreground group-hover/encounter:text-primary transition-colors duration-300 font-medium">
                        {encounter.label}
                      </span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground group-hover/encounter:text-primary opacity-0 group-hover/encounter:opacity-100 transition-all duration-300 ml-auto" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Border */}
          <div className="pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 A2S - Aesthetics to Spaces. Building the future of property management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
