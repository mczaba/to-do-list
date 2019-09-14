
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

function sortTasks (type){

    function sortDate() {
        toDos.sort(function(a, b){
            if(a.date < b.date) { return -1; }
            if(a.date > b.date) { return 1; }
            return 0;
        })
    }

    function sortImportance() {
        function importanceNumber(string){
            if (string === "Not Important"){
                return 1;
            }
            else if (string === "Important"){
                return 2;
            }
            else if (string === "Very Important"){
                return 3;
            }
        }
        toDos.sort(function(a,b){
            if (importanceNumber(a.importance) > importanceNumber(b.importance)){ return -1;}
            if (importanceNumber(a.importance) < importanceNumber(b.importance)) {return 1;}
            return 0;
        })
    }

    if (type === "date"){sortDate();}
    if (type === "importance"){sortImportance();}
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

function deleteTask(task){
    let index = toDos.indexOf(task);
    toDos.splice(index,1);
    populateStorage();
}

function deleteProject (projet){
    let index = projectNames.indexOf(projet);
    projectNames.splice(index,1);
    let i =0;
    while (i < toDos.length){
        if (toDos[i].project === projet){
            toDos.splice(i,1);
        }
        else {
            i++;
        }
    }
    populateStorage();
}


export {createTask, toDos, addTaskToProject, projectToArray, initializeArrays, projectNames, displayDate, deleteTask, deleteProject, sortTasks}