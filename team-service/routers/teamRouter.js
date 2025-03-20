import { Router } from "express";

import { createNewTeam, getTeams, getAvailableTeams, updateTeamAvailability } from "../controllers/teamController.js";


const teamRouter = Router();


teamRouter.get("/", getTeams)
teamRouter.post("/", createNewTeam)
teamRouter.get("/available", getAvailableTeams)
teamRouter.patch("/:id", updateTeamAvailability)

export default teamRouter