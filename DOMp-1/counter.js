const decrementBtn = document.getElementById("decrementButton")
const incrementBtn = document.getElementById("incrementButton")
const resetBtn = document.getElementById("resetButton")
const displayvalue = document.getElementById("valueBox")

decrementBtn.addEventListener("click", () =>
    {
        const value = Number(displayvalue.innerText)
        if(value > 0){
            displayvalue.innerText = value - 1
        }
        else {
            alert("Negative values not allowed")
        }
    }
)

incrementBtn.addEventListener("click" ,() =>{

    const value = Number(displayvalue.innerText)
    if(value >=10){
        alert("10+ values are not allowed")
    }
    else {
        displayvalue.innerText = value + 1
    }
})

resetBtn.addEventListener("click", () =>{
    displayvalue.innerText = 0
})