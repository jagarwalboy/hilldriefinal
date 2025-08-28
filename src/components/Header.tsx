import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, Calendar, Phone, MessageCircle } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  onShowDashboard: () => void;
  onShowHome: () => void;
}

const Header = ({ onShowDashboard, onShowHome }: HeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleAuth = () => {
    navigate("/auth");
  };

  const handleCall = () => {
    window.location.href = "tel:+918829952535";
    toast({
      title: "Calling Hill Drive",
      description: "Opening phone dialer for +91 8829952535",
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Hill Drive! I'm interested in your car rental services. Can you please provide more information?"
    );
    window.open(`https://wa.me/918829952535?text=${message}`, "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp chat with Hill Drive",
    });
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0748e3f1-28bc-44ec-83f6-3435ccae6aac.png" 
              alt="Hill Drive Logo" 
              className="h-28 w-auto cursor-pointer"
              onClick={onShowHome}
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <button 
              onClick={onShowHome}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            
            {/* Quick Contact Buttons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
              <Button
                onClick={handleWhatsApp}
                size="sm"
                variant="outline"
                className="bg-green-50 hover:bg-green-100 border-green-200 text-green-700 hover:text-green-800"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">WhatsApp</span>
              </Button>
              <Button
                onClick={handleCall}
                size="sm"
                variant="outline"
                className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 hover:text-blue-800"
                title="Call +91 8829952535"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span className="hidden lg:inline">Call</span>
              </Button>
            </div>
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onShowDashboard}
                  className="hidden sm:flex"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  My Bookings
                </Button>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm hidden sm:inline">{user.email}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button onClick={handleAuth}>
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;