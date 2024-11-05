var salario_hr = parseFloat(prompt("Digite o quanto você ganha por horas trabalhadas: "));
var hrs_trab_mes = parseInt(prompt("Digite o número de horas trabalhadas por mês: "));
var salário_bruto = salario_hr*hrs_trab_mes;
var desc_impst_rnda = salário_bruto*0.11;
var desc_inss = salário_bruto*0.08;
var desc_sindicato = salário_bruto*0.05;
var salário_liquido = salário_bruto - desc_impst_rnda - desc_inss - desc_sindicato




console.log("Seu salário bruto é de: R$ ",salário_bruto);
alert("Seu salário bruto é de: R$ "+salário_bruto);

console.log("O valor do seu salário que foi destinado ao INSS foi de: ",desc_inss);
alert("O valor do seu salário que foi destinado ao INSS foi de: "+desc_inss);

console.log("O valor do seu salário destinado ao sindicato foi de : R$ ",desc_sindicato);
alert("O valor do seu salário destinado ao sindicato foi de : R$ "+desc_sindicato);

console.log("O valor do seu salário liquido é de: R$ ",salário_liquido);
alert("O valor do seu salário liquido é de: R$ "+salário_liquido);

console.log("salário bruto: R$ ",salário_bruto," -"," Imposto de renda(11%): R$ ",desc_impst_rnda," -"," INSS(8%): R$ ",desc_inss," -"," Sindicato(5%): R$ ",desc_sindicato," ="," Salário Líquido: R$ ",salário_liquido);

alert("salário bruto: R$ "+salário_bruto+" -"+" IR (11%): R$ "+desc_impst_rnda+" -"+" INSS (8%): R$ "+desc_inss+" -"+" Sindicato(5%): R$ "+desc_sindicato+" ="+" Salário Líquido: R$ "+salário_liquido);
