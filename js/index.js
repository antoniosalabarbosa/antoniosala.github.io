const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("nav span");
const btn_download = document.getElementById("btn_download");

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

btn_download.addEventListener("click", ()=> window.open("../src/CV_Antonio_Sala_Barbosa.pdf"));