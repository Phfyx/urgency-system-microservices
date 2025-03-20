class CallerDto {
    constructor({ id, name, phone }) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.validate();
    }

    validate() {
        if (!this.name || this.name.length < 2) {
            throw new Error("Name must be at least 2 characters long");
        }
        if (!this.phone || this.phone.length < 10) {
            throw new Error("Phone must be at least 10 digits");
        }
    }
}

export default CallerDto;