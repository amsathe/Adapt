// pretty heave stuff tmro try thinking everything how it works. and chill u are makign site for ur own enjoyment not so much to think //
console.log(window.innerWidth, window.innerHeight);

let pi = document.getElementById("pi")
let ps = document.getElementById("ps")
let dashboard_screen = document.getElementById("dashboard_screen")
let maincat = document.getElementById("maincat");
let subhom = document.getElementById("subhom");
let mainmain = document.getElementById("mainmain");
let index1 = document.getElementsByClassName("index1");
let index2 = document.getElementsByClassName("index2");
let index3 = document.getElementsByClassName("index3");
let index4 = document.getElementsByClassName("index4");
let knowledgediv = document.getElementById("knowledgediv");
let kkshape = document.getElementById("kkshape");
let index5 = document.getElementsByClassName("index5");
let index6 = document.getElementsByClassName("index6");
let hovercheck = document.getElementById("hovercheck")
let timewid = document.getElementById("timewid")
// variable.value its always shows what value it has in the variable //

let currtime = document.createElement("p");
// setInterval(
//     function(){
//     currtime.id="currtime"
//     currtime.textContent= new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
//     timewid.appendChild(currtime)}, 1000);
// THIS CODE DOES NOT RUN IN FIRST SECOND AS IT THINKS ILL JUST DO IT AFTER 1 second. 

// do run once when start then run the code. 

function time(){
    currtime.id="currtime"
    currtime.textContent= new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
    timewid.appendChild(currtime)
} // im basically CREATEING a fucntion and giving it NAME as time. ive not run it yet

time() // i ran it // // () tells browswer to RUN the funciton. but above function name(){} there () means DECLATING the name.

setInterval(time,1000)



mainmain.addEventListener("mouseenter", function(){
    hovercheck.style.display="block"
    index1[0].style.left="150px";
    index2[0].style.left="120px";
    index2[0].style.bottom="472px";
    index3[0].style.left="120px";
    index3[0].style.bottom="312px";
    index4[0].style.left="120px";
    index4[0].style.bottom="312px"
    index5[0].style.left="120px";
    index5[0].style.bottom="312px"
    index6[0].style.left="120px";
    index6[0].style.bottom="312px"
    
})

mainmain.addEventListener("mouseleave", function(){
    hovercheck.style.display="none"
    index1[0].style.left="50px";
    index2[0].style.left="50px";
    index2[0].style.bottom="392px";
    index3[0].style.left="50px";
    index3[0].style.bottom="392px";
    index4[0].style.left="50px";
    index4[0].style.bottom="392px"
    index5[0].style.left="50px";
    index5[0].style.bottom="392px"
    index6[0].style.left="50px";
    index6[0].style.bottom="392px"
})

hovercheck.addEventListener("mouseenter", function(){
    if (index3[0].style.left==="120px" && index3[0].style.bottom==="312px"){
        kkshape.style.display='block'
        index4[0].style.left="195px";
        index4[0].style.bottom="320px"
        index5[0].style.left="165px";
        index5[0].style.bottom="260px"
        index6[0].style.left="90px";
        index6[0].style.bottom="240px"
        }    
})

knowledgediv.addEventListener("mouseleave", function(){
    kkshape.style.display="none"
    index4[0].style.left="120px";
    index4[0].style.bottom="312px"
    index5[0].style.left="120px";
    index5[0].style.bottom="312px"
    index6[0].style.left="120px";
    index6[0].style.bottom="312px"
})






window.addEventListener("load", function (){
    dashboard_screen.style.display="none"
});

    

pi.addEventListener("keydown", function(event){
    if(pi.value === "localarray" && event.key==="Control"){
        sessionStorage.setItem("loggedin", pi.value==="localarray");
        dashboard_screen.style.display="block";
        ps.style.display="none";
    }
}) //for now no admin password but superadmin password only

// the password should look stars and not actual text //

window.addEventListener("load", function(){
    if(sessionStorage.getItem("loggedin")){
        dashboard_screen.style.display="block";
        ps.style.display="none"
    }
})