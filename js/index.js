const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("nav span");
const btn_download = document.querySelectorAll("button.download");

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
        let buttonsA = [
            `<a href='${e.site}' target='_blank'><button>Site <img src='./src/icons/internet.png'></button></a>`,
            (e.github ? `<a href='${e.github}' target='_blank'><button>Github <img src='./src/icons/github2.png'></button></a>` : false)
        ];

        let divViewIn = document.createElement("div");
        divViewIn.classList.add('view_in');
        for (let i = 0; i < buttonsA.length; i++) {
            if(buttonsA[i]){
                divViewIn.innerHTML += buttonsA[i];
            }
        }

        let p = document.createElement('p');
        p.textContent = e.description;

        let strong = document.createElement('strong');
        strong.textContent = e.name;

        let divLine = document.createElement('div');
        divLine.classList.add('line');

        let divIconTec = document.createElement('div');
        divIconTec.classList.add('icon_tec');
        let imgTecs = [];
        e.techs.forEach((e, q)=>{
            let img = document.createElement('img');
            img.src = `./src/icons/${e}`;
            imgTecs[q] = img;
        });
        imgTecs.forEach((e)=>{
            divIconTec.appendChild(e);
        });

        let div_txt_proj = document.createElement('div');
        div_txt_proj.classList.add('txt-proj');
        function divTxtProjChilds(divIconTec, divLine, strong, p, divViewIn) {
            let array = [divIconTec, divLine, strong, p, divViewIn];
            array.forEach((e) => div_txt_proj.appendChild(e));
        }
        divTxtProjChilds(divIconTec, divLine, strong, p, divViewIn);


        let divProjeto = document.createElement('div');
        divProjeto.classList.add('projeto');
        divProjeto.innerHTML = `<a href=${e.site} target='_blank'><div class="img-proj" style="background-image: url(${e.img});"></div></a>`;
        divProjeto.appendChild(div_txt_proj);

        view.appendChild(divProjeto);

    });
}
fetchJSON();