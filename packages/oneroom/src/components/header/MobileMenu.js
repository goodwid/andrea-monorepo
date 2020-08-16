import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.scss';

const Menu = ({ handleNav, menuItems, auth }) => {

  const clearMenu = () => handleNav(false);

  useEffect(() => {
    document.addEventListener('click', clearMenu);
    document.addEventListener('scroll', clearMenu, true);

    return () => {
      document.removeEventListener('click', clearMenu);
      document.removeEventListener('scroll', clearMenu, true);
    }
  }, []);

  return (
    <nav className={styles.MobileMenu}>
      <ul>
        {menuItems && menuItems.map(item => {
          if (auth && item.requiresAuth) return null;
          return (
            <li key={item.title} onClick={() => clearMenu()}>
              <item.Icon />
              <Link to={item.to}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  handleNav: PropTypes.func,
  menuItems: PropTypes.array,
  auth: PropTypes.bool,
};

export default Menu;
