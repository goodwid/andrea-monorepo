import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import Menu from './Menu';
import { app } from 'root/app.config.js';

// 3RD PARTY LIBRARY
import { FaBars as MenuIcon, FaBell as Notification } from 'react-icons/fa';

// eslint-disable-next-line no-unused-vars
class Header extends PureComponent {
  static propTypes = {
    menuItems: PropTypes.array,
    isMobile: PropTypes.bool,
  }

  state = {
    showMenu: false,
  }

  handleMenu = (showMenu = false) => {
    this.setState({ showMenu });
  }

  handleNav = () => {
    this.handleMenu(!this.state.showMenu);
  }

  render() {
    const { showMenu } = this.state;
    const { menuItems, isMobile } = this.props;

    return (
      <header className={styles.Header}>
        <MenuIcon className="header-icon-left" onClick={isMobile ? null : () => this.handleMenu(true)} />
        <h1>{app.title}</h1>
        <Notification className="header-icon-right" />
        { showMenu &&
          <Menu handleNav={this.handleNav} menuItems={menuItems} auth={true}/>
        }
      </header>
    );
  }
}

export default Header;
