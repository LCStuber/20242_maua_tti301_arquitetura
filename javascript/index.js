const calc = {
	soma: function (o1, o2){
        return o1 + o2
    },
	subtração: (o1, o2) => o1 - o2,
}
 

const encontrarVeículos = (marca) => {
    	return concessionária.veículos.filter((veículo) => veículo.marca === marca)
    }

// const pessoa = {
//     nome: "Maria",
//     idade: 21,
//     endereço: {
//         rua: "Rua B",
//         numero: 121
//     }
// };
// console.log(pessoa.endereço.rua)

// const concessionária = {
//     nome: "Nome da concessionária",
//     cnpj: "CNPJ",
//     endereço: {
//         rua: "Rua B",
//         numero: 121
//     },
//     veículos: [
//         {
//             marca: "GM",
//             modelo: "Cruze",
//             ano: 2024
//         }
//     ]
// };

// for (const element of concessionária.veículos) {
//     if (element.modelo === "Corolla"){
//         console.log(element)
//     }
// }

// const encontrarVeículos = (marca) => {
// 	return concessionária.veículos.filter((veículo) => veículo.marca === marca)
// }

// console.log(encontrarVeículos("GM"))

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
