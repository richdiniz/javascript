var agora =new Date
var hora =agora.getHours()
console.log('Agora são exatamente '+hora+'horas.')
if(hora>0 || hora<=5){
    console.log('MADRUGADA?!Vá dormir!')
}else if(hora<12){
    console.log('Bom Dia!')
}else if(hora<=18){
    console.log('Boa Tarde!')
}else{
    console.log('Boa Noite!')
}