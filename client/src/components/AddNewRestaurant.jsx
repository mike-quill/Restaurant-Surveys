import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';

function AddNewRestaurant() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");

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


            <Collapse in={open}>

                <div id="collapse-new-restaurant">
                    <Form className='border rounded p-3 mb-3'>
                        <Row>
                            <Col xs="12" md="4">
                                <Form.Group controlId="newRestaurantName">
                                    <Form.Label>Restaurant Name</Form.Label>
                                    <Form.Control type="text" placeholder="Restaurant Name" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control type="text" placeholder="Street Address" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control type="text" placeholder="Province" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Country" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Phone" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control type="text" placeholder="Website" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="text" placeholder="Latitude" />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="text" placeholder="Longitude" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

            </Collapse>



        </div >
    );
}

export default AddNewRestaurant;