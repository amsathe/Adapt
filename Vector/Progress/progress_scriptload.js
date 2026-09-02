console.log("progress_scriptload is running")

let save = JSON.parse(localStorage.getItem("save"));
let streak = document.getElementById("streak")

console.log(save)

let y = 0;
while (save.length>y){
    let phabitp = document.createElement("p");
    phabitp.textContent=save[y] + ": " + new Date().getDate() + " " + new Date().toLocaleString("en-Us", {month:"long"});
    streak.appendChild(phabitp)
    y++
}

// streakname.textContent=save[y] + ":  " + new Date().getDate() + " " + new Date().toLocaleString("en-US", {month:"long"})