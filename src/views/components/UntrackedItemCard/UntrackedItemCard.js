import React from "react";
import "./UntrackedItemCard.module.css";

function UntrackedItemCard ({untracked_items}) {
    if (untracked_items === undefined)
        return <></>;
    else
        return untracked_items.map((untracked_item) => {
                    return (
                        <li key={untracked_item.id}>
                            <div className="card">
                                <div className="card-notif">
                                    <p className="card-notif_number">{untracked_item.quantity}</p>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{untracked_item.type_id}</h5>
                                    <p className="card-observation">Observations</p>
                                    <p className="card-updated_date">{untracked_item.modified_date}</p>
                                </div>
                            </div>
                        </li>
                    );
                });
}

export default UntrackedItemCard;