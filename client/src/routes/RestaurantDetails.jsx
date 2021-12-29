import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantAPI from '../apis/RestaurantAPI';
import StarRating from '../components/StarRating';
import Surveys from '../components/Surveys';
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
            {selectedRestaurant && (
                <>
                <div className="mt-3">
                    <Surveys />
                </div>
                </>
            )}
        </div>
    );
}

export default RestaurantDetails