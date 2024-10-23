import { randomInt } from "crypto"

// factory e suas variações
class Pessoa{}
let p: Pessoa = new Pessoa()


class Pato {

}

class PatoReal extends Pato{

}

class PatoDeCaça extends Pato{
    
}

class PatoDeBorracha extends Pato{
    
}

function qualPato(ocasião: string): Pato | null{
    let p: Pato | null = null
    if (ocasião === "piquenique")
        p = new PatoReal()
    else if (ocasião === "caça")
        p = new PatoDeCaça()
    if (ocasião === "banheira")
        p = new PatoDeBorracha()
    return p
}

let ocasiões: string[] = [
    'piquenique',
    'caça',
    'banheira'
]

console.log(qualPato(ocasiões[Math.floor(Math.random() * 3)]))