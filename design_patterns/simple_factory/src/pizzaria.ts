class Pizza{
    preparar(): void{
        console.log('Preparando a Pizza...');
    }

    assar(): void{
        console.log('Assando a Pizza...');
    }

    cortar(): void{
        console.log('Cortando a Pizza...');
    }

    empacotar(): void{
        console.log('Empacotando a Pizza...');
    }
}

class CalabresaPizza extends Pizza{};

class ChocolatePizza extends Pizza{};

class RuculaPizza extends Pizza{};

class PizzaDeQueijo extends Pizza{};

class PizzaDeQueijoDeNY extends PizzaDeQueijo{
    preparar(): void{
    console.log('Preparando pizza de queijo de NY...');
    }
    assar(): void{
    console.log('Assando pizza de queijo de NY...');
    }
}

class PizzaDeQueijoDeCh extends PizzaDeQueijo{
    preparar(): void{
    console.log('Preparando pizza de queijo de CH...');
    }
    assar(): void{
    console.log('Assando pizza de queijo de CH...');
    }
}

class SimplePizzaFactory{
    criarPizza(tipo:string): Pizza | null{
        let pizza: Pizza | null = null;
        if (tipo === "Calabresa")
            pizza = new CalabresaPizza();
        else if (tipo === "Chocolate")
            pizza = new ChocolatePizza();
        else if (tipo === "Rucula")
            pizza = new RuculaPizza();
        return pizza;
    }
}

class SimplePizzaFactoryNY extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
    let pizza: Pizza | null = null;
    if (tipo === 'Queijo')
    pizza = new PizzaDeQueijoDeNY();
    else if (tipo === 'Chocolate')
    pizza = new ChocolatePizza();
    return pizza;
    }
}

class SimplePizzaFactoryCh extends SimplePizzaFactory{
    criarPizza(tipo: string): Pizza | null{
    let pizza: Pizza | null = null;
    if (tipo === 'Queijo')
    pizza = new PizzaDeQueijoDeCh();
    else if (tipo === 'Chocolate')
    pizza = new ChocolatePizza();
    return pizza;
    }
}

class PizzaStore{
    constructor(private simplePizzaFactory: SimplePizzaFactory){};

    pedirPizza = (tipo: string): Pizza | null => {
        const pizza: Pizza | null = this.simplePizzaFactory.criarPizza(tipo);
        pizza?.preparar();
        pizza?.assar();
        pizza?.cortar();
        pizza?.empacotar();
        return pizza;
    }
}

let franquias: PizzaStore[] = [
    new PizzaStore(new SimplePizzaFactoryNY()),
    new PizzaStore(new SimplePizzaFactoryCh())
];

let pizzaStore: PizzaStore = new PizzaStore(new SimplePizzaFactory());
console.log(pizzaStore.pedirPizza('Rucula'));