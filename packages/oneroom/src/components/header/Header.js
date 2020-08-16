import React, { useState } from 'react';
import styles from './Header.scss';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { app } from 'root/app.config.js';
import { useMobile, useDesktop } from 'shared/hooks/useMedia';



// 3RD PARTY LIBRARY
import { FaBars as MenuIcon, FaBell as Notification } from 'react-icons/fa';



const Header = ({ menuItems }) => {

  const isDesktop = useDesktop();
  const isMobile = useMobile();
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = (showMenu = false) => {
    setShowMenu(showMenu);
  };

  return (
    <>
      <header className={styles.Header}>
        { isMobile
          ? <MenuIcon className="header-icon-left" onClick={() => handleMenu(true)} />
          : <div></div> }

        <h1>{app.title}</h1>
        <Notification className="header-icon-right" />
        { (isMobile && showMenu) &&
          <MobileMenu handleNav={handleMenu} menuItems={menuItems} auth={true}/>
        }
      </header>
      { isDesktop && <Menu menuItems={menuItems} auth={true}/> }
    </>
  );
};

export default Header;
