let navTitle=document.getElementsByClassName("navTitle");
let submenu=document.getElementsByClassName("submenu");
let sidemenu=document.getElementById("nav");
let sidebtn=document.getElementById("side-menu-btn");
let logo=document.getElementById("logo");
let sectionGrid=document.getElementById("users");


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



let users = [  
    {  
        id: 0,  
        isActive: false,  
        age: 24,    
        name: "Marsh Obrien" 
    },  
    {  
        id: 1,  
        isActive: false,  
        age: 21,    
        name: "Rios Gibson" 
    },  
    {  
        id: 2,  
        isActive: false,  
        age: 29,  
        name: "Morgan Buchanan"
    },  
    {  
        id: 3,  
        isActive: true,  
        age: 25,    
        name: "Franklin Dyer" 
    },  
    {  
        id: 4,  
        isActive: false,  
        age: 30, 
        name: "Keller Pitts" 
    },  
    {  
        id: 5,  
        isActive: false,  
        age: 25,  
        name: "Davenport Maddox"  
    },  
    {  
        id: 6,  
        isActive: true,  
        age: 31,  
        name: "Judith Graves"
    },  
    {  
        id: 7,  
        isActive: true,  
        age: 26,  
        name: "Hoffman Hess" 
    },  
    {  
        id: 8,  
        isActive: true,  
        age: 22,  
        name: "Sheena Goff"
    },  
    {  
        id: 9,  
        isActive: false,  
        age: 39,  
        name: "Rose Lawrence" 
    }  
];

function addUser(users)
{
    for (user of users) {
        
        let tbody = document.querySelector("table tbody");
        
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        let tr = document.createElement("tr");
        
        tbody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        
        td1.textContent = user.id;
        td2.textContent = user.name;
        td3.textContent = user.age;
    }
}



