const colorPicker = document.getElementById("colorPicker");
const hexValue = document.getElementById("hexValue");
const rgbValue = document.getElementById("rgbValue");
const toggleDarkMode = document.getElementById("toggleDarkMode");

// Mise à jour de la couleur
colorPicker.addEventListener("input", function () {
    let color = colorPicker.value;
    hexValue.textContent = color.toUpperCase();
    rgbValue.textContent = hexToRgb(color);
});

// Conversion HEX -> RGB
function hexToRgb(hex) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}

// Mode sombre
toggleDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleDarkMode.textContent = "☀️ Mode Clair";
    } else {
        toggleDarkMode.textContent = "🌙 Mode Sombre";
    }
});
