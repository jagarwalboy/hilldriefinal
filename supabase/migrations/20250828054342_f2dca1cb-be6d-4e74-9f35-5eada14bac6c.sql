-- Add unlimited_kms option to cars table
ALTER TABLE cars ADD COLUMN unlimited_kms BOOLEAN DEFAULT false;

-- Update some cars to have unlimited kms option
UPDATE cars SET unlimited_kms = true 
WHERE name IN ('Mahindra Thar', 'Mahindra Thar Roxx', 'Mahindra Scorpio N', 'Toyota Innova', 'Hyundai Creta');