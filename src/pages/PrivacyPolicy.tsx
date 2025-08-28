import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, address)",
        "Driver's license information and government ID details",
        "Payment information (credit/debit card details, billing address)", 
        "Vehicle usage data (GPS location, mileage, fuel consumption)",
        "Communication records (calls, emails, chat messages)",
        "Website usage data (cookies, IP address, browser information)"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Process vehicle reservations and manage bookings",
        "Verify identity and driving credentials for safety",
        "Process payments and maintain financial records",
        "Provide customer support and roadside assistance",
        "Send booking confirmations and service updates",
        "Improve our services and develop new features",
        "Comply with legal and regulatory requirements"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We do not sell your personal information to third parties",
        "Service providers (payment processors, maintenance partners)",
        "Legal authorities when required by law or legal process",
        "Emergency services in case of accidents or roadside assistance",
        "Insurance companies for claims processing when necessary",
        "Business partners only with your explicit consent"
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "SSL encryption for all data transmission",
        "Secure servers with regular security updates",
        "Limited access to personal information by authorized personnel only",
        "Regular security audits and vulnerability assessments",
        "Secure payment processing through certified payment gateways",
        "Data backup and recovery procedures",
        "Employee training on data protection and privacy"
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access to your personal information we hold",
        "Request correction of inaccurate information",
        "Request deletion of your data (subject to legal requirements)",
        "Opt-out of marketing communications",
        "Data portability - receive a copy of your data",
        "Lodge complaints with data protection authorities",
        "Withdraw consent for data processing where applicable"
      ]
    },
    {
      icon: AlertCircle,
      title: "Data Retention",
      content: [
        "Account information: Retained while account is active + 7 years",
        "Booking records: Retained for 7 years for legal and tax purposes",
        "Payment information: Retained as required by financial regulations",
        "Vehicle usage data: Retained for 2 years for safety and maintenance",
        "Communication records: Retained for 3 years for customer service",
        "Marketing preferences: Until you opt-out or request deletion"
      ]
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
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Privacy is Our Priority
              </span>
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Hill Drive, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 p-6 bg-blue-50 border-blue-200">
              <CardContent>
                <h2 className="text-2xl font-bold mb-4 text-blue-800">Last Updated: January 2024</h2>
                <p className="text-blue-700">
                  This Privacy Policy describes how Hill Drive Self Drive ("we," "our," or "us") collects, uses, and protects 
                  your information when you use our car rental services and website. By using our services, you agree to the 
                  practices described in this policy.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
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
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Cookie Policy */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6 text-orange-600" />
                  </div>
                  Cookie Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your experience on our website:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for basic website functionality, security, and user authentication.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors use our website to improve user experience.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver relevant advertisements and measure campaign effectiveness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Preference Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Remember your settings and preferences for a personalized experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="mt-8 bg-gray-50">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us About Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> Hilldrive01@gmail.com</p>
                  <p><strong>Phone:</strong> +91 8829952535</p>
                  <p><strong>Address:</strong> PWD Parking Gulab Bagh Near RMV Girls Hostel Udaipur 313001</p>
                  <p><strong>Data Protection Officer:</strong> Hilldrive01@gmail.com</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  We will respond to your privacy-related inquiries within 30 days of receipt.
                </p>
              </CardContent>
            </Card>

            {/* Updates Notice */}
            <Card className="mt-8 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Policy Updates</h3>
                    <p className="text-yellow-700 text-sm">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes 
                      by posting the new policy on our website and updating the "Last Updated" date. Your continued 
                      use of our services after such changes constitutes acceptance of the updated policy.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;