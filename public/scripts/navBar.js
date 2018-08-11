function changeTab(event) {

    const pressed = event.target;
    const selected = document.querySelector(".selected");
    const selectedId = selected.dataset.id;
    document.getElementById(selectedId).classList.add("hidden");
    selected.classList.remove("selected");
    pressed.classList.add("selected");
    const newSelectedId = pressed.dataset.id;
    document.getElementById(newSelectedId).classList.remove("hidden");

}

function eventHandlers() {
    const chooserTab = document.querySelector("#navbar ul");
    chooserTab.addEventListener("click", changeTab);
}

eventHandlers();
