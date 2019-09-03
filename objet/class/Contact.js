class Contact {

    constructor(name = null, email = null, phone = null){
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get phone() {
        return this._phone;
    }

    set phone(value) {
        this._phone = value;
    }
}