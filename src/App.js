import Header from 'components/presentational/Header';
import Filters from 'components/presentational/Filters';
import HotelList from 'components/presentational/HotelList';

import { AppContextProvider } from './AppContext';

import { generateDummyHotels } from 'helpers/faker';

import './App.css';

const hotels = generateDummyHotels(100);

function App() {
  return (
    <div className="App">
      <AppContextProvider hotels={hotels}>
        <Header />
        <Filters />
        <HotelList />
      </AppContextProvider>
    </div>
  );
}

export default App;
