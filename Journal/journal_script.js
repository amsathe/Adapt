

let input = document.getElementById("journalinput");  // basically we are making variable here //
let journaltext = document.getElementById("journaltext")
let jr = document.getElementById("jr");
let check = document.getElementById("check");
let todo = document.getElementById("todo");
let tdi = document.getElementById("tdi");
let backtodo = document.getElementById("backtodo");
let backtdi = document.getElementById("backtdi");
let back = document.getElementById("back");
let backup = document.getElementById("backup")

window.addEventListener("load", function(){
    if (sessionStorage.getItem("checkif")){
        backup.style.display="block"
        todo.style.display="none"
        backtodo.style.display="block"
        jr.style.display="block";
        input.style.display="none";
        jr.value = localStorage.getItem("localindex");
        jr.style.height="auto";
        jr.style.height = jr.scrollHeight + "px";
    }
    back.addEventListener("click", function(){
        sessionStorage.removeItem("checkif");
    })
})

let tdiarray = []
let stfbut = []
let backtdiarray = []
let sbackdelbutarray = []


window.addEventListener("load", function (){
    if (sessionStorage.getItem("loggedin")){
        journaltext.style.display="block"
    } else {
        journaltext.style.display="none"
    }
})

// journalinput ( input ) = visible //
input.value = localStorage.getItem("journal"); // basically we using getitem to get teh value that was saved. but to save the value we are usong setitem in input value. bascially first setitem in input.value then getitem inside input.value //

input.addEventListener("input", function (){
    localStorage.setItem("journal", input.value)
}); // from that variable (.) we are taking (addevent listener) putting on a guart that sees when action ("click") someone clicks the function, local storage is brower storage, set item is storing it, and jornal is the name its stored by and getitem means to fetch it adn we put the jouranl in bracker as we named it //

input.addEventListener("input", function(){
    input.style.height = "auto"; input.style.height=input.scrollHeight + "px";
});

window.addEventListener("load", function(){input.style.height = "auto"; input.style.height=input.scrollHeight + "px";})

    jr.addEventListener("input", function(){
        localStorage.setItem("localindex", jr.value);
        jr.style.height="auto";
        jr.style.height = jr.scrollHeight + "px";
    })

// todo//



tdi.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        tdiarray.push(tdi.value);
        localStorage.setItem("tdi", JSON.stringify(tdiarray));
        let line = document.createElement("hr");
        let br1 = document.createElement("br");
        let tdbutton = document.createElement("button");
        tdbutton.id="tdbutton";
        let br2 = document.createElement("br");
        let tp = document.createElement("p");
        tp.id="tp";
        
        tdbutton.textContent="Delete"
        tp.id="tp";
        tp.textContent=tdi.value;
        todo.appendChild(tp);
        todo.appendChild(br1);
        todo.appendChild(br2);
        todo.appendChild(line);
        todo.appendChild(tdbutton);
        tdi.value="";
        location.reload()
    }
})

window.addEventListener("load", function(){
    tdiarray = JSON.parse(localStorage.getItem("tdi")) || [];
    let x = 0;
    while (tdiarray.length>x){
        let stdbutton = document.createElement("button");
        let lui = document.createElement("i");
        lui.setAttribute('data-lucide', 'circle-check');
        lui.className="lui";
        stdbutton.appendChild(lui);
        stfbut.push(stdbutton);
        let sline = document.createElement("hr");
        let sbr1 = document.createElement("br");
        let sbr2 = document.createElement("br");
        let stp = document.createElement('p');
        stp.style.display="inline"
        
        stdbutton.id="stdbutton"; // jsut giivng id wont make this button work everything. to put it in a function i need to doth getelemnt by id in that eventlsitnere !!//
        stp.id="stp";
        stp.textContent=tdiarray[x];
        todo.appendChild(stdbutton);
        todo.appendChild(stp);
        todo.appendChild(sbr1);
        todo.appendChild(sbr2);
        todo.appendChild(sline);
        x++;
        lucide.createIcons();
        // step 1 store the one true value when clicked in array //
        // step 2 make a while loop and check where the treu value is //
        // if true delete the particalr x elemtn and splice it //
        stdbutton.addEventListener("click", function(){
            stdbutton.disabled = true;
            let deletetd = [];
            let i = 0;
            while(tdiarray.length>i){
                let tfvalue = stfbut[i].disabled;
                deletetd.push(tfvalue);
                localStorage.setItem("deleteinfotd", JSON.stringify(deletetd));
                i++;
            }
            let y = 0;
            while(tdiarray.length>y){
                let retrivetddelete = JSON.parse(localStorage.getItem("deleteinfotd"));
                if(retrivetddelete[y]){
                    tdiarray.splice(y, 1); // MISTAKE = write splice(y) i forogt its syntax //
                    localStorage.setItem("tdi", JSON.stringify(tdiarray));// MSITAKE = forget to save the new array //
                    location.reload()
                }
                y++
            }
        })
        // i want when i lcick it stores disabled value, and in that split second it should check which is disabled get its x value and//
        // PRIOROTY !! - splice t hat x value from tdiarray ad romve its element t00//
    }
})


backtdi.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        let backtdp = document.createElement("p");
        backtdp.id="backtdp"
        let backdelbut = document.createElement("button");
        backdelbut.id="backdelbut";
        let backbr1 = document.createElement("br");
        let backbr2 = document.createElement("br");
        let backline = document.createElement("hr");
        backtdp.style.display="inline";
        backdelbut.textContent="delete";
        backtdp.textContent=backtdi.value;
        backtdiarray.push(backtdp.textContent)
        localStorage.setItem("backtdp", JSON.stringify(backtdiarray))
        backtodo.appendChild(backtdp);
        backtodo.appendChild(backdelbut);
        backtodo.appendChild(backbr1);
        backtodo.appendChild(backbr2);
        backtodo.appendChild(backline);
        backtdi.value=""
        location.reload()
    }
})

window.addEventListener("load", function(){
    backtdiarray = JSON.parse(localStorage.getItem("backtdp"));
    let a = 0;
    while(backtdiarray.length>a){
        let sbacktdp = document.createElement("p")
        sbacktdp.id="sbacktdp";
        let sbackdelbut = document.createElement("button");
        sbackdelbutarray.push(sbackdelbut)
        sbackdelbut.id="sbackdelbut";
        let backlui = document.createElement("i");
        backlui.setAttribute('data-lucide', 'circle-check')
        backlui.className="backlui";
        sbackdelbut.appendChild(backlui);
        let sbackbr1 = document.createElement("br");
        let sbackbr2 = document.createElement("br");
        let sbackline = document.createElement("hr")
        backtodo.appendChild(sbacktdp);
        backtodo.appendChild(sbackdelbut);
        backtodo.appendChild(sbackbr1);
        backtodo.appendChild(sbackbr2);
        backtodo.appendChild(sbackline)
        sbacktdp.textContent=backtdiarray[a]
        a++;
        lucide.createIcons();
        sbackdelbut.addEventListener("click", function(){
            sbackdelbut.disabled=true;
            let backtfdisarray = []
            let b = 0;
            while(backtdiarray.length>b){
                let backdischeck = sbackdelbutarray[b].disabled;
                backtfdisarray.push(backdischeck);
                b++
            }
            let c = 0;
            while(backtdiarray.length>c){
                if(backtfdisarray[c]){
                    backtdiarray.splice(c, 1);
                    localStorage.setItem("backtdp", JSON.stringify(backtdiarray));
                    location.reload()
                }
                c++;
            }
        })
    }
})



// NOTE : getelemtn byid and stuff js runs BEFORE teh window is even loaded !! //


// check
check.addEventListener("keydown", function(event){
    if (check.value === "localdate" && event.key==="Shift"){
        input.style.display="none";
        jr.style.display="block";
        todo.style.display="none";
        backtodo.style.display="block"
        backup.style.display="block"
        check.value="";
        sessionStorage.setItem("checkif", "oui")
    }

    jr.value = localStorage.getItem("localindex");
    jr.style.height="auto";
    jr.style.height = jr.scrollHeight + "px";
})


// jr = sec //


backup.addEventListener("click", function(){
    localStorage.setItem("backupjr", localStorage.getItem("localindex"));
    console.log(localStorage.getItem("backupjr"));
})

