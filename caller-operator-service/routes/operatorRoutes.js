import { Router } from "express";

import { createNewOperator, getOperators, getOperator } from "../controllers/operatorController.js";


const operatorRouter = Router();


operatorRouter.get("/operators", getOperators)
operatorRouter.get("/operators/:id", getOperator)
operatorRouter.post("/operators", createNewOperator)

export default operatorRouter