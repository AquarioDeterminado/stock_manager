import styles from './NavMenu.module.css';
import React, {createElement} from "react";

class NavMenu extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            navBar: "Loading."
        }
    }

    items = [ {name: "home", permission: "all"},
                                                    {name: "atribution", permission: "atributor"},
                                                    {name: "drop",permission: "abatuer"},
                                                    {name: "users", permission: "user-manager"},
                                                    {name: "settings", permission: "all"}];


    checkAvailableNavButtons(permissions) {
        var buttons = [];
        for( let item in this.items){
            if(true){ //TODO: Verify permissions
                var newButton = createElement("li", {className: styles.navItem},
                    createElement("button", {id: item.name + "-nav-button", className: styles.navButton},
                        item.name));
                buttons.push(newButton);
            }
        }
        return buttons;
    }

    render() {

        const permissions = this.props.userPermissions;
        this.state.navBar = this.checkAvailableNavButtons(permissions).map((item) => item);
        return (
            <ul className={styles.navbar}>
                {this.state.navBar}
            </ul>
        );
    }
}


export default NavMenu;