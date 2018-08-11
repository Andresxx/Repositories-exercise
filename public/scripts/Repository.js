class Repository {
    constructor(data, container) {
        this.info = data;
        this.container = container;
        this.render();
    }

    render() {

        const img = document.createElement("img");

        if (this.info.avatar_url != "") {
            img.src = this.info.avatar_url;
        } else {
            img.src = "perfil.jpg";
        }
        const name = document.createElement("p");
        name.textContent = 'Name: '+this.info.name;

        const nick = document.createElement("p");
        nick.textContent = 'Nickname: '+this.info.nickName;



        const url = document.createElement('a');
        url.setAttribute('href', this.info.github_url);
        var urlName = document.createTextNode(this.info.github_url);
        url.appendChild(urlName);

        const tarjeta = document.createElement("div");

        tarjeta.appendChild(img);
        tarjeta.appendChild(name);
        tarjeta.appendChild(nick);
        tarjeta.appendChild(url);
        this.container.appendChild(tarjeta);




    }
}