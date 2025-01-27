document.addEventListener("DOMContentLoaded", function() {
    // Extract the post-id from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post-id');

    if (postId) {
        // Construct the URL for the raw markdown file
        const markdownUrl = `https://raw.githubusercontent.com/open-320-neo/${postId}/refs/heads/main/README.md`;

        // Fetch the markdown file
        fetch(markdownUrl)
            .then(response => response.text())
            .then(markdown => {
                // Convert markdown to HTML
                const converter = new showdown.Converter();
                const html = converter.makeHtml(markdown);

                // Insert the HTML into the page
                document.getElementById('content').innerHTML = html;
            })
            .catch(error => console.error('Error fetching markdown:', error));
    } else {
        console.error('post-id not found in URL');
    }
});