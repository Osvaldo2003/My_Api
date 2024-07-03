// src/adapters/controllers/jugadorController.ts
import { Request, Response } from 'express';
import { jugadorService } from '../../infrastructure/diContainer'; // Asegúrate de importar el servicio correcto

export const createJugador = async (req: Request, res: Response): Promise<void> => {
    const { nombre, edad, nacionalidad, posicion } = req.body;
    try {
        console.log("Request to create jugador:", nombre);
        const jugador = await jugadorService.createJugador(nombre, edad, nacionalidad, posicion);
        res.status(201).json(jugador);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in createJugador:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const getJugadorById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        console.log("Request to get jugador by ID:", id);
        const jugador = await jugadorService.getJugadorById(id);
        res.status(200).json(jugador);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in getJugadorById:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const getAllJugadores = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("Request to get all jugadores");
        const jugadores = await jugadorService.getAllJugadores();
        res.status(200).json(jugadores);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in getAllJugadores:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const updateJugador = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { nombre, edad, nacionalidad, posicion } = req.body;
    try {
        console.log("Request to update jugador:", id, nombre);
        const jugador = await jugadorService.updateJugador(id, nombre, edad, nacionalidad, posicion);
        res.status(200).json(jugador);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in updateJugador:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};

export const deleteJugadorById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        console.log("Request to delete jugador by ID:", id);
        await jugadorService.deleteJugadorById(id);
        res.status(204).send();
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error in deleteJugadorById:", error.message);
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};
