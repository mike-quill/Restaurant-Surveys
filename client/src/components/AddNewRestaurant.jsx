import React from 'react';
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';

export default class AddNewRestaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: '',
            latitude: '',
            longitude: '',
            streetAddress: '',
            city: '',
            province: '',
            country: '',
            phoneNumber: '',
            website: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(`name ${this.state.name}`);
        event.preventDefault();
    }



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



    render() {
        return <div>
            <Button
                className='mb-3'
                onClick={() =>
                    this.setState({open: !this.state.open})
                }
                aria-controls="collapse-new-restaurant"
                aria-expanded={this.state.open}
            >
                Add New Restaurant
            </Button>


            <Collapse in={this.state.open}>

                <div id="collapse-new-restaurant">
                    <Form className='border rounded p-3 mb-3' onSubmit={this.handleSubmit}>
                        <Row>
                            <Col xs="12" md="4">
                                <Form.Group controlId="newRestaurantName">
                                    <Form.Label>Restaurant Name</Form.Label>
                                    <Form.Control name='name' value={this.state.name} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control name='streetAddress' value={this.state.streetAddress} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control name='city' value={this.state.city} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantProvince">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control name='province' value={this.state.province} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control name='country' value={this.state.country} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantPhone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control name='phoneNumber' value={this.state.phoneNumber} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantWebsite">
                                    <Form.Label>Website</Form.Label>
                                    <Form.Control name='website' value={this.state.website} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantLatitude">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control name='latitude' value={this.state.latitude} type="text" onChange={this.handleInputChange} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantLongitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control name='longitude' value={this.state.longitude} type="text" onChange={this.handleInputChange} />
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



        </div >;
    }
}
