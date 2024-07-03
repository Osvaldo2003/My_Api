// src/domain/repositories/IEntrenadorRepository.ts

import Entrenador from '../models/entrenador'; // Asegúrate de que la importación refleje el nuevo nombre

export interface IEntrenadorRepository {
    save(entrenador: Entrenador): Promise<Entrenador>;
    findById(id: string): Promise<Entrenador | null>;
    findAll(): Promise<Entrenador[]>;
    update(entrenador: Entrenador): Promise<Entrenador>;
    deleteById(id: string): Promise<void>;
}
