import { Router } from "express";

import { createNewCaller, getCallers, getCaller } from "../controllers/callerController.js";


const callerRouter = Router();


callerRouter.get("/callers", getCallers)
callerRouter.get("/callers/:id", getCaller)
callerRouter.post("/callers", createNewCaller)



export default callerRouter;