var area_M = parseFloat(prompt("Digite o tamanho (em metros quadrados) da área a ser pintada: "));
var qntd_litos= ((area_M/6)+(area_M*0.10));
var latas = parseInt(qntd_litos/18);
var galoes = parseInt(qntd_litos/3,6);


console.log(qntd_litos);
if(qntd_litos % 18 !=0 );

latas = (latas+1);
console.log(latas);
console.log("O valor das latas a serem compradas é de: R$ ", latas*80);



if(qntd_litos % 3,6 != 0)       
    galoes = (galoes+1);
console.log(galoes);
console.log("O valor dos galões em a serem comprados é de: R$ ",galoes*25);

