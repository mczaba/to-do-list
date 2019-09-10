function createTask (name,description, date){
    return {name, description, date};
}

function addTaskToProject (project, toDo){
    project.push(toDo);
}
let ToDos = [];

let premierToDo = createTask("premier", "premier description", "2009");
let deuxiemeToDo = createTask("deuxieme", "deuxieme description", "2009");
let troisiemeToDo = createTask("troisieme", "troisieme description", "2009");
ToDos.push(premierToDo);
ToDos.push(deuxiemeToDo);
ToDos.push(troisiemeToDo);

export {createTask, ToDos, addTaskToProject}