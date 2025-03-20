import { Router } from "express";

import { createNewCaller, getCallers, getCallerById } from "../controllers/callerController.js";


const callerRouter = Router();


callerRouter.get("/callers", getCallers)
callerRouter.get("/callers/:id", getCallerById)
callerRouter.post("/callers", createNewCaller)



export default callerRouter;