import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const AddNewSurvey = () => {

    const [comments, setComments] = useState("");
    const [rating, setRating] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <div>
            <Form className='border rounded p-3 mb-3' action=''>
                <h3>Add New Survey for Restaurant</h3>
                <Row>
                    <Col xs="12" md="4">
                        <Form.Group className="mb-3" controlId="newSurveyComments">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control name='comments' defaultValue={comments} type="text" onChange={(e) => setComments(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col xs="12" md="4">
                        <Form.Group className="mb-3" controlId="newSurveyRating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Select name='rating' defaultValue={rating} onChange={(e) => setRating(e.target.value)}>
                                <option value="">Select Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit" variant="primary" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default AddNewSurvey