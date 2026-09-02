// tbh i can think of doing the disabled enable by date again later. for now, everytime i clikc it hsoudl dave info and form graph. thats doable//

// BUG 1 - bascially when i remove browsing history along with cookies all localstoage vanishes. Now ifi try to create a new habit it gets creates but after buttonstr.push the code breaks and mroeover whne i reload the habit isnt saved even as a key. But when i remove the code from window save, create a habit ( its jsut sequice in which it works ) and come bakc here and put code back then save it back, then it starts wokring 
// - basically whats happenign is the enter code deosnt run whne loaded, that code only runs when i enter, the load code runs, but when i remove browsing hisotyr there is no elemnt in buttonstr not even null, so the array itslef becoems null, not a null array but the array itslef is null meaning no array exists, and hence null.push , push only works for array but now since no array exists that thing doesnt work. even in enter, sicne the load code ran first, the buttonstr was already null so nothign was saved when i entered so agai nafter reolading it still remained numm and no array. but hwne i removed the window code and jsut let that code remain and put the enter code, the buttonstr array did exist, and it stored a value and upon putting the window code it took out he buttonstr array and it isnt null now so array deos exist. so t ofix it when there is nothign in array i need to figure out a way for array itslef to not become null but its elemtn to become null
// ill use || , || is OR, so absicall when i say buttonstr = JSON.parse(localstorage.getitem("buttonstr")) || [], it basically the first command is null as there was no saved, || works whne somethign is false, null is falsy so it takes other comman which is buttonstr = [], so it lets it be array.

// Bug 2 - why info goes missing
// - when i delete browsing history and cookies it deletes localstroage too. jsut delleteing hisotyr doesnt do anything. delte cookies and all deletes it. 
let habit_input = document.getElementById("habit_input");
let newhabithtml = document.getElementById("newhabithtml");
let maindel = document.getElementById("maindel")
let delpop = document.getElementById("delpop");
let delinp = document.getElementById('delinp');
let progress = document.getElementById("progress");

let buttonstr = []
let darray = [];





// what im inagin, all habits will be in some boxes and each day boxed will reset andwhen i clic kthem//
// green color will blick on box adn for that day its counted //
// the dada of at what day and etc is in data tab. //
// each day boxes wll reset and all i have to do is click on box to say i did it //

// i need icons, it should itslef know what icon to put //



habit_input.addEventListener("keydown", function (event){
    if (event.key==="Enter"){
        let newbutton = document.createElement("button");
        newbutton.id = "newbutton";
        newbutton.textContent = habit_input.value;
        newhabithtml.appendChild(newbutton);
        buttonstr.push(newbutton.textContent);
        habit_input.value=""
        
        localStorage.setItem("buttonstr", JSON.stringify(buttonstr));
        
        // WHAT IM GONNA DO HERE IS IM GONNA REMOVE THE CONCEPT OF NEW AND SAVED BUTTON RN.//
        // WE WONT EVER USE NEWBUTTON AS EVERYTIEM I ENTER THE SITE WILL RELEOD> SO THE NEW BUTTOM BECOME SAVEDBUTTON//
        // THE DIABLE ARRAY WASNT WORKIGN CAUSE IT USED PUSED SAVEDBUTTON ARRAY BUT I CANT PUSH NEWBUTTON AND ITS NEW//
        // FORCED BUTTON IS STILL NOT SAVED BUTTON SO IM GONNA MAKE IT EVERYTIME I ENTER //
        location.reload();
    }
})


// rn i cant logic how to delete , even if i gave delete to each button, how would it identify//
// which x. so for now im create a main delete and when i press it ill get pop up or smth where//
// i need to write seriel no of which to delte. that way x will be clear //


window.addEventListener("load", function(){
    buttonstr = JSON.parse(localStorage.getItem("buttonstr")) || [];
    let x = 0;
    while (buttonstr.length>x){
        let savedbutton = document.createElement("button");
        darray.push(savedbutton);
        savedbutton.id = "savedbutton";
        savedbutton.textContent = buttonstr[x];
        newhabithtml.appendChild(savedbutton);
        x++;
        savedbutton.addEventListener("click", function(){
            savedbutton.disabled=true;
            let discheckarray = [];
            let y = 0;
            while (buttonstr.length>y){
                let checkdis = darray[y].disabled;
                discheckarray.push(checkdis);
                localStorage.setItem("checkdis", JSON.stringify(discheckarray))
                y++;
            }
            let u = 0;
            while(discheckarray.length>u){
                if (discheckarray[u]){
                    let justsavearr = [];
                    justsavearr.push(buttonstr[u]); // till here jusrsavearr is storing the clicked str the problem is in storage
                    sessionStorage.setItem("clickedp", JSON.stringify(justsavearr));
                    let scc = document.createElement("script")
                    scc.src="./Progress/progress_script.js";
                    document.body.appendChild(scc);
                    
                    
                };
                u++;;
            }
            
        })
    }
})

maindel.addEventListener("click", function(){
    delpop.style.display="flex";
    })

delinp.addEventListener("keydown", function(event){
        if (event.key==="Enter"){
            delpop.style.display="none";
            let x = delinp.value;
            buttonstr.splice(x-1,1);
            // the button is deleteed for sure. tbh we cant say its delete but it was never formend. basucally when i remove string, wehn i reload the buttons are formed accoring to how many buttonstr elemtns are there, since the elemnt is gone so he button itslwf wont form//

            // .remove jst visally removes it , it deosnt remove from array. to remove fro marray u need splice //
            darray[x-1].remove();
            darray.splice(x-1,1);
            
            
            localStorage.setItem("buttonstr", JSON.stringify(buttonstr));
            delinp.value="";
            
            // let y = 0 ;
            // while (buttonstr.length>y){
            //     let dis = darray[y].disabled;
            //     distfarray.push(dis);
            //     distfarray.id="distfarray";
            //     localStorage.setItem("dis", JSON.stringify(distfarray));
            //     y++;
            //     location.reload()
            // Bug : basically the order is stayin same, and its not storing anything, when i delete, the code should//
            // run after the page relads which is happening, but idk
        }
})

progress.addEventListener("click", function(){
    window.location.href="./Progress/progress.html"
})