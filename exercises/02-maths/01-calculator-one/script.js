/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const opOne =parseFloat(document.getElementById("op-one").value);
    const optwo =parseFloat(document.getElementById("op-two").value);
    document.getElementById("addition").addEventListener("click", () => {
    
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", () => {
        const result = opOne+optwo
        alert "le resultat est "$result""
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
    });
})();
