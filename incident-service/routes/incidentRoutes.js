import { Router } from "express";

import { createNewIncident, updateIncidentStatut, getAllIncidents } from "../controllers/incidentController.js";

const incidentRouter = Router();

incidentRouter.post("/incidents", createNewIncident);
incidentRouter.put("/incidents/:id", updateIncidentStatut);
incidentRouter.get("/incidents", getAllIncidents);

export default incidentRouter;