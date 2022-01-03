import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import RestaurantAPI from '../apis/RestaurantAPI';

const AddNewSurvey = ({ fetchData }) => {
	const { id } = useParams();
	const [comments, setComments] = useState("");
	const [rating, setRating] = useState("");
	const [errors, setErrors] = useState({})

	const findFormErrors = () => {
		const newErrors = {}


		if (!rating || rating > 5 || rating < 1) newErrors.rating = 'Please provide a rating between 1 and 5.'

		if (!comments || comments === '') newErrors.comments = 'Comments cannot be blank.'
		else if (comments.length > 300) newErrors.comments = 'Comments should be 300 characters or less.'

		return newErrors
	}

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newErrors = findFormErrors();

		setErrors(newErrors);
		if (Object.keys(newErrors).length > 0) {
			console.log(errors);
		} else {
			try {
				const newSurvey = await RestaurantAPI.post(`/${id}/survey`, {
					restaurant_id: id,
					comments: comments,
					rating: rating
				});
				setComments("");
				setRating("");
				await fetchData();

			} catch (error) {
				console.log(error);
			}
		}
	}


	return (
		<div>
			<Form className='border rounded p-3 mb-3' action='' onSubmit={handleSubmit}>
				<h3>Add New Survey</h3>
				<Row>
					<Col xs="12" md="8">
						<Form.Group className="mb-3" controlId="newSurveyComments">
							<Form.Label>Comments</Form.Label>
							<Form.Control name='comments' value={comments} type="text" onChange={(e) => setComments(e.target.value)} isInvalid={!!errors.comments} />
							<Form.Control.Feedback type="invalid">
								{errors.comments}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
					<Col xs="12" md="4">
						<Form.Group className="mb-3" controlId="newSurveyRating">
							<Form.Label>Rating</Form.Label>
							<Form.Select name='rating' value={rating} onChange={(e) => setRating(e.target.value)} isInvalid={!!errors.rating}>
								<option value="">Select Rating</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</Form.Select>
							<Form.Control.Feedback type="invalid">
								{errors.rating}
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Button type="submit" variant="primary">
							Submit
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}

export default AddNewSurvey