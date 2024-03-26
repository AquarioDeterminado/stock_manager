import React, {useEffect, useState} from 'react';
import styles from './UntrackedItemInfo.module.css';
import UntrackedItemController from "../../../../controllers/UntrackedItemController";
import {useParams} from "react-router-dom";

function UntrackedItemInfo() {

    const [untrackedItem, setUntrackedItem] = useState("Loading...");
    const [quantity, setQuantity] = useState(0);
    let {id} = useParams();

    let inputTimer = null

    function changeQuantity (value) {
        setQuantity(quantity + value);

        if (inputTimer !== null) {
            clearTimeout(inputTimer);
        }


        //Update Item
        inputTimer = setTimeout(() => {

            let goat = {
                unt_id: untrackedItem.unt_id,
                quantity: quantity,
                mode: untrackedItem.model,
            }

            UntrackedItemController.update(goat).then((updateItem) => {

                if (updateItem !== null)
                    if (updateItem.unt_id === untrackedItem.unt_id)
                        console.log("Updated");
                    else
                        console.log("Error");
            });
        }, 1000);
    }


    useEffect(() => {
        if (id !== undefined)
        {
            //Get Item
            UntrackedItemController.get(parseInt(id)).then(item => {
                console.log(item);
                setUntrackedItem(item);
                setQuantity(item.quantity);
            });
        }
    }, [id]);

    if (untrackedItem === "Loading...")
        return <></>;
    else
        return (
            <>
                <div className={styles.info}>
                    <div className={styles.container}>
                        <h1 className={styles.info__title}>""</h1>
                        <img className={styles.info__picture} alt={""}/>
                        <p className={styles.info__description}> dasdd </p>
                    </div>
                    <div className={styles.stock}>
                        <h1 className={styles.stock__title}>Stock</h1>
                        <div className={styles.stockInfo}>
                            <p className={styles.stockQuantity}> awdaw </p>
                            <p className={styles.stockDate}> awdw </p>
                        </div>
                        <div className={styles.stockAlter}>
                            <button className={styles.stockButton} onClick={() => changeQuantity(1)}> + </button>
                            <input className={styles.stockAltNumber} value={quantity}/>
                            <button className={styles.stockButton} onClick={() => changeQuantity(-1)}>-</button>
                        </div>
                    </div>
                </div>
            </>
        );

}

export default UntrackedItemInfo;