import { getPriceRange } from 'helpers/hotels';

import './HotelItem.css';

function HotelItem({ hotel, className, ...props }) {
  return (
    <div {...props} className={`HotelItem ${className || ''}`}>
      <img
        src={hotel.image}
        alt={hotel.name}
        className="HotelItem__Image"
        width="400"
        height="300"
      />
      <h2 className="HotelItem__Title">{hotel.name}</h2>
      <p className="HotelItem__Description">{hotel.description}</p>
      <p className="HotelItem__Location">
        <span className="label">
          <i className="fa fa-fw fa-map-marker"></i>
        </span>{' '}
        {hotel.location.city}, {hotel.location.country}
      </p>
      <p className="HotelItem__Rooms">
        <span className="label">
          <i className="fa fa-fw fa-bed"></i>
        </span>{' '}
        {hotel.rooms} habitaciones
      </p>
      <p className="HotelItem__Price label">{getPriceRange(hotel.price)}</p>
    </div>
  );
}

export default HotelItem;
