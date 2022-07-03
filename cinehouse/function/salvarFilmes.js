const fs = require('fs');
const path = require('path')

const salvarFilmes = (filmes) => {
    
    let arquivo = path.resolve(__dirname + '/../database/catalogo.json');
    let json = JSON.stringify(filmes, null, 4);
    
    console.log('arquivo: ' + arquivo);
    console.log('json: ' + json);
    
    fs.writeFileSync(arquivo, json);

};

module.exports = salvarFilmes