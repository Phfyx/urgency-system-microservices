import Team from "../models/Team.js"

export const createTeam = async (data) => {
    return await Team.create({...data})
}

export const getAllTeams = async () => {
    return await Team.find({})
}

export const updateAvailability = async (id, availability) => {
    return await Team.findByIdAndUpdate(id, { availability})
}

export const getAvailableTeam = async () => {
    return await Team.findOne({ availability: true }).sort({ updatedAt: -1 })
}