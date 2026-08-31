// pretty heave stuff tmro try thinking everything how it works. and chill u are makign site for ur own enjoyment not so much to think //
alert ( "heeee")

let passwordinput = document.getElementById("passwordinput")
let password_screen = document.getElementById("password_screen")
let dashboard_screen = document.getElementById("dashboard_screen")
let maincat = document.getElementById("maincat");
let subhom = document.getElementById("subhom");

// variable.value its always shows what value it has in the variable //

maincat.addEventListener("mouseenter", function(){
    alert("hdfdskfn")
    subhom.style.display="block";
})

window.addEventListener("load", function (){
    dashboard_screen.style.display="none"
});

    

passwordinput.addEventListener("input", function(){
    if(passwordinput.value === "mai_hu_mai"){
        sessionStorage.setItem("loggedin", passwordinput.value==="mai_hu_mai");
        dashboard_screen.style.display=("block");
        password_screen.style.display="none";
    }
}) //for now no admin password but superadmin password only

// the password should look stars and not actual text //

window.addEventListener("load", function(){
    if(sessionStorage.getItem("loggedin")){
        dashboard_screen.style.display="block";
        password_screen.style.display="none"
    }
})

