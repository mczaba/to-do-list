!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let o=[c("premier","premier description","2009-05-12","Not Important","default"),c("deuxieme","deuxieme description","2009-08-30","Important","default"),c("troisieme","troisieme description","2009-12-05","Very Important","test")],r=["all","test"];function c(e,t,n,o,r){return{name:e,description:t,date:n,importance:o,project:r}}function l(e){"date"===e&&o.sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})),"importance"===e&&function(){function e(e){return"Not Important"===e?1:"Important"===e?2:"Very Important"===e?3:void 0}o.sort((function(t,n){return e(t.importance)>e(n.importance)?-1:e(t.importance)<e(n.importance)?1:0}))}()}function i(){localStorage.setItem("Projects",JSON.stringify(r)),localStorage.setItem("Tasks",JSON.stringify(o))}const a=document.querySelector("#addTask"),d=document.querySelector("#addProject"),u=document.querySelector("#newTask"),s=document.querySelector("#newProject"),p=document.querySelectorAll("button"),m=document.querySelector("#addThisTask"),f=document.querySelector("#addThisProject"),y=document.querySelector("#projectView"),C=document.querySelector("#taskName"),h=document.querySelector("#taskDesc"),v=document.querySelector("#taskDate"),S=document.querySelector("#taskImportance"),b=document.querySelector("#projectList"),k=document.querySelector("#projectName"),g=document.querySelector("#projectBind"),E=document.querySelector("#sortButton"),j=document.querySelector("#sortType");function x(e){e.style.display="inline",p.forEach(t=>{t.closest("div")!==e&&(t.disabled=!0)})}function L(e){e.style.display="none",p.forEach(e=>e.disabled=!1)}function q(e,t){let n=document.createElement("li");n.classList="taskRow",t.appendChild(n);let r=function(e,t){let n=document.createElement("div");n.textContent=e.name,n.classList="taskName",t.appendChild(n);let o=document.createElement("p");o.textContent=function(e){let t=e.split("-"),n=Number(t[1])-1;return t[2]+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n]+" "+t[0]}(e.date),o.classList="date",n.appendChild(o);let r=document.createElement("p");return r.textContent=e.importance,r.classList="importance",function(e){"Not Important"===e.textContent?e.style.color="grey":"Important"===e.textContent?e.style.color="orange":"Very Important"===e.textContent&&(e.style.color="red")}(r),n.appendChild(r),n}(e,n),c=document.createElement("button");c.textContent="done",c.classList="doneButton",c.addEventListener("click",()=>{t.removeChild(r)}),n.appendChild(c);let l=document.createElement("div");l.textContent=e.description,l.classList="description",t.appendChild(l),r.addEventListener("click",()=>{!function(e){"block"===e.style.display?e.style.removeProperty("display"):e.style.display="block"}(l),function(e){"rgb(236, 236, 236)"===e.style.backgroundColor?e.style.removeProperty("background-color"):e.style.backgroundColor="rgb(236, 236, 236)"}(r)}),c.addEventListener("click",()=>{let t=I();!function(e){let t=o.indexOf(e);o.splice(t,1),i()}(e),P(t)})}function P(e){for(T(e);y.firstChild;)y.removeChild(y.firstChild);const t=document.createElement("h1");if(t.textContent="Project : "+e,t.id="projectHeader",y.appendChild(t),"all"!==e){const t=document.createElement("button");t.textContent="Delete Project",y.appendChild(t),t.addEventListener("click",()=>{!function(e){let t=r.indexOf(e);r.splice(t,1);let n=0;for(;n<o.length;)o[n].project===e?o.splice(n,1):n++;i()}(e),N(),P("all")})}const n=document.createElement("h2");n.textContent="Tasks : ",y.appendChild(n);const c=document.createElement("ul");c.classList="taskList",y.appendChild(c),l(j.value),o.forEach(t=>{t.project!==e&&"all"!==e||q(t,c)})}function I(){return document.querySelector("#projectHeader").textContent.replace("Project : ","")}function O(){"all"===I()?P("all"):P(I())}function N(){for(;b.firstChild;)b.removeChild(b.firstChild);const e=document.createElement("h1");e.textContent="Projects",b.appendChild(e);const t=document.createElement("ul");b.appendChild(t),r.forEach(e=>{let n=document.createElement("li");n.textContent=e,n.classList="project",n.addEventListener("click",()=>{P(n.textContent),T(n.textContent)}),t.appendChild(n)})}function T(e){document.querySelectorAll(".project").forEach(t=>{t.textContent!==e?t.style.removeProperty("background-color"):t.style.backgroundColor="rgb(236, 236, 236)"})}localStorage.getItem("Projects")&&(r=JSON.parse(localStorage.getItem("Projects"))),localStorage.getItem("Tasks")&&(o=JSON.parse(localStorage.getItem("Tasks"))),a.addEventListener("click",()=>{!function(){for(;g.firstChild;)g.removeChild(g.firstChild);r.forEach(e=>{if("all"!==e){let t=document.createElement("option");t.textContent=e,t.value=e,g.appendChild(t)}})}(),x(u)}),d.addEventListener("click",x.bind(null,s)),m.addEventListener("click",()=>{L(u),function(e){o.push(e),i()}(c(C.value,h.value,v.value,S.value,g.value)),O()}),f.addEventListener("click",()=>{L(s),function(e){r.push(e),i()}(k.value),N()}),E.addEventListener("click",()=>{l(j.value),O()}),N(),P("all")}]);