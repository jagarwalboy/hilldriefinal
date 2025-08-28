import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import CarListing from "@/components/CarListing";
import BookingModal from "@/components/BookingModal";
import UserDashboard from "@/components/UserDashboard";

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
  unlimited_kms?: boolean;
  car_categories: {
    name: string;
    description: string;
  };
}

const Index = () => {
  const [showCarListing, setShowCarListing] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [searchParams, setSearchParams] = useState<{
    serviceType: string;
    selectedCity: string;
    pickupDate: string;
    dropoffDate: string;
    unlimitedKms?: boolean;
  } | null>(null);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleSearch = (params: {
    serviceType: string;
    selectedCity: string;
    pickupDate: string;
    dropoffDate: string;
    unlimitedKms?: boolean;
  }) => {
    setSearchParams(params);
    setSelectedCity(params.selectedCity);
    setShowCarListing(true);
    setShowDashboard(false);
  };

  const handleCarSelect = (car: Car) => {
    setSelectedCar(car);
    setIsBookingModalOpen(true);
  };

  const handleShowDashboard = () => {
    setShowDashboard(true);
    setShowCarListing(false);
  };

  const handleShowHome = () => {
    setShowDashboard(false);
    setShowCarListing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onShowDashboard={handleShowDashboard}
        onShowHome={handleShowHome}
      />
      
      {showDashboard ? (
        <main className="container mx-auto px-4 py-8">
          <UserDashboard />
        </main>
      ) : showCarListing ? (
        <main className="container mx-auto px-4 py-8">
          <CarListing 
            selectedCity={selectedCity} 
            onCarSelect={handleCarSelect}
            unlimitedKmsOnly={searchParams?.unlimitedKms}
          />
        </main>
      ) : (
        <>
          <HeroSection onSearch={handleSearch} />
          <OffersSection />
        </>
      )}

      <BookingModal
        car={selectedCar}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        searchParams={searchParams}
      />
      
      <Footer />
    </div>
  );
};

export default Index;