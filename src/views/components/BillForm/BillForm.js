import {useState} from "react";
import styles from './BillForm.module.css';
import untrackedItem from "../../../models/UntrackedItem";
import UntrackedItem from "../../../models/UntrackedItem";
import UntrackedItemController from "../../../controllers/UntrackedItemController";

function BillForm() {

  return (
      <div className={styles.container}>
          <h1>Add Bill</h1>
          <div className={styles.addPDFBox}>
                <input type="file" id="file" name="file" accept=".pdf"/>
                <label htmlFor="file">Choose a file (IN DEVELOPMENT)</label>
          </div>
          <div className={styles.addItemsTable}>
              <form className={styles.billForm}>
                  <input
                      type="text"
                      name="name"
                      value="Electric Bill"
                  />
                  <select name="item">
                      {UntrackedItemController.getTypes().map((type) => {
                          return <option value={type.id}>{type.name}</option>
                      })
                      }
                  </select>
                  <button type="submit">Add Item</button>
              </form>
          </div>
      </div>
  );
}

export default BillForm;