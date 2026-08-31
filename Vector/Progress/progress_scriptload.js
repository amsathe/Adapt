console.log("progress_scriptload is running")

let save = JSON.parse(localStorage.getItem("save"));
let streak = document.getElementById("streak")

console.log(save)

let y = 0;
while (save.length>y){
    let phabitp = document.createElement("p");
    phabitp.textContent=save[y];
    streak.appendChild(phabitp)
    y++
}