function checkCode() {
    // Prompt the user for a code input
    var code = prompt("Qual o código?");

    // Check if the code is correct
    if (code === "??") {
        // Redirect to the codex page
        window.location.href = "./codex";
    } else {
        // Show an alert and redirect to the 404 error page
        alert("Código incorreto!");
        // window.location.href = "./404.html";
        document.write("Tente de novo ou... retorne no dia 28/04/2024 às 16h00.");
    }
}