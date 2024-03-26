import styles from './NavMenu.module.css';
import React, {createElement, useEffect, useState} from "react";
import {getPermissions} from "../../../../../controllers/LogInController";
import {useNavigate} from "react-router-dom";

function NavMenu(){

    const [navBar, setNavBar] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {


        const items = [
            {name: "home", feature: "inventory"},
            {name: "atribution", feature: "assigning"},
            {name: "drop",feature: "dropping"},
            {name: "users", feature: "user-management"},
            {name: "settings", feature: "all"}];

        function onNavClick(e) {
            e.preventDefault();
            navigate("/" + e.target.innerText);
        }


        getPermissions().then((data) => {
            if (data === null) {
                return;
            }

            var features = data.Features;
            var buttons = [];


            for (let i = 0; i < items.length; i++) {
                for (let j = 0; j < features.length; j++) {
                    var item = items[i];
                    var feature = features[j];
                    if (item.feature === feature.feature) {
                        buttons.push(createElement("li", {name: item.name, className: styles.navButton, onClick: onNavClick}, item.name));
                    }
                }
            }

            setNavBar(buttons);
        });
    }, [navigate]);


    return (
        <ul className={styles.navbar}>
            {navBar}
        </ul>
    );
}

export default NavMenu;