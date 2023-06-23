function imprimeOpcoes(lista){
    unidadeEntrada.innerHTML = `<option disabled selected hidden>Escolha</option>`

    for (var i = 0; i < lista.length; i++){
        var opcao = document.createElement("option")
        opcao.innerText = `${lista[i]}`
        unidadeEntrada.append(opcao)
    }
    
    document.getElementById('unidadeEntrada').addEventListener('change', function(event){
    event.preventDefault()

    var escolha = event.target.selectedIndex
    unidadeSaida.innerHTML = `<option disabled selected hidden>Escolha</option>`

    for (var i = 0; i < lista.length; i++){
        if (escolha - 1 != i) {    
            var opcao = document.createElement("option")
            opcao.innerText = `${lista[i]}`
            unidadeSaida.append(opcao)
        }
    }

})
}

function operacoesConversao(unidadeEntrada,unidadeSaida,valor){
    //============================================================= Comprimento
    // 1m = 100cm = 39.3701pol
    if (unidadeEntrada == 'Metros'){ if (unidadeSaida == 'Centimetros') {return valor * 100} if (unidadeSaida == 'Polegadas') {return valor * 39.3701} } 
    // 1cm = 0.01m = 0.393701pol
    if (unidadeEntrada == 'Centimetros'){ if (unidadeSaida == 'Metros') {return valor * 0.01} if (unidadeSaida == 'Polegadas') {return valor * 0.393701}}
    // 1pol = 0.0254m = 2.54cm
    if (unidadeEntrada == 'Polegadas'){ if (unidadeSaida == 'Metros') {return valor * 0.0254} if (unidadeSaida == 'Centimetros') {return valor * 2.54}}
    //============================================================= Peso
    // 1kg = 1000g = 2.20462lb
    if (unidadeEntrada == 'Quilogramas'){ if (unidadeSaida == 'Gramas') {return valor * 1000} if (unidadeSaida == 'Libras') {return valor * 2.20462} } 
    // 1g = 0.001kg = 0.00220462lb
    if (unidadeEntrada == 'Gramas'){ if (unidadeSaida == 'Quilogramas') {return valor * 0.001} if (unidadeSaida == 'Libras') {return valor * 0.00220462}}
    // 1lb = 0.453592kg = 453.5920000001679g
    if (unidadeEntrada == 'Libras'){ if (unidadeSaida == 'Quilogramas') {return valor * 0.453592} if (unidadeSaida == 'Gramas') {return valor * 453.5920000001679}}
    //============================================================= Temperatura
    // F = C * 1.8 + 32     // K = C + 273
    if (unidadeEntrada == 'Celsius'){ if (unidadeSaida == 'Fahrenheit') {return valor * 1.8 + 32} if (unidadeSaida == 'Kelvin') {return valor * 1 + 273.15} } 
    // C = (F-32) / 1.8     // K = (F-32) * 5/9 + 273
    if (unidadeEntrada == 'Fahrenheit'){ if (unidadeSaida == 'Celsius') {return (valor-32) / 1.8} if (unidadeSaida == 'Kelvin') {return (valor-32) * 5/9 + 273.15}}
    // C = K - 273          // F = (K-273) * 1.8 + 32
    if (unidadeEntrada == 'Kelvin'){ if (unidadeSaida == 'Celsius') {return valor - 273.15} if (unidadeSaida == 'Fahrenheit') {return (valor-273.15) * 1.8 + 32}}
}
//===================================================================================


document.getElementById('categoria').addEventListener('click', function(event){
    event.preventDefault()
    //escolha de categoria
    var escolha = event.target.value
    // console.log('cat', escolha, event.target.selectedIndex)  

    var lista = []
    if (escolha == "Comprimento")   { lista = ["Metros","Centimetros","Polegadas"]}
    if (escolha == "Peso")          { lista = ["Quilogramas","Gramas","Libras"]}
    if (escolha == "Temperatura")   { lista = ["Celsius","Fahrenheit","Kelvin"]}   
    imprimeOpcoes(lista)
})

document.getElementById('meuFormulario').addEventListener('submit', function(event){
    event.preventDefault()

    var unidadeEntrada = document.getElementById('unidadeEntrada')
    var unidadeSaida = document.getElementById('unidadeSaida')
    var valor = document.getElementById('valor')

    var saida = document.getElementById('saida')
    var resultado = operacoesConversao(unidadeEntrada.value, unidadeSaida.value, valor.value)
    saida.value = resultado.toFixed(2)

})







// console.log("foi")



//------------------------------------------------------------------
// reset saida
// var saida = document.getElementById('saida')
// saida.value = `ERRO`
//------------------------------------------------------------------
// unidadeSaida.innerHTML = `
//     <option disabled selected hidden>Escolha</option>
// `
//------------------------------------------------------------------

// var categoria = document.getElementById('categoria')
// // var unidadeEntrada = document.getElementById('unidadeEntrada')
// // var saida = document.getElementById("saida")

// // console.log(unidadeEntrada)

//------------------------------------------------------------------

// var text = e.options[e.selectedIndex].text;
// console.log(text)

//------------------------------------------------------------------

// function abrir(){
//     letreiro.innerHTML = `<p>Estamos Abertos</p>`
// }

// function fechar(){
//     var letreiro = document.querySelector(".letreiro")
//     letreiro.innerHTML = `<p>Estamos Fechados</p>`
// }

//------------------------------------------------------------------

//<div id="principal">
//    <div class="filho"></div>
//    <div class="filho"></div>
//    <div class="filho"></div>
// </div>

//------------------------------------------------------------------

// var principal = document.getElementById("principal");

// function mudaACor(){
//     if (principal.style.background == "red"){
//         principal.style.background = "green"
//     } else {
//         principal.style.background = "red"
//     }
// }

// function mudarDirection(){
//     if (principal.style.flexDirection == "row"){
//         principal.style.flexDirection = "column"
//     } else {
//         principal.style.flexDirection = "row"
//     }
// }

// principal.addEventListener("click", function (){
//     mudarDirection()
//     mudaACor()
// })
//------------------------------------------------------------------

// document.getElementById('meuFormulario').addEventListener('submit', function(event){
//     event.preventDefault()
//     var nome = ""
//     var email = ""
//     var msg = ""
//     for (var index = 0; index <= event.target.length -2; index++) {

//         if (event.target[index].name == "name") {
//             nome = event.target[index].value
//         }
//         if (event.target[index].name == "email") {
//             email = event.target[index].value
//         }
//         if (event.target[index].name == "message") {
//             msg = event.target[index].value
//         }
//     }
//     console.log(nome, email, msg)
// })

//------------------------------------------------------------------

// document.getElementById('unidadeEntrada').addEventListener('click', function(event){
//     event.preventDefault()
//     console.log(unidadeEntrada.options.selectedIndex)
//     console.log(unidadeSaida.options.selectedIndex)
// })
// document.getElementById('unidadeSaida').addEventListener('change', function(event){
//     event.preventDefault()
//     console.log(unidadeEntrada.options.selectedIndex)
//     console.log(unidadeSaida.options.selectedIndex)
// })


//------------------------------------------------------------------

// console.log(categoria.options[0].id)
// console.log(categoria.options[1].id)
// console.log(categoria.options[2].id)

// console.log(categoria)
// console.log(categoria.options)
// console.log(categoria.options.selectedIndex)

// var escolha = document.getElementById("categoria").value
//------------------------------------------------------------------

/* Remove as setas de incremento/decremento nos campos de número /

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;    / Remove a aparência padrão /
  margin: 0;     / Remove qualquer margem adicional */

//------------------------------------------------------------------


//------------------------------------------------------------------


//------------------------------------------------------------------
