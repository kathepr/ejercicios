export function indices() {
    let numeros = "5 7 12 34 54 2 12"
    let numerobuscado = 7
    let separar = numeros.split(" ").map(Number)
    let indice = separar.indexOf(numerobuscado);

    if (indice !== -1) {
        console.log(`El valor ${numerobuscado} se encuentra en el índice ${indice}.`);
    } else {
        console.log(`El valor ${numerobuscado} NO se encuentra en la lista.`);
    }
}