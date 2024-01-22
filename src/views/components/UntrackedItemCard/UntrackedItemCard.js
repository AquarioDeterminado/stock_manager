import React from "react";
import styles from "./UntrackedItemCard.module.css";

function UntrackedItemCard ({untracked_items}) {
    if (untracked_items === undefined) {
        return <></>;
    } else {
        return (
            <ul>
                {untracked_items.map((untracked_item) => {
                    return (
                        <li key={untracked_item.id} className={styles.listitem}>
                            <div className={styles.notifemblem}>
                                <p className="card-notif_number">{untracked_item.quantity}</p>
                            </div>
                            <div className={styles.card}>
                                <div className="card-body">
                                    <h5 className="card-title">{untracked_item.itemType}</h5>
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

export default UntrackedItemCard;