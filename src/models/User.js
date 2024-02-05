class User {
    constructor(id, name, email, password, department, creationDate, nMeca) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.creationDate = creationDate;
        this.nMeca = nMeca;
    }

    static fromJSON(json) {
        return new User(json.id, json.name, json.email, json.password, json.department, json.creationDate, json.nMeca);
    }

}

export default User;