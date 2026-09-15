const anos = document.getElementById("anos")
const dias = document.getElementById("dias")
const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
const contagemAnos = document.getElementsByClassName("contagemAnos")[0]
const contagemMeses = document.getElementsByClassName("contagemMeses")[0]
const contagemDias = document.getElementsByClassName("contagemDias")[0]
const contagemHoras = document.getElementsByClassName("contagemHoras")[0]
const contagemMinutos = document.getElementsByClassName("contagemMinutos")[0]
const contagemSegundos = document.getElementsByClassName("contagemSegundos")[0]
const inputdata = document.getElementById("inputdata")
const mensagem = document.getElementById("mensagem")
const meses = document.getElementById("meses")

function atualizarContador(){

    const dataAtual = new Date()
    const dataIntermediaria = new Date(dataAtual)
    const dataDestino = new Date(inputdata.value)
    const mesAtual = dataAtual.getMonth()
    const mesDestino = dataDestino.getMonth()
    const diferencaMesesEntreDatas = mesDestino - mesAtual
    const anoAtual = dataAtual.getFullYear()
    const anoDestino = dataDestino.getFullYear()
    const diferencaAnos = anoDestino - anoAtual
    const diferencaMeses = diferencaAnos * 12
    const totalMeses = diferencaMesesEntreDatas + diferencaMeses
    dataIntermediaria.setMonth(dataIntermediaria.getMonth() + totalMeses)
    const diferencaRestante = dataDestino - dataIntermediaria
    const anosInteiro = Math.floor(totalMeses / 12)
    const mesesRestantes = totalMeses - (anosInteiro * 12)

    const segundosInteiros = diferencaRestante / 1000
    const minutosInteiros = segundosInteiros / 60
    const totalHoras = minutosInteiros / 60
    const diasInteiros = Math.floor(totalHoras / 24)
    const horasRestantes = totalHoras % 24
    const horasInteiras = Math.floor(horasRestantes)

   

    if (anosInteiro > 0){
        contagemAnos.style.display = "block"
        anos.textContent = anosInteiro
    }else{
        contagemAnos.style.display = "none"
    }

    if (mesesRestantes > 0){
        contagemMeses.style.display = "block"
        meses.textContent = mesesRestantes
    }else{
        contagemMeses.style.display = "none"
    }

    if (diasInteiro > 0){
        contagemDias.style.display = "block"
        dias.textContent = diasInteiro
    }else{
        contagemDias.style.display = "none"
    }

    if (horasInteiras > 0){
        contagemHoras.style.display = "block"
        horas.textContent = horasInteiras
    }else{
        contagemHoras.style.display = "none"
    }

    if (minutosInteiros > 0){
        contagemMinutos.style.display = "block"
        minutos.textContent = minutosInteiros
    }else{
        contagemMinutos.style.display = "none"
    }

    segundos.textContent = segundosInteiros

    if (anosInteiro === 0 && diasInteiro === 0 && horasInteiras === 0 && minutosInteiros === 0 && segundosInteiros === 0){
        mensagem.style.display = "block"
        mensagem.textContent = "Contador Zerado"
    }else{
        mensagem.style.display = "none"
    }

}

atualizarContador()

setInterval(atualizarContador, 1000)

inputdata.addEventListener("change", atualizarContador)

