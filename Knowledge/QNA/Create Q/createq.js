let js = document.getElementById("js");

console.log("running")

let newsub = document.getElementById("newsub");
let newsubarr = []

newsub.addEventListener("click", function(){
    let createsub = document.createElement("div");
    createsub.id="createsub";
    document.body.appendChild(createsub)
    createsub.innerHTML = `
    <p id='inssub'>Insert Subject : </p>
    <input id='newsubinp'></input>
    <button id='consub'>Create Subject</button>
    `
    
    let blur = document.createElement("div");
    blur.id="blur";
    document.body.appendChild(blur)

    consub.addEventListener("click", function(){
        
        let newsubbut = document.createElement("button");
        console.log(newsubbut.tagName)
        let newsubinp = document.getElementById("newsubinp")
        newsubbut.textContent=newsubinp.value;
        newsubarr.push(newsubbut.textContent)
        localStorage.setItem("newsub", JSON.stringify(newsubarr))
        js.appendChild(newsubbut)
        createsub.remove()
        blur.remove();
    })
})

window.addEventListener("load", function(){
    newsubarr = JSON.parse(localStorage.getItem("newsub"))
    let y = 0;
    while (newsubarr.length>y){
        let savedsubbut = document.createElement("button");
        savedsubbut.textContent=newsubarr[y];
        js.appendChild(savedsubbut)
        y++
    }
})

