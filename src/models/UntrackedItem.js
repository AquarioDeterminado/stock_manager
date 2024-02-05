class UntrackedItem {
    constructor(id,quantity, type, modified_date) {
        this._id = id
        this._quantity = quantity;
        this._type = type;
        this._modified_date = modified_date;
    }

    static fromJSON(json) {
        return new UntrackedItem(json.item_id, json.quantity, ItemType.FromJson(json.item_type), json.modified_date);
    }

    static fromJSONArray(list) {
        var untracked_items = [];
        var item;
        for (let i = 0; i < list.length; i++) {
            item = new UntrackedItem.fromJSON(list[i]);
            untracked_items.push(item);
        }
        return untracked_items;
    }

    get id() { return this._id; }

    get quantity() { return this._quantity; };

    set quantity(value) {
        this._quantity = value;
        this._modified_date = new Date();
    };

    get item_id() { return this._id; };


    get modified_date() { return this._modified_date; };

    get itemType() { return this._type; }; //TODO Associate with item type
}

module.exports = Object.freeze(UntrackedItem);