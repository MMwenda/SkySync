document.addEventListener("DOMContentLoaded", function() {
    var loadingScreen = document.querySelector(".loading-screen");
    var body = document.querySelector("body");

    // Show loading screen initially
    body.classList.add("loading");

    // Set a minimum loading time (in milliseconds)
    var minimumLoadTime = 2000; // 2 seconds
    var loadStartTime = Date.now();

    window.addEventListener("load", function() {
        var loadEndTime = Date.now();
        var actualLoadTime = loadEndTime - loadStartTime;

        // Calculate time to wait before hiding the loading screen
        var timeToWait = Math.max(minimumLoadTime - actualLoadTime, 0);

        // Hide loading screen after the required time
        setTimeout(function() {
            if (loadingScreen) {
                loadingScreen.style.display = "none";
            }
            body.classList.remove("loading");
        }, timeToWait);
    });
});
