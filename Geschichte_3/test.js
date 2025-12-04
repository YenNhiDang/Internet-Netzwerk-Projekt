document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;    
        const section = document.getElementById(targetId);

        section.style.display = 
            section.style.display === "none" ? "block" : "none";
    });
});