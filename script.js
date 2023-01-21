// define global variables.
const bill = document.getElementById("bill");
const numPeople = document.getElementById("num-people");
const percentages = document.getElementsByClassName("percentage");
const customPercentage = document.getElementsByClassName("custom");
const tip = document.querySelector(".tip-amount").lastElementChild;
const total = document.querySelector(".total-amount").lastElementChild;
const reset = document.querySelector("button");

// reset all of input and output data

reset.addEventListener("click", () => {
    numPeople.value = null;
    bill.value = null;
    customPercentage[0].value = null;
    tip.innerHTML = 0;
    total.innerHTML = 0;
});

// validate input information
const allowCaracters = /^[0-9]*$/;
document.querySelectorAll("input").forEach(element =>
    element.addEventListener("keypress", event => {
        if (!allowCaracters.test(event.key)) {
          event.preventDefault();
        }
    })
)


document.querySelectorAll(".grid-box .percentage").forEach(element =>
    element.addEventListener("click", (event)=> {
        let Target = event.target.textContent;
        let numberOfPercentages = Number(Target.slice(0,-1));
        if ( numPeople.value !== null || numPeople.value !== 0) {
            tip.innerHTML = bill.value / 100 * Number(numberOfPercentages)/numPeople.value;
            total.innerHTML = bill.value / 100 * Number(numberOfPercentages);
        } else  {
            tip.innerHTML = 0;
            total.innerHTML = 0;
        }
    }) 
)

customPercentage[0].addEventListener("input", (event) => {
    let Target = customPercentage[0].value;
    let numberOfPercentages = Number(Target);
    total.innerHTML = bill.value / 100 * Number(numberOfPercentages);
    tip.innerHTML = bill.value / 100 * Number(numberOfPercentages)/numPeople.value;
})









