class Heroi{
    constructor(nome, idade, classe){
        this.nome  = nome;
        this.idade   = idade;
        this.classe = classe;
    }

    atack() {
       let arma;

       switch(this.classe){
        case "Guerreiro":
            arma = "Espada"
            break

        case "Mago":
            arma = "Magia"
            break

        case "Monge":
            arma = "Artes Marciais"
            break

        case "Ninja":
            arma = "Shuriken"
            break

        default:
            return "Heroi Invalido!"
        }

        return `O ${this.classe} de Nome: ${this.nome} causou dano com ${arma}`
    }
}

function classHeroi(nome, idade, classe){
    return classHeroi = new Heroi(nome, idade, classe)

}

//Insira a entrada de dados aqui 
let nome = ""
let idade = ""
let classe = ""


const personagem = classHeroi (nome, idade, classe);

console.log(personagem.atack()); 