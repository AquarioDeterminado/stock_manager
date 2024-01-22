import './LanginPage.module.css'
import PageTemplate from "./../components/PageTemplate/PageTemplate";
import {useState} from "react";
import UntrackedItemController from "../../controllers/UntrackedItemController";
import UntrackedItemCard from "../components/UntrackedItem/UntrackedItemCard/UntrackedItemCard";

function LandingPage() {

    const [untrackedItems, setItems] = useState("...Loading");

    UntrackedItemController.List().then(
        (data) => {
            const untrackedItems = UntrackedItemCard.build({untracked_items: data});
            setItems(untrackedItems);
        }
    );

    const permissions = ["all", "atributor", "abatuer", "user-manager"];

    return (PageTemplate(untrackedItems, permissions));
}

export default LandingPage;