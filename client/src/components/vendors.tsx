import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Home, Paintbrush, Briefcase, Hammer, Percent, DollarSign, Users, PieChart, Phone, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import VendorWaitlistForm from "./forms/vendor-waitlist-form";

export default function Vendors() {
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (roleId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [roleId]: !prev[roleId]
    }));
  };

  const roles = [
    {
      id: "vastu",
      icon: Home,
      title: "Vastu Consultants",
      subtitle: "Professionals only",
      description: "Provide traditional Vastu Shastra consultation for homes and commercial spaces to ensure positive energy flow and prosperity.",
      commission: "10–12%",
      benefits: [
        "High-value consultations with premium clients",
        "Flexible scheduling for site visits",
        "Commission-based earnings with bonuses",
        "Professional certification support",
        "Access to exclusive client referrals"
      ],
      nonPaidExperience: false
    },
    {
      id: "interior",
      icon: Paintbrush,
      title: "Interior Consultants",
      subtitle: "Students/artists allowed",
      description: "Create beautiful, functional interior designs for residential and commercial spaces using the latest design trends and technologies.",
      commission: "8–12%",
      benefits: [
        "Portfolio building opportunities",
        "Access to design software and tools",
        "Mentorship from experienced designers",
        "Client management dashboard",
        "Flexible project timelines"
      ],
      nonPaidExperience: true
    },
    {
      id: "business",
      icon: Briefcase,
      title: "Business Consultants",
      subtitle: "Students/artists allowed",
      description: "Help businesses optimize their commercial spaces for productivity, efficiency, and employee satisfaction.",
      commission: "8–12%",
      benefits: [
        "Corporate client access",
        "Business development training",
        "Performance-based bonuses",
        "Professional networking opportunities",
        "Project management tools"
      ],
      nonPaidExperience: true
    },
    {
      id: "carpenter",
      icon: Hammer,
      title: "Factories / Carpenters / Furniture Makers",
      subtitle: "Professionals only",
      description: "Partner with us to provide high-quality custom furniture, fixtures, and construction services for our design projects.",
      commission: "8–10%",
      benefits: [
        "Bulk order opportunities",
        "Regular project flow",
        "Material sourcing support",
        "Quality certification programs",
        "Direct client connections"
      ],
      nonPaidExperience: false
    }
  ];

  return (
    <>
      <section id="vendors" className="py-20 bg-background" data-testid="vendors-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4" data-testid="vendors-title">
              Vendor & Service Provider Opportunities
            </h2>
            <p className="text-xl text-muted-foreground" data-testid="vendors-subtitle">
              Join our growing network of professionals and grow your business
            </p>
          </div>
          
          {/* Role Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6" data-testid="roles-grid">
            {roles.map((role) => (
              <Card key={role.id} className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">
                      <role.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-primary">{role.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    {role.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {role.description}
                  </p>
                  
                  <Collapsible 
                    open={expandedCards[role.id]} 
                    onOpenChange={() => toggleCard(role.id)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full mb-4 justify-between"
                        data-testid={`learn-more-${role.id}`}
                      >
                        Learn More
                        {expandedCards[role.id] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="space-y-4">
                      {/* Commission */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Percent className="h-4 w-4 text-green-600" />
                          <h4 className="font-semibold text-primary">Commission</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">{role.commission} per transaction</p>
                      </div>
                      
                      {/* Benefits */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="h-4 w-4 text-blue-600" />
                          <h4 className="font-semibold text-primary">Benefits</h4>
                        </div>
                        <ul className="space-y-2">
                          {role.benefits.map((benefit, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Standard Benefits */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <PieChart className="h-4 w-4 text-purple-600" />
                          <h4 className="font-semibold text-primary">Standard Benefits</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <DollarSign className="h-3 w-3 mt-1 text-green-500" />
                            Standard monthly payment + bonus
                          </li>
                          <li className="flex items-start gap-2">
                            <PieChart className="h-3 w-3 mt-1 text-blue-500" />
                            Dashboard for management
                          </li>
                          <li className="flex items-start gap-2">
                            <Phone className="h-3 w-3 mt-1 text-orange-500" />
                            Personal onboarding support
                          </li>
                          {role.nonPaidExperience && (
                            <li className="flex items-start gap-2">
                              <GraduationCap className="h-3 w-3 mt-1 text-indigo-500" />
                              Non-paid experience allowed
                            </li>
                          )}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    onClick={() => {
                      setSelectedRole(role.id);
                      setShowVendorForm(true);
                    }}
                    className="w-full"
                    data-testid={`join-waitlist-${role.id}`}
                  >
                    Join Waitlist
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <VendorWaitlistForm 
        open={showVendorForm} 
        onOpenChange={setShowVendorForm}
        selectedRole={selectedRole}
      />
    </>
  );
}
