-- Remove unlimited_kms column from cars and create pricing plans system
ALTER TABLE cars DROP COLUMN IF EXISTS unlimited_kms;

-- Create pricing plans table
CREATE TABLE public.pricing_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  car_id UUID NOT NULL REFERENCES cars(id) ON DELETE CASCADE,
  plan_name TEXT NOT NULL,
  plan_type TEXT NOT NULL, -- 'standard', 'premium', 'unlimited'
  price_per_day NUMERIC NOT NULL,
  price_per_km NUMERIC,
  unlimited_kms BOOLEAN DEFAULT false,
  fuel_included BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

-- Create policy for pricing plans
CREATE POLICY "Anyone can view pricing plans" 
ON public.pricing_plans 
FOR SELECT 
USING (true);

-- Add pricing plans for all cars
INSERT INTO pricing_plans (car_id, plan_name, plan_type, price_per_day, price_per_km, unlimited_kms, fuel_included)
SELECT 
  id as car_id,
  'Standard' as plan_name,
  'standard' as plan_type,
  price_per_day,
  price_per_km,
  false as unlimited_kms,
  false as fuel_included
FROM cars;

INSERT INTO pricing_plans (car_id, plan_name, plan_type, price_per_day, price_per_km, unlimited_kms, fuel_included)
SELECT 
  id as car_id,
  'Premium' as plan_name,
  'premium' as plan_type,
  ROUND(price_per_day * 1.3, 0),
  price_per_km,
  false as unlimited_kms,
  true as fuel_included
FROM cars;

INSERT INTO pricing_plans (car_id, plan_name, plan_type, price_per_day, price_per_km, unlimited_kms, fuel_included)
SELECT 
  id as car_id,
  'Unlimited KMs' as plan_name,
  'unlimited' as plan_type,
  ROUND(price_per_day * 1.5, 0),
  NULL,
  true as unlimited_kms,
  true as fuel_included
FROM cars;