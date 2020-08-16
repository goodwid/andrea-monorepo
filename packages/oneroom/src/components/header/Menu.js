import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Menu.scss';

const Menu = ({ menuItems, auth }) => {

  return (
    <nav className={styles.Menu}>
      {menuItems && menuItems.map(item => {
        if (auth && item.requiresAuth) return null;
        return (
          <span key={item.title}>
            <Link to={item.to}>
              {item.title}
            </Link>
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
