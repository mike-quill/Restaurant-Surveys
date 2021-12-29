import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantAPI from '../apis/RestaurantAPI';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetails = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantAPI.get(`/${id}`);
                setSelectedRestaurant(response.data.data.restaurant);
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [])

    return (
        <div>
            {selectedRestaurant && selectedRestaurant.name}
        </div>
    );
}

export default RestaurantDetails