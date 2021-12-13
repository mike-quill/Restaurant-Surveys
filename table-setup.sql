CREATE TABLE restaurants (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	latitude DOUBLE PRECISION NOT NULL,
	longitude DOUBLE PRECISION NOT NULL,
	street_address VARCHAR(255),
    postal_code VARCHAR(10),
    province VARCHAR(50),
    country VARCHAR(50),
    phone_number VARCHAR(20),
    website VARCHAR(255)
);

CREATE TABLE surveys (
	id SERIAL PRIMARY KEY,
	restaurant_id SERIAL NOT NULL,
	comments VARCHAR(255),
	food_ordered VARCHAR(255),
	date_submitted TIMESTAMP,
	FOREIGN KEY (restaurant_id) REFERENCES restaurants (id)
);