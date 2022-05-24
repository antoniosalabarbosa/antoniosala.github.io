const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("nav span");

burguer.addEventListener("click", ()=>{
    if(menu_res.style.right == '0%'){
        menu_res.style.right = '-100%';
        burguer.classList.remove("active");
    }
    else{
        menu_res.style.right = '0%';
        burguer.classList.add("active");
    }
});