export function numeroMenor() {
    let numeros = "5 7 99 34 54 2 12" 
    let separar = numeros.split(" ").map(Number)
    let numMenor = Math.min(...separar)
    console.log(`El numero menor es: ${numMenor} `);
    
}