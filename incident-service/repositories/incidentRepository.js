import Incident from "../models/Incident.js";

export const createIncident = async (data) => {
    return await Incident.create({ ...data })
}

export const getAllIncidents = async () => {
    return await Incident.find({})
}

export const updateIncidentStatus = async (id, status) => {
    return await Incident.findByIdAndUpdate(id, { status })
}
