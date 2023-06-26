// ********************************************** Função para imprimir as opções de unidade de medida
function imprimeOpcoes(lista){
    unidadeEntrada.innerHTML = `<option disabled selected hidden>Escolha uma medida</option>`

    // impressão das unidades de entrada recebido da lista
    for (var i = 0; i < lista.length; i++){
        var opcao = document.createElement("option")
        opcao.innerText = `${lista[i]}`
        unidadeEntrada.append(opcao)
    }
    
    //ouvinte para se a unidade de entrada mudar, a de saída atualiza também
    document.getElementById('unidadeEntrada').addEventListener('change', function(event){
    event.preventDefault()

    // definido a escolha de entrada para que ela não seja impressa na unidade de saída
    var escolha = event.target.selectedIndex
    unidadeSaida.innerHTML = `<option disabled selected hidden>Escolha uma medida</option>`

    // impressão das unidades de saída, sem repetir a escolha feita para a entrada
    for (var i = 0; i < lista.length; i++){
        if (escolha - 1 != i) {    
            var opcao = document.createElement("option")
            opcao.innerText = `${lista[i]}`
            unidadeSaida.append(opcao)
        }
    }
})
}

// ********************************************** Função para converter o valor recebido, conforme suas unidades de medida
function operacoesConversao(unidadeEntrada,unidadeSaida,valor){
    // ================================================================= Comprimento =================================================================
    // 1m = 100cm = 39.3701pol
    if (unidadeEntrada == 'Metros'){ if (unidadeSaida == 'Centimetros') {return valor * 100} if (unidadeSaida == 'Polegadas') {return valor * 39.3701} } 
    // 1cm = 0.01m = 0.393701pol
    if (unidadeEntrada == 'Centimetros'){ if (unidadeSaida == 'Metros') {return valor * 0.01} if (unidadeSaida == 'Polegadas') {return valor * 0.393701}}
    // 1pol = 0.0254m = 2.54cm
    if (unidadeEntrada == 'Polegadas'){ if (unidadeSaida == 'Metros') {return valor * 0.0254} if (unidadeSaida == 'Centimetros') {return valor * 2.54}}

    // =================================================================    Peso     =================================================================
    // 1kg = 1000g = 2.20462lb
    if (unidadeEntrada == 'Quilogramas'){ if (unidadeSaida == 'Gramas') {return valor * 1000} if (unidadeSaida == 'Libras') {return valor * 2.20462} } 
    // 1g = 0.001kg = 0.00220462lb
    if (unidadeEntrada == 'Gramas'){ if (unidadeSaida == 'Quilogramas') {return valor * 0.001} if (unidadeSaida == 'Libras') {return valor * 0.00220462}}
    // 1lb = 0.453592kg = 453.5920000001679g
    if (unidadeEntrada == 'Libras'){ if (unidadeSaida == 'Quilogramas') {return valor * 0.453592} if (unidadeSaida == 'Gramas') {return valor * 453.5920000001679}}

    // ================================================================= Temperatura =================================================================
    // F = C * 1.8 + 32     // K = C + 273
    if (unidadeEntrada == 'Celsius'){ if (unidadeSaida == 'Fahrenheit') {return valor * 1.8 + 32} if (unidadeSaida == 'Kelvin') {return valor * 1 + 273.15} } 
    // C = (F-32) / 1.8     // K = (F-32) * 5/9 + 273
    if (unidadeEntrada == 'Fahrenheit'){ if (unidadeSaida == 'Celsius') {return (valor-32) / 1.8} if (unidadeSaida == 'Kelvin') {return (valor-32) * 5/9 + 273.15}}
    // C = K - 273          // F = (K-273) * 1.8 + 32
    if (unidadeEntrada == 'Kelvin'){ if (unidadeSaida == 'Celsius') {return valor - 273.15} if (unidadeSaida == 'Fahrenheit') {return (valor-273.15) * 1.8 + 32}}
}

// ********************************************** Ouvinte da categoria de medida, para atualizar as opções caso for mudado
document.getElementById('categoria').addEventListener('change', function(event){
    event.preventDefault()
    // escolha de categoria
    var escolha = event.target.value
    // conforme a escolha de categoria, o array lista recebe as unidades de medidas específicas
    var lista = []
    if (escolha == "Comprimento")   { lista = ["Metros","Centimetros","Polegadas"]}
    if (escolha == "Peso")          { lista = ["Quilogramas","Gramas","Libras"]}
    if (escolha == "Temperatura")   { lista = ["Celsius","Fahrenheit","Kelvin"]}   
    // chamada da função para imprimir as unidades
    imprimeOpcoes(lista)
})

// ********************************************** Ouvinte do formulário que quando for enviado irá converter o valor
document.getElementById('meuFormulario').addEventListener('submit', function(event){
    event.preventDefault()

    var unidadeEntrada = document.getElementById('unidadeEntrada')
    var unidadeSaida = document.getElementById('unidadeSaida')
    var valor = document.getElementById('valor')
    
    // chamada da função que converte o valor, colocando o retorno na variável resultado
    var resultado = operacoesConversao(unidadeEntrada.value, unidadeSaida.value, valor.value)
    
    // verificação se todos os campos do formulário estão preenchidos
    if (unidadeEntrada.selectedIndex === 0 || unidadeSaida.selectedIndex === 0) {
        alert("Preencha os campos")
    } else {
        // impressão do resultado
        var saida = document.getElementById('saida')
        saida.style.color = "white"
        saida.innerText = resultado.toFixed(2)
    }
})
