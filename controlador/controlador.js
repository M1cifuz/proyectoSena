vista = new Vista()


/**
 *  Se ejecuta al inicar
 */
window.addEventListener('load', function() {

    vista.mostrarPlantilla('bienvenidaUsuario', 'areaDeTrabajo');
    
});
/**
 * Navegacion de boton de vista Bienvenida para vista Iniciar sesion
 */
function mostrarPantallaIncicioSesion(){
    vista.mostrarPlantilla('encabezado1','contenedorEncabezado');
    vista.mostrarPlantilla('formIniciarSesion', 'areaDeTrabajo');
    vista.mostrarPlantilla('footer1','pieDePagina');
}
/** Navegacion de boton de vista Bienvenida para vista Registrar */
function mostrarPantallaRegistrar(){
    vista.mostrarPlantilla('encabezado1', 'contenedorEncabezado');
    vista.mostrarPlantilla('registroUsuario', 'areaDeTrabajo')
    vista.mostrarPlantilla('footer1','pieDePagina');
}
/** Navegacion de boton de vista Iniciar sesion para vista Producto */
function mostrarPantallaPrincipal() {
    vista.mostrarPlantilla('headerProductos', 'contenedorEncabezado');
    vista.mostrarPlantilla('contenidoProducto', 'areaDeTrabajo');
    vista.mostrarPlantilla('footerProducto','pieDePagina')
}
/** Navegacion de boton Regresar  de vista Iniciar sesion para vista Bienvenida */
function mostrarPantallaBienvenida() {
    vista.mostrarPlantilla('encabezado1', 'contenedorEncabezado');
    vista.mostrarPlantilla('bienvenidaUsuario', 'areaDeTrabajo');
    vista.mostrarPlantilla('footer1', 'pieDePagina');
}
/**ingresarinicio */
function mostrarPantallaIncicioSesionRegresar(){
    vista.mostrarPlantilla('encabezado1', 'contenedorEncabezado');
    vista.mostrarPlantilla('formIniciarSesion', 'areaDeTrabajo');
    vista.mostrarPlantilla('footer1', 'pieDePagina');
}
/**detalleproducto */
function mostrarPantallaDetallesProducto(){
    vista.mostrarPlantilla('headerProductos', 'contenedorEncabezado');
    vista.mostrarPlantilla('contenidoDetallesProductos', 'areaDeTrabajo');
    vista.mostrarPlantilla('footerVista4', 'pieDePagina');
}
/**agregarcarrito */
function mostrarPantallaCarrito(){
    vista.mostrarPlantilla('contenidoCarritoCompra', 'areaDeTrabajo');
    vista.limpiarArea('pieDePagina');
}
/**Ayuda*/
function mostrarPantallaAyuda(){
    vista.limpiarArea('contenedorEncabezado');
    vista.mostrarPlantilla('contendioFormularioAyuda' ,'areaDeTrabajo');
    vista.limpiarArea('pieDePagina');
}
function mostrarPantallaPreguntas(){
    vista.mostrarPlantilla('headerAyudaPedido','contenedorEncabezado')
    vista.mostrarPlantilla('contenidoPreguntasFrecuentes','areaDeTrabajo')
}
function mostrarPantallaAyudaPedido(){
    vista.mostrarPlantilla('contenidoAyudaPedido','areaDeTrabajo')
}
/**retroceder */
function retrocederPantallaAyudaPedido(){
    vista.mostrarPlantilla('contenidoPreguntasFrecuentes','areaDeTrabajo')
}
