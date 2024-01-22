import styles from './NavMenu.module.css';
import React from "react";
import {createElement} from "react";



class NavMenu extends React.Component{

    items = [ {name: "home", permission: "all"},
                                                    {name: "atribution", permission: "atributor"},
                                                    {name: "drop",permission: "abatuer"},
                                                    {name: "users", permission: "user-manager"},
                                                    {name: "settings", permission: "all"}];


    checkAvailableNavButtons(permissions) {
        var buttons = [];
        for( let item in this.items){
            if(permissions.includes(item.permission)){
                buttons.add(createElement("li", {className: styles.navItem},
                    createElement("button", {id: item.name + "-nav-button", className: styles.navButton},
                    item.name)
                ));
            }
        }
        return buttons;
    }

    render() {
        const permissions = this.props.userPermissions;
        const navItems = this.checkAvailableNavButtons(permissions);
        return (
            <ul className={styles.navbar}>
                {navItems.map((item) => item)}
            </ul>
        );
    }
}


export default NavMenu;