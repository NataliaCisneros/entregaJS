console.log("Creá acá tu checklist viajera :D ");

let checkList = [];

function agregarItem(itemAAgregar){
    checkList.push(itemAAgregar);
    console.log("El ítem " + itemAAgregar + " se ha agregado.");
}

function borrarItem(itemABorrar){
    let encontrado = false;
    for (let index = 0; index < checkList.length; index++) {
        if (itemABorrar == checkList[index]) {
            checkList.splice(index, 1);
            encontrado = true;
            break;
        }
    }
    if (encontrado == false){
        console.log("No se ha encontrado el ítem en la checklist.");
    }else{
        console.log("El ítem " + itemABorrar + " se ha borrado.");
    }
}

function modificarItem(itemAModificar){
    let encontrado = false;
    for (let index = 0; index < checkList.length; index++) {
        if (itemAModificar == checkList[index]) {
            checkList[index] = prompt("Modifique el ítem.")
            encontrado = true;
            break;
        }
    }
    if (encontrado == false){
        console.log("No se ha encontrado el ítem en la checklist.");
    }else{
        console.log("El ítem " + itemAModificar + " se ha modificado.");
    }
}

function mostrarItems(){
    console.log("Ítems del checklist: \n")
    for (let index = 0; index < checkList.length; index++) {
        console.log(checkList[index]);
    }
}

let opcion = parseInt(prompt("Elegí una opción: \n 1- Agregar ítem \n 2- Borrar ítem \n 3- Modificar ítem \n 4- Mostrar ítems \n 5- Salir"));

while(opcion !== 5){
    switch (opcion){
        case 1:
            let itemAAgregar = prompt("Ingrese el nombre del ítem a agregar: ");
            agregarItem(itemAAgregar);
            break;
        case 2:
            let itemABorrar = prompt("Ingrese el nombre del ítem a borrar: ");
            borrarItem(itemABorrar);
            break;
        case 3:
            let itemAModificar = prompt("Ingrese el nombre del ítem a modificar: ");
            modificarItem(itemAModificar);
            break;
        case 4:
            mostrarItems();
            break;
        default:
            alert("Opción incorrecta.");
            break;
    }
    opcion = parseInt(prompt("Elegí una opción: \n 1- Agregar ítem \n 2- Borrar ítem \n 3- Modificar ítem \n 4- Mostrar ítems \n 5- Salir"));
}

alert("Gracias por utilizar checklist viajera :D");