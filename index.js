let nivel = ""

function gerarQtdVitorias(){
    return Math.floor(Math.random() * 270) + 1    
}

let qtdVitorias = gerarQtdVitorias()

function gerarQtdDerrotas(){
    return Math.floor(Math.random() * 200) + 1     
}

let qtdDerrotas = gerarQtdDerrotas()

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas
}

let saldoVitorias = calcularSaldo(qtdVitorias, qtdDerrotas)

function calcularNivel(saldoVitorias){

    if(saldoVitorias <= 10){
        nivel = "Ferro"
    } else if (saldoVitorias > 10 && saldoVitorias <= 20){
        nivel = "Bronze"
    } else if (saldoVitorias > 20 && saldoVitorias <= 50){
        nivel = "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80){
        nivel = "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90){
        nivel = "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100){
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }
    return nivel
}

nivel = calcularNivel(saldoVitorias)


console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)