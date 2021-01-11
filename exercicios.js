const regex = require('./regex');
const fields = require('./fields');
patterns = new regex();

console.log("Formatando CPF: " + patterns.cpf(fields.cpf) );
console.log("Formatando CNPJ: " + patterns.cnpj(fields.cnpj) );
console.log("Formatando TELEFONE: " + patterns.telefone(fields.telefone) );
console.log("Formatando CELULAR: " + patterns.telefone(fields.celular) );
console.log("APENAS NUMEROS: " + patterns.apenasNumeros(fields.texto) );
console.log("APENAS LETRAS: " + patterns.apenasLetras(fields.texto) );

// separando em um array onde tiver espaco em branco
console.log(fields.texto.split(/\s/));

console.log("destacando as primeiras letras das palavras");
console.log( fields.trechoMusica1.replace(/(\b\w)/ig,'($1)') );

console.log("destacar palavras com mais de 4 caracteres");
console.log( fields.trechoMusica1.replace(/(\b\w{5,})/ig,'($1)') );

console.log("mostrar apenas palavras com mais de 4 caracteres");
console.log( fields.trechoMusica1.replace(/(?=\w+)(?=\w\b)/ig,'($1)') );