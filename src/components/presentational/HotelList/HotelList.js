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

      {filteredHotels.length === 0 && (
        <div className="HotelList__Message">
          <p>
            <span className="fa-stack fa-2x">
              <i className="fa fa-filter fa-stack-1x"></i>
              <i className="fa fa-ban fa-stack-2x"></i>
            </span>
          </p>
          <p>No hay hoteles que coincidan con tus criterios de búsqueda.</p>
        </div>
      )}
    </div>
  );
}

export default HotelList;
