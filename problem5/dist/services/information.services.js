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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInfo = exports.getInfoDetail = exports.getInfo = exports.createInfo = void 0;
const information_models_1 = __importDefault(require("../models/information.models"));
const types_1 = require("../models/types");
const createInfo = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, age, }) {
    try {
        return information_models_1.default.create({ name, age });
    }
    catch (error) {
        console.log("🚀 ~ createInfo error:", error);
        throw error;
    }
});
exports.createInfo = createInfo;
const getInfo = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (status = types_1.Status.ACTIVE) {
    try {
        return information_models_1.default.find({ status });
    }
    catch (error) {
        console.log("🚀 ~ getInfo error:", error);
        throw error;
    }
});
exports.getInfo = getInfo;
const getInfoDetail = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // TODO: check status first and return 404 if not have active
        return information_models_1.default.findOne({ _id, status: types_1.Status.ACTIVE });
    }
    catch (error) {
        console.log("🚀 ~ getInfoDetail error:", error);
        throw error;
    }
});
exports.getInfoDetail = getInfoDetail;
const updateInfo = (filter, update) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, age, status } = update;
        // TODO: check status first and then update
        return information_models_1.default.updateOne({ _id: filter.id }, { name, age, status });
    }
    catch (error) {
        console.log("🚀 ~ updateInfo error:", error);
        throw error;
    }
});
exports.updateInfo = updateInfo;
//# sourceMappingURL=information.services.js.map