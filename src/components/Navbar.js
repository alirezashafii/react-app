import React from "react";
import styles from "./Navbar.module.css";
import logo from '../logo.svg';

function Navbar() {
    return ( 
        <nav className={styles.navbar}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="logo" />
            </div>
        </nav>
     );
}

export default Navbar;