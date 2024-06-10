
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a , b) {
    let max = (a==b || a>b) ? a : b; 
    return max;
}

console.log(ternaire(2, 2));

module.exports = ternaire;