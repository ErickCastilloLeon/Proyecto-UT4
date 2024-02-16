// Variable global para almacenar el script actual
var scriptActual = null;

// Función para cargar y recargar algo
function ReLoad(archivo) {
    // Eliminar el script anterior si existe
    if (scriptActual) {
        scriptActual.parentNode.removeChild(scriptActual);
    }

    // Crear un nuevo script
    var scriptNuevo = document.createElement('script');
    scriptNuevo.src = archivo;
    scriptNuevo.id = 'script-dinamico';

    // Agregar el nuevo script al final del cuerpo del documento
    document.body.appendChild(scriptNuevo);

    // Actualizar la variable global
    scriptActual = scriptNuevo;
}