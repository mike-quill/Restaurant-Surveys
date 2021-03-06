import React, { useContext, useEffect } from 'react';
import RestaurantAPI from '../apis/RestaurantAPI';
import { useNavigate } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import StarRating from './StarRating';

function RestaurantsList(props) {

	const { restaurants, setRestaurants } = useContext(RestaurantsContext);

	let navigate = useNavigate();

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

	const handleDelete = async (e, id) => {
		e.stopPropagation();
		try {
			const response = await RestaurantAPI.delete(`/${id}`);
			setRestaurants(restaurants.filter(restaurant => {
				return restaurant.id !== id
			}));
		} catch (error) {
			console.log(error);
		}
	}

	const handleEdit = (e, id) => {
		e.stopPropagation();
		navigate(`/restaurants/${id}/edit`)
	}

	const handleRestaurantSelect = (id) => {
		navigate(`restaurants/${id}`)
	}

	const renderRating = (restaurant) => {
		if(restaurant.ratings_count > 0) {
			return (
				<>
					<StarRating rating={restaurant.average_rating} />
					<span>({restaurant.ratings_count})</span>
				</>
			)
		} else {
			return (
				<>
				<span>(0) reviews</span>
				</>
			)
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
							<tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
								<td>{restaurant.name}</td>
								<td>{restaurant.street_address}</td>
								<td>{renderRating(restaurant)}</td>
								<td>{restaurant.phone_number}</td>
								<td><button onClick={(e) => handleEdit(e, restaurant.id)} className='btn btn-warning'>Edit</button></td>
								<td><button onClick={(e) => handleDelete(e, restaurant.id)} className='btn btn-danger'>Delete</button></td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default RestaurantsList;