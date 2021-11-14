var agora = new Date()
var hora  = agora.getHours()
console.log(`agora são exatamente  ${hora} horas.`)
if (hora<12  && hora>8){
    console.log ('bom dia')

}else if (hora < 19 && hora> 12){
    console.log("Boa tarde!!")
}else if(hora > 19){
    console.log('Boa noite')
}else{
    console.log('boa madrugda')
}