import { Router } from "express";
import teamRouter from "./teamRouter.js";


const router = Router();

router.use("/teams", teamRouter);

export default router;