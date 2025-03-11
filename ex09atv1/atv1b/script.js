function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano=document.getElementById('txtano')
    var res= document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('[ERRO]Verifique os dados e tente novamente!')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero= ''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero= 'Homem'
                if(idade>=0 && idade<12){
                    //criança
                    img.setAttribute('src','https://i.pinimg.com/736x/fe/fe/e6/fefee6b82f9a3787ec0acc5b7a7c91f7.jpg')
                }else if(idade<19){
                    //jovem
                    img.setAttribute('src','https://i.pinimg.com/736x/97/1e/c9/971ec9cb69b156b83fcd670b1ca27157.jpg')
                }else if(idade<50){
                    //adulto
                    img.setAttribute('src','https://i.pinimg.com/736x/b6/18/f9/b618f940aa7806b6772f2b432dc33e79.jpg')
                }else{
                    //idoso
                    img.setAttribute('src','https://assetsio.gnwcdn.com/spider-man-stan-lee-mod.jpg?width=1200&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp')
                }
        }else{
           genero= 'Mulher'
                if(idade>=0 && idade<12){
                    //criança
                    img.setAttribute('src','https://i.pinimg.com/736x/68/7d/6b/687d6bb118de8cc674d7235641d0077d.jpg')
                }else if(idade<19){
                    //jovem
                    img.setAttribute('src','https://i.pinimg.com/736x/00/5a/f6/005af6fef5467cca3702b30152696e26.jpg')
                }else if(idade<50){
                    //adulto
                    img.setAttribute('src','https://i.pinimg.com/736x/97/4f/b2/974fb2ed3ded475734ddeaee45bb83d2.jpg')
                }else{
                    //idoso
                    img.setAttribute('src','https://i.pinimg.com/736x/2f/39/85/2f3985d49b4b82a6446e994cf2fd5690.jpg')
                }
        }
        res.style.textAlign='center'
        res.innerHTML='<p>Detectamos '+genero+' com '+idade+'anos.</p>'
        res.appendChild(img)
    }
}