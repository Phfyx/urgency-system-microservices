export class CallerDto {
    constructor({ id, name, phone }) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.validate();
    }

    validate() {
        if (!this.name) {
            throw new Error("Name is required");
        }
        if (!this.phone) {
            throw new Error("Phone is required");
        }
    }
}
export default CallerDto;