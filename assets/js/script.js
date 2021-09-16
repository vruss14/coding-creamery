
function createSprinkles() {

    let container = document.getElementById("sprinkle-container");
    let color = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    let rotation = ["negative-fifty", "negative-forty", "negative-thirty", "negative-twenty", "negative-ten", "ten", "twenty", "thirty", "forty", "fifty"];

    for(let i=0; i<1200; i++) {

        let sprinkle = document.createElement("div");
        sprinkle.classList.add("sprinkle");

        let colorClass = color[Math.floor(Math.random() * color.length)];
        sprinkle.classList.add(`${colorClass}`);

        let rotationClass = rotation[Math.floor(Math.random() * rotation.length)];
        sprinkle.classList.add(`${rotationClass}`);

        container.appendChild(sprinkle);
    }
}

createSprinkles();