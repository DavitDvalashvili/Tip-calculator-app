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
    document.querySelector("#text-box span:nth-of-type(2)").style.display = "none"
    numPeople.style.outline= ""
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


// calculates tip with "click" method
document.querySelectorAll(".grid-box .percentage").forEach(element =>
    element.addEventListener("click", (event)=> {
        const Target = event.target.textContent;
        const numberOfPercentages = Number(Target.slice(0,-1));
        const tipvalue1 = (bill.value /numPeople.value) / 100 * Number(numberOfPercentages)
        if ( Number(numPeople.value) == 0 || Number(numPeople.value) == null ) {
            tip.innerHTML = 0;
            total.innerHTML = 0;

        } else  {
            tip.innerHTML = Math.round(10*tipvalue1)/10;
            total.innerHTML = Math.round(10*tipvalue1 * numPeople.value)/10;
            customPercentage[0].value = null;
        }
    }) 
)

// calculates tip with "input" method
customPercentage[0].addEventListener("input", (event) => {
    let Target = customPercentage[0].value;
    let numberOfPercentages = Number(Target);
    let tipvalue2 = (bill.value /numPeople.value) / 100 * Number(numberOfPercentages)
    if ( Number(numPeople.value) == 0 || Number(numPeople.value) == null ) {
        tip.innerHTML = 0;
        total.innerHTML = 0;
    } else {
        total.innerHTML = Math.round(10*tipvalue2 * numPeople.value)/10;
        tip.innerHTML = Math.round(10*tipvalue2)/10;
    }

})

// show error message
numPeople.addEventListener("input", (event) => {
    const AlertStr = document.querySelector("#text-box span:nth-of-type(2)");
    if(numPeople.value==0 && numPeople.value.length > 0) {
        AlertStr.style.display = "inline" 
        numPeople.style.outline= "0.2rem solid #E17052"
    } else {
        AlertStr.style.display = "none"
        numPeople.style.outline= ""
    }
})







