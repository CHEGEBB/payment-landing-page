// script.js
let backgroundIntensity = 0; // Variable to track the current background intensity

function updateColorTheme() {
    changeColorTheme(); // Call the function to change the color theme based on the intensity
}

function changeColorTheme() {
    const body = document.body;
    const intensity = backgroundIntensity / 100;

    // Interpolate between dark cyan and dark greyish blue based on the intensity
    const hue = 180 - intensity * 40; // Adjust the hue value for the transition
    const backgroundColor = `hsl(${hue}, 100%, ${15 + intensity * 30}%)`;
    body.style.backgroundColor = backgroundColor;
}

// Event listener for slider input
document.getElementById("colorSlider").addEventListener("input", function () {
    backgroundIntensity = parseInt(this.value);
    updateColorTheme();
});

// Event listener for button click
document.getElementById("showTextButton").addEventListener("click", function () {
    const displayText = document.getElementById("displayText");
    displayText.textContent = "Text is shown!";
});
