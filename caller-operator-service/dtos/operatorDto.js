class OperatorDto {
    constructor({ name, phone }) {
        this.name = name;
        this.validate();
    }

    validate() {
        if (!this.name) {
            throw new Error("Name is required");
        }
    }
}
export default OperatorDto;