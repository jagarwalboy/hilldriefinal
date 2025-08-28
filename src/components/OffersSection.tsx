import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Tag } from "lucide-react";
import { toast } from "sonner";

const OffersSection = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const dailyOffers = [
    {
      id: 1,
      title: "₹4000 OFF",
      description: "Get flat ₹4000 off on SUVs on minimum duration of 5 days or more",
      code: "FAMILYTRIP",
      image: "/api/placeholder/300/200",
      terms: "Valid for SUV bookings only. Minimum 5 days rental required."
    },
    {
      id: 2,
      title: "₹999 OFF",
      description: "Get flat ₹999 off on your first booking of minimum 2 days on medium package",
      code: "WELCOME",
      image: "/api/placeholder/300/200",
      terms: "First booking only. Medium package cars. Minimum 2 days."
    },
    {
      id: 3,
      title: "₹2000 OFF",
      description: "Special discount on luxury car rentals for weekend bookings",
      code: "WEEKEND",
      image: "/api/placeholder/300/200",
      terms: "Weekend bookings only. Luxury category vehicles."
    }
  ];

  const monthlyOffers = [
    {
      id: 1,
      title: "₹15000 OFF",
      description: "Monthly subscription discount for premium vehicles",
      code: "MONTHLY15",
      image: "/api/placeholder/300/200",
      terms: "Valid for monthly subscriptions. Premium category only."
    },
    {
      id: 2,
      title: "₹8000 OFF",
      description: "Long term rental discount for economy vehicles",
      code: "LONGTERM",
      image: "/api/placeholder/300/200",
      terms: "30+ days rental. Economy category vehicles."
    }
  ];

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success(`Coupon code ${code} copied to clipboard!`);
  };

  const currentOffers = activeTab === "daily" ? dailyOffers : monthlyOffers;

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trending <span className="text-primary">offers</span>
          </h2>
          <p className="text-xl text-gray-600">
            Don't miss out on our exclusive deals and discounts
          </p>
        </div>

        {/* Offer Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 inline-flex">
            <Button
              variant={activeTab === "daily" ? "default" : "ghost"}
              onClick={() => setActiveTab("daily")}
              className={`rounded-full px-8 py-2 font-medium transition-all ${
                activeTab === "daily"
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Daily Offers
            </Button>
            <Button
              variant={activeTab === "monthly" ? "default" : "ghost"}
              onClick={() => setActiveTab("monthly")}
              className={`rounded-full px-8 py-2 font-medium transition-all ${
                activeTab === "monthly"
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly Offers
            </Button>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentOffers.map((offer) => (
            <Card key={offer.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-primary-glow/20 flex items-center justify-center">
                  <Tag className="h-16 w-16 text-primary" />
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Limited Time
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {offer.title}
                </CardTitle>
                <p className="text-gray-600 text-sm">
                  {offer.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-mono font-bold text-lg">
                    {offer.code}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyCode(offer.code)}
                    className="text-primary hover:bg-primary/10"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                <details className="text-xs text-gray-500">
                  <summary className="cursor-pointer font-medium text-gray-700 hover:text-primary">
                    Terms and Conditions
                  </summary>
                  <p className="mt-2 pl-4 border-l-2 border-primary/20">
                    {offer.terms}
                  </p>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OffersSection;