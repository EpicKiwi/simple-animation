let agentA = new Agent(document.getElementById("dot-a"))
let agentB = new Agent(document.getElementById("dot-b"))
let agentC = new Agent(document.getElementById("dot-c"))

let squares = Array.from(document.querySelectorAll(".square"))

function goToSquare(index){
    agentA.goToElement(squares[index],Agent.EAST);
    agentC.goToElement(squares[(index + Math.floor(squares.length / 2)) % squares.length],Agent.NORTHWEST);
    setTimeout(() => goToSquare((index + 1) % squares.length),1000)
}

agentB.goToElement(squares[1])
goToSquare(0)

squares.forEach(el => {
	el.addEventListener("click", e => agentB.goToElement(e.currentTarget))
})