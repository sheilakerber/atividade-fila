// apresentar a proxima pessoa da fila no html, mostrando seus dados 
arrayTrabalhoAlunos = [{
        nome: "Bruno",
        idade: 21,
        genero: "Masculino",
        formaDePagamento: "Dinheiro",
        filme: "Titanic",
    },
    {
        nome: "Leandro",
        idade: 25,
        genero: "Masculino",
        formaDePagamento: "Dinheiro",
        filme: "Interestelar",
    },
    {
        nome: "Lara",
        idade: 18,
        genero: "Feminino",
        formaDePagamento: "Cartão",
        filme: "Titanic",
    },
    {
        nome: "Pedro",
        idade: 16,
        genero: "Masculino",
        formaDePagamento: "Cartão",
        filme: "Interestelar",
    },
    {
        nome: "Mikaella",
        idade: 20,
        genero: "Feminino",
        formaDePagamento: "Cartão",
        filme: "Titanic",
    }
]

let contador = 1

function dadosProximoFila() {
    if (arrayTrabalhoAlunos.length == 0) {
        acabouFila()
    } else {
        document.getElementById("resultadoTela").innerHTML = `Cliente ${contador}: <br> Nome: ${JSON.stringify(arrayTrabalhoAlunos[0].nome)} <br> Idade: ${JSON.stringify(arrayTrabalhoAlunos[0].idade)} <br> Gênero: ${JSON.stringify(arrayTrabalhoAlunos[0].genero)} <br> Forma de pagamento: ${JSON.stringify(arrayTrabalhoAlunos[0].formaDePagamento)} <br> Filme: ${JSON.stringify(arrayTrabalhoAlunos[0].filme)}`

        if (arrayTrabalhoAlunos.length != 0) {
            arrayTrabalhoAlunos.shift()
            contador++
        }
    }
}

function acabouFila() {
    document.getElementById("resultadoTela").innerHTML = " "
    alert("Não há mais ninguém na fila!")
}