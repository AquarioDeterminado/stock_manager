import './Home.module.css'
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import UntrackedItemController from "../../../controllers/UntrackedItemController";
import UntrackedItemCard from "../../components/UntrackedItem/UntrackedItemCard/UntrackedItemCard";
import {useEffect, useState} from "react";
import styles from './Home.module.css';
import BillForm from "../../components/BillForm/BillForm";
import ReactDOM from "react-dom/client";
import {useNavigate} from "react-router-dom";

function Home(props) {

    const [canvas, SetCanvas] = useState("Loading...");
    const navigate = useNavigate();

    useEffect(() => {
        //Get Items
        UntrackedItemController.List().then(
            (data) => {
                var props  = {untracked_items: data, navigate: navigate};
                const untrackedItems = UntrackedItemCard(props);
                SetCanvas((

                    <div className={styles.canvas}>
                        <button className={styles.addButton} onClick={addBill}>Add</button>
                        {untrackedItems}
                    </div>
                ));
            });
    }, []);

    //Render
    return (<PageTemplate canvas={canvas} permissions={permissions}/> );
}

function addBill(){
    var canvas = document.getElementById('canvas');
    ReactDOM.createRoot(canvas).render(<BillForm/>);

    var app = document.getElementsByClassName('App')[0];
    app.setAttribute('style', 'filter: grayscale(30%);');

}

export default Home;