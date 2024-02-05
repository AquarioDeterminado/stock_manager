import User from "./User";
import RecordType from "./RecordType";

class Record {

    constructor(id, user, item, type, description, date) {
        this._id = id;
        this._user = user;
        this._item = item;
        this._type = type;
        this._description = description;
        this._date = date;
    }

    static fromJSON(json) {
        return new Record(json.record_id, new User().fromJson(json.record_user), json.record_item, new RecordType().fromJson(json.record_type), json.record_description, json.record_date);
    }

    static fromJSONArray(list) {
        var records = [];
        var record;
        for (let i = 0; i < list.length; i++) {
            record = new Record.fromJSON(list[i]);
            records.push(record);
        }
        return records;
    }

    get user() {
        return this._user;
    }

    set description(value) {
        this._description = value;
    }

    get id() {
        return this._id;
    }

    get item() {
        return this._item;
    }

    get type() {
        return this._type;
    }

    get description() {
        return this._description;
    }

    get date() {
        return this._date;
    }
}