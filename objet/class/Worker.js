class Worker extends Contact {

    constructor(name = null, email = null, phone = null, poste = null, date_debut = new Date()) {
        super(name, email, phone);

        this._poste = poste;

        if( !(date_debut instanceof Date) ){
            throw new Error("date_debut doit être une instance de Date()");
        }

        this._date_debut = date_debut;
    }

    get poste() {
        return this._poste;
    }

    set poste(value) {
        this._poste = value;
    }

    get date_debut() {
        return this._date_debut;
    }

    set date_debut(value) {
        if( !(value instanceof Date) ){
            throw new Error("set date_debut doit recevoir une instance de Date()");
        }
        this._date_debut = value;
    }

    getDateFormatted() {
        return `${this.date_debut.getDate()}/${this.date_debut.getMonth()}/${this.date_debut.getFullYear()}`;
    }
}