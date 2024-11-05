
var altura = 0 
var peso_ideal
var sexo = (prompt("Digite a letra referente ao seu sexo: (M)para Masculino ou (F) para Feminino"));
 


while((sexo != "M") && (sexo!="m") && (sexo !="F") && (sexo != "f")){
            var sexo = prompt("Inválido, digite 'F' para femino e 'M' para masculino")
    }if ((sexo == "M") || (sexo == "m")) {

        var altura = prompt("Digite sua altura em Metros (com ponto)");
        var peso_ideal = parseFloat((72.7*altura) - 58);


        console.log("Seu peso ideal referente a sua altura e sexo é: ",peso_ideal);
        alert("Seu peso ideal referente a sua altura e sexo é: "+peso_ideal);
        
        prompt("Você está no seu acima ou abaixo do seu peso?");
        
    }else if((sexo == "F") || (sexo == "f") ){

        var altura = prompt("Digite sua altura em Metros (com ponto)");
        var peso_ideal = parseFloat((62.1*altura) - 44.7);


        console.log("Seu peso ideal referente a sua altura e sexo é: ",peso_ideal);
        alert("Seu peso ideal referente a sua altura e sexo é: "+peso_ideal);

        prompt("Você está no seu acima ou abaixo do seu peso?");
  

    }
