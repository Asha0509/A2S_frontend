import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import UserWaitlistForm from "@/components/forms/user-waitlist-form";

export default function Plans() {
  const [showUserForm, setShowUserForm] = useState(false);

  const plans = [
    {
      name: "Basic",
      tag: "Budget-Friendly",
      tagColor: "bg-secondary text-secondary-foreground",
      description: "Perfect for individual homeowners and renters",
      features: [
        "Verified Property Search (residential, commercial, land)",
        "Designer Room (2.5D) – upload rooms, visualize layouts",
        "AI Consultants (B2C) – property & vendor suggestions",
        "Auto-Generate Design Options – multiple arrangements",
        "Simple B2C Analytics – track preferences & bookings"
      ],
      borderClass: "border-border"
    },
    {
      name: "Premium",
      tag: "Luxury",
      tagColor: "bg-primary text-primary-foreground",
      description: "Advanced features for luxury living and professionals",
      features: [
        "Everything in Basic",
        "AR/VR Property Management – immersive walkthroughs",
        "Advanced Predictive Maintenance – AI + IoT predictions",
        "AI-powered Tenant Screening – comprehensive analysis",
        "Personalized Resident Experience – data-based recommendations",
        "Sustainability Features – smart meters, solar panels"
      ],
      borderClass: "border-2 border-primary",
      featured: true
    },
    {
      name: "Enterprise",
      tag: "B2B",
      tagColor: "bg-accent text-accent-foreground",
      description: "Complete solution for property management businesses",
      features: [
        "Everything in Premium",
        "Blockchain Property Ownership Transfer",
        "Smart Contract Rent Payment System",
        "Virtual Property Management – multiple properties",
        "AI Property Valuation & Forecasting",
        "Dedicated Account Manager & Priority Support"
      ],
      borderClass: "border-border"
    }
  ];

  return (
    <>
      <section id="plans" className="py-20 bg-card" data-testid="plans-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" data-testid="plans-title">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="plans-subtitle">
              Tailored solutions for every need and budget
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-card ${plan.borderClass} rounded-2xl p-8 card-shadow hover-lift`}
                data-testid={`plan-card-${plan.name.toLowerCase()}`}
              >
                <div className="plan-badge">
                  <span className={`${plan.tagColor} px-4 py-1 rounded-full text-sm font-semibold`}>
                    {plan.tag}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-primary mb-2" data-testid={`plan-name-${plan.name.toLowerCase()}`}>
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid={`plan-description-${plan.name.toLowerCase()}`}>
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8" data-testid={`plan-features-${plan.name.toLowerCase()}`}>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="text-green-500 mt-1 w-4 h-4 flex-shrink-0" />
                        <span className={`text-sm ${featureIndex === 0 && plan.name !== "Basic" ? "font-semibold" : ""}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => setShowUserForm(true)}
                    className="btn-primary w-full py-3 rounded-lg font-semibold transition-all hover-lift"
                    data-testid={`button-get-started-${plan.name.toLowerCase()}`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UserWaitlistForm 
        open={showUserForm} 
        onOpenChange={setShowUserForm} 
      />
    </>
  );
}
