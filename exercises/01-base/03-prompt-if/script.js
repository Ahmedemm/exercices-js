/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let gateau = prompt("Tu veux du gâteau ?");

    if (gateau.toLowerCase() === "oui") {
      alert("Félicitations ! Le gâteau est prêt. Profite-en !");
    } else {
      alert("Eh bien, du gâteau, ça ne se refuse pas ! Peut-être la prochaine fois.");
    }
    // your code here
})();
