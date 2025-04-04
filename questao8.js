let biblioteca=["livro1", "livro2", "livro3"]
let livroDesejado = ("crime e castigo")
let indice = biblioteca.indexOf(livroDesejado)

if (indice > -1) {
    console.log("livro existente", indice)
} else {
    console.log("livro nao encontrado")
}
