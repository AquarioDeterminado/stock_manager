import './Home.module.css'
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import UntrackedItemController from "../../../controllers/UntrackedItemController";
import UntrackedItemCard from "../../components/UntrackedItem/UntrackedItemCard/UntrackedItemCard";
import {useEffect, useState} from "react";
import styles from './Home.module.css';
import BillForm from "../../components/BillForm/BillForm";
import ReactDOM from "react-dom/client";
import {useNavigate} from "react-router-dom";
import {mustBeLoggedIn} from "../../../controllers/LogInController";

function Home() {
    const navigate = useNavigate();
    const [canvas, SetCanvas] = useState("Loading...");

    useEffect(() => {
        mustBeLoggedIn(navigate);

        //Get Items
        UntrackedItemController.List().then((list) => {
                var props  = {untracked_items: list, navigate: navigate};
                const untrackedItems = UntrackedItemCard(props);
                SetCanvas((

                    <div className={styles.canvas}>
                        <button className={styles.addButton} onClick={addBill}>Add</button>
                        {untrackedItems}
                    </div>
                ));
            });
    }, [navigate]);

    //Render
    return (<PageTemplate canvas={canvas}/> );
}

function addBill(){
    var canvas = document.getElementById('canvas');
    ReactDOM.createRoot(canvas).render(<BillForm/>);

    var app = document.getElementsByClassName('App')[0];
    app.setAttribute('style', 'filter: grayscale(30%);');

}

export default Home;