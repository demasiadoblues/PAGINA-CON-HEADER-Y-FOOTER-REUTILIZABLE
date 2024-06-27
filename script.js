document.addEventListener("DOMContentLoaded", function() {
    includeHTML();
});

async function includeHTML() {
    const elements = document.querySelectorAll("[include-html]");
    for (let elmnt of elements) {
        const file = elmnt.getAttribute("include-html");
        if (file) {
            try {
                const response = await fetch(file);
                if (response.ok) {
                    elmnt.innerHTML = await response.text();
                } else {
                    elmnt.innerHTML = "Page not found.";
                }
                elmnt.removeAttribute("include-html");
                includeHTML();
            } catch (error) {
                console.error('Error fetching the file:', error);
                elmnt.innerHTML = "Error loading content.";
            }
        }
    }
}
