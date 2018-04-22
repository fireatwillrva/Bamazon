-- Create a database called 'Bamazon' and switch into it for this activity --
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Dove Shampoo', 'Cosmetics', 5.75, 500),
		('Busenitz Vulc Fashion Sneakers', 'Shoes', 59.41, 300),
		('Boss TU3 Chromatic Tuner Pedal', 'Musical Instruments', 99.99, 14),
		('Stilling The Mind', 'Books', 16.99, 100),
		('Granny Smith Apples', 'Produce', 0.35, 800),
		('Moso Natural Air Purifying Bag', 'Air Fresheners', 9.95, 175),
		('Tropicana Orange Juice', 'Grocery', 4.45, 267),
		('MXR M169 Carbon Copy Analog Delay', 'Musical Instruments', 149.99, 50),
		('Fender Standard Stratocaster Electric Guitar', 'Musical Instruments', 599.99, 75),
		('Canon EF 50mm f/1.8 STM Lens', 'Camera & Photo', 125.00, 60),
		('Crest Scope Outlast Mouthwash', 'Beauty & Personal Care', 3.92, 1000),
		('Yoga Mat', 'Sports', 12.75, 150),
		('5lb Dumb bell', 'Sports', 7.99, 89),
		('Quaker Chewy Granola Bars, 58 Count', 'Cereals', 11.99, 500),
		('Nike Shorts', 'Clothing', 17.88, 250),
		('Purina Cat Chow', 'Pet', 7.25, 157),
		('Fancy Feast Wet Cat Food', 'Pet', 12.50, 163),
		('Ibuprophen', 'Pharmacy', 4.95, 389),
		('Band Aid', 'Pharmacy', 3.25, 550),
		('Ben & Jerry Ice Cream', 'Grocery', 3.25, 432);