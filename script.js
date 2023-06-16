function imprimeOpcoesComprimento(){
    unidadeEntrada.innerHTML = `
        <option disabled selected hidden>Escolha</option>
        <option>Metros</option>
        <option>Centimetros</option>
        <option>Polegadas</option>
    `
    unidadeSaida.innerHTML = `
        <option disabled selected hidden>Escolha</option>
        <option disabled>Metros</option>
        <option disabled>Centimetros</option>
        <option disabled>Polegadas</option>
    `
}

function imprimeOpcoesPeso(){
    unidadeEntrada.innerHTML = `
        <option disabled selected hidden>Escolha</option>
        <option>Quilogramas</option>
        <option>Gramas</option>
        <option>Libras</option>
    `
    unidadeSaida.innerHTML = `
        <option disabled selected hidden>Escolha</option>
        <option disabled>Quilogramas</option>
        <option disabled>Gramas</option>
        <option disabled>Libras</option>
    `
}

function imprimeOpcoesTemperatura(){
    unidadeEntrada.innerHTML = `
        <option disabled selected hidden>Escolha</option>
        <option>Celsius</option>
        <option>Fahrenheit</option>
        <option>Kelvim</option>
    `
    unidadeSaida.innerHTML = `
        <option disabled selected hidden>Escolha</option>
        <option disabled>Celsius</option>
        <option disabled>Fahrenheit</option>
        <option disabled>Kelvim</option>
    `
}









//===================================================================================
document.getElementById('categoria').addEventListener('change', function(event){
    event.preventDefault()

    //reset saida
    var saida = document.getElementById('saida')
    saida.value = ``

    //escolha de categoria
    var escolha = event.target.value
    console.log('cat', escolha)   

    if (escolha == "Comprimento") {
        imprimeOpcoesComprimento()
    }
    if (escolha == "Peso") {
        imprimeOpcoesPeso()
    }
    if (escolha == "Temperatura") {
        imprimeOpcoesTemperatura()
    }   
})

//tirar esse event? e fazer uma função padrão?
document.getElementById('unidadeEntrada').addEventListener('change', function(event){
    event.preventDefault()

    //reset saida
    var saida = document.getElementById('saida')
    saida.value = ``

    //escolha da unidade de entrada
    var escolha = event.target.value
    console.log('ent',escolha)   

    if (escolha == "Comprimento") {
        imprimeOpcoesComprimento()
    }
    if (escolha == "Peso") {
        imprimeOpcoesPeso()
    }
    if (escolha == "Temperatura") {
        imprimeOpcoesTemperatura()
    }   
})


document.getElementById('meuFormulario').addEventListener('submit', function(event){
    event.preventDefault()

    //teste saida
    var saida = document.getElementById('saida')
    saida.value = `Teste tesultado`
})




// console.log("foi")





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


//------------------------------------------------------------------


//------------------------------------------------------------------


//------------------------------------------------------------------
