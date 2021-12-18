import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';

function AddNewRestaurant() {
    const [open, setOpen] = useState(false);


    // {
    //     "name": "Tim Hortons",
    //     "latitude": 43.650505,
    //     "longitude": -79.383512,
    //     "street_address": "120 Adelaide St W Unit Fc-09, Toronto",
    //     "province": "Ontario",
    //     "country": "Canada",
    //     "phone_number": "6473505543",
    //     "website": "https://www.timhortons.ca/"
    //   }

    return (
        <div>
            <Button
                className='mb-3'
                onClick={() => setOpen(!open)}
                aria-controls="collapse-new-restaurant"
                aria-expanded={open}
            >
                Add New Restaurant
            </Button>
            <Row className="mb-3">
                <Col xs="12" sm="8" md="6">
                <Collapse in={open}>
                <div id="collapse-new-restaurant">
                    <Form className='border rounded p-3'>
                        <Form.Group controlId="newRestaurantName">
                            <Form.Label>Restaurant Name</Form.Label>
                            <Form.Control type="text" placeholder="Restaurant Name" />
                            <Form.Text className="text-muted">
                                Placeholder
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="newRestaurantAddress">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control type="text" placeholder="Street Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Collapse>
                </Col>
            </Row>
            
        </div>
    );
}

export default AddNewRestaurant;