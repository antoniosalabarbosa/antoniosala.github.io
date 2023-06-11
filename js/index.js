const burguer = document.querySelector("#burguer");
const menu_res = document.querySelector("nav span");
const btn_download = document.querySelectorAll("button.download");
const github_info = {
    repository: document.querySelector("div.github_info:nth-child(1) strong"),
    followers: document.querySelector("div.github_info:nth-child(2) strong")
};

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

btn_download.forEach(e => {
    e.addEventListener("click", () => {
        window.open("../src/CV_Antonio_Sala_Barbosa.pdf")
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
            `<a href='${e.site}' target='_blank'><button>Web <img src='./src/icons/internet.png'></button></a>`,
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

const githubData = async ()=>{
    const user_infor = await fetch("https://api.github.com/users/antoniosalabarbosa")
    .then(res => res.json())
    .then( json => json);

    github_info.repository.textContent = await user_infor.public_repos;
    github_info.followers.textContent = await user_infor.followers;

    return user_infor;
};

githubData();