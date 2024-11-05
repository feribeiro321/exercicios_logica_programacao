var num_int_1 = parseFloat(prompt("Digite o 1 número sem vírgula: "));
var num_int_2 = parseFloat(prompt("Digite mais um número sem vírgula: "));
var num_real = parseFloat(prompt("Digite um número com vírgula: "));


var primeira_soma = parseFloat(num_int_1*2)*(num_int_2/2);
var segunda_soma= parseFloat(num_int_1*3)+(num_real);
var terceira_soma = parseFloat(num_real*num_real*num_real);



console.log("o produto do dobro do primeiro com metade do segundo: ",primeira_soma);
alert("o produto do dobro do primeiro com metade do segundo: "+primeira_soma);

console.log("a soma do triplo do primeiro com o terceiro: ", segunda_soma);
alert("b) a soma do triplo do primeiro com o terceiro: "+segunda_soma);

console.log("o terceiro elevado ao cubo.: ",terceira_soma);
alert("o terceiro elevado ao cubo: "+terceira_soma);
