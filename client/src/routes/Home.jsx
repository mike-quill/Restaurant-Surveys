import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import RestaurantsList from '../components/RestaurantsList';

const Home = () => {
    return (
        <div>
            <Header />
            <RestaurantsList />
        </div>
    );
}

export default Home