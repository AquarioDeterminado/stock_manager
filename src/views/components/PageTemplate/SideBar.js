import styles from './SideBar.module.css';
import React from "react";
import NavMenu from "./NavMenu";

class SideBar extends React.Component{
    render () {
        const permissions = this.props.userPermissions
        return (
            <div className={styles.sidebar}>
                <ul className={styles}>
                    <NavMenu userPermissions={permissions}/>
                </ul>
            </div>
        );
    }
}

export default SideBar;