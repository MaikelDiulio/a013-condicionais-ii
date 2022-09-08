



// Crie um código que receba um número por **prompt** 
// e verifique se um número é divisível por 2 **ou** por 3
    const num = Number(prompt("Digite um número:"))
    console.log(num)

    // Faça isso:
    


// IF ANINHADOS 

if (num % 2 === 0){
    console.log("O número é divisivel por 2")
    


    if(num % 3 === 0){
        console.log("O número é divisivel por 3")
    }else {
        console.log("esse numero não é divisivel por 3")
    }



} else {
    console.log("Seu número não é divisivel por 2 ")
}

// OPERADOR LÒGICOS

// if (num % 2 ===0 && num % 3 === 0){
//     console.log("Seu número é divisivel por 2 e 3")
// } else {
//     console.log("Seu número não é divisivel por 2 e 3")
// }




// 2. Utilizando um operador lógico para unir duas operações relacionais
// ```jsx
//     if(expressao && expressao){ //&& para E
//     //expressao || expressao para OU     
    
//     }
// ```