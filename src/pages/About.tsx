import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Shield, MapPin, Clock, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Car,
      title: "Premium Fleet",
      description: "Well-maintained, modern vehicles with regular inspections and quality assurance"
    },
    {
      icon: MapPin,
      title: "Local Expertise", 
      description: "Deep knowledge of Udaipur routes, attractions, and driving conditions"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance for any queries or roadside help"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Comprehensive insurance, theft protection, and safety-tested vehicles"
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized for excellence in car rental service and customer satisfaction"
    },
    {
      icon: CheckCircle,
      title: "Hassle-Free Experience",
      description: "Easy booking, pickup, and drop-off processes with no hidden charges"
    }
  ];

  const achievements = [
    "Award-winning car rental service in Udaipur",
    "Trusted by thousands of customers",
    "No hidden charges policy",
    "Free cancellation up to 24 hours",
    "GPS equipped vehicles",
    "Flexible short and long-term rentals"
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
              Hill Drive Self Drive
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Adventure Starts in Udaipur
              </span>
            </p>
            <p className="text-lg mb-8 text-gray-600 max-w-3xl mx-auto">
              Embark on an unforgettable journey through the enchanting landscapes of Udaipur and beyond with Hill Drive Self Drive. 
              We offer a premium fleet of well-maintained cars, giving you the freedom to explore at your own pace.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow"
              onClick={() => navigate("/")}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Hill Drive</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Self-drive allows customers to explore Udaipur and surrounding areas at their own pace, 
              without being tied to tour schedules or public transport routes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Promise to You</h2>
              <p className="text-lg text-muted-foreground mb-8">
                As a Udaipur-based service, we have good knowledge of local routes, attractions, and driving conditions. 
                The tagline "Your Adventure Starts in Udaipur" reflects our focus on enabling memorable and exciting travel experiences.
              </p>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="mt-8"
                onClick={() => navigate("/contact")}
              >
                Get in Touch
              </Button>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Hill Drive Cars" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">
                  Award Winning Service
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your car today and explore Udaipur like never before
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate("/")}
            className="bg-white text-primary hover:bg-gray-100"
          >
            Book Now
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;