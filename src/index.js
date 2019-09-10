import {events, renderProject} from "./DOM"
import {ToDos} from "./todos"


events();
renderProject(ToDos);
// let premierToDo = toDo("premier", "premier description");
// let deuxiemeToDo = toDo("deuxieme", "deuxieme description");
// let troisiemeToDo = toDo("troisieme", "troisieme description");

// let ToDos = [];



// renderToDo(ToDos);
// addThisTask.addEventListener("click", ()=> {
//     hideDiv(newTask);
//     let newToDo = toDo(taskName.value , taskDesc.value)
//     ToDos.push(newToDo);
//     renderToDo(ToDos);
// });