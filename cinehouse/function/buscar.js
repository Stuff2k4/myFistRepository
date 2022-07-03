// Importa o catalogo de filmes 
const catalogo = require('../database/catalogo.json');

module.exports = codigoBuscado => {
    
    function temCondigoIgualAoBuscado(filme){
        if(filme.codigo == codigoBuscado){
            return true;
        } else {
            return false;
        }
    }
    
    return catalogo.find(temCondigoIgualAoBuscado);
}