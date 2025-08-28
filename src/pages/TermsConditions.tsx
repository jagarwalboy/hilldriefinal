import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Shield, Car, CreditCard, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();
  const sections = [
    {
      icon: FileText,
      title: "Booking Terms",
      content: [
        "Minimum age requirement: 21 years with valid driving license (minimum 1 year experience)",
        "Valid government-issued photo ID required at time of pickup",
        "Security deposit required for all bookings (refundable after vehicle return)",
        "Bookings are confirmed only after payment and document verification",
        "Vehicle availability is subject to confirmation and may change",
        "Booking modifications allowed up to 24 hours before pickup (subject to availability)"
      ]
    },
    {
      icon: Car,
      title: "Vehicle Usage",
      content: [
        "Vehicles must be driven only by authorized drivers listed in the booking",
        "Maximum speed limit compliance required at all times",
        "Vehicle must be returned with same fuel level as provided",
        "Smoking, alcohol consumption, and illegal activities strictly prohibited",
        "Pets allowed only in designated vehicles with prior approval",
        "Vehicle tracking system active for safety and security purposes",
        "Route restrictions may apply for certain destinations"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      content: [
        "Full payment required at time of booking confirmation",
        "Security deposit charged separately (refundable within 7 days)",
        "Additional charges for fuel, tolls, and parking are customer responsibility",
        "Late return charges: ₹500 per hour beyond agreed return time",
        "Payment accepted via credit/debit cards, UPI, and net banking",
        "All prices inclusive of applicable taxes",
        "Dynamic pricing may apply during peak seasons and festivals"
      ]
    },
    {
      icon: Shield,
      title: "Insurance & Liability",
      content: [
        "Basic insurance coverage included with all vehicles",
        "Customer liable for damage deductible amount as per insurance terms",
        "Third-party liability coverage provided as per legal requirements",
        "Personal accident insurance optional (recommended)",
        "Customer responsible for traffic violations and fines",
        "Theft protection included with GPS tracking",
        "Coverage void in case of negligent or illegal use"
      ]
    },
    {
      icon: Scale,
      title: "Legal Terms",
      content: [
        "Agreement governed by laws of Rajasthan, India",
        "Disputes subject to Udaipur jurisdiction only",
        "Company reserves right to modify terms with prior notice",
        "Force majeure events may affect service availability",
        "Customer data protected as per our Privacy Policy",
        "Arbitration clause applicable for dispute resolution",
        "Waiver of any term requires written agreement"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Prohibited Activities",
      content: [
        "Commercial use of rental vehicles without prior written consent",
        "Subletting or unauthorized transfer of vehicle to third parties",
        "Use of vehicle for racing, rallying, or off-road driving",
        "Transportation of hazardous or illegal materials",
        "Driving under influence of alcohol or drugs",
        "Tampering with GPS devices or vehicle systems",
        "Using vehicle for any illegal activities or criminal purposes"
      ]
    }
  ];

  const liabilityScenarios = [
    {
      scenario: "Traffic Violations",
      responsibility: "Customer",
      details: "All fines, penalties, and legal proceedings"
    },
    {
      scenario: "Accident (Customer Fault)",
      responsibility: "Customer", 
      details: "Deductible amount + repair costs beyond insurance"
    },
    {
      scenario: "Vehicle Theft",
      responsibility: "Shared",
      details: "Insurance covers major loss, customer pays deductible"
    },
    {
      scenario: "Mechanical Breakdown",
      responsibility: "Company",
      details: "Free replacement vehicle or full refund"
    },
    {
      scenario: "Natural Disasters", 
      responsibility: "Insurance",
      details: "Covered under comprehensive insurance policy"
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
            <Scale className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Legal Terms Governing Our Services
              </span>
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using Hill Drive services. 
              By booking with us, you agree to comply with all terms and conditions outlined below.
            </p>
          </div>
        </div>
      </section>

      {/* Effective Date */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-indigo-50 border-indigo-200">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-bold mb-2 text-indigo-800">Effective Date: January 1, 2024</h2>
              <p className="text-indigo-700">
                These terms and conditions constitute a legally binding agreement between you and Hill Drive Self Drive. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Liability Matrix */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Liability & Responsibility Matrix</h2>
              <p className="text-lg text-muted-foreground">
                Clear breakdown of responsibilities for different scenarios
              </p>
            </div>

            <div className="grid gap-4">
              {liabilityScenarios.map((scenario, index) => (
                <Card key={index} className="p-6">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div>
                      <h3 className="font-semibold text-lg">{scenario.scenario}</h3>
                    </div>
                    <div className="text-center">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                        scenario.responsibility === 'Customer' 
                          ? 'bg-red-100 text-red-800'
                          : scenario.responsibility === 'Company'
                          ? 'bg-green-100 text-green-800'
                          : scenario.responsibility === 'Shared'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {scenario.responsibility} Responsibility
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{scenario.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Age & License Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center gap-4">
                  <Car className="h-8 w-8" />
                  Driver Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-700">Minimum Requirements</h3>
                    <ul className="space-y-2 text-blue-600">
                      <li>• Age: 21-75 years</li>
                      <li>• Valid driving license (minimum 1 year)</li>
                      <li>• Government-issued photo ID</li>
                      <li>• Clean driving record preferred</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-blue-700">Additional Drivers</h3>
                    <ul className="space-y-2 text-blue-600">
                      <li>• Must be declared at booking time</li>
                      <li>• Additional fee may apply</li>
                      <li>• Same requirements as primary driver</li>
                      <li>• Maximum 2 additional drivers allowed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modification & Termination */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Agreement Modification & Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Modification Rights</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Hill Drive may modify terms with 30 days notice</li>
                      <li>• Changes posted on website and communicated via email</li>
                      <li>• Continued use implies acceptance of changes</li>
                      <li>• Major changes require explicit consent</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Termination Conditions</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Either party may terminate with cause</li>
                      <li>• Immediate termination for policy violations</li>
                      <li>• Refund policy applies to early termination</li>
                      <li>• Outstanding dues must be settled</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Terms?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our legal and customer support teams are here to help
          </p>
          <div className="space-y-2 max-w-md mx-auto">
            <p><strong>Legal Inquiries:</strong> Hilldrive01@gmail.com</p>
            <p><strong>General Support:</strong> Hilldrive01@gmail.com</p>
            <p><strong>Phone:</strong> +91 8829952535</p>
            <p><strong>Office:</strong> PWD Parking Gulab Bagh Near RMV Girls Hostel Udaipur 313001</p>
          </div>
          <p className="text-sm mt-6 opacity-75">
            For legal disputes, we recommend consulting with a qualified attorney
          </p>
        </div>
      </section>

      {/* Acceptance Notice */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Acceptance of Terms</h3>
                  <p className="text-yellow-700 text-sm">
                    By clicking "I Agree" during booking or by using our services, you acknowledge that you have read, 
                    understood, and agree to be legally bound by these Terms and Conditions, along with our Privacy Policy 
                    and Refund Policy. If you do not agree with any part of these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;