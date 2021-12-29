import React from 'react';
import StarRating from './StarRating';

const Surveys = () => {
    return (
        <div className='row row-cols-3 mb-2'>
            <div className='card text-white bg-primary mb-3 mr-4'>
                <div className='card-header d-flex justify-content-between'>
                    <span>Test</span>
                    <span><StarRating rating={3}/></span>
                </div>
                <div className='card-body'>
                    <p className='card-test'>Review goes here</p>
                </div>
            </div>
        </div>
    )
}

export default Surveys