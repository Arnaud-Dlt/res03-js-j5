let navTitle=document.getElementsByClassName("navTitle");
let submenu=document.getElementsByClassName("submenu");
let sidemenu=document.getElementById("nav");
let sidebtn=document.getElementById("side-menu-btn");
let logo=document.getElementById("logo");
let sectionGrid=document.getElementById("grid1_3");


for (let i = 0; i < submenu.length; i++) {
    
    navTitle[i].addEventListener("click", function(event) 
    {
        submenu[i].classList.toggle("close");
    });
}


sidebtn.addEventListener("click", function ()
{
    sidemenu.classList.toggle("close");
    sectionGrid.classList.toggle("sectionGrid");
    logo.classList.toggle("borderRight");
})



