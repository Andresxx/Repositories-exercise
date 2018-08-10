class Repository{
    constructor(data,container){
        this.info=data;
        this.container=container;
        this.render();
    }

    render(){
        const img=document.createElement("img");
        img.src=this.info.avatar_url;
        this.container.appendChild(img);
    }
}