var url = "http://localhost:81";

// Función para agregar el texto dentro del párrafo existente en el HTML
function agregarTexto() {
    var elementos = document.getElementsByClassName('url_span');
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].innerHTML += url;
    }
}

// Llamar a la función agregarTexto() al cargar la página
window.onload = function() {
    agregarTexto();
};