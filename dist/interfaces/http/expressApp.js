"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const JugadorController_1 = require("../../adapters/controllers/JugadorController");
const EntrenadorController_1 = require("../../adapters/controllers/EntrenadorController");
const multerConfig_1 = require("../../infrastructure/config/multerConfig");
const storageController_1 = require("../../adapters/controllers/storageController");
const diContainer_1 = require("../../infrastructure/diContainer");
const storageService_1 = require("../../application/services/storageService");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const storageService = new storageService_1.StorageService(diContainer_1.storageRepository);
const storageController = new storageController_1.StorageController(storageService);
app.post('/upload', multerConfig_1.upload.single('file'), storageController.upload);
app.post('/api/jugadores', JugadorController_1.createJugador);
app.get('/api/jugadores/:id', JugadorController_1.getJugadorById);
app.get('/api/jugadores', JugadorController_1.getAllJugadores);
app.put('/api/jugadores/:id', JugadorController_1.updateJugador);
app.delete('/api/jugadores/:id', JugadorController_1.deleteJugadorById);
app.post('/api/entrenadores', EntrenadorController_1.createEntrenador);
app.get('/api/entrenadores/:id', EntrenadorController_1.getEntrenadorById);
app.get('/api/entrenadores', EntrenadorController_1.getAllEntrenadores);
app.put('/api/entrenadores/:id', EntrenadorController_1.updateEntrenador);
app.delete('/api/entrenadores/:id', EntrenadorController_1.deleteEntrenadorById);
exports.default = app;
