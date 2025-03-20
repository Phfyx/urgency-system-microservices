import { getAvailableTeam, releaseTeam, blockTeam } from "../services/teamService.js";
import { getCallerById, getOperatorById } from "../services/callerService.js";
import { createIncident, updateIncidentStatus, fetchIncidents } from "../repositories/incidentRepository.js";
import IncidentDto from "../dtos/incidentDto.js";

export const createNewIncident = async (req, res) => {
    try {
        const { localisation, description, callerId, operatorId } = req.body;
        const caller = await getCallerById(callerId);
        const operator = await getOperatorById(operatorId);
        const team = await getAvailableTeam();
        if (!caller || !operator || !team) {
            throw new Error("Caller, Operator or Team not found");
        }
        console.log(req.body, caller, operator, team);
        const incident = await createIncident(
            {localisation,
            description,
            callerId,
            operatorId,
            teamId: team.id
            }
        );
        await blockTeam(team.id);
        res.status(201).json({ incident });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const updateIncidentStatut = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const incident = await updateIncidentStatus(id, status);
        if (status === "resolved") {
            await releaseTeam(incident.teamId);
        }
        res.status(200).json({ incident });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getAllIncidents = async (req, res) => {
    try {
        const incidents = await fetchIncidents();
        res.status(200).json({ incidents });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
