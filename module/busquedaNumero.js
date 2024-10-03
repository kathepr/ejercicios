export function busqueda() {
    let valores = "5 7 99 34 54 2 12"
    let numBuscar= 54
    let separar = valores.split(" ").map(Number)
    if (separar.includes(numBuscar)) {
        console.log(`El numero ${numBuscar} se encuentra en la lista.`);
    }
    else {
        console.log(`El numero ${numBuscar} no se encuentra en la lista.`);
    }
}