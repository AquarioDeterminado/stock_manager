import styles from './NavMenu.module.css';
import React, {createElement} from "react";

class NavMenu extends React.Component{

    constructor(props) {
        super(props);
        this.permission = props.userPermissions;
        this.state = {
            navBar: "Loading."
        }
    }

    items = [ {name: "home", permission: "all", onClick: () => {document.replaceChild()}},
                                                    {name: "atribution", permission: "atributor"},
                                                    {name: "drop",permission: "abatuer"},
                                                    {name: "users", permission: "user-manager"},
                                                    {name: "settings", permission: "all"}];


    checkAvailableNavButtons() {
        var buttons = [];
        this.items.forEach((item) => {
            if(this.permission.includes(item.permission)){ //TODO: Verify permissions
                var newButton = createElement("li", {className: styles.navItem},
                    createElement("button", {id: item.name + "-nav-button", className: styles.navButton}, item.name));
                buttons.push(newButton);
            }
        });
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