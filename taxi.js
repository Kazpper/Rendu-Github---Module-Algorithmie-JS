class Personnage {
    constructor(prenom, santeMentale) {
      this.prenom = prenom
      this.santeMentale = santeMentale
    }
  
    perdreSanteMentale() {
      this.santeMentale -= 1
    }
  }
  
  const musiques = ["Musique1", "Musique2", "Musique3", "Musique4", "Anissa - Wejdene"]
  
  class Trajet {
    constructor() {
      this.radio = musiques;
      this.feuxRougesRestants = 30
      this.nbChangements = 0
    }
  
    passerFeuRouge() {
      if (this.feuxRougesRestants > 0) {
        const musique = this.radio[Math.floor(Math.random() * this.radio.length)]
        console.log(`Musique : {musique}, Feux restants : {this.feuxRougesRestants}`)
        this.feuxRougesRestants -= 1
        if (musique === "Anissa - Wejdene") {
          john.perdreSanteMentale()
          if (john.santeMentale === 0) {
            console.log("Explosion")
            return
          }
          this.nbChangements += 1
          this.passerFeuRouge()
        }
      } else {
        console.log(`John est bien arrivé à destination en {this.nbChangements} changements de taxi.`)
      }
    }
  }
  
  const john = new Personnage("John", 10)
  
  const trajetJohn = new Trajet()
  
  trajetJohn.passerFeuRouge()