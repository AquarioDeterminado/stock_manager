import React from 'react';
import styles from './UntrackedItemInfo.module.css';

class UntrackedItemInfo extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.info__title}>"2"</h1>
                    <img className={styles.info__picture} />
                    <p className={styles.info__description}> dasdd </p>
                </div>
                <div className={styles.stock}>
                    <h1 className={styles.stock__title}>Stock</h1>
                    <div className={styles.stockInfo}>
                        <p className={styles.stockQuantity}> awdaw </p>
                        <p className={styles.stockDate}> awdw </p>
                    </div>
                    <div className={styles.stockAlter}>
                        <button className={styles.stockButton}>+</button>
                        <input className={styles.stockAltNumber}/>
                        <button className={styles.stockButton}>-</button>
                    </div>
                </div>
            </div>
        )

    }
}

export default UntrackedItemInfo;