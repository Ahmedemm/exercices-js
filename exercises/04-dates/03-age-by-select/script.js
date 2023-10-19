/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function calculateAge() {
        const day = parseInt(document.getElementById("dob-day").value);
        const month = parseInt(document.getElementById("dob-month").value);
        const year = parseInt(document.getElementById("dob-year").value);

        const currentDate = new Date();
        const userBirthdate = new Date(year, month - 1, day);
        let age = currentDate.getFullYear() - userBirthdate.getFullYear();

        if (
            currentDate.getMonth() < userBirthdate.getMonth() ||
            (currentDate.getMonth() === userBirthdate.getMonth() && currentDate.getDate() < userBirthdate.getDate())
        ) {
            age--;
        }

        alert("Votre âge est de " + age + " ans.");
    }

    document.getElementById("run").addEventListener("click", calculateAge);
})();
