"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/database/mongoConnection.ts
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI, {});
        console.log("Connected to MongoDB database");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};
exports.default = connectMongoDB;
