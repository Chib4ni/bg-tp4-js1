"use strict"; // Mode strict (vu dans le slide XX)

// Données Students : (id, nom, prénom, moyenne, absences)
// Tableau d'objets (Array + Object, vu dans le slide XX)
const Students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     moyenne: 14, absences: 5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", moyenne: 7,  absences: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   moyenne: 13, absences: 3 }
];

// Fonction B : prend un seul paramètre float et retourne un booléen (slide XX)
function B(moyenne) {
  // Opérateur de comparaison >= (slide XX) : admis si la moyenne est >= 10
  return moyenne >= 10;
}

// Fonction A : appelée par le bouton, elle appelle B (slide XX)
function A() {
  // Ici on utilise une boucle for (vu dans le slide XX)
  for (let i = 0; i < Students.length; i++) {
    // Structure conditionnelle if / else (vu dans le slide XX)
    if (B(Students[i].moyenne)) {
      console.log(Students[i].id + ": ADMIS");
    } else {
      console.log(Students[i].id + ": AJOURNÉ");
    }
  }
}
