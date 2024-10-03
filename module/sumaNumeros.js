export function sumaNumeros() {
    let numeros = "5 7 10 12 24"
    let separar = numeros.split(" ").map(Number)
    let suma = separar.reduce((acc, num) => acc + num, 0);
    console.log(`La suma de los numeros es: ${suma}`);
}