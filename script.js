var inputDormir = document.getElementById("id1")
var inputAcordar = document.getElementById("id2")

var resultado = document.getElementById("resultado")



function hsono() {

    var dormir = inputDormir.value
    var acordar = inputAcordar.value

    a = dormir.split(':')
    b = acordar.split(':')

    horaDormir = Number(a[0])
    horaAcordar = Number(b[0])
    minDormir = Number(a[1])
    minAcordar = Number(b[1])

    
    min = Number(a[1])+Number(b[1])
    
    if( horaDormir > horaAcordar ){ 

        sonototal = horaAcordar + ( 24 - horaDormir ) + " horas e " + min + " minutos"
    }

    if( horaDormir > horaAcordar && minDormir == minAcordar ) {

        min = 0
        sonototal = (horaAcordar + ( 24 - horaDormir) ) + " horas"
    }
    
    if( horaDormir > horaAcordar && minDormir != 0 && minAcordar == 0){

        min = 60 - minDormir
        sonototal = (horaAcordar + ( 24 - horaDormir )) - 1 + " horas e " + min + " minutos"
    }

    if( horaDormir > horaAcordar && minAcordar > minDormir ){

        min = minAcordar - minDormir
        sonototal = (horaAcordar + ( 24 - horaDormir) )  + " horas e " + min + " minutos"
    }
    
    if ( horaAcordar > horaDormir){

        sonototal = horaAcordar - horaDormir + " horas e " + min + " minutos"
    }
    
    if ( horaAcordar > horaDormir && minDormir != 0 && minAcordar == 0){

        min = 60 - minDormir
        sonototal = (horaAcordar - horaDormir) - 1 + " horas e " + min + " minutos"

    }
    
    if( horaAcordar > horaDormir && minAcordar > minDormir){

        min = minAcordar - minDormir
        sonototal = (horaAcordar - horaDormir) + " horas e " + min + " minutos"
    }

    if( horaDormir == horaAcordar && minDormir == minAcordar){
        sonototal = 24 + " horas"
    }

    if( horaDormir == horaAcordar && minDormir < minAcordar){

        sonototal = minAcordar - minDormir + " minutos"
    }

    resultado.innerHTML = `Você terá ${sonototal} de sono.`
}
