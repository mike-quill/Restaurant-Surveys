import React from 'react'
import { Outlet } from 'react-router-dom';
import AddNewRestaurant from '../components/AddNewRestaurant';
import Header from '../components/Header';
import RestaurantsList from '../components/RestaurantsList';
import { Container } from 'react-bootstrap';

const Home = () => {
	return (
		<Container>
			<Header />
			<AddNewRestaurant />
			<RestaurantsList />
		</Container>
	);
}

export default Home