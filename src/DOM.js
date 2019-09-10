const addTask = document.querySelector("#addTask");
const addProject = document.querySelector("#addProject");
const newTask = document.querySelector("#newTask");
const newProject = document.querySelector("#newProject");
const buttons = document.querySelectorAll("button");
const addThisTask = document.querySelector("#addThisTask");
const addThisProject = document.querySelector("#addThisProject");
const toDoDisplay = document.querySelector("#projectView")

function showDiv(div) {
    div.style.display = 'inline'
    buttons.forEach((button) => {
        if (button.closest("div")!==div){
            button.disabled = true
        }
    })
}


function hideDiv(div) {
    div.style.display = "none"
    buttons.forEach((button) => button.disabled = false)
}

const events = () => {

    addTask.addEventListener("click", showDiv.bind(null, newTask));
    addProject.addEventListener("click", showDiv.bind(null, newProject));
    addThisTask.addEventListener("click", hideDiv.bind(null, newTask));
    addThisProject.addEventListener("click", hideDiv.bind(null, newProject));

}

function renderToDo(array) {
    const list = document.createElement("ul");
    toDoDisplay.appendChild(list);
    array.forEach((item) => {
        let listItem = document.createElement("li");
        listItem.textContent = item.name;
        list.appendChild(listItem);
    })
}

export {events, renderToDo};