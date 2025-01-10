import { Request } from "express";
import {
  createInfo as createInfoService,
  getInfo as getInfoService,
  getInfoDetail as getInfoDetailService,
  updateInfo as updateInfoService,
} from "../services/information.services";
import { Status } from "../models/types";

export const getInfos = async (req: any, res: any, next: any) => {
  console.log("getInfos in progress");

  const result = await getInfoService();

  console.log("getInfos success", result);

  res.status(200).send(result);
  res.end();
};

export const getInfoDetail = async (req: any, res: any, next: any) => {
  const infoId = req.params.infoId;

  console.log("updateInfos in progress", { infoId });

  const result = await getInfoDetailService(infoId);

  console.log("updateInfos success", result);

  res.status(200).send(result);
  res.end();
};

export const createInfo = async (req: Request, res: any, next: any) => {
  const { name = "hai", age = "27" } = req.body;
  // TODO: validation input first

  console.log("create info in progress", { name, age });

  const result = await createInfoService({ name, age });

  console.log("create info success", result);

  res.status(200).send({ id: result.id });
  res.end();
};

export const updateInfos = async (req: any, res: any, next: any) => {
  const { name, age } = req.body;
  const infoId = req.params.infoId;

  console.log("updateInfos in progress", { infoId, name, age });

  const result = await updateInfoService({ id: infoId }, { name, age });

  console.log("updateInfos success", result);

  res.status(200).send(result);
  res.end();
};

export const deleteInfos = async (req: any, res: any, next: any) => {
  const infoId = req.params.infoId;

  console.log("deleteInfos in progress", infoId);

  const result = await updateInfoService(
    { id: infoId },
    { status: Status.INACTIVE }
  );

  console.log("deleteInfos success", result);

  res.status(200).send(result);
  res.end();
};
