//ULTIMA TENTATIVA (DEEPSEEK):
var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flist')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
    return l.indexOf(Number(n)) != -1;
}

function ad() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = 'Valor ' + num.value + ' adicionado.'
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = `
            <p>ao todo temos ${tot} numeros cadastrados.</p>
            <p>o maior valor informado foi ${maior}</p>
            <p>o menor valor informado foi ${menor}</p>
            <p>somando todos os valores temos ${soma}</p>
            <p>a media dos valores ${media}</p>
        `;
    }
}