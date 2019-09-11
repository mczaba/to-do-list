import {createTask, toDos, addTaskToProject, projectNames} from "./todos"

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
const projectList = document.querySelector("#projectList");
const projectName = document.querySelector("#projectName");
const projectBind = document.querySelector("#projectBind");

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

    addTask.addEventListener("click", () => {
        renderProjectBind();
        showDiv(newTask);
    });
    addProject.addEventListener("click", showDiv.bind(null, newProject));
    addThisTask.addEventListener("click", ()=> {
        hideDiv(newTask);
        let newToDo = createTask(taskName.value , taskDesc.value, projectBind.value)
        addTaskToProject(newToDo);
        renderProject(projectBind.value);
    });
    addThisProject.addEventListener("click", () => {
        hideDiv(newProject);
        let newProjectName = projectName.value;
        projectNames.push(newProjectName);
        renderProjects();
    });

}

function renderTask(item, container){
    let itemName = document.createElement("li");
    itemName.textContent = item.name;
    container.appendChild(itemName);
    let itemDesc = document.createElement("div");
    itemDesc.textContent = item.description;
    itemDesc.classList = "description"
    container.appendChild(itemDesc);
    itemName.addEventListener("click", () => {
        descToggle(itemDesc);
        colorToggleTask(itemName);
    });
}

function renderProject(projet) {
    while (toDoDisplay.firstChild){
        toDoDisplay.removeChild(toDoDisplay.firstChild);
    }
    const header = document.createElement("h1");
    header.textContent = projet;
    toDoDisplay.appendChild(header);
    const list = document.createElement("ul");
    toDoDisplay.appendChild(list);
    toDos.forEach((item) => {
        if (item.project === projet){
            renderTask(item, list);
        }
    })
}

function renderProjects() {
    while (projectList.firstChild){
        projectList.removeChild(projectList.firstChild);
    }
    const list = document.createElement("ul");
    projectList.appendChild(list);
    projectNames.forEach((item) => {
        let projectName = document.createElement("li");
        projectName.textContent = item;
        projectName.classList = "project";
        projectName.addEventListener("click", () => {
            renderProject(projectName.textContent);
            colorToggleProject(projectName);
        });
        list.appendChild(projectName);
    })
}

function renderProjectBind() {
    while (projectBind.firstChild){
        projectBind.removeChild(projectBind.firstChild);
    }
    projectNames.forEach((item) => {
        let projectName = document.createElement("option");
        projectName.textContent = item;
        projectName.value = item;
        projectBind.appendChild(projectName);
    })
}


function descToggle (div){
    if (div.style.display === "block"){div.style.display = "none"}
    else {div.style.display = "block";}
}

function colorToggleTask (task){
    if (task.style.backgroundColor === "red"){
        task.style.removeProperty("background-color");
    }
    else {task.style.backgroundColor = "red"}
}

function colorToggleProject (project){
    let projects = document.querySelectorAll(".project");
    projects.forEach((item) => {
        if (item !== project) {
            item.style.removeProperty("background-color");
        }
        else {item.style.backgroundColor = "red";}
    })
}

export {events, renderProject, renderProjects};