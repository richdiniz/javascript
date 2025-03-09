function v() {
    var pais = document.getElementById('txtpais').value; // Pega o valor do input
    var res = document.getElementById('res');
    
    if (pais.toLowerCase() == 'brasil') {  // Converte tudo para minúsculas
        res.innerHTML = 'Você é <strong>brasileiro</strong>!<br>';
        res.innerHTML+='<img src="https://imgs.search.brave.com/hqktnWGFQe0IJ1dPR3ce_4aspZmR855xmgbwDIj0emY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL3Zvb2Rv/b3Rpa2lnb2QvbG9n/by5qcy9yYXcvbWFz/dGVyL2pzLnBuZw" alt="" width="400px">'
    } else {
        res.innerHTML = 'Você é <strong>estrangeiro</strong>!';
    }
}



/*CODIGOS:
EU:
function v() {
    var pais=window.document.getElementById('txtpais')
    var res=window.document.getElementById('res')
    if (pais=='brasil') {
        res.innerHTML='brasileiro'
    }
    else{
        res.innerHTML='estrangeiro'
    }}

***************reajuste no meu codigo*********************        
function v() {
    var pais=window.document.getElementById('txtpais')
    var res=window.document.getElementById('res')
    
    if (pais.value === "") {  
        res.innerHTML = '<p><strong id="th">Preencha o campo antes de verificar!</strong></p>';
        return;
    }
    if (pais.value=='brasil') {
        res.innerHTML='<p>você é <strong>brasileiro</trong></p>'
    }
    else{
        res.innerHTML='<p>você é <strong>estrangeiro</strong></p>'
    }}


GPT:
function v() {
    var pais = document.getElementById('txtpais').value; // Pega o valor do input
    var res = document.getElementById('res');
    
    if (pais.toLowerCase() == 'brasil') {  // Converte tudo para minúsculas
        res.innerHTML = 'Você é <strong>brasileiro</strong>!';
    } else {
        res.innerHTML = 'Você é <strong>estrangeiro</strong>!';
    }
}
 */       