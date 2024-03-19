class Item {
    constructor(id, typeId) {
        this.id = id;
        this.typeId = typeId;
    }

    static fromJSON(json) {
        return new Item(json.item_id, json.type_id);
    }

    static fromJSONArray(list) {
        var items = [];
        var item;
        for (let i = 0; i < list.length; i++) {
            item = Item.fromJSON(list[i]);
            items.push(item);
        }
        return items;
    }

    get id() {
        return this._id;
    }

    get typeId() {
        return this._typeId;
    }

    set typeId(value) {
        this._typeId = value;
    }
}

export default Item;
