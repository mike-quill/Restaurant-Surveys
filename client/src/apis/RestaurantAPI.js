import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.mikequillcodes.com/api/v1/restaurants/'
})
