
function createSprinkles() {

    let container = document.getElementById("sprinkle-container");
    let color = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    let rotation = ["negative-fifty", "negative-forty", "negative-thirty", "negative-twenty", "negative-ten", "ten", "twenty", "thirty", "forty", "fifty"];

    // Number of sprinkles (loop iterations) dependent on viewport width

    if (window.innerWidth > 1024) {
        for(let i=0; i<1100; i++) {

            let sprinkle = document.createElement("div");
            sprinkle.classList.add("sprinkle");
    
            let colorClass = color[Math.floor(Math.random() * color.length)];
            sprinkle.classList.add(`${colorClass}`);
    
            let rotationClass = rotation[Math.floor(Math.random() * rotation.length)];
            sprinkle.classList.add(`${rotationClass}`);
    
            container.appendChild(sprinkle);
        }
    } else if(window.innerWidth > 768) {
        for(let i=0; i<1430; i++) {

            let sprinkle = document.createElement("div");
            sprinkle.classList.add("sprinkle");
    
            let colorClass = color[Math.floor(Math.random() * color.length)];
            sprinkle.classList.add(`${colorClass}`);
    
            let rotationClass = rotation[Math.floor(Math.random() * rotation.length)];
            sprinkle.classList.add(`${rotationClass}`);
    
            container.appendChild(sprinkle);
        }
    } else {
        for(let i=0; i<800; i++) {

            let sprinkle = document.createElement("div");
            sprinkle.classList.add("sprinkle");
    
            let colorClass = color[Math.floor(Math.random() * color.length)];
            sprinkle.classList.add(`${colorClass}`);
    
            let rotationClass = rotation[Math.floor(Math.random() * rotation.length)];
            sprinkle.classList.add(`${rotationClass}`);
    
            container.appendChild(sprinkle);
        }
    } 
}

createSprinkles();