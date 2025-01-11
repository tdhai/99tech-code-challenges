"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("./types");
const { Schema, model } = mongoose_1.default;
const informationSchema = new Schema({
    name: String,
    age: Number,
    status: { type: String, enum: Object.values(types_1.Status), default: types_1.Status.ACTIVE },
});
const Information = model("Information", informationSchema);
exports.default = Information;
//# sourceMappingURL=information.models.js.map