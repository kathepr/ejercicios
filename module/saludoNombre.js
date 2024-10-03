export function separarNombreSaludo() {
    let nombres = "ana tatiana miguel"
    let separarar = nombres.split(" ")
    separarar.forEach(nombres => {
        console.log(`hola ${nombres}`);
    });
}

