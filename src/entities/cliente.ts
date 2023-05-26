import { Persona } from "./persona";

export interface Cliente extends Persona{
        id: string;
        correo: string;
        direccion: string;
}