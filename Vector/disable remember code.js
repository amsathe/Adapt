// tbh i can think of doing the disabled enable by date again later. for now, everytime i clikc it hsoudl dave info and form graph. thats doable//


let habit_input = document.getElementById("habit_input");
let newhabithtml = document.getElementById("newhabithtml");
let maindel = document.getElementById("maindel")
let delpop = document.getElementById("delpop");
let delinp = document.getElementById('delinp');
let progress = document.getElementById("progress");

buttonstr = []
disarray = []
darray = [];



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
        habit_input.value=""
        buttonstr.push(newbutton.textContent);
        localStorage.setItem("buttonstr", JSON.stringify(buttonstr));
        // WHAT IM GONNA DO HERE IS IM GONNA REMOVE THE CONCEPT OF NEW AND SAVED BUTTON RN.//
        // WE WONT EVER USE NEWBUTTON AS EVERYTIEM I ENTER THE SITE WILL RELEOD> SO THE NEW BUTTOM BECOME SAVEDBUTTON//
        // THE DIABLE ARRAY WASNT WORKIGN CAUSE IT USED PUSED SAVEDBUTTON ARRAY BUT I CANT PUSH NEWBUTTON AND ITS NEW//
        // FORCED BUTTON IS STILL NOT SAVED BUTTON SO IM GONNA MAKE IT EVERYTIME I ENTER //
        location.reload()
    }
})


// rn i cant logic how to delete , even if i gave delete to each button, how would it identify//
// which x. so for now im create a main delete and when i press it ill get pop up or smth where//
// i need to write seriel no of which to delte. that way x will be clear //


window.addEventListener("load", function(){
    buttonstr = JSON.parse(localStorage.getItem("buttonstr"));
    let newdistfarray = JSON.parse(localStorage.getItem("dis"))
    let x = 0;
    while (buttonstr.length>x){
        let savedbutton = document.createElement("button");
        darray.push(savedbutton);
        savedbutton.id = "savedbutton";
        savedbutton.textContent = buttonstr[x];
        savedbutton.disabled = newdistfarray[x];
        newhabithtml.appendChild(savedbutton);
        x++;
        savedbutton.addEventListener("click", function(){
            savedbutton.disabled=true;
            savedbutton.style.background="white";
            // i basically wanted to save each button true or false, so everytiem i click, it takes first button//
            // takes itz vaue as true or false and store it in array and store array //
            // when reload, with every incerase in x put the string x ( t/f) along with that.//
            // still im not so suer of my logic. i created array for buttons and not use bttonstr as they are //
            // strongs inside the button and not actual button. and array does save all DOM elemetn so i saved the//
            // button itelse if array and checked if its true or false one by one //
            // ------//
            // WHAT DID I DO ? //
            // i basically had the idea of storing true and false of every elemnt when i click//
            // so i had to do it when i clicked //
            // doing it under window is best as its default //
            // then i first tried to save buttonstr ( which i later realised was the text INSIDE the button) //
            // and the text cant be disabled. so i had to check the disabled of button itslef //
            // so to store true and false of all values i needed array, and to store true and false the//
            // array should be of buttons so i used savedbutton which contain all buttons //
            // i had to create array of savedbuttons to use the array[x] thingi for each button that way i can idneity each button//
            // i did the usual ++ thing if lenght is more thne save 1st as tre of false then increase y and repead //
            // ig it itslef knows as first button was not clicked and diabled, code doent know which numbered is disabled//
            // but it knows WHICH is disabled//
            // so that way the array was filled and i created another array to store each true or false valuse and sted array in localstore//
            // and i put it inside the main code of saved button alone with string , i put the localget item into another array ( basicallt json parse ) //
            // and when it writes textcontent it also checks disabled or not by checking true or falsue value rom the savedtruefalse array//
            // ive understood it pretty much but ik there are loops and i dont have full understanding over how i did it lets see//
            let y = 0 ;
            distfarray = [];
            distfarray.id="distfarray";
            while (buttonstr.length>y){
                let dis = darray[y].disabled;
                distfarray.push(dis);
                 // WHEN i click one, then the y is already at its length, eg y is already 3, //
                // im thinking each time i click the y value is getting 0, but its not, y value only gets 0 when page is reoaded. //
                // noramlly whne i clikc one, it checks all, when i click 2nd it stores value again but but adds one more. //
                // for eg, ther eare 3 buttons and first is clicked then, treu, faluse falise, ( now y value is 3 )//
                // if i click 2nd now it will give me true, falsue, false , true ( 4th cause y value increase but y value isnt icnreasing .... id).//
                // NO NO NO , y value is getting 0 everytime i click yes its ture. but hen i clikc thisi happend, //
                // furst button click, alert = true,false, false. if isecond button click, //
                // alert = true,false,false, true, treu, false//
                // and when reload i get alert = t,t,f ( the new one ),
                // why do i get second only after i reload, and why jsut after clicking, te array adds up //
                // why after relaod the laterst stays and not all come ?//
                // i get the thing as when i click im pushing it in array each time and after relad the array gets refreshed !!!//
                // ohhh when i dont refreh the array isnt changing so im jut pushing in existing info of array which alreayd has info//
                // if i clikc i want new info to overried previous array but to remove previous array//
                // i need to eihe use splice or rewirte the entire array by reolading //
                // reloading is better as spice method would be harder //
                // but if all array was getting stored in localstored why ony latest tf info is stored  ?//
                // no no , the latest array isnt etting stored, the button array which was clicked jsut after reolad is stored !!//
                // ohhhh, the WHOLE ARRAY IISSS GETTING STOREDD, but when i reload ther eare still jsut 3 buttons so it jsut takes first 3 array elements and considers other elements as useless ig//
                // yes yes , no but im alerting disfarray after relading, and disif array stores everything. //
                // ok lets see step by step. //
                // when i click it checks all buttons and stores its value and pushes its value in array.//
                // when i again click y value is 0 and it again check and puts the value in same array which had previosu into as prvious info was never removed or overroed//
                // and that info is stored in local storeage. //
                // yes local storage has all info saved ( when i was testign alert , it wnol worked when clicked and it shoed only one as i clicked one whiel checking and when reloaded all array elements were vanished, and loal sstorage is again stored new disfarray which was overrode by new info so localstore doent have all array history//
                // basically in saved only takes up code which had 6 of them, and takes the first 3.//
                //bascially now each tiem i click i want array to override, absicalyl i want it to store the info and reload.//
                // basically what was happenign was array was had next button elements in same array an the array wasnt overriding each time i clicked button cause each new info was pushed in same previous array.//
                // so i overrode the array itsled//
                // ah its not fully ingraied idk why but yes i somehow got it idk the convept fully yet//
                // eys i was right, the newdisfarray contained all 6 elents of 2 button pused and it took only the first 3 as x value ended there. 
                localStorage.setItem("dis", JSON.stringify(distfarray));
                y++;
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
            let dildist = JSON.parse(localStorage.getItem("dis"));
            // basically whenver i reload distfarray is blank ( the buttonstr array sint balco casue in window load buttonstr itslef is gettign the stored array but thats noe the case with distfarray)//
            // so i had to create here anotehr array to get teh saved array and slpice it and save the array in same localstoage site ( itse store only whne deleted and click is store when clikced so they are overring each other when action happneds)//
            dildist.splice(x-1,1);
            // .remove jst visally removes it , it deosnt remove from array. to remove fro marray u need splice //
            darray[x-1].remove();
            darray.splice(x-1,1);
            
            
            localStorage.setItem("buttonstr", JSON.stringify(buttonstr));
            localStorage.setItem("dis", JSON.stringify(dildist));
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