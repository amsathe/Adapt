// enter step in main box and it will get created below as another box , later i wanna do that the lateest box created if i enter in it it will itslef create nextbox // 


let codethink = document.getElementById("codethink");

let logicinput = document.createElement("input");
logicinput.id = "logicinput";
codethink.appendChild(logicinput);
logicinput.style.display="block";

codethink.appendChild(document.createElement("br"));




logicinput.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        let newlogicinput = document.createElement("input");
        newlogicinput.id="newlogicinput";
        codethink.appendChild(newlogicinput);
        newlogicinput.value = logicinput.value;
        newlogicinput.style.display="block";
        logicinput.value = ""
    }
})


