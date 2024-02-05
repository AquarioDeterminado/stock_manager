class ItemType {
    constructor(id, name, description) {
        this._id = id;
        this._name = name;
        this._description = description;
    }

    static fromJSON(json) {
        return new ItemType(json.item_type_id, json.item_type_name, json.item_type_description);
    }

    get id() { return this._id; }

    get name() { return this._name; }

    get description() { return this._description; }

}

export default ItemType;