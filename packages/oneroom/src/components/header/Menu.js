import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.scss';

const Menu = ({ menuItems, auth }) => {

  return (
    <nav className={styles.Menu}>
      {menuItems && menuItems.map(item => {
        if (auth && item.requiresAuth) return null;
        return (
          <span key={item.title}>
            <NavLink exact strict to={item.to}>
              {item.title}
            </NavLink>
          </span>
        );
      })}
    </nav>
  );
};

Menu.propTypes = {
  handleNav: PropTypes.func,
  menuItems: PropTypes.array,
  auth: PropTypes.bool,
};

export default Menu;
