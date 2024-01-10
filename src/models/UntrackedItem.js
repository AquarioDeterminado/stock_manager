class UntrackedItem {
    constructor(id,quantity, item_id, created_date, modified_date) {
        this._id = id
        this._quantity = quantity;
        this._item_id = item_id;
        this._created_date = created_date;
        this._modified_date = modified_date;
    }

    static fromJSON(json) {
        this._id = json.id;
        this._quantity = json.quantity;
        this._item_id = json.item_id;
        this._created_date = json.created_date;
        this._modified_date = json.modified_date;
    }

    static fromJSONArray(list) {
        var untracked_items = [];
        var item;
        for (let i = 0; i < list.length; i++) {
            item = new UntrackedItem(list[i].id, list[i].quantity, list[i].item_id, list[i].createdAt, list[i].updatedAt);
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

    get item_id() { return this._item_id; };

    get created_date() { return this._created_date; };

    get modified_date() { return this._modified_date; };
}

module.exports = Object.freeze(UntrackedItem);