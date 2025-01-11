"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInfos = exports.updateInfos = exports.createInfo = exports.getInfoDetail = exports.getInfos = void 0;
const information_services_1 = require("../services/information.services");
const types_1 = require("../models/types");
const getInfos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("getInfos in progress");
    const result = yield (0, information_services_1.getInfo)();
    console.log("getInfos success", result);
    res.status(200).send(result);
    res.end();
});
exports.getInfos = getInfos;
const getInfoDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const infoId = req.params.infoId;
    console.log("updateInfos in progress", { infoId });
    const result = yield (0, information_services_1.getInfoDetail)(infoId);
    console.log("updateInfos success", result);
    res.status(200).send(result);
    res.end();
});
exports.getInfoDetail = getInfoDetail;
const createInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name = "hai", age = "27" } = req.body;
    // TODO: validation input first
    console.log("create info in progress", { name, age });
    const result = yield (0, information_services_1.createInfo)({ name, age });
    console.log("create info success", result);
    res.status(200).send({ id: result.id });
    res.end();
});
exports.createInfo = createInfo;
const updateInfos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age } = req.body;
    const infoId = req.params.infoId;
    console.log("updateInfos in progress", { infoId, name, age });
    const result = yield (0, information_services_1.updateInfo)({ id: infoId }, { name, age });
    console.log("updateInfos success", result);
    res.status(200).send(result);
    res.end();
});
exports.updateInfos = updateInfos;
const deleteInfos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const infoId = req.params.infoId;
    console.log("deleteInfos in progress", infoId);
    const result = yield (0, information_services_1.updateInfo)({ id: infoId }, { status: types_1.Status.INACTIVE });
    console.log("deleteInfos success", result);
    res.status(200).send(result);
    res.end();
});
exports.deleteInfos = deleteInfos;
//# sourceMappingURL=information.handler.js.map