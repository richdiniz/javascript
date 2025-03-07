var pais=document.getElementById('txtpais')

function v(){
    if(pais=='brasil'){
        res.innerHTML='<p>Você é um  <strong>brasileiro</strong></p>'
    }else{
        res.innerHTML='<p>Você é um <strong>Estrangeiro</strong></p>'
    }
}
//||'Brasil'||'BRASIL'||'BR'||'br'