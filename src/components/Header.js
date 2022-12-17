import React from "react";
import styles from "./Header.module.css";

function Header() {
    return ( 
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>my-app</h1>
                <p>This project is for practicing the basic concepts of <strong>React</strong>.</p>
            </div>
        </div>
     );
}

export default Header;