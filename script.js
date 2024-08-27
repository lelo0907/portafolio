// script.js

// Función de encriptación
document.getElementById("encriptar").addEventListener("click", function() {
    let texto = document.getElementById("textoUsuario").value;
    let textoEncriptado = encriptarTexto(texto);
    document.getElementById("resultadoTexto").value = textoEncriptado;
});

// Función de desencriptación
document.getElementById("desencriptar").addEventListener("click", function() {
    let texto = document.getElementById("textoUsuario").value;
    let textoDesencriptado = desencriptarTexto(texto);
    document.getElementById("resultadoTexto").value = textoDesencriptado;
});

// Función para encriptar el texto según las reglas dadas
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto según las reglas dadas
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Función para copiar el texto al portapapeles
document.getElementById("copiarTexto").addEventListener("click", function() {
    let textoResultado = document.getElementById("resultadoTexto");
    textoResultado.select();  // Selecciona el texto
    document.execCommand("copy");  // Copia el texto seleccionado al portapapeles
    alert("Texto copiado al portapapeles");  // Alerta opcional para confirmar que se copió
});

// Limpiar texto
document.getElementById("limpiar").addEventListener("click", function() {
    document.getElementById("textoUsuario").value = "";
    document.getElementById("resultadoTexto").value = "";
});

document.getElementById("textoUsuario").addEventListener("input", function() {
    let input = this.value;

    // Convertir todo a minúsculas
    input = input.toLowerCase();

    // Eliminar acentos
    input = input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Reemplazar el valor del textarea
    this.value = input;
});

