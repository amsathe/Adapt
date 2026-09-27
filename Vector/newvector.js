let newvectorhabit = document.getElementById("newvectorhabit");
let newhabitinputdiv = document.getElementById("newhabitinput");

newvectorhabit.addEventListener("input", function(){
    if (newvectorhabit.value==="  "){
        newhabitinputdiv.style.display="block";
        newvectorhabit.value=""
    }
})