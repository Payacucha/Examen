import { Persona } from "./persona"

export interface Vendedor extends Persona{
    producto: string;
    ubicacion: string;
}