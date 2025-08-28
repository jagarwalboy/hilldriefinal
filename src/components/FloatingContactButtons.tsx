import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const FloatingContactButtons = () => {
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+918829952535";
    toast({
      title: "Calling Hill Drive",
      description: "Opening phone dialer for +91 8829952535",
    });
    setIsExpanded(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Hill Drive! I'm interested in your car rental services. Can you please provide more information about availability and pricing?"
    );
    window.open(`https://wa.me/918829952535?text=${message}`, "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting to WhatsApp chat with Hill Drive",
    });
    setIsExpanded(false);
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden" 
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-3">
        {/* Contact Options - Show when expanded */}
        <div className={`flex flex-col gap-3 transition-all duration-300 transform ${
          isExpanded 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}>
          
          {/* WhatsApp Button */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
              <div className="text-sm font-medium text-gray-800">Chat on WhatsApp</div>
              <div className="text-xs text-gray-600">Quick response guaranteed</div>
            </div>
            <Button
              onClick={handleWhatsApp}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
              size="icon"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            </Button>
          </div>

          {/* Call Button */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-gray-200">
              <div className="text-sm font-medium text-gray-800">Call Now</div>
              <div className="text-xs text-gray-600">+91 8829952535</div>
            </div>
            <Button
              onClick={handleCall}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
              size="icon"
              title="Call +91 8829952535"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></span>
            </Button>
          </div>
        </div>

        {/* Main Contact Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary hover:bg-primary-glow shadow-glow hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
            isExpanded ? 'rotate-45' : 'rotate-0'
          }`}
          size="icon"
          title="Contact Hill Drive"
        >
          {isExpanded ? (
            <X className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
          ) : (
            <div className="flex flex-col items-center">
              <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground mb-1" />
              <div className="text-xs font-medium text-primary-foreground hidden md:block">Contact</div>
            </div>
          )}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse">
            <span className="absolute inset-0 bg-red-500 rounded-full animate-ping"></span>
          </span>
        </Button>

        {/* Mobile Labels */}
        {isExpanded && (
          <div className="md:hidden absolute right-16 bottom-0 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-200">
            <div className="text-sm font-medium text-gray-800 mb-2">Quick Contact</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <MessageCircle className="h-3 w-3" />
                <span>WhatsApp Chat</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Phone className="h-3 w-3" />
                <span>+91 8829952535</span>
              </div>
            </div>
            <div className="text-xs text-primary font-medium mt-2">Available 24/7</div>
          </div>
        )}
      </div>
    </>
  );
};

export default FloatingContactButtons;