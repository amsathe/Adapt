console.log("running")

let newsub = document.getElementById("newsub");

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
        createsub.remove()
        blur.remove();
    })
})