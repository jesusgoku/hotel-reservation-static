import { useAppContext } from 'AppContext';
import { fullDateStyleFormatter } from 'helpers/date';

import './Header.css';

/**
 * @typedef {Object} HeaderProps
 * @property {Date} fromDate - the reserve from date
 * @property {Date} toDate - the reserve to date
 */

/**
 * Header of Hotels
 *
 * @param {HeaderProps} props - the components props
 *
 * @returns {Component}
 */
function Header() {
  const { fromDate: fromDateStr, toDate: toDateStr } = useAppContext();

  const fromDate = new Date(`${fromDateStr}T00:00:00`);
  const toDate = new Date(`${toDateStr}T00:00:00`);

  return (
    <div className="Header">
      <div className="container">
        <h1>Hoteles</h1>
        <p>
          Desde el <strong>{fullDateStyleFormatter.format(fromDate)}</strong>{' '}
          hasta el <strong>{fullDateStyleFormatter.format(toDate)}</strong>
        </p>
      </div>
    </div>
  );
}

export default Header;
