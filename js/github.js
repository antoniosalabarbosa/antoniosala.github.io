const githubData = async ()=>{
    const user_infor = await fetch("https://api.github.com/users/antoniosalabarbosa")
    .then(res => res.json())
    .then( json => json);

    console.log(user_infor);

    return user_infor;
};

githubData();