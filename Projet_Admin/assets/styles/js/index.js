let navTitle=document.getElementsByClassName("navTitle");

let submenu=document.getElementsByClassName("submenu");


for (let i = 0; i < submenu.length; i++) {
    
    navTitle[i].addEventListener("click", function(event) {
        
            submenu[i].classList.toggle("close");
        });
    }
