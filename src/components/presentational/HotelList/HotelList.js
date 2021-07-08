import { useMemo } from 'react';
import { useAppContext } from 'AppContext';
import { isSizeRange, isPriceRange } from 'helpers/hotels';

import HotelItem from 'components/presentational/HotelItem';

import './HotelList.css';

function HotelList() {
  const { hotels, selectedLocation, selectedSize, selectedPrice } =
    useAppContext();

  const filteredHotels = useMemo(
    () =>
      hotels.filter(
        ({ location, rooms, price }) =>
          (!selectedLocation ||
            `${location.country};${location.city}` === selectedLocation) &&
          (!selectedSize || isSizeRange(rooms, selectedSize)) &&
          (!selectedPrice || isPriceRange(price, selectedPrice))
      ),
    [hotels, selectedLocation, selectedSize, selectedPrice]
  );

  return (
    <div className="HotelList container">
      {filteredHotels.map((hotel) => (
        <HotelItem key={hotel.id} hotel={hotel} className="HotelList__Item" />
      ))}
    </div>
  );
}

export default HotelList;
