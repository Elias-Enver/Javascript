var idade = 22 
if(idade < 16){
    console.log('Não Vota')
} else if (idade >=16 && idade <18 || idade>65){
        console.log('Voto Opcional')
} else {
        console.log('Voto Obrigatorio')
}
// outro exemplo //
var agora = new Date()
var hora = agora.getHours
console.log(`Agora são ${hora}`)
if(hora<12){
    console.log('Bom dia')
}else if(hora <=18){
    console.log('Boa Tarde')
}else{
    console.log('Boa Noite')
}

//
var agora = new date()
var dia = agora.getDay()
console.log(dia)
switch(dia){
    case 0 :
        console.log('Domingo')
        break
    case 1 :
        console.log('Segunda')
        break
    case 2 :
        console.log('Terça')
        break
    case 3 :
        console.log('Quarta')
        break
    case 4 :
        console.log('Quinta')
        break
    case 5 :
        console.log('sexta')
        break
    case 6 :
        console.log('Sabado')
        break
    default:
        console.log('Data invalida')
        break// opcional
}