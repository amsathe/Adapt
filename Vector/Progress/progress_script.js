console.log("progress_script is running")

// BUG - when i remove src from prgress html there is no text even showing up
// - its cause there was no buttons or text aleary rpesent. 
// EVERYTIME i reload the page the text forms fresh, since after load there was no src loaded there is no text. 
// but when i click the progress thingi is working sure and its info is gettign and daved and maybe the p is also forming 
// jsut hwne i load it should form that same thing but since progress.html deosnt have it its not running
// so i jsut need this code to run again just when it loads it shouldnt form AGAIN. 

let streak = document.getElementById("streak");

let save = []


save = JSON.parse(localStorage.getItem("save")) || []; // BUG - after this save deosnt remain array..( if outside window), if inside window the save isnt being saved and after refesh save array is just []
// - oh first this is running, this is same problem is buttonstr when removed history. here save is the saved array but itdeonst have any elemnt aved now so the arrya itslef becoems null so later using array is pointless


let streakp = JSON.parse(sessionStorage.getItem("clickedp")) || [] // i need to do this cause if i directly jsut open it without clicking there is nothign in clickedp as clickedp only saves when i click and it removes it after progress js runs. So if i havent clicked since i openedthe site and direcftly load progress it will show empty as ther was nothign in streakp

console.log(Array.isArray(save))

console.log(Array.isArray(streakp))

if (streakp.length>0){
    save.push(streakp[0]);// since there is only 1 element in the sterakp , im jsut taking the text so there is no nexted array
}// it also pushes enpty attay element so blank elemnt is also pushed thats why it will only push when length if legnth is greater than

save.splice(0,10);


localStorage.setItem("save", JSON.stringify(save));
console.log(localStorage.getItem("save"))



let y = 0;
while(save.length>y){
    let streakname = document.createElement("p");
    streakname.textContent=save[y] + ":  " + new Date().getDate() + " " + new Date().toLocaleString("en-US", {month:"long"})
    streak.appendChild(streakname);
    y++;
}

if (streakp.length>0){
    streakp.splice(0,1);
}


sessionStorage.setItem("clickedp", JSON.stringify(streakp));

console.log(localStorage.getItem("save"))


