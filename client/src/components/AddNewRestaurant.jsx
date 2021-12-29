import React, { useState, useContext } from 'react';
import { Button, Collapse, Form, Row, Col } from 'react-bootstrap';
import RestaurantAPI from '../apis/RestaurantAPI';
import { RestaurantsContext } from '../context/RestaurantsContext';




function AddNewRestaurant() {
    const { addRestaurants } = useContext(RestaurantsContext);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("Canada");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantAPI.post("/", {
                name: name,
                latitude: latitude,
                longitude: longitude,
                street_address: streetAddress,
                city: city,
                province: province,
                country: country,
                phone_number: phoneNumber,
                website: website
            });
            console.log(response);
            addRestaurants(response.data.restaurant);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Button
                className='mb-3'
                onClick={() =>
                    setOpen(!open)
                }
                aria-controls="collapse-new-restaurant"
                aria-expanded={open}
            >
                Add New Restaurant
            </Button>


            <Collapse in={open}>

                <div id="collapse-new-restaurant">
                    <Form className='border rounded p-3 mb-3' action=''>
                        <Row>
                            <Col xs="12" md="4">
                                <Form.Group controlId="newRestaurantName">
                                    <Form.Label>Restaurant Name</Form.Label>
                                    <Form.Control name='name' value={name} type="text" onChange={(e) => setName(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantAddress">
                                    <Form.Label>Street Address</Form.Label>
                                    <Form.Control name='streetAddress' value={streetAddress} type="text" onChange={(e) => setStreetAddress(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control name='city' value={city} type="text" onChange={(e) => setCity(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantProvince">
                                    <Form.Label>Province</Form.Label>
                                    {/* <Form.Control name='province' value={province} type="text" onChange={(e) => setProvince(e.target.value)} /> */}
                                    <Form.Select name='province' onChange={(e) => setProvince(e.target.value)} defaultValue={"none"}>
                                        <option value="none">Select Province</option>
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
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantCountry">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control disabled name='country' value={country} type="text" onChange={(e) => setCountry(e.target.value)} />
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
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantLatitude">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control name='latitude' value={latitude} type="text" onChange={(e) => setLatitude(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col xs="12" md="4">
                                <Form.Group className="mb-3" controlId="newRestaurantLongitude">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control name='longitude' value={longitude} type="text" onChange={(e) => setLongitude(e.target.value)} />
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

            </Collapse>



        </div >
    )
}

export default AddNewRestaurant