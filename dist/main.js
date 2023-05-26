"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let secciones = [];
let persona = [];
let cliente = [];
let vendedor = [];
var seccion;
(function (seccion) {
    seccion["electrodomesticos"] = "Electrodomesticos";
    seccion["ropa"] = "Ropa";
    seccion["vehiculos"] = "Vehiculos";
})(seccion || (seccion = {}));
function addCliente() {
    let currentCliente = {
        nombre: readHtml("nombre_cliente"),
        correo: readHtml("correo_cliente"),
        direccion: readHtml("direccion_cliente"),
        id: "",
        cedula: 0
    };
    cliente.push(currentCliente);
    console.table(cliente);
}
function addVendedor() {
    let currentVendedor = {
        nombre: readHtml("nombre_vendedor"),
        ubicacion: readHtml("ubicacion_vendedor"),
        producto: readHtml("seccion_seccion")
    };
    vendedor.push(currentVendedor);
    console.table(vendedor);
}
function currentSecciones() {
    let currentSeccion = {
        name: readHtml("seccion_seccion"),
    };
    secciones.push(currentSeccion);
    console.table(secciones);
}
function readHtml(id) {
    return document.getElementById(id).value;
}
