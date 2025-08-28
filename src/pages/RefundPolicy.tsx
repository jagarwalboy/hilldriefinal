import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, CreditCard, Clock, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const RefundPolicy = () => {
  const navigate = useNavigate();
  const cancellationTiers = [
    {
      time: "24+ hours before pickup",
      refund: "100% Refund",
      fee: "No Cancellation Fee",
      color: "bg-green-100 text-green-800",
      icon: CheckCircle
    },
    {
      time: "6-24 hours before pickup", 
      refund: "50% Refund",
      fee: "50% Cancellation Fee",
      color: "bg-yellow-100 text-yellow-800",
      icon: Clock
    },
    {
      time: "Less than 6 hours",
      refund: "No Refund",
      fee: "100% Cancellation Fee",
      color: "bg-red-100 text-red-800", 
      icon: XCircle
    }
  ];

  const refundScenarios = [
    {
      scenario: "Vehicle Breakdown",
      action: "Full refund + alternative vehicle",
      timeline: "Immediate",
      description: "If our vehicle breaks down during your rental period"
    },
    {
      scenario: "Accident (Not Your Fault)",
      action: "Prorated refund for unused days",
      timeline: "7-10 business days",
      description: "When accident is caused by third party or vehicle defect"
    },
    {
      scenario: "Weather Emergency",
      action: "Full refund or rescheduling",
      timeline: "2-3 business days",
      description: "For government-declared weather emergencies"
    },
    {
      scenario: "Medical Emergency",
      action: "50% refund with documentation",
      timeline: "5-7 business days",
      description: "With valid medical certificate from registered doctor"
    },
    {
      scenario: "Vehicle Not Available",
      action: "Full refund + compensation",
      timeline: "Immediate",
      description: "If we cannot provide the booked vehicle category"
    }
  ];

  const paymentMethods = [
    {
      method: "Credit/Debit Card",
      timeline: "3-5 business days",
      process: "Automatic reversal to original payment method"
    },
    {
      method: "UPI/Digital Wallet",
      timeline: "1-2 business days", 
      process: "Instant refund to original payment source"
    },
    {
      method: "Net Banking",
      timeline: "4-7 business days",
      process: "Bank transfer to registered account"
    },
    {
      method: "Cash Payment",
      timeline: "Same day",
      process: "Cash refund at our office location"
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
            <RefreshCw className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Refund Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Fair and Transparent Refund Terms
              </span>
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that plans can change. Our refund policy is designed to be fair and transparent, 
              giving you peace of mind when booking with Hill Drive.
            </p>
          </div>
        </div>
      </section>

      {/* Free Cancellation Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 mb-12">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-green-800">Free Cancellation</h2>
              <p className="text-lg text-green-700 mb-4">
                Cancel your booking for FREE up to 24 hours before pickup time
              </p>
              <Badge className="bg-green-500 text-white text-lg px-6 py-2">
                No Questions Asked Policy
              </Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cancellation Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cancellation Timeline</h2>
            <p className="text-lg text-muted-foreground">
              Refund amount depends on when you cancel your booking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cancellationTiers.map((tier, index) => {
              const IconComponent = tier.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 mx-auto mb-4" />
                    <CardTitle className="text-lg">{tier.time}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Badge className={tier.color}>
                        {tier.refund}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.fee}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Refund Scenarios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Refund Scenarios</h2>
            <p className="text-lg text-muted-foreground">
              Exceptional circumstances that qualify for special refund consideration
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {refundScenarios.map((scenario, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{scenario.scenario}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">{scenario.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-green-600">{scenario.action}</p>
                      <p className="text-sm text-muted-foreground">Processing: {scenario.timeline}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Processing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Refund Processing Times</h2>
            <p className="text-lg text-muted-foreground">
              How long it takes to receive your refund based on payment method
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentMethods.map((payment, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <CreditCard className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <CardTitle className="text-lg">{payment.method}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge variant="outline" className="bg-blue-50">
                    {payment.timeline}
                  </Badge>
                  <p className="text-sm text-muted-foreground">{payment.process}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Request a Refund</h2>
            <p className="text-lg text-muted-foreground">Simple 4-step process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Contact Us",
                description: "Call or email our customer support with your booking ID"
              },
              {
                step: "2", 
                title: "Provide Details",
                description: "Share cancellation reason and any required documentation"
              },
              {
                step: "3",
                title: "Review Process",
                description: "Our team reviews your request within 24 hours"
              },
              {
                step: "4",
                title: "Receive Refund",
                description: "Refund processed to your original payment method"
              }
            ].map((step, index) => (
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

      {/* Important Notes */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-red-200">
            <CardHeader>
              <div className="flex items-center gap-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
                <CardTitle className="text-2xl text-red-800">Important Notes</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-red-700">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Security deposits are refundable after vehicle inspection (3-5 business days)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Fuel charges and additional services are non-refundable</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Damage charges will be deducted from refund amount</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>No-show bookings are not eligible for refunds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Promotional discounts may have different cancellation terms</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Refunds?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our customer support team is here to help
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> Hilldrive01@gmail.com</p>
            <p><strong>Phone:</strong> +91 8829952535 (24/7)</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RefundPolicy;