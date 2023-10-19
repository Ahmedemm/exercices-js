/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let age, sexe, ville, confirmation;

do {
  age = prompt("Quel est votre âge ?");
  sexe = prompt("Quel est votre sexe ?");
  ville = prompt("Dans quelle ville habitez-vous ?");

  confirmation = confirm(`Confirmez-vous les informations suivantes?\n
    Age: ${age}\n
    Sexe: ${sexe}\n
    Ville: ${ville}`);

  if (!confirmation) {
    alert("Veuillez revoir vos informations.");
  }
} while (!confirmation);

alert("Merci pour la confirmation de vos informations !");

})();
