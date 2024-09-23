document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.navigation');
    const footer = document.querySelector('footer'); // Assuming you add a footer tag to main.html

    fetch('/navigation.html')
        .then(res => res.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Extract the header and footer from the fetched data
            const headerContent = tempDiv.querySelector('header').outerHTML;
            const footerContent = tempDiv.querySelector('footer').outerHTML;

            // Insert the header content into the navigation element
            nav.innerHTML = headerContent;

            // Insert the footer content into the footer element
            footer.innerHTML = footerContent;
        })
        .catch(err => console.error("Error loading navigation and footer:", err));
});
