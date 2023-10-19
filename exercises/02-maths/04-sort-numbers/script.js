/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const numbersInput = document.getElementById("numbers");
        const numbersString = numbersInput.value;
        const numbersArray = numbersString.split(', ').map(Number);
        numbersArray.sort((a, b) => a - b);
        numbersInput.value = numbersArray.join(', ');
    });
})();
