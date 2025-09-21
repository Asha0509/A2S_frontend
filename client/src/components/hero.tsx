import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Palette, Briefcase, Settings } from "lucide-react";
import UserWaitlistForm from "@/components/forms/user-waitlist-form";
import VendorWaitlistForm from "./forms/vendor-waitlist-form";

export default function Hero() {
  const [showUserForm, setShowUserForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-20 lg:py-32" data-testid="hero-section">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="max-w-xl lg:max-w-none">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-emerald-600 bg-clip-text text-transparent leading-tight mb-6" data-testid="hero-headline">
                Every house deserves to be more than just four walls. We built A2S to make it possible.
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed" data-testid="hero-subheadline">
                From empty rooms to living stories. Why guess your space when you can experience it?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowUserForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  data-testid="button-get-started"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => setShowVendorForm(true)}
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
                  data-testid="button-vendor-waitlist"
                >
                  Join Vendor Waitlist
                </Button>
              </div>
            </div>
            
            {/* Animated Visual Elements */}
            <div className="mt-12 lg:mt-0">
              <div className="relative h-96 lg:h-[500px]">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl shadow-2xl animate-pulse">
                  <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                
                {/* Floating Service Icons */}
                <div className="absolute top-16 left-16 animate-float">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute top-24 right-20 animate-float animation-delay-1000">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-20 left-24 animate-float animation-delay-2000">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-blue-300 to-emerald-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-orange-300 to-red-300 transform -translate-x-1/2 -translate-y-1/2 rotate-12 animate-pulse animation-delay-2000"></div>
                
                {/* Floating Geometric Shapes */}
                <div className="absolute top-8 right-8 w-8 h-8 bg-blue-400 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-8 right-16 w-6 h-6 bg-emerald-400 rounded-full animate-bounce"></div>
                <div className="absolute top-32 left-8 w-4 h-12 bg-purple-400 rounded-full animate-pulse"></div>
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
