import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import RestaurantDetails from './routes/RestaurantDetails';
import RestaurantEdit from './routes/RestaurantEdit';
import NotFound from './routes/NotFound';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

function App() {
  return (
    <RestaurantsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='restaurants/:id' element={<RestaurantDetails />} />
            <Route path='restaurants/:id/edit' element={<RestaurantEdit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </RestaurantsContextProvider>
  );
}

export default App;
