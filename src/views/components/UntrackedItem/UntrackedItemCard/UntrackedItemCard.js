import styles from "./UntrackedItemCard.module.css";
import React from "react";

function UntrackedItemCard (props) {

    let untracked_items = props.untracked_items;
    let navigate = props.navigate;

    function showInfo(e){
        e.preventDefault();
        const id = e.target.parentNode.parentNode.parentNode.getAttribute("id");
        navigate("/untracked_items/" + id);
    }

    if (untracked_items === undefined) {
        return <></>;
    } else {
        return (
            <ul>
                {untracked_items.map((untracked_item, index) => {
                    return (
                        <li key={index} id={untracked_item.unt_id} className={styles.listitem}>
                            <div className={styles.notifemblem} onClick={() => changeStock(1)}>
                                <p className="card-notif_number">{untracked_item.quantity}</p>
                            </div>
                            <div className={styles.card} onClick={showInfo}>
                                <div className="card-body">
                                    <h5 className="card-title">{untracked_item.Item.ItemType.type}</h5>
                                    <p className="card-observation">{untracked_item.model}</p>
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