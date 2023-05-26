import { Cliente } from "./entities/cliente";
import { Persona } from "./entities/persona";
import { Vendedor } from "./entities/vendedor";
import { Seccion } from "./entities/seccion";

let secciones : Seccion[]=[]
let persona: Persona[] = [];
let cliente: Cliente[] = [];
let vendedor: Vendedor[] = [];

enum seccion{
    electrodomesticos = "Electrodomesticos",
    ropa = "Ropa",
    vehiculos = "Vehiculos"
}

function addCliente(){
    let currentCliente: Cliente = {
        nombre: readHtml("nombre_cliente"),
        correo: readHtml("correo_cliente"),
        direccion: readHtml("direccion_cliente"),
        id: "",
        cedula: 0
    }
    cliente.push(currentCliente)
    console.table(cliente)
}

function addVendedor(){
    let currentVendedor: Vendedor = {
        nombre: readHtml("nombre_vendedor"),
        ubicacion: readHtml("ubicacion_vendedor"),
        producto: readHtml("seccion_seccion") as "Electrodomesticos" | "Ropa" | "Vehiculos"
    }
    vendedor.push(currentVendedor)
    console.table(vendedor)
}

function currentSecciones(): void {
    let currentSeccion: Seccion = {
        name: readHtml("seccion_seccion"),
    }
    secciones.push(currentSeccion);
    console.table(secciones)
}

function readHtml(id:string) : string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}