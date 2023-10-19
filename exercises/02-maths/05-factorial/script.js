/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
(() => {
    document.getElementById("run").addEventListener("click", () => {
        const numberInput = document.getElementById("number");
        const number = parseInt(numberInput.value);

        
        if (number >= 0) {
            const factorial = calculateFactorial(number);
            alert(`La factorielle de ${number} est ${factorial}.`);
        } else {
            alert("Veuillez entrer un nombre positif.");
        }
    });

    function calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * calculateFactorial(n - 1);
    }
})();

