import UntrackedItem from "./UntrackedItem.js";

class Facture {
    constructor(id, date, items, ) {
        this._id = id;
        this._date = date;
        this._items = items;
    }

    static fromJSON(json) {
        return new Facture(json.facture_id, json.facture_date, UntrackedItem.fromJSONArray(json.facture_items));
    }

    static fromJSONArray(list) {
        var factures = [];
        var facture;
        for (let i = 0; i < list.length; i++) {
            facture = Facture.fromJSON(list[i]);
            factures.push(facture);
        }
        return factures;
    }

}