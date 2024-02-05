class FileTemplate {
    constructor(id, name, ) {
        this.id = id;
        this.name = name;
    }

    static fromJSON(json) {
        return new FileTemplate(json.file_template_id, json.file_template_name);
    }
}

export default FileTemplate;