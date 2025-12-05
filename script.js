/* 
 * Dieses Skript ermöglicht mehreren Buttons das gezielte Ein- und Ausblenden 
 * verschiedener Bereiche (Sections). Jeder Button besitzt ein data-target-Attribut, 
 * das die ID der anzusteuernden Section enthält. Beim Klick wird der aktuelle 
 * Sichtbarkeitsstatus abgefragt und entsprechend zwischen "block" und "none" umgeschaltet.
 */

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;    
        const section = document.getElementById(targetId);

        section.style.display = 
            section.style.display === "none" ? "block" : "none";
    });
});