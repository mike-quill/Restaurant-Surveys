CREATE TABLE restaurants (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	street_address VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	province VARCHAR(50) NOT NULL,
	phone_number VARCHAR(20),
	website VARCHAR(255)
);

CREATE TABLE surveys (
	id BIGSERIAL PRIMARY KEY,
	restaurant_id BIGINT NOT NULL,
	rating INTEGER NOT NULL check(rating >= 1 and rating <= 5),
	comments TEXT NOT NULL,
	date_submitted TIMESTAMP,
	FOREIGN KEY (restaurant_id) REFERENCES restaurants (id) ON DELETE CASCADE
);