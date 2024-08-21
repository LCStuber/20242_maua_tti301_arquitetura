function calculoRapidinho(n){
    return n >= 0 ? Promise.resolve(n*(n+1)/2) : Promise.reject("Apenas valores positivos")
}

// const fs = require("fs");
// const abrirArquivo = function(nomeArquivo){
//     const exibirConteúdo = function(erro, conteúdo){
//         if (erro){
//             console.log(`Erro: ${erro}`);
//         } else {
//             console.log(`Conteúdo: ${conteúdo}`);
//             const dobro = Number(conteúdo) * 2
//             const finalizar = function (erro){
//                 if (!erro){
//                     console.log("Salvou o dobro com sucesso")
//                 } else {
//                     console.log("É amigo... Se lascou!")
//                 }
//             }
//             fs.writeFile("dobro.txt", dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteúdo)
//     console.log('Terminou a função abrirArquivo...')
// }
// abrirArquivo("arquivo.txt");
// const undefined = 3
// const nomes = ["Ana Maria", "André", "Leoanrdo", "Cléber", "Jorge"]

// console.log(undefined)
// var nomes_com_A = []
// nomes.forEach(element => {
//     if (element[0].toLowerCase() =="a"){
//         nomes_com_A.push(element)
//     }
        
// });

// console.log(nomes_com_A)


// const nomes2 = []
// for (let index = 0; index < nomes.length; index++) {
//     nomes2.push(nomes[index][0]);
// }
// console.log(nomes2)


// const v = [1, 2, 3]
// console.log(v)
// // v.push(4)
// v = [1, 2, 3]
// console.log(v)

// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log(v1.length)
// v1[10] = "abc"
// console.log(v1.length)
// v2 = [2, "abc", true]
// console.log(v2)
// for (let i = 0; i < v2.length; i++)
//   console.log(v2[i])
// //comparação == e ===
// console.log(1 == 1)
// console.log(1 == "1")
// console.log(1 === 1)
// console.log(1 === "1")
// console.log(true == 1)
// //[1]
// console.log (1 == [1])
// // const j = undefined
// console.log(null == null)
// console.log(null == undefined)
// console.log([] == false)
// console.log([] == [])
// const n1 = 2
// const n2 = '3'
// //coerção implícita
// const n3 = n1 + n2
// console.log(n3)
// //coerção explícita
// const n4 = n1 + Number(n2)
// console.log(n4)

// //hoist: içamento
// //mecanismo de dupla passagem do js
// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//   let nome = "João"
//   console.log(`Parabéns, ${nome}. Você pode dirigir`)
// }
// console.log("Até, " + nome)


// var linguagem = "Javascript"
// console.log("Aprendendo " + linguagem)
// var linguagem = "Java"
// console.log("Aprendendo " + linguagem)

// //const, let e var
// //use const para aplicar o princípio do menor privilégio
// const nome = "Luiz"
// console.log(nome)
// // nome = "João"
// let a = 2
// console.log(a)
// console.log(typeof(a))
// a = "João"
// console.log(a)
// console.log(typeof(a))
// var b = "oi"
// b = "tchau"
