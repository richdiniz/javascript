var amigo={nome:'josé',
 sexo:'M',
peso:85.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
console.log(amigo.nome+' pesa '+amigo.peso+'kg')
amigo.engordar(10)
console.log(amigo.nome+' pesa '+amigo.peso+'kg')