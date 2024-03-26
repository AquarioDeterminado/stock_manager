import styles from './SideBar.module.css';
import React from "react";
import NavMenu from "./NavMenu/NavMenu";

class SideBar extends React.Component{
    render () {
        return (
            <div className={styles.sidebar}>
                <NavMenu />
            </div>
        );
    }
}

export default SideBar;