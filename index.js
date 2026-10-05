let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function (){
    container.style.transform = "rotate("+ 50 + number + "deg)";
    number +=Math.ceil(Math.random() * 1000)
}
const wheel = document.getElementById("wheel");
const amountInput = document.getElementById("amount");
const createButton = document.getElementById("createWheel");
const colors = ["red","blue","gray","black","orange","pink","aqua","purple","yellow","brown","cyan"]
createButton.addEventListener("click", () => {

    // CLEAR
    if (createButton.textContent === "clear") {

        // Remove all numbers
        wheel.querySelectorAll(".wheel-number").forEach(number => {
            number.remove();
        });

        // Remove the wheel colors
        wheel.style.background = "beige";

        // Reset rotation
        wheel.style.transform = "rotate(0deg)";

        // Clear input
        amountInput.value = "";

        // Change button back
        createButton.textContent = "Create Wheel";

        return;
    }

    // CREATE
    const amount = Number(amountInput.value);

    if (amount < 2) {
        alert("Enter a number greater than 1");
        return;
    }

    const angle = 360 / amount;
    let gradient = [];

    for (let i = 0; i < amount; i++) {

        const start = i * angle;
        const end = (i + 1) * angle;

        const color = colors[i % colors.length];

        gradient.push(`${color} ${start}deg ${end}deg`);

        // Create number
        const wheelNumber = document.createElement("span");

        wheelNumber.textContent = i + 1;
        wheelNumber.classList.add("wheel-number");

        const middleAngle = i * angle + angle / 2;

        wheelNumber.style.transform = `
            translate(-50%, -50%)
            rotate(${middleAngle}deg)
            translateY(-95px)
            rotate(-${middleAngle}deg)
        `;

        wheel.appendChild(wheelNumber);
    }

    // Add colors
    wheel.style.background =
        `conic-gradient(${gradient.join(",")})`;

    // Change button to Clear
    createButton.textContent = "clear";
});
// prize mode 

const modeChange = document.getElementById("Prize");
let prizeMode = document.querySelector(".container img");
modeChange.addEventListener("click", () => {
    if(prizeMode.style.display === "none"){
    prizeMode.style.display = "block";
    modeChange.textContent = "normal";
    amountInput.style.display = "none";
    createButton.style.display = "none";
    }else{
        prizeMode.style.display = "none";
        modeChange.textContent = "Prize Mode";
        amountInput.style.display = "block";
        createButton.style.display = "block";
    }
});
