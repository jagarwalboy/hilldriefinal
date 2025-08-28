import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Calendar, MapPin, Car, Clock, Phone, Mail } from "lucide-react";

interface Booking {
  id: string;
  service_type: string;
  pickup_city: string;
  dropoff_city: string | null;
  pickup_date: string;
  dropoff_date: string;
  total_amount: number;
  status: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  special_requests: string | null;
  created_at: string;
  cars: {
    name: string;
    model: string;
    image_url: string | null;
  };
}

const UserDashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("bookings")
        .select(`
          *,
          cars (
            name,
            model,
            image_url
          )
        `)
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast({
        title: "Error",
        description: "Failed to load bookings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (bookingId: string) => {
    try {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("id", bookingId);

      if (error) throw error;

      toast({
        title: "Booking Cancelled",
        description: "Your booking has been successfully cancelled.",
      });

      fetchBookings(); // Refresh the list
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast({
        title: "Error",
        description: "Failed to cancel booking. Please try again.",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Please login to view your bookings.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading your bookings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-muted-foreground">Manage and track your car rentals</p>
      </div>

      {bookings.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <Car className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
            <p className="text-muted-foreground">
              Start by booking a car for your next trip!
            </p>
            <Button className="mt-4" onClick={() => window.location.href = "/"}>
              Book a Car
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {booking.cars.name} - {booking.cars.model}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Booking ID: {booking.id.slice(0, 8)}...
                    </p>
                  </div>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Booking Details */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Trip Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-primary" />
                        <span>Service: {booking.service_type.replace('-', ' ')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>City: {booking.pickup_city.charAt(0).toUpperCase() + booking.pickup_city.slice(1)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Pickup: {new Date(booking.pickup_date).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Drop-off: {new Date(booking.dropoff_date).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Booked: {new Date(booking.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact & Payment */}
                  <div className="space-y-3">
                    <h4 className="font-medium">Contact & Payment</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{booking.customer_phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>{booking.customer_email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg text-primary">
                          Total: ₹{booking.total_amount.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {booking.special_requests && (
                      <div>
                        <p className="font-medium text-sm mb-1">Special Requests:</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.special_requests}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                {booking.status === "pending" && (
                  <div className="pt-4 border-t">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel Booking
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;