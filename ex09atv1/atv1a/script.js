function carregar(){
    var msg= window.document.getElementById('msg')
    var img= window.document.getElementById('imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML= 'agora são '+hora+'horas.'


    if(hora>=1 && hora<=5){
        //'MADRUGADA?Vá dormir!'
        img.src='https://img.freepik.com/fotos-gratis/silhuetas-de-colinas-e-postes-de-luz-sob-um-ceu-nublado-durante-um-lindo-por-do-sol_181624-28611.jpg'
        document.body.style.background='#440b5f'
        msg.innerHTML+=' MADRUGADA?Vá dormir!'
    }else if(hora>=6 && hora<12){
        //'Bom Dia!'
        img.src='https://i.pinimg.com/736x/d8/83/a3/d883a3784e5399c0eea5de05a0293a04.jpg'
        document.body.style.background='#1da4fd'
        msg.innerHTML+=' Bom Dia!'
    }else if(hora<18){
        //'Boa Tarde!'
        img.src='https://i.pinimg.com/736x/2c/17/6d/2c176d43a73e6357f79be2e8f90d1254.jpg'
        document.body.style.background='#ffda44'
        msg.innerHTML+=' Boa Tarde!'
    }else{
        //'Boa Noite!'
        img.src='https://i.pinimg.com/736x/6d/a0/90/6da0909d3171faa0d3ed958b90a8ae72.jpg'
        document.body.style.background='#2c3e50'
        msg.innerHTML+=' Boa Noite!'
    }
}