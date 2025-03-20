import { Router } from "express";

import { createNewOperator, getOperators, getOperatorById } from "../controllers/operatorController.js";


const operatorRouter = Router();


operatorRouter.get("/operators", getOperators)
operatorRouter.get("/operators/:id", getOperatorById)
operatorRouter.post("/operators", createNewOperator)

export default operatorRouter