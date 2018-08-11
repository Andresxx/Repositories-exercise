class App{
    constructor(){
        this.onJsonRedy=this.onJsonRedy.bind(this);

        this.loadData();
    }

    loadData() {
        const promise = fetch('data.json');
        promise.then(this.onDataRecived)
            .then(this.onJsonRedy);
            //.catch(this.onError);
    } 
    
    onDataRecived(response) {

        return response.json();
    }

    onJsonRedy(json) {
        this.data = json;
        this.renderRepositories();
    }
    onError(){
        //console.log("Error al cargar");
    }


 
    
    renderRepositories() {

        const container = document.querySelector("#data-repositoties");
        container.innerHTML = "";
        for (const d of this.data) {
            new Repository(d, container);
        }
    }
}