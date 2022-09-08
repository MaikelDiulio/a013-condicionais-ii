//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

const nome = prompt("Qual é o seu nome?")
nome === ("josé") ? console.log ("Oi, Zé!") : console.log ("olá, "+nome)


const idade = Number(prompt("Qual a sua Idade?"))
idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista")

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}
