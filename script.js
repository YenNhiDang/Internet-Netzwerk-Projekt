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

/* Hamburger */
// Elemente auswählen
const hamburger = document.getElementById('hamburger');
const sidebar = document.querySelector('.sidebar');

// Klick-Funktion für #hamburger hinzufügen
hamburger.addEventListener('click', navStatus);

// Prüfen ob die Navigation geöffnet oder geschlossen ist
function navStatus() {
  if (document.body.classList.contains('hamburger-active')) {
    navClose();
  } else {
    navOpen();
  }
}

// Navi schließen
function navClose() {
  document.body.classList.remove('hamburger-active');
  sidebar.classList.remove('open');  // <--- Sidebar verstecken
}

// Navi öffnen
function navOpen() {
  document.body.classList.add('hamburger-active');
  sidebar.classList.add('open'); // <--- Sidebar anzeigen
}
