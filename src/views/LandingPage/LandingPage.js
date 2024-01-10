import './LanginPage.module.css'
import PageTemplate from "./../components/PageTemplate/PageTemplate";
import {useState} from "react";
import UntrackedItemController from "../../controllers/UntrackedItemController";
import UntrackedItemCard from "../components/UntrackedItemCard/UntrackedItemCard";

function LandingPage() {

    let text = "a";
    const [untrackedItems, setItems] = useState("...Loading")

    UntrackedItemController.List().then(
        (data) => {
            setItems(UntrackedItemCard({untracked_items: data}));
        }
    )

    return (PageTemplate(untrackedItems))
}

export default LandingPage;