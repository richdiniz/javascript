var num= [31,18]
//num[2]=15 --- adciona um valor numa posição
//num.push(1) --- adciona um valor a ultima posição
//num.length --- verifica quantas posições tem o vetor.Exemplo: var vetor=[0,1,2] = 3 posições
//num.sort() --- ordena em ordem crescente

console.log('nosso vetor é o: '+num)
num[1]=15
console.log('nosso vetor agora é assim: '+num)
console.log('nosso vetor tem '+num.length+' posições')
num.push(16)
console.log('nosso vetor agora é assim: '+num+'. com '+num.length+' posições')
console.log('nosso vetor está ordenado! agora é assim: '+num.sort())