let inputb = document.getElementById("inputb")

inputb.style.width="80%";
inputb.addEventListener("input", function(){
    localStorage.setItem("inputbs", inputb.value);
    inputb.style.height="auto";
    inputb.style.height = inputb.scrollHeight + "px";
})

window.addEventListener("load", function(){
    inputb.value = localStorage.getItem("inputbs");
    inputb.style.height="auto";
    inputb.style.height = inputb.scrollHeight + "px";
})