function createTask (name, description, project){
    return {name, description, project};
}

function addTaskToProject (toDo){
    toDos.push(toDo);
}
let toDos = []
let projectNames = ["default", "test"];

let premierToDo = createTask("premier", "premier description", "default");
let deuxiemeToDo = createTask("deuxieme", "deuxieme description",  "default");
let troisiemeToDo = createTask("troisieme", "troisieme description", "test");
addTaskToProject(premierToDo);
addTaskToProject(deuxiemeToDo);
addTaskToProject(troisiemeToDo);
export {createTask, toDos, addTaskToProject, projectNames}