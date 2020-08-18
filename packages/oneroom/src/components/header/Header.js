import React, { useState } from 'react';
import styles from './Header.scss';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { useMobile, useDesktop } from 'shared/hooks/useMedia';

import { FaBars as MenuIcon } from 'react-icons/fa';

const Header = ({ menuItems }) => {

  const isDesktop = useDesktop();
  const isMobile = useMobile();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = (showMenu = false) => {
    setShowMenu(showMenu);
  };

  const classes = [styles.Header];

  return (
    <header className={classes.join(' ')}>
      {/* <MenuIcon className="header-icon-left" onClick={() => handleMenu(true)} /> */}
      { isMobile
        ? <MenuIcon className="header-icon-left" onClick={() => handleMenu(true)} />
        : <></>}

      <p className="title">One Room Art House</p>
      { (isMobile && showMenu) &&
        <MobileMenu handleNav={handleMenu} menuItems={menuItems} auth={true}/>
      }
      { isDesktop && <Menu menuItems={menuItems} auth={true}/> }
    </header>
  );
};

export default Header;
