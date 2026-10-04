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

    const amount = Number(amountInput.value);

    if (amount < 2) {
        alert("Enter a number greater than 1");
        return;
    }

    wheel.innerHTML = "";

    const angle = 360 / amount;

    let gradient = [];

    for (let i = 0; i < amount; i++) {

        const start = i * angle;
        const end = (i + 1) * angle;

        const color = colors[i % colors.length];

        gradient.push(`${color} ${start}deg ${end}deg`);

        // Create number
        const number = document.createElement("span");

        number.textContent = i + 1;
        number.classList.add("wheel-number");

        // Put number in the middle of its slice
        const middleAngle = i * angle + angle / 2;

        number.style.transform = `
            translate(-50%, -50%)
            rotate(${middleAngle}deg)
            translateY(-95px)
            rotate(-${middleAngle}deg)
        `;

        wheel.appendChild(number);
    }

    wheel.style.background =
        `conic-gradient(${gradient.join(",")})`;
});