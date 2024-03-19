class TrackedItem {
    constructor(tra_id, tra_itemID, tra_brand, tra_model, tra_SN, tra_date, tra_price, tra_obs, itemTag) {
        this._id = tra_id;
        this._itemID = tra_itemID;
        this._date = tra_date;
        this._price = tra_price;
        this._obs = tra_obs;
        this._brand = tra_brand;
        this._model = tra_model;
        this._SN = tra_SN;
        this.itemTag = itemTag;
    }
    static fromJSON(json) {
        return new TrackedItem(json.tra_id, json._tra_brand, json._tra_model, json._tra_SN, json.tra_date, json.tra_price, json.tra_obs, json.itemTag);
    }

    static fromJSONArray(list) {
        var tracked_items = [];
        var item;
        for (let i = 0; i < list.length; i++) {
            item = TrackedItem.fromJSON(list[i]);
            tracked_items.push(item);
        }
        return tracked_items;
    }

    get tra_brand() {
        return this._tra_brand;
    }

    get tra_model() {
        return this._tra_model;
    }

    get tra_SN() {
        return this._tra_SN;
    }

    get tra_id() {
        return this.tra_id;
    }
    get tra_date() {
        return this.tra_date;
    }
    get tra_price() {
        return this.tra_price;
    }
    get tra_obs() {
        return this.tra_obs;
    }
    set tra_obs(tra_obs) {
        this.tra_obs = tra_obs;
    }

}

export default TrackedItem;