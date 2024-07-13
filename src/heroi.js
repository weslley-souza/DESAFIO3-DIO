class Heroi{
    constructor(nome, idade, classe, arma){
        this.nome   = nome;
        this.idade  = idade;
        this.classe = classe;
        this.arma   = arma;
    }

    atack() {
        return `${this.classe} ${this.nome} causou dano com ${this.arma}`
    }
}

let characterClass = [
    new Heroi("Baruka", 29, "Guerreiro", "Espada"),
    new Heroi("Althea", 23, "Mago", "Magia"),
    new Heroi("Shen", 52, "Monge", "Artes Marciais"),
    new Heroi("Akira", 25, "Ninja", "Shuriken"),
    new Heroi("Ji-Woo", 24, "Monarca das Sombras", "Sombras"),
    new Heroi("Cha-hae-in", 36, "Guerreiro", "Espada")

];

function classHeroi(index){
    if(index >= 0 && index < characterClass.length ){
        const heroi = characterClass[index];
        console.log(heroi.atack());
    }else{
        console.log("Índice inválido. Não há heroi com esse Índice")
    }
   

}


classHeroi(4);
classHeroi(5);