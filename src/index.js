import {events, renderProject, renderProjects} from "./DOM"
import {initializeArrays, createTask, addTaskToProject} from "./todos"

initializeArrays();
events();
renderProjects()
renderProject("All Tasks");
