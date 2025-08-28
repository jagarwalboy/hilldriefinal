-- Fix security issues from the previous migration

-- Enable RLS on car_categories table (this was missing)
ALTER TABLE public.car_categories ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for car_categories (public read access like cars)
CREATE POLICY "Anyone can view car categories"
ON public.car_categories FOR SELECT
USING (true);

-- Fix function search paths for security
DROP FUNCTION IF EXISTS public.handle_new_user();
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

DROP FUNCTION IF EXISTS public.update_updated_at_column();
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;