import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Car,
  Clock,
  Shield
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const policyLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Refund Policy", path: "/refund-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" }
  ];

  const services = [
    { name: "Car Rental", icon: Car },
    { name: "Airport Transfer", icon: MapPin },
    { name: "24/7 Support", icon: Clock },
    { name: "Insurance", icon: Shield }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/0748e3f1-28bc-44ec-83f6-3435ccae6aac.png" 
                alt="Hill Drive Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Hill Drive</h3>
                <p className="text-gray-400 text-sm">Self Drive Car Rental</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your adventure starts in Udaipur. Premium car rental services with 
              award-winning customer support and well-maintained vehicles.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">PWD Parking Gulab Bagh Near RMV Girls Hostel Udaipur 313001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+91 8829952535</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Hilldrive01@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <IconComponent className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-400">{service.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 mb-6">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Hill Drive Self Drive. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ in Udaipur</span>
            <span>•</span>
            <span>24/7 Customer Support</span>
            <span>•</span>
            <span>Award-Winning Service</span>
          </div>
        </div>
      </div>

      {/* Additional Features Bar */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">Free Cancellation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="h-4 w-4 text-purple-400" />
                <span className="text-gray-300">GPS Enabled</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              License: MH-XXXX-XXXXX | GST: XXXXXXXXXXX
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;