//INPUTS: Número e botão
let entradaNumero = document.querySelector('#numero')

let enviar = document.querySelector('#enviar')
enviar.addEventListener('click', verificanumero)

let resultados = document.querySelector('#resultados')
resultados.setAttribute("Size","2")


let gerar = document.querySelector('#gerar')
gerar.addEventListener('click', gerarResultados)

let arraylist = document.getElementById('arraylist')

let botaoLimpar = document.querySelector('#botaoLimpar')
botaoLimpar.addEventListener('click', limpar)

let lista = [] 


//FUNÇÃO QUE VERIFICA A ENTRADA ENTRE 0 E 100
function verificanumero(){
    Number(entradaNumero)
    if (entradaNumero.value < 1 || entradaNumero.value > 100){
        alert('❌Erro, verifique o número enviado') 
    } else {
        addarray()
    }
}

//FUNÇÃO QUE ADICIONA ELEMENTO AO ARRAY
function addarray(){ 
    //CRIA ARRAY E ADICIONA ELEMENTOS ENVIADOS
    resultados.appendChild(document.createElement('option')).innerHTML=`${entradaNumero.value}`
    return lista.push(entradaNumero.value)  
}

//FUNÇÃO PARA CALCULAR OS RESULTADOS QUE SERÃO APRESENTADOS
function gerarResultados(){
    //ARPESENTA NUMEROS ENVIADOS
    document.querySelector('#lista').innerHTML= `Os números enviados foram: ${lista}`

    //ORDENANDO O ARRAY
    let novoArray = lista.sort(ordenar)
    
    //MENOR NÚMERO
    document.querySelector('#menorNumero').innerHTML=`O menor número enviado foi: ${novoArray[0]}`

    //MAIOR NÚMERO
    novoArray.reverse()
    document.querySelector('#maiorNumero').innerHTML=`O maior número enviado foi: ${novoArray[0]}`

    //LISTA ORDENADA
    novoArray.reverse()
    document.querySelector('#ordenado').innerHTML= `Lista ordenada: ${novoArray}` 
    
    //SOMATÓRIA
    let resultadoSoma = 0
    for (let index = 0; index < novoArray.length; index++) {
        
        //CONVERTENDO ARRAY DE STRINGS PARA NUMBER
        numberArray = novoArray.map(Number)
        resultadoSoma += numberArray[index] 
    }
    document.querySelector('#somatoria').innerHTML=`A soma dos números são: ${resultadoSoma}`

    //MEDIA PONDERADA
    document.querySelector('#media').innerHTML= `Sua média ponderada é: ${(resultadoSoma / novoArray.length).toFixed(0)}`
}

//FUNÇÃO PARA ATUALIZAR A PÁGINA
function limpar() {
    window.location.reload(true)
}

//FUNÇÃO PARA ORDENAR ARRAY
function ordenar (a, b){
    return a - b
}

