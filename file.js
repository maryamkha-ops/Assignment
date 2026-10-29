const button = document.getElementById("colorButton");

const colors = [
    "linear-gradient(135deg, #ff6a00, #ee0979)",
    "linear-gradient(135deg, #00c6ff, #0072ff)",
    "linear-gradient(135deg, #11998e, #38ef7d)",
    "linear-gradient(135deg, #fc466b, #3f5efb)",
    "linear-gradient(135deg, #667eea, #764ba2)"
];

let currentColor = 0;

button.addEventListener("click", function () {
    document.body.style.background = colors[currentColor];

    currentColor = (currentColor + 1) % colors.length;
});