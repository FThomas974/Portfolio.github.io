const darkModeButton = document.getElementById("demo2-a");
const lightModeButton = document.getElementById("demo2-b");
var elements = document.getElementsByClassName("dark");
var darkMode = document.querySelectorAll(".dark-mode");  // Use querySelectorAll() instead of getElementById() to select all elements with the ID "image"
var greyMode = document.querySelectorAll(".grey-mode");


darkModeButton.addEventListener("click", () => {
    document.getElementById("header").style.backgroundColor = "white";
    document.getElementById("footer").style.backgroundColor = "white";
    darkMode.forEach(id => id.style.backgroundColor = "white");  // Iterate through the images and change their src
    darkMode.forEach(id => id.style.color = "black");
    greyMode.forEach(id => id.style.backgroundColor = "white");
    greyMode.forEach(id => id.style.color = "black");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        // code pour chaque élément sélectionné
        element.style.color="black";
    }
});
lightModeButton.addEventListener("click", () => {
    document.getElementById("header").style.backgroundColor = "#1A1E1F";
    document.getElementById("footer").style.backgroundColor = "#1A1E1F";
    darkMode.forEach(id => id.style.backgroundColor = "#1A1E1F");  // Iterate through the images and change their src
    darkMode.forEach(id => id.style.color = "white");
    greyMode.forEach(id => id.style.backgroundColor = "#4a4a4a");
    greyMode.forEach(id => id.style.color = "white");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        // code pour chaque élément sélectionné
        element.style.color="white";
    }
});
