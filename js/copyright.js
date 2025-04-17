(function() {
    function addCopyright() {
        var currentYear = new Date().getFullYear();
        var copyrightText = "Copyright © 2024-" + currentYear + ", CHUBOE LLC. All Rights Reserved.";
        var copyrightElement = document.getElementById('copyright');
        copyrightElement.textContent = copyrightText;
    }

    // Run the function when the DOM is fully loaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addCopyright);
    } else {
        addCopyright();
    }
})();
