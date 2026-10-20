"use strict"; // Mode strict (vu dans le slide XX)

// Tableau de chaînes de caractères (Array, vu dans le slide XX)
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet littéral avec des propriétés (Object, vu dans le slide XX)
const etudiant = { nom: "John", prenom: "DOE", age: 30 };

// Tableau d'objets (Array d'Objects, vu dans le slide XX)
const etudiantsObjets = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

// Bouton "Tableau Etudiants" : affiche chaque élément du tableau
function f1() {
  // Ici on utilise une boucle for (vu dans le slide XX)
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]); // Accès à un élément par son indice (slide XX)
  }
}

// Bouton "Objet Etudiant" : affiche l'objet directement
function f2() {
  console.log(etudiant);
}

// Bouton "Tableau d'objets Etudiants" : affiche nom-prenom-age
function f3() {
  // Boucle for (slide XX)
  for (let i = 0; i < etudiantsObjets.length; i++) {
    const e = etudiantsObjets[i];
    // Accès aux propriétés avec la notation point + concaténation (slide XX)
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}
