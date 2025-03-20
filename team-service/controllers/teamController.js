import { createTeam, getAllTeams, getTeamById } from "../repositories/teamRepository.js";
import TeamDto from "../dtos/teamDto.js";


export const createTeam = async (req, res) => {
    try {
        const teamDto = new TeamDto(req.body);

        const newTeam = await createTeam({
            type: teamDto.type,
            availability: teamDto.availability,
        });

        const responseDto = new TeamDto({
            id: newTeam._id,
            type: newTeam.type,
            availability: newTeam.availability,
        });

        res.status(200).json({ message: "Team create with sucess", responseDto })
    } catch (err) {
        if (err.message.includes("required")) {
            res.status(400).json({ error: err.message })
        }
        res.status(500).json({ error: "Internal server error" })
    }
}


export const getTeams = async (req, res) => {
    try {
        const teams = await getAllTeams();
        const teamsDtos = teams.map(team => new TeamDto({
            id: team._id,
            type: team.type,
            availability: team.availability,
        }));

        res.status(200).json(teamsDtos)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getTeam = async (req, res) => {
    try {
        const team = await getTeamById(req.params.id);

        if (!team) {
            return res.status(404).json({ error: "Operator not found" })
        }

        const teamDto = new TeamDto({
            id:team._id,
            type: team.type,
            availability: team.availability,
        });

        res.status(200).json(teamDto)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
