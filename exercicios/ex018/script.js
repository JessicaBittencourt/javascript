let num = document.querySelector('input#fnum') // let = var 
let lista = document.querySelector('select#lista') // # = ID
let res = document.querySelector('div#res')
let valores = [] // vetor, vai ser usado para analisar os dados

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
    // verifica se n é um número entre 1 e 100
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    // verifica se o número está na lista
    // -1 indica que o valor não foi encontrado na lista
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { 
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    //só adiciona na lista se for um numero e se ainda não estiver lá.
    // !inLista = não estiver em lista
    // valores é o vetor que é a lista
    // push é adicionar um elemento num vetor
    } else {
        window.alert('Valor inválido ou já encontrado na  lista.')
    }
    num.value = '' // limpa o campo
    num.focus() // cursor volta a piscar
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}