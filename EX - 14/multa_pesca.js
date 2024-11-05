var peso = parseFloat(prompt("Digite o peso de peixes em quilos, do produto: "));
var excesso = parseFloat(0.00);
var 
multa = parseFloat(0.00);

if( peso > 50){
    excesso = peso - 50;
    console.log("O peso excedeu o limite de 50 quilos em ",excesso," quilo(s)");
    alert("O peso excedeu o limite de 50 quilos em "+excesso+" quilo(s)");
    
    multa = parseFloat(excesso*4.00); 
    console.log("O valor total da multa é de: R$ ",multa);
    alert("O valor total da multa é de: R$ "+multa);



}else{

    console.log("Excesso: ",excesso);
    alert("Excesso: "+excesso);

    console.log("Multa: R$ ",multa);
    alert("Valor da multa: "+multa);



}