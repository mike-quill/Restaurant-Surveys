import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantAPI from '../apis/RestaurantAPI'

const EditRestaurant = (props) => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [website, setWebsite] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const response = await RestaurantAPI.get(`/${id}`);
            setName(response.data.data.restaurant.name);
            setLatitude(response.data.data.restaurant.latitude);
            setLongitude(response.data.data.restaurant.longitude);
            setStreetAddress(response.data.data.restaurant.street_address);
            setCity(response.data.data.restaurant.city);
            setProvince(response.data.data.restaurant.province);
            setCountry(response.data.data.restaurant.country);
            setPhoneNumber(response.data.data.restaurant.phone_number);
            setWebsite(response.data.data.restaurant.website);
        }
        fetchData()
    }, [])

    return (
        <div>

        </div>
    );
}

export default EditRestaurant;