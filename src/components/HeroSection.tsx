import { Button } from "@/components/ui/button";
import BookingForm from "./BookingForm";
import heroImage from "@/assets/premium-car-fleet.jpg";

interface HeroSectionProps {
  onSearch: (searchParams: {
    serviceType: string;
    selectedCity: string;
    pickupDate: string;
    dropoffDate: string;
  }) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Experience innovation on{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  wheels
                </span>{" "}
                with our{" "}
                <span className="text-primary">
                  brand-new selection of cars.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover the perfect blend of luxury and convenience with Hill Drive's premium self-drive car rental service in Jodhpur and Udaipur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow px-8 py-3"
              >
                Book Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Premium Cars Collection" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-glow/10 rounded-full"></div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-16 relative z-10">
          <BookingForm onSearch={onSearch} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;