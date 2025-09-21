import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Paintbrush, Briefcase, Hammer, Percent, DollarSign, Users, PieChart, Phone, GraduationCap } from "lucide-react";
import VendorWaitlistForm from "./forms/vendor-waitlist-form";

export default function Vendors() {
  const [showVendorForm, setShowVendorForm] = useState(false);

  const roles = [
    {
      icon: Home,
      title: "Vastu Consultants",
      subtitle: "Professionals only"
    },
    {
      icon: Paintbrush,
      title: "Interior Consultants",
      subtitle: "Students/artists allowed"
    },
    {
      icon: Briefcase,
      title: "Business Consultants",
      subtitle: "Students/artists allowed"
    },
    {
      icon: Hammer,
      title: "Factories / Carpenters / Furniture Makers",
      subtitle: "Professionals only"
    }
  ];

  const benefits = [
    {
      icon: Percent,
      title: "8–12% Commission per Transaction",
      description: "Competitive rates based on transaction value"
    },
    {
      icon: DollarSign,
      title: "Standard Monthly Payment + Bonus",
      description: "Regular income plus performance-based bonuses"
    },
    {
      icon: Users,
      title: "Direct Access to Local Customers",
      description: "Connect with customers in your area"
    },
    {
      icon: PieChart,
      title: "Dashboard for Management",
      description: "Manage bookings, pricing, and portfolio"
    },
    {
      icon: Phone,
      title: "Personal Onboarding",
      description: "Phone call and portfolio review"
    },
    {
      icon: GraduationCap,
      title: "Non-paid Experience Allowed",
      description: "For eligible students/artists (interior & business consultants only)"
    }
  ];

  return (
    <>
      <section id="vendors" className="py-20 bg-card" data-testid="vendors-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" data-testid="vendors-title">
              Vendor & Service Provider Opportunities
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="vendors-subtitle">
              Join our growing network of professionals and grow your business
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Roles & Categories */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8" data-testid="roles-title">
                Available Roles & Categories
              </h3>
              <div className="space-y-6" data-testid="roles-list">
                {roles.map((role, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-muted rounded-lg"
                    data-testid={`role-${index}`}
                  >
                    <div className="text-primary text-xl">
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary" data-testid={`role-title-${index}`}>
                        {role.title}
                      </h4>
                      <p className="text-muted-foreground text-sm" data-testid={`role-subtitle-${index}`}>
                        {role.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vendor Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-8" data-testid="benefits-title">
                Vendor Benefits
              </h3>
              <div className="space-y-6" data-testid="benefits-list">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4"
                    data-testid={`benefit-${index}`}
                  >
                    <div className="text-green-500 text-xl">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary" data-testid={`benefit-title-${index}`}>
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground text-sm" data-testid={`benefit-description-${index}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white" data-testid="vendor-cta">
              <h3 className="text-2xl font-bold mb-4" data-testid="cta-title">
                Ready to Join Our Network?
              </h3>
              <p className="text-lg mb-6 opacity-90" data-testid="cta-description">
                Learn more about opportunities → Choose your role → See detailed benefits → Join waitlist
              </p>
              <Button 
                onClick={() => setShowVendorForm(true)}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                data-testid="button-join-vendor-waitlist"
              >
                Join Vendor Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <VendorWaitlistForm 
        open={showVendorForm} 
        onOpenChange={setShowVendorForm} 
      />
    </>
  );
}
