function createTask (name, description, date, importance, project){
    return {name, description, date, importance, project};
}

function addTaskToProject (toDo){
    toDos.push(toDo);
}
let toDos = []
let projectNames = ["all", "test"];


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

let premierToDo = createTask("premier", "premier description", "2009-05-12", "Not Important", "default");
let deuxiemeToDo = createTask("deuxieme", "deuxieme description", "2009-08-30", "Important", "default");
let troisiemeToDo = createTask("troisieme", "troisieme description", "2009-12-05", "Very Important", "test");
addTaskToProject(premierToDo);
addTaskToProject(deuxiemeToDo);
addTaskToProject(troisiemeToDo);
export {createTask, toDos, addTaskToProject, projectNames, displayDate, sortDate}