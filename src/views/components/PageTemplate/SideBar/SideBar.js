import styles from './SideBar.module.css';
import React from "react";
import NavMenu from "./NavMenu/NavMenu";

class SideBar extends React.Component{
    render () {
        const permissions = this.props.userPermissions
        return (
            <div className={styles.sidebar}>
                <NavMenu userPermissions={permissions}/>
            </div>
        );
    }
}

export default SideBar;