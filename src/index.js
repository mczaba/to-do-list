import {events, renderToDo} from "./DOM"
import toDo from "./todos"


events();
let premierToDo = toDo("premier", "premier description");
let deuxiemeToDo = toDo("deuxieme", "deuxieme description");
let troisiemeToDo = toDo("troisieme", "troisieme description");

let ToDos = [];

ToDos.push(premierToDo);
ToDos.push(deuxiemeToDo);
ToDos.push(troisiemeToDo);

renderToDo(ToDos);
