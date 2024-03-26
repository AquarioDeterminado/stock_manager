import Item from "./Item";

class UntrackedItem {
    constructor(id, itemId, quantity, modified_date) {
        this._id = id
        this._itemId = itemId;
        this._quantity = quantity;
        this._modifiedDate = modified_date;
    }

    static fromJSON(json) {
        return new UntrackedItem(json.unt_id, json.quantity, new Item(json.itemId, json.itemTypeId), json.updatedAt);
    }

    static fromJSONArray(list) {
        var untracked_items = [];
        var item;
        for (let i = 0; i < list.length; i++) {
            item = UntrackedItem.fromJSON(list[i]);
            untracked_items.push(item);
        }
        return untracked_items;
    }

    get id() { return this._id; }

    get itemId() { return this._itemId; }

    get quantity() { return this._quantity; };

    set quantity(value) {
        this._quantity = value;
        this._modified_date = new Date();
    };

    get item_id() { return this._id; };


    get modified_date() { return this._modified_date; };

    get itemType() { return this._type; }; //TODO Associate with item type
}

export default UntrackedItem;