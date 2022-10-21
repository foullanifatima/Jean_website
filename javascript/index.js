

const humberger_menu = document.getElementById("humberger_menu");

humberger_menu.addEventListener("click", ()=>{
    let nav = document.getElementById("nav");

    if(nav.classList.contains("none")){
        nav.classList.remove("none");
        nav.classList.add("block");
    }
    else{
        nav.classList.add("none");
    }
    
   
}
   
);

