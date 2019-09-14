import {createTask, deleteTask, deleteProject, toDos, addTaskToProject, 
    projectToArray, projectNames, displayDate, sortTasks} from "./todos"

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
const taskDate = document.querySelector("#taskDate");
const taskImportance = document.querySelector("#taskImportance");
const projectList = document.querySelector("#projectList");
const projectName = document.querySelector("#projectName");
const projectBind = document.querySelector("#projectBind");
const sortButton = document.querySelector("#sortButton");
const sortType = document.querySelector("#sortType");


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
        let newToDo = createTask(taskName.value , taskDesc.value, taskDate.value, taskImportance.value, projectBind.value)
        addTaskToProject(newToDo);
        renderCurrentProject();
    });
    addThisProject.addEventListener("click", () => {
        hideDiv(newProject);
        let newProjectName = projectName.value;
        projectToArray(newProjectName);
        renderProjects();
    });
    sortButton.addEventListener("click", () => {
        sortTasks(sortType.value);
        renderCurrentProject();
    });

}

function renderTask(item, container){
    let taskRow = document.createElement("li")
    taskRow.classList = "taskRow";
    container.appendChild(taskRow);

    let itemName = renderTaskItem(item, taskRow);

    let doneButton = document.createElement("button");
    doneButton.textContent = "done"
    doneButton.classList = "doneButton";
    doneButton.addEventListener("click", () => {container.removeChild(itemName)});
    taskRow.appendChild(doneButton);

    let itemDesc = document.createElement("div");
    itemDesc.textContent = item.description;
    itemDesc.classList = "description"
    container.appendChild(itemDesc);
    itemName.addEventListener("click", () => {
        descToggle(itemDesc);
        colorToggleTask(itemName);
    });
    doneButton.addEventListener("click", () => {
        let projet = getProjectName();
        deleteTask(item);
        renderProject(projet);
    });
}


function renderTaskItem(item, row){
    let itemName = document.createElement("div");
    itemName.textContent = item.name;
    itemName.classList = "taskName";
    row.appendChild(itemName);

    let itemDate = document.createElement("p");
    itemDate.textContent = displayDate(item.date);
    itemDate.classList = "date";
    itemName.appendChild(itemDate);

    let itemImportance = document.createElement("p");
    itemImportance.textContent = item.importance;
    itemImportance.classList = "importance";
    importanceColor(itemImportance);
    itemName.appendChild(itemImportance);

    return itemName;
}



function renderProject(projet) {
    colorToggleProject(projet);
    while (toDoDisplay.firstChild){
        toDoDisplay.removeChild(toDoDisplay.firstChild);
    }
    const header = document.createElement("h1");
    header.textContent = "Project : " + projet;
    header.id = "projectHeader";
    toDoDisplay.appendChild(header);
    if (projet !== "all"){
        const remove = document.createElement("button");
        remove.textContent = "Delete Project";
        toDoDisplay.appendChild(remove);
        remove.addEventListener("click", () => {
            deleteProject(projet);
            renderProjects();
            renderProject("all");
        });
    }

    const secondHeader = document.createElement("h2");
    secondHeader.textContent = "Tasks : ";
    toDoDisplay.appendChild(secondHeader);

    const list = document.createElement("ul");
    list.classList = "taskList"
    toDoDisplay.appendChild(list);
    sortTasks(sortType.value);
    toDos.forEach((item) => {
        if ((item.project === projet)||(projet === "all")){
            renderTask(item, list);
        }
    })
}

function getProjectName(){
    const projectHeader = document.querySelector("#projectHeader");
    let projectName = projectHeader.textContent.replace("Project : ", "");
    return projectName;
}

function renderCurrentProject(){
    if (getProjectName() === "all"){
        renderProject("all");
    }
    else{
        renderProject(getProjectName());
    }
}

function renderProjects() {
    while (projectList.firstChild){
        projectList.removeChild(projectList.firstChild);
    }
    const header = document.createElement("h1");
    header.textContent = "Projects";
    projectList.appendChild(header);
    const list = document.createElement("ul");
    projectList.appendChild(list);
    projectNames.forEach((item) => {
        let projectName = document.createElement("li");
        projectName.textContent = item;
        projectName.classList = "project";
        projectName.addEventListener("click", () => {
            renderProject(projectName.textContent);
            colorToggleProject(projectName.textContent);
        });
        list.appendChild(projectName);
    })
}

function renderProjectBind() {
    while (projectBind.firstChild){
        projectBind.removeChild(projectBind.firstChild);
    }
    projectNames.forEach((item) => {
        if (item !== "all"){
            let projectName = document.createElement("option");
            projectName.textContent = item;
            projectName.value = item;
            projectBind.appendChild(projectName);
        }
    })
}


function descToggle (div){
    if (div.style.display === "block"){div.style.removeProperty("display")}
    else {div.style.display = "block";}
}

function colorToggleTask (task){
    if (task.style.backgroundColor === "rgb(236, 236, 236)"){
        task.style.removeProperty("background-color");
    }
    else {task.style.backgroundColor = "rgb(236, 236, 236)"}
}

function colorToggleProject (project){
    let projects = document.querySelectorAll(".project");
    projects.forEach((item) => {
        if (item.textContent !== project) {
            item.style.removeProperty("background-color");
        }
        else {item.style.backgroundColor = "rgb(236, 236, 236)";}
    })
}

function importanceColor (div){
    if (div.textContent === "Not Important"){div.style.color = "grey";}
    else if (div.textContent === "Important"){div.style.color = "orange";}
    else if (div.textContent === "Very Important"){div.style.color = "red";}
}   

export {events, renderProject, renderProjects};