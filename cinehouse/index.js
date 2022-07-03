// Importar as dependencias
const catalogo = require('./database/catalogo.json'); 
const mostrarfilmes = require('./function/mostrarFilmes');
const buscarFilme = require('./function/buscar');

// Definindo a ação a ser executada 
let acao =  process.argv[2];

// Decidir o que fazer 
switch(acao){
    case 'mostrar':
        mostrarfilmes(catalogo);
    break;

    case 'buscar':
        let codigo = process.argv[3];
        let filmeEncontrado = buscarFilme(codigo)
        console.table(filmeEncontrado);
    break;

    case 'adicionar':
        console.log("Vai adicionar o filme")
    break;

    default:
        console.error("Comando não encontrado")
}

// Mostrando os filmes cadastrados 
// mostrarfilmes(catalogo)