-- Clear existing cars
DELETE FROM cars;

-- Insert Jodhpur location cars
INSERT INTO cars (name, model, seats, fuel_type, transmission, air_conditioning, price_per_day, price_per_km, city, category_id) VALUES
-- Thar cars
('Mahindra Thar', 'Thar LX Hard Top', 4, 'Diesel', 'Manual', true, 3500, 28, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'SUV')),
('Mahindra Thar Roxx', 'Thar Roxx AX7L', 5, 'Petrol', 'Automatic', true, 4200, 32, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'SUV')),
-- Scorpio variants
('Mahindra Scorpio N', 'Scorpio N Z8L', 7, 'Diesel', 'Manual', true, 3800, 30, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'SUV')),
('Mahindra Scorpio Classic', 'Scorpio Classic S11 White', 7, 'Diesel', 'Manual', true, 2800, 22, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'SUV')),
('Mahindra Scorpio Classic', 'Scorpio Classic S11 Black', 7, 'Diesel', 'Manual', true, 2800, 22, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'SUV')),
-- Other Jodhpur cars
('Hyundai Creta', 'Creta SX Executive', 5, 'Petrol', 'Automatic', true, 2200, 18, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'SUV')),
('Toyota Innova', 'Innova Crysta GX', 7, 'Diesel', 'Manual', true, 3200, 25, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'SUV')),
('Hyundai Venue', 'Venue SX Turbo', 5, 'Petrol', 'Manual', true, 1800, 15, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Toyota Glanza', 'Glanza G MT', 5, 'Petrol', 'Manual', true, 1400, 12, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Maruti Taisor', 'Taisor ZXI+', 5, 'Petrol', 'Manual', true, 1500, 13, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Maruti Swift', 'Swift VXI', 5, 'Petrol', 'Manual', true, 1200, 12, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Maruti Dzire', 'Dzire VXI', 5, 'Petrol', 'Manual', true, 1600, 14, 'jodhpur', (SELECT id FROM car_categories WHERE name = 'Sedan'));

-- Insert Udaipur location cars
INSERT INTO cars (name, model, seats, fuel_type, transmission, air_conditioning, price_per_day, price_per_km, city, category_id) VALUES
('Maruti Swift', 'Swift ZXI', 5, 'Petrol', 'Manual', true, 1300, 13, 'udaipur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Maruti Baleno', 'Baleno Zeta', 5, 'Petrol', 'Manual', true, 1500, 14, 'udaipur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Hyundai i20', 'i20 Sportz', 5, 'Petrol', 'Manual', true, 1600, 15, 'udaipur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Hyundai Aura', 'Aura SX', 5, 'Petrol', 'Manual', true, 1700, 16, 'udaipur', (SELECT id FROM car_categories WHERE name = 'Sedan')),
('Hyundai Venue', 'Venue S MT', 5, 'Petrol', 'Manual', true, 1900, 16, 'udaipur', (SELECT id FROM car_categories WHERE name = 'Hatchback')),
('Maruti Ertiga', 'Ertiga VXI', 7, 'Petrol', 'Manual', true, 2400, 20, 'udaipur', (SELECT id FROM car_categories WHERE name = 'SUV'));