let resultEl = document.getElementById("result-el")
let count1El = document.getElementById("count1-el")
let count2El = document.getElementById("count2-el")

let count1 = 0
let count2 = 0


function increment1() {
    count1 += 1
    count1El.textContent = count1
    if (count1 === 10 && count2 === 10)
        resultEl.textContent = "Deuce. Must win by 2."
    if (count1>=11 && count1-count2 >=2){
        resultEl.textContent = "Player A wins, " + count1 + " to " + count2 
        document.getElementById("increment1-btn").disabled = true;
        document.getElementById("increment2-btn").disabled = true;

    }
}

function increment2() {
    count2 += 1
    count2El.textContent = count2
    if (count1 === 10 && count2 === 10)
        resultEl.textContent = "Deuce. Must win by 2."
    if (count2>=11 && count2-count1 >=2){
        resultEl.textContent = "Player B wins, " + count2 + " to " + count1 
        document.getElementById("increment2-btn").disabled = true;
        document.getElementById("increment1-btn").disabled = true;

    }
}


function reset() {
    count1 = 0
    count2 = 0
    count1El.textContent=0
    count2El.textContent=0
    resultEl.textContent = ""
    document.getElementById("increment1-btn").disabled = false;
    document.getElementById("increment2-btn").disabled = false;
    
}
