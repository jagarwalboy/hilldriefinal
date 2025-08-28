import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Calendar, Search, Infinity } from "lucide-react";

interface BookingFormProps {
  onSearch: (searchParams: {
    serviceType: string;
    selectedCity: string;
    pickupDate: string;
    dropoffDate: string;
    unlimitedKms?: boolean;
  }) => void;
}

const BookingForm = ({ onSearch }: BookingFormProps) => {
  const [serviceType, setServiceType] = useState("self-driving");
  const [selectedCity, setSelectedCity] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [unlimitedKms, setUnlimitedKms] = useState(false);

  const cities = [
    { value: "jodhpur", label: "Jodhpur" },
    { value: "udaipur", label: "Udaipur" }
  ];

  return (
    <Card className="p-6 bg-white shadow-elegant max-w-5xl mx-auto">
      {/* Service Type Tabs */}
      <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setServiceType("driver")}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            serviceType === "driver"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Driver
        </button>
        <button
          onClick={() => setServiceType("self-driving")}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            serviceType === "self-driving"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Self-Driving
        </button>
        <button
          onClick={() => setServiceType("subscription")}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            serviceType === "subscription"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Subscription
        </button>
      </div>

      {/* Booking Form */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* City Selection */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <MapPin className="h-4 w-4 mr-1 text-primary" />
            Select your city
          </label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Choose city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city.value} value={city.value}>
                  {city.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Pickup Date */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="h-4 w-4 mr-1 text-primary" />
            Pick Up Date
          </label>
          <Input
            type="datetime-local"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Drop-off Date */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-medium text-gray-700">
            <Calendar className="h-4 w-4 mr-1 text-primary" />
            Drop-off Date
          </label>
          <Input
            type="datetime-local"
            value={dropoffDate}
            onChange={(e) => setDropoffDate(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Search Button */}
        <Button 
          onClick={() => onSearch({ serviceType, selectedCity, pickupDate, dropoffDate, unlimitedKms })}
          className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow h-10 px-8"
          disabled={!selectedCity || !pickupDate || !dropoffDate}
        >
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Additional Options */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="unlimited-kms" 
            checked={unlimitedKms}
            onCheckedChange={(checked) => setUnlimitedKms(checked as boolean)}
          />
          <label htmlFor="unlimited-kms" className="text-sm font-medium text-gray-700 flex items-center">
            <Infinity className="h-4 w-4 mr-1 text-primary" />
            Show only unlimited KMs cars
          </label>
        </div>
        <a href="#" className="text-primary hover:text-primary-glow text-sm font-medium">
          Drop in different city?
        </a>
      </div>
    </Card>
  );
};

export default BookingForm;