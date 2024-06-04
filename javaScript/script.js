function openForm() {
    document.getElementById("formModal").style.display = "block";
}

function closeForm() {
    document.getElementById("formModal").style.display = "none";
}

// Fecha o modal se clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("formModal")) {
        closeForm();
    }
}