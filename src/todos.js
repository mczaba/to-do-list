
let premierToDo = createTask("premier", "premier description", "2009-05-12", "Not Important", "default");
let deuxiemeToDo = createTask("deuxieme", "deuxieme description", "2009-08-30", "Important", "default");
let troisiemeToDo = createTask("troisieme", "troisieme description", "2009-12-05", "Very Important", "test");
let toDos = [premierToDo, deuxiemeToDo, troisiemeToDo]
let projectNames = ["all", "test"];

function createTask (name, description, date, importance, project){
    return {name, description, date, importance, project};
}

function addTaskToProject (toDo){
    toDos.push(toDo);
    populateStorage();
}

function projectToArray(project){
    projectNames.push(project);
    populateStorage();
}

function displayDate(date){
    let calendrier = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateArray = date.split("-");
    let month = Number(dateArray[1])-1;
    let string = dateArray[2] + " " + calendrier[month] + " " + dateArray[0];
    return string;
}

function sortDate() {
    toDos.sort(function(a, b){
        if(a.date < b.date) { return -1; }
        if(a.date > b.date) { return 1; }
        return 0;
    })
}

function populateStorage() {
    localStorage.setItem("Projects", JSON.stringify(projectNames));
    localStorage.setItem("Tasks", JSON.stringify(toDos));
}

function initializeArrays() {
    if(localStorage.getItem("Projects")){
        projectNames = JSON.parse(localStorage.getItem("Projects"));
    }
    if(localStorage.getItem("Tasks")){
        toDos = JSON.parse(localStorage.getItem("Tasks"));
    }
}



export {createTask, toDos, addTaskToProject, projectToArray, initializeArrays, projectNames, displayDate, sortDate}