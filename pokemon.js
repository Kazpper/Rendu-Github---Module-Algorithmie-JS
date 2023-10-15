class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return this.luck > Math.random()
    }
   
    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + ' a attaqué ' + pokemon.name + ' pour ' + damage + ' de dégât! Il lui reste ' + pokemon.hp + ' points de vie.')
        }   else {
            console.log(this.name + ' a ratté son attaque')
        }
    }
}

let bulbizarre = new Pokemon('bulbizarre', 23, 25, 80, 10)
let salameche = new Pokemon('salameche', 34, 16, 70, 10)

while (bulbizarre.hp > 0 && salameche > 0) {

    salameche.attackPokemon(bulbizarre)

    if (bulbizarre.hp -= 0) {
        console.log(bulbizarre.name + 'is dead!')
        break
    }

    bulbizarre.attackPokemon(salameche)

    if (salameche.hp -= 0) {
        console.log(salameche.name + 'is dead')
    }
}