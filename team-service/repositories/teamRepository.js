import Team from "../models/Team.js"

export const createTeam = async (data) => {


return await Team.create({...data})

}

export const getAllTeams = async () => {

return await Team.find({})
}

export const getTeamById = async (id) => {
    return await Team.findById(id)
}