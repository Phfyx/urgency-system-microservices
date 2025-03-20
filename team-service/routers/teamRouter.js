import { Router } from "express";

import { createTeam, getTeams, getTeam } from "../controllers/teamController.js";


const teamRouter = Router();


teamRouter.get("/", getTeams)
teamRouter.post("/", createTeam)
teamRouter.get("/:id", getTeam)

export default teamRouter