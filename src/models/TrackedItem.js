class TrackedItem {
    constructor(tra_id, tra_date, tra_price, tra_obs) {
        this.tra_id = tra_id;
        this.tra_date = tra_date;
        this.tra_price = tra_price;
        this.tra_obs = tra_obs;
    }
    static fromJSON(json) {
        return new TrackedItem(json.tra_id, json.tra_date, json.tra_price, json.tra_obs);
    }

    static fromJSONArray(list) {
        var tracked_items = [];
        var item;
        for (let i = 0; i < list.length; i++) {
            item = new TrackedItem.fromJSON(list[i]);
            tracked_items.push(item);
        }
        return tracked_items;
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