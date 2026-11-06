let mainfigdiv = document.getElementById("mainfigdiv");
let limitinput = document.getElementById("limitinput");


let figoutlimitparr = [];

limitinput.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        let newfigoutdiv = document.createElement("button");
        newfigoutdiv.textContent=limitinput.value;
        mainfigdiv.appendChild(newfigoutdiv);
        newfigoutdiv.id="newfigoutdiv";
        figoutlimitparr.push(limitinput.value);
        localStorage.setItem("limit", JSON.stringify(figoutlimitparr));
        location.reload();
    }
})

window.addEventListener("load", function(){
    // figoutlimitparr.splice(0,10)
    // localStorage.setItem("limit", JSON.stringify(figoutlimitparr));
    figoutlimitparr = JSON.parse(localStorage.getItem("limit"));
    
    let y = 0;
    while (y<figoutlimitparr.length){
        let savedfigoutdiv = document.createElement("button");
        savedfigoutdiv.id="savedfigoutdiv"
        savedfigoutdiv.textContent=figoutlimitparr[y];
        mainfigdiv.appendChild(savedfigoutdiv);
        y++;
        savedfigoutdiv.addEventListener("click", function(){
            let partdiv = document.createElement("div");
            let blurrrrr = document.createElement("div");
            blurrrrr.id="blurrrrr";
            partdiv.id="partdiv";
            document.body.appendChild(partdiv);
            document.body.appendChild(blurrrrr);
        })
    }
    
})

let savedfigoutdiv = document.getElementById("savedfigoutdiv");



