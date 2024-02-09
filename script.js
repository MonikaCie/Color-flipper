const btn = document.getElementById('btn');
const colorLabel = document.getElementById('colorLabel');

const colours = [
    "Silver",
    "Gray",
    "Maroon",
    "Red",
    "Purple",
    "Fuchsia",
    "Green",
    "Lime",
    "Yellow",
    "Olive",
    "Blue",
    "Navy",
    "Teal",
    "Aqua"
]

btn.addEventListener('click', colourChange);

function colourChange() {
    randomNumber = Math.floor(Math.random() * (colours.length));
    document.body.style.backgroundColor = colours[randomNumber];
    colorLabel.innerText = `Background Color : ${colours[randomNumber]}`;
    console.log(randomNumber)
}