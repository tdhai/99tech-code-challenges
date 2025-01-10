import express from "express";
import {
  createInfo,
  deleteInfos,
  getInfoDetail,
  getInfos,
  updateInfos,
} from "../../handler/information.handler";

const informationRouter = express.Router();

informationRouter.get("/infos", getInfos);

informationRouter.get("/infos/:infoId", getInfoDetail);

informationRouter.post("/infos", createInfo);

informationRouter.patch("/infos/:infoId", updateInfos);

informationRouter.delete("/infos/:infoId", deleteInfos);

export default informationRouter;
