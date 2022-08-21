const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("nav span");
const btn_download = document.querySelectorAll("button.btn_download");

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

btn_download.forEach(e => e.addEventListener("click", ()=> window.open("../src/CV_Antonio_Sala_Barbosa.pdf")));

const label_control = document.querySelectorAll("label.control");
label_control.forEach((e)=>{
    e.addEventListener("click", ()=>{
        for(let i = 0; i<3; i++){
            label_control[i].classList.remove("active");
        }
        e.classList.add("active");
    });
});

const view = document.getElementById("view");

async function fetchJSON() {
    const json = await fetch("js/projects.json")
    .then(res => res.json());

    insertProjects(json);
}

function insertProjects(json){
    json.forEach((e,q)=>{
        
    });
}

fetchJSON();