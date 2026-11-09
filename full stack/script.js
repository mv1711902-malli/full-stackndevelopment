
// Refresh Page
function refreshPage() {
    location.reload();
}

// Toggle Navigation Menu
function toggleMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}

// Submit Work
function submitWork() {
    alert(
        "Your project is ready for submission! " +
        "Please upload your project files and live URL."
    );
}
