const displayButton = document.getElementById("Display");

displayButton.addEventListener("click", function() {
    const first = document.getElementById("First").value;
    const second = document.getElementById("Second").value;

    document.getElementById("output").textContent = first + " " + second;
});