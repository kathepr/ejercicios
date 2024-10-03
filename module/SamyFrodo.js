export function verificarSamYFrodo() {
    let nombress = "Sam Orco Frodo";
    let nombres = nombress.split(" ");

    let samIndex = nombres.indexOf("Sam");
    let frodoIndex = nombres.indexOf("Frodo");
        if (Math.abs(samIndex - frodoIndex) === 1) {
            console.log("Sam y Frodo están juntos, ¡Frodo está a salvo!");
        } else {
            console.log("Sam y Frodo están separados, ¡Frodo está en peligro!");
        }

}