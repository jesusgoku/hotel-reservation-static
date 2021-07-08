import { useAppContext } from 'AppContext';

import './Filters.css';

function Filters() {
  const {
    locations,
    selectedLocation,
    setLocation,
    selectedPrice,
    setPrice,
    selectedSize,
    setSize,
    fromDate,
    setFromDate,
    toDate,
    setToDate,
  } = useAppContext();

  const now = new Date().toISOString().substr(0, 10);

  const locationsOptions = locations.map(({ country, city }) => (
    <option
      key={`${country};${city}`}
      value={`${country};${city}`}
    >{`${city}, ${country}`}</option>
  ));

  const priceOptions = ['$', '$$', '$$$', '$$$$'].map((price) => (
    <option key={price} value={price}>
      {price}
    </option>
  ));

  const sizeOptions = [
    { label: 'pequeño', value: 'small' },
    { label: 'mediano', value: 'medium' },
    { label: 'grande', value: 'large' },
  ].map(({ label, value }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));

  return (
    <div className="Filters">
      <div className="Filters__Container container">
        <input
          type="date"
          name="fromDate"
          min={now}
          className="Filters__Control form-control"
          value={fromDate}
          onChange={(e) => {
            setFromDate(e.target.value);
          }}
        />

        <input
          type="date"
          name="toDate"
          min={fromDate}
          className="Filters__Control form-control"
          value={toDate}
          onChange={(e) => {
            setToDate(e.target.value);
          }}
        />

        <select
          name="location"
          className="Filters__Control form-select"
          value={selectedLocation}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option value="">Selecciona un ubicación</option>
          {locationsOptions}
        </select>

        <select
          name="price"
          className="Filters__Control form-select"
          value={selectedPrice}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        >
          <option value="">Selecciona un precio</option>
          {priceOptions}
        </select>

        <select
          name="size"
          className="Filters__Control form-select"
          value={selectedSize}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        >
          <option value="">Seleccionada un tamaño</option>
          {sizeOptions}
        </select>
      </div>
    </div>
  );
}

export default Filters;
