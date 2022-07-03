// 1: capturar o CPF insirido pelo usuario 
let cpf = process.argv[2];
console.log("tratrando do CPF " + cpf);

// 2: verificar se o CPF é valido ou não
const validarCpf = require("validador-de-cpf");

// console.log(validarCpf(cpf));

if(validarCpf(cpf)){

     // 3a: se for valido, mandar mensagem de sucesso
    console.log("Você existe");
    console.log("Sanvando no arquivo...");

    //3b.2: Salvar o CPF em um arquivo 
    const fs = require("fs");
        fs.writeFileSync("cpfsSalvos", cpf + "\n", {flag: 'a'});


} else {
    // 3b: se não for valido, mandar mensagem de fracasso
    console.log("Você não exite");
}




