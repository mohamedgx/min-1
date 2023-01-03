let ma =document.getElementById("ma");
let rem =document.getElementById("rem");
let wr =document.getElementById("wr");
let z1 =document.getElementById("z1");
wr.onclick = ()=>{
    z1.innerHTML = ma.value;
    z1=document.body.style.background="#0077ff";
    localStorage.setItem("Ree",ma.value);
};
rem.onclick =()=>{
    z1.innerHTML = "";
    ma.value = "";
};
onload =()=>{
    ma.value="";
    z1.innerHTML="";
}