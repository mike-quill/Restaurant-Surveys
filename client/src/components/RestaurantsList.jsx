import React, { useContext, useEffect } from 'react';
import RestaurantAPI from '../apis/RestaurantAPI';
import { RestaurantsContext } from '../context/RestaurantsContext';

function RestaurantsList(props) {

    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await RestaurantAPI.get("/");
                setRestaurants(response.data.data.restaurants);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, [])

    const handleDelete = async (id) => {
        try {
            const response = await RestaurantAPI.delete(`/${id}`);
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }));
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='list-group'>
            <table className='table table-hover table-dark'>
                <thead>
                    <tr>
                        <th scope='col'>Restaurant</th>
                        <th scope='col'>Location</th>
                        <th scope='col'>Ratings</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants && restaurants.map(restaurant => {
                        return (
                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.street_address}</td>
                                <td>Rating</td>
                                <td>{restaurant.phone_number}</td>
                                <td><button className='btn btn-warning'>Edit</button></td>
                                <td><button onClick={() => handleDelete(restaurant.id)} className='btn btn-danger'>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default RestaurantsList;