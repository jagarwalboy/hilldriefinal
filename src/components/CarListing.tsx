import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import CarCard from "./CarCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface PricingPlan {
  plan_name: string;
  plan_type: 'standard' | 'premium' | 'unlimited';
  price_per_day: number;
  price_per_km?: number | null;
  unlimited_kms: boolean;
  fuel_included: boolean;
}

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
  pricing_plans?: PricingPlan[];
  car_categories: {
    name: string;
    description: string;
  };
}

interface CarListingProps {
  selectedCity?: string;
  onCarSelect: (car: Car) => void;
  unlimitedKmsOnly?: boolean;
}

const CarListing = ({ selectedCity, onCarSelect, unlimitedKmsOnly }: CarListingProps) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchCars();
    fetchCategories();
  }, [selectedCity, unlimitedKmsOnly]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from("car_categories")
        .select("name");

      if (error) throw error;
      setCategories(data.map(cat => cat.name));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchCars = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from("cars")
        .select(`
          id,
          name,
          model,
          seats,
          fuel_type,
          transmission,
          air_conditioning,
          price_per_day,
          price_per_km,
          image_url,
          city,
          car_categories (
            name,
            description
          ),
          pricing_plans (
            plan_name,
            plan_type,
            price_per_day,
            price_per_km,
            unlimited_kms,
            fuel_included
          )
        `)
        .eq("available", true);

      if (selectedCity) {
        query = query.eq("city", selectedCity);
      }

      const { data, error } = await query.order("price_per_day", { ascending: true });

      if (error) throw error;
      let result = (data as any[]) || [];
      if (unlimitedKmsOnly) {
        result = result.filter((c) => c.pricing_plans?.some((p: any) => p.unlimited_kms));
      }
      setCars(result as any);

    } catch (error) {
      console.error("Error fetching cars:", error);
      toast({
        title: "Error",
        description: "Failed to load cars. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredCars = categoryFilter === "all" 
    ? cars 
    : cars.filter(car => car.car_categories.name === categoryFilter);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-video w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Available Cars</h2>
          {selectedCity && (
            <p className="text-muted-foreground">
              Showing cars in {selectedCity.charAt(0).toUpperCase() + selectedCity.slice(1)}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Badge variant="outline">
            {filteredCars.length} cars
          </Badge>
        </div>
      </div>

      {/* Cars Grid */}
      {filteredCars.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No cars available for your selection.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Try changing your filters or selecting a different city.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onSelect={onCarSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarListing;