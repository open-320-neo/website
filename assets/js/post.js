document.addEventListener("DOMContentLoaded", () => {
    // Extrahiere den Pfad aus der URL (z. B. "/bau")
    const path = window.location.pathname;

    // Entferne den führenden Slash und speichere den Rest als postId
    const postId = path.startsWith("/") ? path.slice(1) : path;

    if (postId) {
        // Konstruiere die URL für die PDF-Datei
        const pdfurl = `https://${postId}.open320neo.ch/README.pdf`;
        document.getElementById("pdf").innerHTML = "<div id='pdf'><embed src='" + pdfurl + "' id='pdf-content'></div>";
    } else {
        console.error('post-id not found in URL');
    }
});