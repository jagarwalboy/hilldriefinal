-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  phone TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create car categories table
CREATE TABLE public.car_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Create cars table
CREATE TABLE public.cars (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES public.car_categories(id),
  name TEXT NOT NULL,
  model TEXT NOT NULL,
  seats INTEGER NOT NULL,
  fuel_type TEXT NOT NULL,
  transmission TEXT NOT NULL,
  air_conditioning BOOLEAN DEFAULT true,
  price_per_day DECIMAL(10,2) NOT NULL,
  price_per_km DECIMAL(10,2),
  image_url TEXT,
  available BOOLEAN DEFAULT true,
  city TEXT NOT NULL CHECK (city IN ('jodhpur', 'udaipur')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on cars
ALTER TABLE public.cars ENABLE ROW LEVEL SECURITY;

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  car_id UUID NOT NULL REFERENCES public.cars(id),
  service_type TEXT NOT NULL CHECK (service_type IN ('driver', 'self-driving', 'subscription')),
  pickup_city TEXT NOT NULL,
  dropoff_city TEXT,
  pickup_date TIMESTAMPTZ NOT NULL,
  dropoff_date TIMESTAMPTZ NOT NULL,
  total_amount DECIMAL(10,2),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  special_requests TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on bookings
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile"
ON public.profiles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Create RLS policies for cars (public read access)
CREATE POLICY "Anyone can view available cars"
ON public.cars FOR SELECT
USING (available = true);

-- Create RLS policies for bookings
CREATE POLICY "Users can view their own bookings"
ON public.bookings FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own bookings"
ON public.bookings FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own bookings"
ON public.bookings FOR UPDATE
USING (auth.uid() = user_id);

-- Insert car categories
INSERT INTO public.car_categories (name, description) VALUES
('Hatchback', 'Compact and fuel-efficient cars perfect for city drives'),
('Sedan', 'Comfortable mid-size cars with ample space'),
('SUV', 'Spacious and powerful vehicles for family trips'),
('Luxury', 'Premium vehicles with top-tier comfort and features');

-- Insert sample cars
INSERT INTO public.cars (category_id, name, model, seats, fuel_type, transmission, price_per_day, price_per_km, city, image_url) VALUES
((SELECT id FROM public.car_categories WHERE name = 'Hatchback'), 'Maruti Swift', 'Swift VXI', 5, 'Petrol', 'Manual', 1200.00, 12.00, 'jodhpur', '/placeholder.svg'),
((SELECT id FROM public.car_categories WHERE name = 'Hatchback'), 'Hyundai i20', 'i20 Sportz', 5, 'Petrol', 'Manual', 1400.00, 14.00, 'udaipur', '/placeholder.svg'),
((SELECT id FROM public.car_categories WHERE name = 'Sedan'), 'Honda City', 'City VX', 5, 'Petrol', 'Automatic', 2000.00, 18.00, 'jodhpur', '/placeholder.svg'),
((SELECT id FROM public.car_categories WHERE name = 'Sedan'), 'Maruti Dzire', 'Dzire VXI', 5, 'Petrol', 'Manual', 1600.00, 16.00, 'udaipur', '/placeholder.svg'),
((SELECT id FROM public.car_categories WHERE name = 'SUV'), 'Mahindra Scorpio', 'Scorpio S11', 7, 'Diesel', 'Manual', 2800.00, 22.00, 'jodhpur', '/placeholder.svg'),
((SELECT id FROM public.car_categories WHERE name = 'SUV'), 'Toyota Innova', 'Innova Crysta', 7, 'Diesel', 'Manual', 3200.00, 25.00, 'udaipur', '/placeholder.svg'),
((SELECT id FROM public.car_categories WHERE name = 'Luxury'), 'Mercedes C-Class', 'C220d', 5, 'Diesel', 'Automatic', 5500.00, 45.00, 'jodhpur', '/placeholder.svg');

-- Create function to handle user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for automatic profile creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_cars_updated_at
  BEFORE UPDATE ON public.cars
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();