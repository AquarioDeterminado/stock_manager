import React from "react";

const Untracked_Item_Card = ({untracked_items}) => {
    return (
        <>
            {untracked_items.map((untracked_item) => {
                return (
                    <div className="card">
                        <div className="card-notif">
                            <p className="card-notif_number">Quantity</p>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Item</h5>
                            <p className="card-observation">Observations</p>
                            <p className="card-updated_date">Update Date</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}