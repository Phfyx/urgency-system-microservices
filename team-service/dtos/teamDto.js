class TeamDto {
    constructor({ id, type, availability }) {
        this.id = id;
        this.type = type;
        this.availability = availability;
        this.validate();
    }

    validate() {
        if (!this.type || this.type.length < 2) {
            throw new Error("Type must be at least 2 characters long");
        }
        if (typeof this.availability !== "boolean") {
            throw new Error("Availability must be a boolean");
        }
    }
}

export default TeamDto;