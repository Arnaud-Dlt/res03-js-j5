let navTitle=document.getElementsByClassName("navTitle");

let submenu=document.getElementsByClassName("submenu");


for (let i = 0; i < submenu.length; i++) {

    navTitle.addEventListener("click", function(event) {
            submenu[i].classList.toggle("open");
            submenu[i].classList.toggle("close");
        });
    };
