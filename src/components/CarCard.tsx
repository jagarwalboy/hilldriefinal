import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Fuel, Settings, Snowflake, Infinity } from "lucide-react";

interface PricingPlan {
  plan_name: string;
  plan_type: 'standard' | 'premium' | 'unlimited';
  price_per_day: number;
  price_per_km?: number | null;
  unlimited_kms?: boolean;
  fuel_included?: boolean;
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
  unlimited_kms?: boolean;
}

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
}

const CarCard = ({ car, onSelect }: CarCardProps) => {
  const displayPlans: PricingPlan[] = (Array.isArray(car.pricing_plans) && car.pricing_plans?.length)
    ? (car.pricing_plans as PricingPlan[])
    : [
        { plan_name: 'Standard', plan_type: 'standard', price_per_day: car.price_per_day, price_per_km: car.price_per_km, unlimited_kms: false, fuel_included: false },
        { plan_name: 'Premium', plan_type: 'premium', price_per_day: Math.round(car.price_per_day * 1.3), price_per_km: car.price_per_km, unlimited_kms: false, fuel_included: true },
        { plan_name: 'Unlimited KMs', plan_type: 'unlimited', price_per_day: Math.round(car.price_per_day * 1.5), price_per_km: null, unlimited_kms: true, fuel_included: true },
      ];
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <div className="aspect-video bg-muted relative overflow-hidden">
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
        {/* Featured badge if unlimited plan exists */}
        {displayPlans.some((p) => p.unlimited_kms) && (
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
            FEATURED
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
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

          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {displayPlans.map((p) => (
                <Badge
                  key={p.plan_type}
                  variant={p.plan_type === 'unlimited' ? 'default' : 'secondary'}
                  className={`text-xs flex items-center gap-1 ${p.plan_type === 'unlimited' ? 'bg-primary text-primary-foreground' : ''}`}
                >
                  {p.unlimited_kms && <Infinity className="h-3 w-3" />}
                  {p.plan_name}: ₹{p.price_per_day}/day
                  {!p.unlimited_kms && p.price_per_km ? ` + ₹${p.price_per_km}/km` : ' (Unlimited KMs)'}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={() => onSelect(car)}
              className="flex-1 bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              Book Now
            </Button>
            <Button 
              variant="outline"
              size="icon"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              ♡
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;