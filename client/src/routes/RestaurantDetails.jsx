import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantAPI from '../apis/RestaurantAPI';
import AddNewSurvey from '../components/AddNewSurvey';
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
                console.log(response);
                setSelectedRestaurant(response.data.data);
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, []);

    return (
        <div className='container'>
            {selectedRestaurant && (
                <>
                    <h1 className='text-center'>{selectedRestaurant.restaurant.name}</h1>
                    <div className='text-center'>
                        <StarRating rating={selectedRestaurant.restaurant.average_rating} />
                        <span>
                            {selectedRestaurant.restaurant.ratings_count ? `(${selectedRestaurant.restaurant.ratings_count})` : '(0)'}
                        </span>
                    </div>
                    <div className="mt-3">
                        <Surveys surveys={selectedRestaurant.surveys} />
                        <AddNewSurvey />
                    </div>
                </>
            )}
        </div>
    );
}

export default RestaurantDetails