import React from 'react';
import StarRating from './StarRating';

const Surveys = ({ surveys }) => {
	return (
		<div className='container'>
			<div className='row'>
				{surveys.map((survey) => {
					return (
						<div key={survey.id} className='col-4 p-3'>
							<div className='card text-white bg-primary'>
								<div className='card-header d-flex justify-content-between'>
									<span>{new Date(survey.date_submitted).toLocaleString()}</span>
									<span><StarRating rating={survey.rating} /></span>
								</div>
								<div className='card-body'>
									<p className='card-test'>{survey.comments}</p>
								</div>
							</div>
						</div>)
				})}
			</div>
		</div>
	)
}

export default Surveys