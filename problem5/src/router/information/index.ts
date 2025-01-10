import express from "express";
import { createInfos, deleteInfos, getInfos, updateInfos } from "../../handler/information.handler";

const informationRouter = express.Router();

informationRouter.get("/infos", getInfos);

informationRouter.get("/infos/:infoId", getInfos);

informationRouter.post("/infos", createInfos);

informationRouter.patch("/infos/infoId", updateInfos);

informationRouter.delete("/infos/:infoId", deleteInfos);

export default informationRouter;
