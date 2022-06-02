import React from 'react';
import Logo from '../../assets/images/logo.png'
import styles from './layout.module.scss'
const Layout = ({children}) => {
  return (
    <div>
      <header className={styles.header}>
        <img src={Logo} alt="logo"/>
      </header>
      <div>
        {children}
      </div>
    </div>

);
};

export default Layout;