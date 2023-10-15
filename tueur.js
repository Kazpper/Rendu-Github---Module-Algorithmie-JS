const Jason = {
    nom: "Jason",
    pointsDeVie: 100,
  }
  
  const prenomsSurvivants = ["Alice", "Bob", "Charlie", "David", "Eve"];
  
  const caracteristiquesSurvivants = [
    { nom: "Nerd", probabiliteMourir: 0.3, probabiliteInfligerDegats: 0.5, probabiliteMourirEnInfligeantDegats: 0.2 },
    { nom: "Sportif", probabiliteMourir: 0.2, probabiliteInfligerDegats: 0.7, probabiliteMourirEnInfligeantDegats: 0.3 },
    { nom: "Blonde", probabiliteMourir: 0.4, probabiliteInfligerDegats: 0.4, probabiliteMourirEnInfligeantDegats: 0.1 },
  
  ]
  
  function attaquerJason(survivant) {
    const action = Math.random()
    if (action < survivant.caracteristique.probabiliteMourir) {
      
      survivant.pointsDeVie = 0
      console.log({Jason.nom} a tué {survivant.prenom}.`)
    } else if (action < survivant.caracteristique.probabiliteInfligerDegats) {
      
      Jason.pointsDeVie -= 10
      console.log({survivant.prenom} a esquivé et infligé 10 points de dégâts à {Jason.nom}.`)
    } else if (action < survivant.caracteristique.probabiliteMourirEnInfligeantDegats) {
      
      Jason.pointsDeVie -= 15
      survivant.pointsDeVie = 0
      console.log({survivant.prenom} a infligé 15 points de dégâts à {Jason.nom}, mais est mort.`)
    }
  }
  
  
  while (Jason.pointsDeVie > 0 && survivants.some((survivant) => survivant.pointsDeVie > 0)) {
    for (const survivant of survivants) {
      if (survivant.pointsDeVie > 0) {
        attaquerJason(survivant)
      }
    }
  }
