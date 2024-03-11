vista = new Vista()


/**
 *  Se ejecuta al inicar
 */
window.addEventListener('load', function() {

    vista.mostrarPlantilla('bienvenidaUsuario', 'areaDeTrabajo');
    
});

function mostrarPantallaIncicioSesion(){
    vista.mostrarPlantilla('encabezado1','contenedorEncabezado');
    vista.mostrarPlantilla('formIniciarSesion', 'areaDeTrabajo');
    vista.mostrarPlantilla('footer1','pieDePagina');
}

function mostrarPantallaRegistrar(){
    vista.mostrarPlantilla('encabezado1', 'contenedorEncabezado');
    vista.mostrarPlantilla('registroUsuario', 'areaDeTrabajo')
    vista.mostrarPlantilla('footer1','pieDePagina');
}


function mostrarPantallaPrincipal() {
    vista.mostrarPlantilla('headerProductos', 'contenedorEncabezado');
    vista.mostrarPlantilla('contenidoProducto', 'areaDeTrabajo');
    vista.mostrarPlantilla('footerProducto', 'pieDePagina');
    
}



