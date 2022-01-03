import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RestaurantAPI from '../apis/RestaurantAPI';
import { Form, Col, Row, Button } from 'react-bootstrap';

const EditRestaurant = (props) => {
	const { id } = useParams();
	const [errors, setErrors] = useState({})
	const [name, setName] = useState("");
	const [streetAddress, setStreetAddress] = useState("");
	const [city, setCity] = useState("");
	const [province, setProvince] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [website, setWebsite] = useState("");

	let navigate = useNavigate();

	const findFormErrors = () => {
		const newErrors = {}

		if (!name || name === '') newErrors.name = 'Name cannot be blank.'
		else if (name.length > 50) newErrors.name = 'Name should be 50 characters or less.'

		if (!streetAddress || streetAddress === '') newErrors.streetAddress = 'Street Address cannot be blank.'
		else if (streetAddress.length > 255) newErrors.streetAddress = 'Street Address should be 255 characters or less.'

		if (!city || city === '') newErrors.city = 'City cannot be blank.'
		else if (city.length > 255) newErrors.city = 'City should be 255 characters or less.'

		if (!province || province === '') newErrors.province = 'Please provide the restaurant\'s Province.'

		return newErrors
	}

	useEffect(() => {
		const fetchData = async () => {
			const response = await RestaurantAPI.get(`/${id}`);
			setName(response.data.data.restaurant.name);
			setStreetAddress(response.data.data.restaurant.street_address);
			setCity(response.data.data.restaurant.city);
			setProvince(response.data.data.restaurant.province);
			setPhoneNumber(response.data.data.restaurant.phone_number);
			setWebsite(response.data.data.restaurant.website);
		}
		fetchData()
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newErrors = findFormErrors();

		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) {
			console.log(errors);
		} else {
			try {
				const updatedRestaurant = await RestaurantAPI.put(`/${id}`, {
					name: name,
					street_address: streetAddress,
					city: city,
					province: province,
					phone_number: phoneNumber,
					website: website
				});
				console.log(updatedRestaurant);
				navigate("/");

			} catch (error) {
				console.log(error);
			}
		}
	}

	return (
		<div className="container">
			<Form className='border rounded p-3 mb-3' action=''>
				<Row>
					<Col xs="12" md="4">
						<Form.Group controlId="newRestaurantName">
							<Form.Label>Restaurant Name</Form.Label>
							<Form.Control name='name' value={name} type="text" onChange={(e) => setName(e.target.value)} isInvalid={!!errors.name} />
							<Form.Control.Feedback type="invalid">
								{errors.name}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
					<Col xs="12" md="4">
						<Form.Group className="mb-3" controlId="newRestaurantAddress">
							<Form.Label>Street Address</Form.Label>
							<Form.Control name='streetAddress' value={streetAddress} type="text" onChange={(e) => setStreetAddress(e.target.value)} isInvalid={!!errors.streetAddress} />
							<Form.Control.Feedback type="invalid">
								{errors.streetAddress}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
					<Col xs="12" md="4">
						<Form.Group className="mb-3" controlId="newRestaurantCity">
							<Form.Label>City</Form.Label>
							<Form.Control name='city' value={city} type="text" onChange={(e) => setCity(e.target.value)} isInvalid={!!errors.city} />
							<Form.Control.Feedback type="invalid">
								{errors.city}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
					<Col xs="12" md="4">
						<Form.Group className="mb-3" controlId="newRestaurantProvince">
							<Form.Label>Province</Form.Label>
							{/* <Form.Control name='province' value={province} type="text" onChange={(e) => setProvince(e.target.value)} /> */}
							<Form.Select name='province' onChange={(e) => setProvince(e.target.value)} value={province} isInvalid={!!errors.province}>
								<option value="">Select Province</option>
								<option value="Ontario">Ontario</option>
								<option value="Quebec">Quebec</option>
								<option value="Nova Scotia">Nova Scotia</option>
								<option value="New Brunswick">New Brunswick</option>
								<option value="Manitoba">Manitoba</option>
								<option value="British Columbia">British Columbia</option>
								<option value="Prince Edward Island">Prince Edward Island</option>
								<option value="Saskatchewan">Saskatchewan</option>
								<option value="Alberta">Alberta</option>
								<option value="Newfoundland and Labrador">Newfoundland and Labrador</option>

							</Form.Select>
							<Form.Control.Feedback type="invalid">
								{errors.province}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
					<Col xs="12" md="4">
						<Form.Group className="mb-3" controlId="newRestaurantPhone">
							<Form.Label>Phone</Form.Label>
							<Form.Control name='phoneNumber' value={phoneNumber} type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
						</Form.Group>
					</Col>
					<Col xs="12" md="4">
						<Form.Group className="mb-3" controlId="newRestaurantWebsite">
							<Form.Label>Website</Form.Label>
							<Form.Control name='website' value={website} type="text" onChange={(e) => setWebsite(e.target.value)} />
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant="primary" onClick={handleSubmit}>
							Submit
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}

export default EditRestaurant;