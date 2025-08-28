import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Users, Fuel, Settings, Snowflake, Calendar, MapPin } from "lucide-react";

interface Car {
  id: string;
  name: string;
  model: string;
  seats: number;
  fuel_type: string;
  transmission: string;
  air_conditioning: boolean;
  price_per_day: number;
  price_per_km?: number;
  image_url?: string;
  city: string;
}

interface BookingModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
  searchParams: {
    serviceType: string;
    selectedCity: string;
    pickupDate: string;
    dropoffDate: string;
  } | null;
}

const BookingModal = ({ car, isOpen, onClose, searchParams }: BookingModalProps) => {
  const { user } = useAuth();
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState(user?.email || "");
  const [specialRequests, setSpecialRequests] = useState("");
  const [loading, setLoading] = useState(false);

  const calculateDays = () => {
    if (!searchParams?.pickupDate || !searchParams?.dropoffDate) return 1;
    const pickup = new Date(searchParams.pickupDate);
    const dropoff = new Date(searchParams.dropoffDate);
    const diffTime = Math.abs(dropoff.getTime() - pickup.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  const calculateTotal = () => {
    if (!car) return 0;
    const days = calculateDays();
    return car.price_per_day * days;
  };

  const handleBooking = async () => {
    if (!car || !searchParams || !user) {
      toast({
        title: "Error",
        description: "Please login to make a booking.",
        variant: "destructive",
      });
      return;
    }

    if (!customerName || !customerPhone || !customerEmail) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from("bookings")
        .insert({
          user_id: user.id,
          car_id: car.id,
          service_type: searchParams.serviceType,
          pickup_city: searchParams.selectedCity,
          pickup_date: searchParams.pickupDate,
          dropoff_date: searchParams.dropoffDate,
          total_amount: calculateTotal(),
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_email: customerEmail,
          special_requests: specialRequests,
        });

      if (error) throw error;

      toast({
        title: "Booking Confirmed!",
        description: "Your booking has been successfully created. We will contact you shortly.",
      });

      onClose();
      
      // Reset form
      setCustomerName("");
      setCustomerPhone("");
      setSpecialRequests("");
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description: "Failed to create booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!car || !searchParams) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book {car.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Car Details */}
          <div className="space-y-3">
            <div className="aspect-video bg-muted relative overflow-hidden rounded-lg">
              {car.image_url ? (
                <img
                  src={car.image_url}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {car.name}
                  </span>
                </div>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-lg">{car.name}</h3>
              <p className="text-sm text-muted-foreground">{car.model}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                <Users className="h-3 w-3 mr-1" />
                {car.seats} Seats
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Fuel className="h-3 w-3 mr-1" />
                {car.fuel_type}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                <Settings className="h-3 w-3 mr-1" />
                {car.transmission}
              </Badge>
              {car.air_conditioning && (
                <Badge variant="secondary" className="text-xs">
                  <Snowflake className="h-3 w-3 mr-1" />
                  AC
                </Badge>
              )}
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-3 border-t pt-4">
            <h4 className="font-medium">Booking Details</h4>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Service: {searchParams.serviceType.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>City: {searchParams.selectedCity.charAt(0).toUpperCase() + searchParams.selectedCity.slice(1)}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Pickup: {new Date(searchParams.pickupDate).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span>Drop-off: {new Date(searchParams.dropoffDate).toLocaleString()}</span>
              </div>
            </div>

            <div className="bg-muted p-3 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-sm">Duration: {calculateDays()} days</span>
                <span className="font-semibold text-primary">
                  Total: ₹{calculateTotal().toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Customer Details Form */}
          <div className="space-y-3 border-t pt-4">
            <h4 className="font-medium">Customer Details</h4>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name *</label>
              <Input
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number *</label>
              <Input
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email *</label>
              <Input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Special Requests</label>
              <Textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Any special requirements or requests..."
                rows={3}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleBooking} 
              disabled={loading}
              className="flex-1"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;