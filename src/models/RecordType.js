import FileTemplate from "./FileTemplate";

class RecordType {
    constructor(id, name, fileTemplate) {
        this.id = id;
        this.name = name;
        this.recordFile = fileTemplate;
    }

    static fromJSON(json) {
        return new RecordType(json.record_type_id, json.record_type_name, FileTemplate.fromJSON(json.record_type_file_template));
    }
}

export default RecordType;