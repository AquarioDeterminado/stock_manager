import styles from "./UntrackedItemCard.module.css";
import React from "react";

class UntrackedItemCard extends React.Component {
    static changeStock(id) {
        console.log(id)
    }

    static showInfo(id){
        return null;
    }

    static build({untracked_items}) {
        if (untracked_items === undefined) {
            return <></>;
        } else {
            return (
                <ul>
                    {untracked_items.map((untracked_item) => {
                        return (
                            <li key={untracked_item.id} className={styles.listitem}>
                                <div className={styles.notifemblem} onClick={() => UntrackedItemCard.changeStock(1)}>
                                    <p className="card-notif_number">{untracked_item.quantity}</p>
                                </div>
                                <div className={styles.card} onClick={() => UntrackedItemCard.showInfo()}>
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
}

export default UntrackedItemCard;