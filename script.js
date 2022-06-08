
const inputBtn = document.getElementById("input-btn")
const inputBox = document.getElementById("input-box")
const tableDisplay = document.querySelector(".table-display")


inputBtn.addEventListener("click", function() {
    let table = ""
    if(inputBox.value === "") {
        alert("Enter a number")
    } else {
        let number = inputBox.value

        for(let i = 1; i < 11; i++) {
            let multiple = number * i
            table = table + "<p>"+ number + " x " + i + " = " + multiple + "</p>";
            console.log(table)
        }
        tableDisplay.innerHTML = table
        tableDisplay.style.display = "block"
    }
})