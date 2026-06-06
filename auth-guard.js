// auth-guard.js
(function () {
    // Check if the user has already entered the password during this browser session
    const isAuthenticated = sessionStorage.getItem("site_authenticated");

    // Get the current page filename
    const currentPage = window.location.pathname.split("/").pop();

    // If not authenticated and not already on the login page, redirect to login
    if (!isAuthenticated && currentPage !== "login.html" && currentPage !== "") {
        // Prevent flashing of protected content before redirecting
        document.documentElement.style.display = "none";
        window.location.href = "login.html";
    }
})();