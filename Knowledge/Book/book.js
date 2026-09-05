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
    })
})