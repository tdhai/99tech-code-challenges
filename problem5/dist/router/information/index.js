"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const information_handler_1 = require("../../handler/information.handler");
const informationRouter = express_1.default.Router();
informationRouter.get("/infos", information_handler_1.getInfos);
informationRouter.get("/infos/:infoId", information_handler_1.getInfoDetail);
informationRouter.post("/infos", information_handler_1.createInfo);
informationRouter.patch("/infos/:infoId", information_handler_1.updateInfos);
informationRouter.delete("/infos/:infoId", information_handler_1.deleteInfos);
exports.default = informationRouter;
//# sourceMappingURL=index.js.map