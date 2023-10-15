let a="Jean"
let b="Paul" 
let result = checkName(a, b)

function checkName(penom1, prenom2) {
    if (prenom1 === prenom2) {
        return "Les deux prenoms sont identiques"
    } else {
        return "Les deux prenoms ne sont pas identiques"
    }
}

console.log(result)