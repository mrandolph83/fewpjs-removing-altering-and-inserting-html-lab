// Write your code here!
let maingone = document.getElementById('main')
maingone.remove();


let newHeader = document.createElement('h1')
document.body.appendChild(newHeader)
newHeader.id = 'victory'
newHeader.innerHTML = "Matt is the champion";