document.addEventListener("DOMContentLoaded", function() {
    // Extract the post-id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post-id');

    if (postId) {
        // Construct the URL for the raw markdown file
        const pdfurl = `https://${postId}.open320neo.ch/README.pdf`;
        document.getElementById("pdf-content").innerHTML = "<div id='pdf-content'><embed src='" + pdfurl + "'></div>"
    } else {
        console.error('post-id not found in URL');
    }
});