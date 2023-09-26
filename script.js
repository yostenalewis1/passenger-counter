let countEl = document.getElementById('count-el')
let done = document.getElementById("final")
let count =0 

function increment() {
    count += 1
    countEl.textContent = count
}


function save()
{
    count += " - "
    final.textContent += count
    countEl.textContent = 0
    count = 0
}