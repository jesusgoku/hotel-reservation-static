import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ hotels, ...props }) {
  const now = new Date().toISOString().substr(0, 10);

  const [selectedLocation, setLocation] = useState('');
  const [selectedPrice, setPrice] = useState('');
  const [selectedSize, setSize] = useState('');
  const [fromDate, setFromDate] = useState(now);
  const [toDate, setToDate] = useState(now);

  const locations = Object.values(
    hotels.reduce((acc, { location }) => {
      const key = `${location.county};${location.city}`;

      if (!acc[key]) {
        acc[key] = location;
      }

      return acc;
    }, {})
  ).sort((a, b) =>
    `${a.country};${a.city}`.localeCompare(`${b.country};${b.city}`)
  );

  const data = {
    hotels,
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
  };

  return <AppContext.Provider {...props} value={data} />;
}

function useAppContext() {
  const context = useContext(AppContext);

  return context;
}

export { AppContextProvider, useAppContext };
