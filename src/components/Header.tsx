import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { User, LogOut, Calendar } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

interface HeaderProps {
  onShowDashboard: () => void;
  onShowHome: () => void;
}

const Header = ({ onShowDashboard, onShowHome }: HeaderProps) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleAuth = () => {
    navigate("/auth");
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
          <nav className="hidden md:flex space-x-6">
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