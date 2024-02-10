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

btn.addEventListener('click', colourRGB);

function colourChange() {
    randomNumber = Math.floor(Math.random() * (colours.length));
    document.body.style.backgroundColor = colours[randomNumber];
    colorLabel.innerText = `Background Color : ${colours[randomNumber]}`;
    console.log(randomNumber)
}


function colourRGB() {
    let randonRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);
    let RGB = `rgb(${randonRed},${randomGreen},${randomBlue})`
    console.log(RGB);
    document.body.style.backgroundColor = RGB;
    colorLabel.innerText = `Background Color : ${RGB}`;

}

colourRGB()
