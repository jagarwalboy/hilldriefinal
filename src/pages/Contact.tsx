import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Car,
  Users,
  Award
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      content: "+91 8829952535",
      description: "Available 24/7 for booking and support"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "Hilldrive01@gmail.com",
      description: "We respond within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "PWD Parking Gulab Bagh Near RMV Girls Hostel Udaipur 313001",
      description: "Multiple pickup locations available"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 Operations",
      description: "Round-the-clock service"
    }
  ];

  const stats = [
    {
      icon: Car,
      number: "500+",
      label: "Cars Available"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Happy Customers"
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience"
    }
  ];

  const faqs = [
    {
      question: "How do I book a car?",
      answer: "You can book online through our website, call us directly, or visit our office. Our 4-step process makes it simple and quick."
    },
    {
      question: "What documents do I need?",
      answer: "You'll need a valid driving license, government ID proof, and a credit/debit card for security deposit."
    },
    {
      question: "Is there a cancellation fee?",
      answer: "No, we offer free cancellation up to 24 hours before your scheduled pickup time."
    },
    {
      question: "Do you provide GPS navigation?",
      answer: "Yes, all our vehicles come equipped with GPS navigation systems to help you navigate easily."
    },
    {
      question: "What if I have an emergency?",
      answer: "We provide 24/7 roadside assistance. Just call our emergency helpline and we'll help you immediately."
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                We're Here to Help 24/7
              </span>
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions about our services? Need help with booking? Our dedicated support team 
              is available around the clock to assist you with any queries or roadside assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="font-semibold text-primary">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-8 bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="space-y-4">
                    <IconComponent className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <h3 className="text-3xl font-bold text-primary">{stat.number}</h3>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject *</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-semibold mb-3 text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our 24/7 support team is just a call away
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now: +91 8829952535
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Support
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;