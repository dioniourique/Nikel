const nome = "Dioni Ourique";
let nome2 = "";
let pessoaDefault = {
    nome: "Dioni Ourique",
    idade: "39",
    trabalho: "programador"
}

let nomes = ["Dioni Ourique", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Dioni Ourique",
        idade: "39",
        trabalho: "programador"
    },
    {
        nome: "Maria Silva",
        idade: "59",
        trabalho: "professora"
    }
];

function alterarNome() {
    nome2 = "Maria Silva"
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um novo nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome:");
    console.log(pessoa.nome);

    console.log("idade:");
    console.log(pessoa.idade);

    console.log("trabalho:");
    console.log(pessoa.trabalho);
}


function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("-------IMPRIMIR PESSOAS-------");
    pessoas.forEach((item) => {
            console.log("nome:");
            console.log(item.nome);

            console.log("idade:");
            console.log(item.idade);

            console.log("trabalho:");
            console.log(item.trabalho);
    })
}

imprimirPessoas ();

adicionarPessoa({
    nome:"Pedro Silva",
    idade: "30",
    trabalho: "porteiro"
});

imprimirPessoas ();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Maria Silva",
//    idade: "59",
//    trabalho: "professora"
//})

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();