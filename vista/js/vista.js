class Vista{
    constructor(){

    }

    /**
     * 
     * @param {*} plantilla: Template con el contenido a mostrar
     * @param {*} destino : Area donde se cargara el template
     */
    mostrarPlantilla(plantilla, destino){
        let dest = document.getElementById(destino);
        dest.innerHTML = "";
        let template = document.getElementById(plantilla);
        if (template){
            let clon = template.content.cloneNode(true);
            dest.appendChild(clon);
        }
    }
    limpiarArea(areaDeTrabajo){
        document.getElementById(areaDeTrabajo).innerHTML
    }
}