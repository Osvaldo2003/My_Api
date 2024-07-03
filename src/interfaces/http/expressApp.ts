import express from 'express';
import { createJugador, getJugadorById, getAllJugadores, updateJugador, deleteJugadorById } from '../../adapters/controllers/JugadorController';
import { createEntrenador, getEntrenadorById, getAllEntrenadores, updateEntrenador, deleteEntrenadorById } from '../../adapters/controllers/EntrenadorController';
import { upload } from '../../infrastructure/config/multerConfig';
import { StorageController } from '../../adapters/controllers/storageController';
import { storageRepository } from '../../infrastructure/diContainer';
import { StorageService } from '../../application/services/storageService';
import { EntrenadorService } from '../../application/services/entrenadorService'; // Cambio de maestrosService a entrenadorService
import { entrenadorService } from '../../infrastructure/diContainer'; // Cambio de maestrosService a entrenadorService

const app = express();
app.use(express.json());

const storageService = new StorageService(storageRepository);
const storageController = new StorageController(storageService);

app.post('/upload', upload.single('file'), storageController.upload);
app.post('/api/jugadores', createJugador); // Cambio de /api/alumnos a /api/jugadores y createAlumno a createJugador
app.get('/api/jugadores/:id', getJugadorById); // Cambio de /api/alumnos/:id a /api/jugadores/:id y getAlumnoById a getJugadorById
app.get('/api/jugadores', getAllJugadores); // Cambio de /api/alumnos a /api/jugadores y getAllAlumnos a getAllJugadores
app.put('/api/jugadores/:id', updateJugador); // Cambio de /api/alumnos/:id a /api/jugadores/:id y updateAlumno a updateJugador
app.delete('/api/jugadores/:id', deleteJugadorById); // Cambio de /api/alumnos/:id a /api/jugadores/:id y deleteAlumnoById a deleteJugadorById

app.post('/api/entrenadores', createEntrenador); // Cambio de /api/maestroses a /api/entrenadores y createMaestros a createEntrenador
app.get('/api/entrenadores/:id', getEntrenadorById); // Cambio de /api/maestroses/:id a /api/entrenadores/:id y getMaestrosById a getEntrenadorById
app.get('/api/entrenadores', getAllEntrenadores); // Cambio de /api/maestroses a /api/entrenadores y getAllMaestroses a getAllEntrenadores
app.put('/api/entrenadores/:id', updateEntrenador); // Cambio de /api/maestroses/:id a /api/entrenadores/:id y updateMaestros a updateEntrenador
app.delete('/api/entrenadores/:id', deleteEntrenadorById); // Cambio de /api/maestroses/:id a /api/entrenadores/:id y deleteMaestrosById a deleteEntrenadorById

export default app;
