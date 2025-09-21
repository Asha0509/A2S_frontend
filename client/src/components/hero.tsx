import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import UserWaitlistForm from "@/components/forms/user-waitlist-form";
import VendorWaitlistForm from "@/components/forms/vendor-waitlist-form";

export default function Hero() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);

  return (
    <>
      <section className="gradient-bg py-20 lg:py-32" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-xl lg:max-w-none">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6" data-testid="hero-headline">
                Every house deserves to be more than just four walls. We built A2S to make it possible.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="hero-subheadline">
                From empty rooms to living stories. Why guess your space when you can experience it?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowUserForm(true)}
                  className="btn-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all hover-lift flex items-center justify-center gap-2"
                  data-testid="button-get-started"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => setShowVendorForm(true)}
                  variant="outline"
                  className="btn-secondary px-8 py-4 rounded-lg font-semibold text-lg transition-all hover-lift"
                  data-testid="button-vendor-waitlist"
                >
                  Join Vendor Waitlist
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern minimalist interior design transformation" 
                  className="rounded-2xl shadow-2xl w-full"
                  data-testid="hero-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserWaitlistForm 
        open={showUserForm} 
        onOpenChange={setShowUserForm} 
      />
      <VendorWaitlistForm 
        open={showVendorForm} 
        onOpenChange={setShowVendorForm} 
      />
    </>
  );
}
