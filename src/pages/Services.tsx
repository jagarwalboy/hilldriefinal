import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Car, 
  Plane, 
  Heart, 
  MapPin, 
  Clock, 
  Navigation, 
  Shield, 
  Calendar,
  DollarSign,
  CheckCircle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const mainServices = [
    {
      icon: Car,
      title: "Short and Long Term Car Rental",
      description: "Whether it's a quick trip or an extended stay, Hill Drive offers flexible short and long-term car rentals. Your adventure, your schedule, your way.",
      features: ["Flexible duration", "Competitive rates", "Well-maintained vehicles", "Easy booking process"]
    },
    {
      icon: Plane,
      title: "Airport Transfer",
      description: "Convenient and reliable transportation to and from the airport. Start and end your journey stress-free with our professional transfer service.",
      features: ["On-time pickup", "Professional drivers", "Comfortable vehicles", "Luggage assistance"]
    },
    {
      icon: Heart,
      title: "Wedding Trip",
      description: "Make your special day even more memorable with our luxury car rentals for weddings and special occasions.",
      features: ["Luxury vehicles", "Decorated cars available", "Special occasion packages", "Professional service"]
    },
    {
      icon: MapPin,
      title: "National Tours",
      description: "Explore beyond Udaipur with our interstate travel support. Perfect for extended journeys across India.",
      features: ["Interstate permits", "Route planning", "24/7 support", "Fuel-efficient vehicles"]
    },
    {
      icon: MapPin,
      title: "Inter City Transport",
      description: "Comfortable and reliable transportation between cities. Travel at your own pace with our well-maintained fleet.",
      features: ["City-to-city travel", "Comfortable seating", "GPS navigation", "Competitive pricing"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Navigation,
      title: "GPS on Every Vehicle",
      description: "Never get lost in the city of lakes. All our rental cars are equipped with GPS navigation systems.",
      highlight: "Standard Feature"
    },
    {
      icon: Clock,
      title: "24 Hours Support",
      description: "Our dedicated support team is available around the clock to assist you with any queries or roadside assistance.",
      highlight: "Always Available"
    },
    {
      icon: Shield,
      title: "Theft Protection",
      description: "All our rental vehicles come with comprehensive theft protection as part of our standard insurance.",
      highlight: "Peace of Mind"
    },
    {
      icon: Calendar,
      title: "Free Cancellation",
      description: "Cancel your reservation for free up to 24 hours before your scheduled pick-up time.",
      highlight: "Flexible Policy"
    },
    {
      icon: DollarSign,
      title: "No Hidden Charges",
      description: "Transparent pricing with no surprise fees. What you see is what you pay.",
      highlight: "Transparent Pricing"
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Every car is thoroughly inspected to guarantee your safety, comfort, and a smooth driving experience.",
      highlight: "Premium Quality"
    }
  ];

  const discountTiers = [
    { duration: "1 - 2 Days", discount: "Standard Rate", color: "bg-gray-100" },
    { duration: "2 - 5 Days", discount: "10% Discount", color: "bg-blue-100" },
    { duration: "6 - 10 Days", discount: "15% Discount", color: "bg-green-100" },
    { duration: "10 - 15 Days", discount: "20% Discount", color: "bg-yellow-100" },
    { duration: "Above 15 Days", discount: "30% Discount", color: "bg-purple-100" }
  ];

  const bookingSteps = [
    {
      step: "1",
      title: "Book Online, by Phone, or In Person",
      description: "Choose your preferred booking method"
    },
    {
      step: "2", 
      title: "Pick Up Vehicle or Request Pickup",
      description: "Collect your car or have it delivered"
    },
    {
      step: "3",
      title: "Enjoy Unlimited Driving Miles",
      description: "Explore without distance restrictions"
    },
    {
      step: "4",
      title: "Drop Off at Valid Location & Pay",
      description: "Return the vehicle and complete payment"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onShowDashboard={() => {}} onShowHome={() => navigate("/")} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Premium Car Rental Services for Every Need
              </span>
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a meticulously maintained fleet of high-end vehicles, ensuring a comfortable and luxurious journey every time. 
              From business trips to special occasions, we provide an unparalleled rental experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Main Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive car rental solutions for all your travel needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Additional features that make your rental experience exceptional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mb-2">
                        {feature.highlight}
                      </Badge>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ride More Save More</h2>
            <p className="text-lg text-muted-foreground">
              Save up to 30% on longer rentals
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {discountTiers.map((tier, index) => (
              <Card key={index} className={`text-center p-6 ${tier.color}`}>
                <CardContent className="space-y-3">
                  <h3 className="font-semibold">{tier.duration}</h3>
                  <Badge variant="outline" className="bg-white">
                    {tier.discount}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">4 Simple Steps To Rent a Car!</h2>
            <p className="text-lg text-muted-foreground">
              Easy process to get you on the road quickly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Car?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience our premium services today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate("/")}
              className="bg-white text-primary hover:bg-gray-100"
            >
              Book Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/contact")}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;