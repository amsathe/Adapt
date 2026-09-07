// Learning : if parent has z-index greater than its child. then child cant be clicked. eg, parent : zindex 1, child: zindex -1, then if child i button i cant click it as parent is somehow OVER it. EVEN if parent is hollow, its still responds to mouse

let newbook = document.getElementById("newbook");
let newbookdiv = document.getElementById("newbookdiv");
let newbookdivblur = document.getElementById("newbookdivblur");
let newbookinput = document.getElementById("newbookinput");
let savedbookdiv = document.getElementById("savedbookdiv");

newbook.addEventListener("click", function(){
    newbookdiv.style.display="block";
    newbookdivblur.style.display="block";
})


savedbookarr= []
savedchapterarr = [];

newbookinput.addEventListener("keydown", function(event){
    if (event.key==="Enter"){
        savedbookarr.push(newbookinput.value);
        localStorage.setItem("savedbookarr", JSON.stringify(savedbookarr));
        let newsavedbook = document.createElement("button");
        newsavedbook.textContent=newbookinput.value;
        savedbookdiv.appendChild(newsavedbook);
        newbookinput.textContent=""
        newbookdiv.style.display="none";
        newbookdivblur.style.display="none";
        newsavedbook.style.display="none";
        location.reload()
    }
})

window.addEventListener("load", function(){
    savedbookarr = JSON.parse(localStorage.getItem("savedbookarr"))
    let y = 0;
    while(savedbookarr.length>y){
        let newsavedbuttonbook = document.createElement("button");
        newsavedbuttonbook.id="newsavedbuttonbook"
        newsavedbuttonbook.textContent=savedbookarr[y];
        savedbookdiv.appendChild(newsavedbuttonbook)
        y++
    }

    // savedbookarr.splice(0, 10);
    // localStorage.setItem("savedbookarr", JSON.stringify(savedbookarr))

    let newsavedbuttonbook = document.getElementById("newsavedbuttonbook");
    newsavedbuttonbook.addEventListener("click", function(){
        newbookdivblur.style.display="block";
        let chaptersdiv = document.createElement("div");
        chaptersdiv.id="chaptersdiv"
        document.body.appendChild(chaptersdiv);
        chaptersdiv.innerHTML=`
        <p id="chapters">Chapters</p>
        <hr id="chaptermainline">
        <p id="enterchapter">New Chapter : </p>
        <input id="enterchapterinput">
        <button id="chapterback">Back</button>
        `

        // p has default margines up and down to make it not look cramped. its default by html. so if u wanna customize it use marigin=o

        savedchapterarr = JSON.parse(localStorage.getItem("savedchapter")) || [];
        let a = 0;
        let chapterpdiv = document.createElement("div");
        chapterpdiv.id="chapterpdiv";

        while(savedchapterarr.length>a){
            let newchapterp = document.createElement("button");
            newchapterp.id="newchapterp"
            newchapterp.textContent=savedchapterarr[a];
            chapterpdiv.appendChild(newchapterp);
            chaptersdiv.appendChild(chapterpdiv)
            a++;
            newchapterp.addEventListener("click", function(){
                newchapterp.disabled=true;
                let newchapterdiv = document.createElement("div");
                newchapterdiv.id="newchapterdiv";
                document.body.appendChild(newchapterdiv)
                newchapterdiv.innerHTML=`
                <h1>${newchapterp.textContent}</h1> 
                <hr id="mainline">
                <a><button id="back"><i data-lucide="chevron-left"></i></button></a>
                <div id="chaptervocabdiv">
                    <p class="title">Vocab</p>
                    <hr class="insidechapterline">
                    <p class="enter">Enter Word : </p>
                    <input class="insidechapterinput">
                    <div class="insidechapterpdiv"></div>
                </div>
                
                <div id="chapterquotesdiv">
                    <p class="title">Quotes</p>
                    <hr class="insidechapterline">
                    <p class="enter">Enter Quote : </p>
                    <input class="insidechapterinput">
                    <div class="insidechapterpdiv"></div>
                </div>
                
                <div id="chapterlearndiv">
                    <p class="title">Learning</p>
                    <hr class="insidechapterline">
                    <p class="enter">Enter Learning : </p>
                    <input class="insidechapterinput">
                    <div class="insidechapterpdiv"></div>
                </div>
                `
                // I DONT NEDE TO DO THE TRUE FALSE THINGI AS WHAT I CLIEKD IS ALREADY THER EAS IN WHILE LOOP IT TOOK THAT ITSLEF IDK HOW its cause html desont differenciate elemnts by id but if its totally direrent dom. each new button is different dom
                lucide.createIcons();
                console.log("before letting")
                let back = document.getElementById("back")
                console.log("after letting")
                console.log(back)
                console.log("BACK =", back);
                console.log(back.dataTyoe)
                back.addEventListener("click", function(){
                    console.log("sdfdsfdsf")
                    newchapterdiv.remove()
                })
                console.log("dsfsdfsdf")

                let insidechapterinput = document.getElementsByClassName("insidechapterinput")
                let insidechapterpdiv = document.getElementsByClassName("insidechapterpdiv") // for id u may not need to declate it outide inner html cause it relates id with global window but for class u DO need to
                insidechapterinput[0].addEventListener("keydown", function(event){
                    if(event.key==="Enter"){
                        let insidep = document.createElement("button");
                        insidep.id="insidep"
                        insidep.textContent=insidechapterinput[0].value;
                        insidechapterpdiv[0].appendChild(insidep)
                    }
                })

                insidechapterinput[1].addEventListener("keydown", function(event){
                    if(event.key==="Enter"){
                        let insidep = document.createElement("button");
                        insidep.id="insidep"
                        insidep.textContent=insidechapterinput[1].value;
                        insidechapterpdiv[1].appendChild(insidep)
                    }
                })

                insidechapterinput[2].addEventListener("keydown", function(event){
                    if(event.key==="Enter"){
                        let insidep = document.createElement("button");
                        insidep.id="insidep"
                        insidep.textContent=insidechapterinput[2].value;
                        insidechapterpdiv[2].appendChild(insidep)
                    }
                })


            })
        }

        // savedchapterarr.splice(1,1);
        // localStorage.setItem("savedchapter", JSON.stringify(savedchapterarr))
        
        let enterchapterinput = document.getElementById("enterchapterinput");
        enterchapterinput.addEventListener("keydown", function(event){
            if (event.key==="Enter"){
                savedchapterarr.push(enterchapterinput.value);
                localStorage.setItem("savedchapter", JSON.stringify(savedchapterarr))
                newchapterp = document.createElement("button");
                newchapterp.id="newchapterp";
                newchapterp.textContent=enterchapterinput.value;
                chapterpdiv.appendChild(newchapterp);
                chaptersdiv.appendChild(chapterpdiv);
                enterchapterinput.value=""
            }
        })

        let chapterback = document.getElementById("chapterback");
        chapterback.addEventListener("click", function(){
            chaptersdiv.remove()
            newbookdivblur.style.display="none"
        })
        

        
        // newchapterp.addEventListener("click", function(){
        //     console.log("BUTTON LISTENER");
        //     alert("sdfsdfsdf")
        // })
        // this wont work cause IT TAKES ONLY THE FIRST elemnt with id nrechapter p. to giv everyt elemnt id u need ot do it INSIDE when newchapterp is created. yes the evenlisten runs AFTER u perfom the task but he code runs already.
        // top fix this we can put EACH p in a div of same name and as its one singel element and as it is only creatd once and yes browser knwos hich i cliked even if its in whole div. 
        // chapterpdiv.addeventlistener() - woild work for all buttons OUTSIDE the while. 
        
    })
})
