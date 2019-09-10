import {createTask, ToDos, addTaskToProject} from "./todos"

const addTask = document.querySelector("#addTask");
const addProject = document.querySelector("#addProject");
const newTask = document.querySelector("#newTask");
const newProject = document.querySelector("#newProject");
const buttons = document.querySelectorAll("button");
const addThisTask = document.querySelector("#addThisTask");
const addThisProject = document.querySelector("#addThisProject");
const toDoDisplay = document.querySelector("#projectView")
const taskName = document.querySelector("#taskName");
const taskDesc = document.querySelector("#taskDesc");

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
    addThisTask.addEventListener("click", ()=> {
        hideDiv(newTask);
        let newToDo = createTask(taskName.value , taskDesc.value)
        addTaskToProject(ToDos, newToDo);
        renderProject(ToDos);
    });
    addThisProject.addEventListener("click", hideDiv.bind(null, newProject));

}

function renderProject(array) {
    while (toDoDisplay.firstChild){
        toDoDisplay.removeChild(toDoDisplay.firstChild);
    }
    const list = document.createElement("ul");
    toDoDisplay.appendChild(list);
    array.forEach((item) => {
        // let listItem = document.createElement("li");
        // listItem.textContent = item.name;
        // list.appendChild(listItem);
        renderTask(item, list);
    })
}

function renderTask(item, container){
    let itemName = document.createElement("li");
    itemName.textContent = item.name;
    container.appendChild(itemName);
    let itemDesc = document.createElement("div");
    itemDesc.textContent = "\n" + item.description;
    itemDesc.classList = "description"
    container.appendChild(itemDesc);
    itemName.addEventListener("click",descToggle.bind(null, itemDesc));
}

function descToggle (div){
    if (div.style.display === "block"){div.style.display = "none"}
    else {div.style.display = "block";}
}

export {events, renderProject};