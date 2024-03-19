import styles from "./UntrackedItemCard.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function UntrackedItemCard (props) {

    let untracked_items = props.untracked_items;
    let navigate = props.navigate;

    function showInfo(){
        navigate("/untracked_item/info");
    }

    if (untracked_items === undefined) {
        return <></>;
    } else {
        return (
            <ul>
                {untracked_items.map((untracked_item) => {
                    return (
                        <li key={untracked_item.id} className={styles.listitem}>
                            <div className={styles.notifemblem} onClick={() => changeStock(1)}>
                                <p className="card-notif_number">{untracked_item.quantity}</p>
                            </div>
                            <div className={styles.card} onClick={() => showInfo()}>
                                <div className="card-body">
                                    <h5 className="card-title">{untracked_item.type}</h5>
                                    <p className="card-observation">Observations</p>
                                    <p className="card-updated_date">{untracked_item.modified_date}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        )
    }
}

function changeStock(id) {
    console.log(id)
}

export default UntrackedItemCard;