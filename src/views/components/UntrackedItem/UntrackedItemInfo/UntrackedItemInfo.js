import React from 'react';
import styles from './UntrackedItemInfo.module.css';

class UntrackedItemInfo extends React.Component{

    item = this.props.item;

    render() {

        return (
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{this.item.name}</h1>
                    <img className={styles.itemPicture} src={this.item.pictureUrl}/>
                    <p className={styles.description}> {this.item.description} </p>
                    <p className={styles.quantity}>Item Quantity</p>
                </div>
            </div>
        )

    }

}