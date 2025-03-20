class IncidentDto {
    constructor({ id, localisation, description, status, reportedAt, callerId, operatorId, teamId }) {
        this.id = id;
        this.localisation = localisation;
        this.description = description;
        this.status = status;
        this.reportedAt = reportedAt;
        this.callerId = callerId;
        this.operatorId = operatorId;
        this.teamId = teamId;
        this.validate();
    }

    validate() {
        if (!this.localisation || this.localisation.length < 2) {
            throw new Error("Localisation must be at least 2 characters long");
        }
        if (!this.description || this.description.length < 2) {
            throw new Error("Description must be at least 2 characters long");
        }
        if (!this.status || !["pending", "in_progress", "resolved"].includes(this.status)) {
            throw new Error("Status must be one of 'pending', 'in_progress', 'resolved'");
        }
        if (!this.reportedAt || isNaN(Date.parse(this.reportedAt))) {
            throw new Error("ReportedAt must be a valid date");
        }
        if (!this.callerId) {
            throw new Error("CallerId is required");
        }
        if (!this.operatorId) {
            throw new Error("OperatorId is required");
        }
        if (!this.teamId) {
            throw new Error("TeamId is required");
        }
    }
}

export default IncidentDto;