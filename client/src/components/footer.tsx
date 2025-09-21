import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-muted py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-2xl font-bold text-primary mb-6" data-testid="footer-logo">
              A2S <span className="text-muted-foreground font-normal">/ Aesthetics to Spaces</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary" data-testid="contact-title">
              Contact Us
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-3" data-testid="contact-email">
                <Mail className="text-primary w-5 h-5" />
                <a 
                  href="mailto:ravsil.a2s.co@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  ravsil.a2s.co@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3" data-testid="contact-phone">
                <Phone className="text-primary w-5 h-5" />
                <a 
                  href="tel:9703631298" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-phone"
                >
                  9703631298
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
