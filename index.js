const fields = require('./fields');

//formatando data com regex
console.log("FORMATANDO DATA: " + fields.textoComData.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/g,"$3/$2/$1"));

// verifica se o PRIMEIRO caractere é um "e" ao utilizar o "^" no inicio do regex,
// ele irá buscar pelo padrao no inicio da string.
console.log('utilizando ^ 1: '+ fields.textoComData.replace(/^eu/,'*'));

/**
 * ao utilizar o "^" dentro de um conjunto ele tem a função de "negação"
 */
 var exemplo1 = /[e]/; // extou procurando pelo caractere "e"
 var exemplo2 = /[^e]/; // extou procurando por um caractere que NAO seja o "e"

// encontra todos os caracteres diferentes de E e "espaco" e troca por *
console.log('utilizando ^ 2: '+ fields.textoComData.replace(/[^e\s]/g,'*'));

// encontra todos os caracteres diferentes de 0 a 9 e troca por * e "espaco"
console.log('utilizando ^ 3: '+ fields.textoComData.replace(/[^0-9\s]/g,'*'));

/**
 * ao utilizar o "$" no final do regex, ele irá buscar o padrao no final do texto (ou linha).
 */

 // se o ultimo caractere for diferente de "e" ou "espaco" substitui por "*"
console.log('utilizando $ 1: '+ fields.textoComData.replace(/[^e\s]$/,'*'));

// se o ultimo caractere for diferente de "2" substitui por "*"
// como nao é,ele nao substitui nada...
console.log('utilizando $ 2: '+ fields.textoComData.replace(/(^2)$/,'*'));

/**
 * se o padrao se encaixar no final do texto, é formatado
 */
console.log('utilizando $ 3: '+ fields.textoComData.replace(/(\d{4})-(\d{1,2})-(\d{1,2})$/,'$3/$2/$1'));

//utilizando o caractere especial "*" para pegar 0 ou várias ocorrencias da expressão
// irá buscar BLO, BOLO, BOOOLO, e por ai vai...
console.log('utilizando $ 3: '+ fields.texto.replace(/BO*LO/g,'*'));

// o caractere especial "+" serve para buscar 1 ou mais caracteres anteriores a ele
// busca: BOLO, BOLOO, BOLOOO, etc...
console.log('utilizando + 1: '+ fields.texto.replace(/BOLO+/g,'*'));

// busca: BOLO, BOOLO, BOOOLO, etc...
console.log('utilizando + 2: '+ fields.texto.replace(/BO+LO/g,'*'));

// o caractere especial "?" equivale a 0 ou 1 da expressão anterior a ele.
// encontra barra\ ou barra
console.log('utilizando ? 1: '+ fields.texto.replace(/barra\\?/g,'*'));

// encontra BLO ou BOLO
console.log('utilizando ? 2: '+ fields.texto.replace(/BO?LO/g,'*'));

console.log('utilizando ? 3: '+ fields.texto.replace(/BO+?LO/g,'*'));

// com 2 "?" ele apenas pega o que foi pedido (também chamado de lazy)

// neste caso o S é opcional, mas nao é necessario, entao ele nao substitui o S
console.log('utilizando ? 4: '+ fields.texto.replace(/BOLOS??/g,'*'));

// neste caso o S é opcional, mas como é apenas com 1 "?" (greedy) ele substitui o "s" também
console.log('utilizando ? 5: '+ fields.texto.replace(/BOLOS?/g,'*'));

/**
 * O segundo "?" serve pode vir depois de qualquer caractere quantitativo (*,+,{},?)
 * ele serve para tornar um caractere que era greedy em lazy
 * trazendo apenas o que for necessario e ignorando o opcional
 */

// o caractere especial "." serve como um curinga para qualquer outro caractere NORMAL, exceto o de nova linha

console.log('utilizando . 1: '+ fields.texto.replace(/B.LOS/g,'*'));

var texto1 = "bolo bala belo baaala";

// encontra BOLO e BELO
console.log('utilizando . 2: '+ texto1.replace(/b.lo/g,'*'));

var texto2 = "bolo bala belo baaala";

// encontra BOLO e BELO
console.log('utilizando . 3: '+ texto2.replace(/(b.+la)/g,'*'));

// ignorar um grupo utilizando (?:)
var texto = "meu grupo vem aqui...";

//o conjunto dentro de (?:) é ignorado na hora de armazenar os dados para reutilizar, sendo assim nao é mostrado
console.log('utilizando (?:) 1: '+ texto.replace(/(?:meu).+(vem).+(\.\.\.)/g, "$1 $2"));
console.log('utilizando (?:) 2: '+ texto.replace(/(meu).+(?:vem).+(\.\.\.)/g, "$1 $2"));

/**
 * utilizando lookadead
 * x(?=y)
 * só captura X se este for seguido por Y
 */

var texto = "joaozinho joaovinho";
// estou procurando os "joao" seguidos por "zinho" e colocando um parenteses onde achar
console.log('utilizando x(?=) 1: '+ texto.replace(/(joao)(?=zinho)/g, "($1)"));

//pegando as ocorrencias seguidas de zinho e vinho
console.log('utilizando x(?=) 2: '+ texto.match(/joao(?=zinho|vinho)/g));

/**
 * utilizando negação lookadead
 * x(?=y)
 * só captura X se este NAO for seguido por Y
 */

var texto = "joaozinho joaovinho joaotinho";

// estou procurando os "joao" NÃO sejam seguidos por "zinho" e colocando um parenteses onde achar
console.log('utilizando x(?!) 1: '+ texto.replace(/(joao)(?!zinho)/g, "($1)"));

//buscando os joao que NÃO forem seguidos por zinho ou vinho
console.log('utilizando x(?!) 2: '+ texto.match(/joao(?!zinho|vinho)/g));

/**
 * utilizando pipe, equivalente a "||", ( ou ) em programação
 * procura X ou Y, A ou Z, etc...
 */
var texto = "joaozinho joaovinho joaotinho joaofinho joaomilho";
console.log('utilizando | 1: '+ texto.match(/joaozinho|joaovinho|joaotinho/g));

/**
 * pesquisar N correspondencias em um caractere
 * {N} onde N deve ser um numero positivo inteiro
 */

var texto = "jse jose joose jooose joooose jooooose";

//buscando os "jose" com 2 "o"
console.log('utilizando {N} 1: '+ texto.match(/jo{2}se/g));

//buscando os "jose" com 1 a 2 "o"
console.log('utilizando {N} 2: '+ texto.match(/jo{1,2}se/g));

//buscando os "jose" com 2 ou mais "o"
console.log('utilizando {N,M} 1: '+ texto.match(/jo{2,}se/g));

//buscando os "jose" com 3 ou MENOS "o"
console.log('utilizando {N,M} 2: '+ texto.match(/jo{0,3}se/g));

/**
 * utilizando colchetes "[]"
 * busca por qualquer caractere dentro dos colchetes
 */
var texto =  "estou com fome";

//buscando os "jose" com 3 ou MENOS "o"
console.log('utilizando [] 1: '+ texto.match(/[ecf]/g));


// utilizando o hifen é possivel buscar em um intervalo, exemplo: de A á D, de 1 á 5

// buscando caracteres de A até M
console.log('utilizando [] 2: '+ texto.match(/[a-m]/g));

/**
 * caracteres especiais nao são válidos dentro de colchetes
 * mais especificamente, os caracteres especiais se tornam "normais" dentro de colchetes
 */

console.log('utilizando [] 3: '+ texto.match(/esto./g));

// o "." que deveria significar um curinga (qualquer caractere normal) não funciona
console.log('utilizando [] 4: '+ texto.match(/[esto.]/g));

// quando é posto fora dos cholchetes, o "." é procurado junto com os caracteres dentro do colchete
// e+., s+., e assim por diante onde o "." significa "qualquer caractere normal"
console.log('utilizando [] 5: '+ texto.match(/[esto]./g));

var texto = "meu nome é Jh0.n4.t4.N";

console.log('utilizando [] 6: '+ texto.match(/[\w.é]+/g));

/**
 * selecionando caracteres que NAO estejam dentro da lista de colchetes
 */

var texto = "meu nome é Jh0.n4.t4.N";
// ignora os caracteres de a á j e "."
console.log('utilizando [] 7: '+ texto.match(/[^a-j.]+/g));

/**
 * utilizando \b
 * o \b procura no inicio ou no final da palavra (dependendo onde é colocado)
 * basicamente o \B faz o contrario do que o \b faz...
 * 
 * Exemplo: "eu comi o abacaxi depois de cortar o cabelo"
 * ao buscar "\Bab" nao encontra o AB em abacaxi, pois está após um espaco em branco
 * porem encontra AB em cABelo, pois o "AB" não está após um espaco em branco, e sim após o C
 */

var texto = "aoe aeo eoa eao oea oae";

//buscar no inicio buscando >> " ai"
console.log('utilizando \\b 1: '+ texto.replace(/\bae/g,'(AE)'));

//buscar no final buscando >> "ai "
console.log('utilizando \\b 2: '+ texto.replace(/ae\b/g,'(AE)'));

//buscar algo nao estando no inicio, buscando >> "(algumacoisa)ao(nada ou alguma coisa)"
console.log('utilizando \\B 1: '+ texto.replace(/\Bao/g,'(AO)'));

//buscar algo nao estando no final, buscando >> "(algumacoisa)ao(nada ou alguma coisa)"
console.log('utilizando \\B 2: '+ texto.replace(/ae\B/g,'(AE)'));

/**
 * utilizando \s e \S
 * encontra a correspodencia a espaco em branco, tabulação, quebra de linha...
 */
var texto = "meu \n texto \n aqui";

// aqui irá substituir tanto os espacos em brando quanto os "\n" de quebra de linha
console.log('utilizando \\s 1: '+ texto.replace(/\s/g,'(*)'));

// aqui irá substituir todos os caracteres que nao sejam espaco em branco ou quebra de linha (\n)
console.log('utilizando \\S 1: '+ texto.replace(/\S/g,'(*)'));

/**
 * utilizando \w e \W
 * encontra qualquer caractere alfanumerico de A a Z e 0 a 1
 */

var texto = "abc123 ,.;";

// seleciona as letras e numeros mas ignora os outros caracteres
console.log('utilizando \\w 1: '+ texto.replace(/\w/g,'*'));

// seleciona os caracteres que nao sejam alfanumericos (inclundo o espaco em branco)
console.log('utilizando \\W 1: '+ texto.replace(/\W/g,'*'));

console.log('utilizando \\W 1: '+ texto.replace(/(abc)(123) \1-\2/g));