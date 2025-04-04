let contato = ["joao", "patrick", "rafael pereira santos"];

function primeiroContatoCom10Caracteres(contato) {
    let resultado = null;

    contato.forEach(function(nome) {
        if (nome.length > 10 && resultado === null) {
            resultado = nome;
        }
    });
    return resultado;
}

let contatoEncontrado = primeiroContatoCom10Caracteres(contato);
console.log(contatoEncontrado);


