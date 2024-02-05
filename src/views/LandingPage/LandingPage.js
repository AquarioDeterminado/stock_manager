import './LanginPage.module.css'
import PageTemplate from "./../components/PageTemplate/PageTemplate";
import UntrackedItemController from "../../controllers/UntrackedItemController";
import UntrackedItemCard from "../components/UntrackedItem/UntrackedItemCard/UntrackedItemCard";
import {useState} from "react";

function LandingPage(props) {

    const [canvas, SetCanvas] = useState("Loading...");

    //Get Items
    UntrackedItemController.List().then(
        (data) => {
            var props  = {untracked_items: data};
            const untrackedItems = UntrackedItemCard(props);
            SetCanvas(untrackedItems);
        });

    const permissions = ["all", "atributor", "abatuer", "user-manager"];

    //Render
    return (PageTemplate(canvas, permissions));
}

export default LandingPage;