const nomeDoHeroi = "Verso"
const nivelXP = 5000


if(nivelXP < 1001) {
    var nivel = "ferro"
} else if (nivelXP > 1000 && nivelXP < 2001 ) {
    var nivel = "bronze"
} else if (nivelXP > 2000 && nivelXP < 5001) {
    var nivel = "prata"
} else if (nivelXP > 5000 && nivelXP < 7001) {
    var nivel = "prata"
} else if (nivelXP > 7000 && nivelXP < 8001) {
    var nivel = "platina"
} else if (nivelXP > 8000 && nivelXP < 9001) {
    var nivel = "ascendente"
} else if (nivelXP > 9000 && nivelXP < 10001){
    var nivel = "imortal"
} else {
    nivel = "radiante"
}

console.log("O Herói de nome " + nomeDoHeroi +" está no nível de " + nivel)
