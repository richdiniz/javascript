var valores=[0, 1, 7, 4, 2, 9]
for(var pos=0; pos<valores.length; pos++){
    console.log('a posição '+pos+' tem o valor '+valores[pos])
}


//existe outra maneira de fazer o mesmo:
console.log('existe outra maneira de fazer isso:')
for(pos in valores){
    console.log('A POSIÇÃO '+pos+' TEM O VALOR '+valores[pos])
}


//pesquisando por valores...
var pq=valores.indexOf(3)
console.log('procurando numero 9... Sua posição é '+valores.indexOf(9))
if(pq==-1){
    console.log('procurando numero 3...não encontrado')
}else{
    console.log('procurando numero 3... Sua posição é '+pq)
}