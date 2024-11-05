var tamanho = parseFloat(prompt("Digite o tamanho do arquivo em MB: "));
var velocidade = parseFloat(prompt("Digite a velocidade da internet em Mbps: "));

var tempo = tamanho/velocidade

console.log("O download demorará ",tempo,"minutos");