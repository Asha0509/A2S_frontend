import { Shield, Box, Bot, Wand2, BarChart3, Wrench, Headset, UserCheck, Heart, Leaf, Link, Monitor, FileText, TrendingUp, Zap } from "lucide-react";

export default function Features() {
  const basicFeatures = [
    {
      icon: Shield,
      title: "Verified Property Listings",
      description: "Trusted residential, commercial, and land listings with verified authenticity"
    },
    {
      icon: Box,
      title: "2.5D Room Designer",
      description: "Upload rooms, visualize furniture & décor with AI-suggested arrangements"
    },
    {
      icon: Bot,
      title: "B2C AI Consultants",
      description: "Personalized property & vendor recommendations based on your preferences"
    },
    {
      icon: Wand2,
      title: "Auto-Generate Design Options",
      description: "AI suggests multiple furniture & layout arrangements for your space"
    },
    {
      icon: BarChart3,
      title: "Simple B2C Analytics",
      description: "Track preferences, saved properties, and bookings in one place"
    }
  ];

  const premiumFeatures = [
    {
      icon: Wrench,
      title: "Advanced Predictive Maintenance",
      description: "AI + IoT predicts building issues before breakdown (plumbing, electricity, HVAC)"
    },
    {
      icon: Headset,
      title: "Integrated AR/VR Management",
      description: "Property managers can see hidden infrastructure & immersive room walkthroughs"
    },
    {
      icon: UserCheck,
      title: "AI-powered Tenant Screening",
      description: "Assess reliability based on credit, rental history, job stability, police verification"
    },
    {
      icon: Heart,
      title: "Personalized Resident Experience",
      description: "Data analytics improve resident services & community engagement"
    },
    {
      icon: Leaf,
      title: "Sustainability-focused Features",
      description: "Smart water meters, solar panels, waste segregation, community gardening"
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Link,
      title: "Blockchain Property Transfer",
      description: "Tamper-proof property records with transparent ownership transfer"
    },
    {
      icon: Monitor,
      title: "Virtual Property Management",
      description: "Manage multiple properties remotely: tenants, payments, repairs, legal documentation"
    },
    {
      icon: FileText,
      title: "Smart Contract Rent System",
      description: "Automated, transparent rent, deposits, and penalty management"
    },
    {
      icon: TrendingUp,
      title: "AI Property Valuation & Forecasting",
      description: "Predict property prices based on history, infrastructure, demand trends"
    },
    {
      icon: Zap,
      title: "IoT Energy Management",
      description: "Monitor and optimize energy use across all properties with smart systems"
    }
  ];

  const FeatureCard = ({ icon: Icon, title, description, testId }: { 
    icon: any; 
    title: string; 
    description: string; 
    testId: string;
  }) => (
    <div className="bg-card border border-border rounded-xl p-6 card-shadow hover-lift" data-testid={testId}>
      <div className="text-primary text-2xl mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-primary mb-2" data-testid={`${testId}-title`}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm" data-testid={`${testId}-description`}>
        {description}
      </p>
    </div>
  );

  return (
    <section id="features" className="py-20 gradient-bg" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="features-title">
            Smart Features You'll Love
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="features-subtitle">
            Discover what makes A2S the perfect choice for your needs
          </p>
        </div>
        
        {/* Basic Plan Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-semibold" data-testid="badge-basic">
              Basic Plan Features
            </span>
            <div className="h-px bg-border flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="basic-features-grid">
            {basicFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                testId={`basic-feature-${index}`}
              />
            ))}
          </div>
        </div>
        
        {/* Premium Plan Features */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold" data-testid="badge-premium">
              Premium Plan Features
            </span>
            <div className="h-px bg-border flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="premium-features-grid">
            {premiumFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                testId={`premium-feature-${index}`}
              />
            ))}
          </div>
        </div>
        
        {/* Enterprise Plan Features */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold" data-testid="badge-enterprise">
              Enterprise Plan Features
            </span>
            <div className="h-px bg-border flex-1"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="enterprise-features-grid">
            {enterpriseFeatures.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                testId={`enterprise-feature-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
