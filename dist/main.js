!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t,n,o,r){return{name:e,description:t,date:n,importance:o,project:r}}function r(e){c.push(e)}n.r(t);let c=[],l=["all","test"];let d=o("premier","premier description","2009-05-12","Not Important","default"),i=o("deuxieme","deuxieme description","2009-08-30","Important","default"),a=o("troisieme","troisieme description","2009-12-05","Very Important","test");r(d),r(i),r(a);const u=document.querySelector("#addTask"),s=document.querySelector("#addProject"),p=document.querySelector("#newTask"),m=document.querySelector("#newProject"),f=document.querySelectorAll("button"),y=document.querySelector("#addThisTask"),C=document.querySelector("#addThisProject"),v=document.querySelector("#projectView"),h=document.querySelector("#taskName"),b=document.querySelector("#taskDesc"),E=document.querySelector("#taskDate"),k=document.querySelector("#taskImportance"),S=document.querySelector("#projectList"),j=document.querySelector("#projectName"),x=document.querySelector("#projectBind");function g(e){e.style.display="inline",f.forEach(t=>{t.closest("div")!==e&&(t.disabled=!0)})}function q(e){e.style.display="none",f.forEach(e=>e.disabled=!1)}function L(e,t){let n=document.createElement("li");n.classList="taskRow",t.appendChild(n);let o=document.createElement("div");o.textContent=e.name,o.classList="taskName",n.appendChild(o);let r=document.createElement("p");r.textContent=function(e){let t=e.split("-"),n=Number(t[1])-1;return t[2]+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n]+" "+t[0]}(e.date),r.classList="date",o.appendChild(r);let c=document.createElement("p");var l;c.textContent=e.importance,c.classList="importance","Not Important"===(l=c).textContent?l.style.color="grey":"Important"===l.textContent?l.style.color="orange":"Very Important"===l.textContent&&(l.style.color="red"),o.appendChild(c);let d=document.createElement("button");d.textContent="done",d.classList="doneButton",d.addEventListener("click",()=>{t.removeChild(o)}),n.appendChild(d);let i=document.createElement("div");i.textContent=e.description,i.classList="description",t.appendChild(i),o.addEventListener("click",()=>{!function(e){"block"===e.style.display?e.style.removeProperty("display"):e.style.display="block"}(i),function(e){"rgb(236, 236, 236)"===e.style.backgroundColor?e.style.removeProperty("background-color"):e.style.backgroundColor="rgb(236, 236, 236)"}(o)}),d.addEventListener("click",()=>{t.removeChild(i),t.removeChild(n)})}function P(e){for(;v.firstChild;)v.removeChild(v.firstChild);const t=document.createElement("h1");t.textContent="Project : "+e,v.appendChild(t);const n=document.createElement("ul");v.appendChild(n),c.sort((function(e,t){return e.date<t.date?-1:e.date>t.date?1:0})),c.forEach(t=>{t.project!==e&&"all"!==e||L(t,n)})}function O(){for(;S.firstChild;)S.removeChild(S.firstChild);const e=document.createElement("h1");e.textContent="Projects",S.appendChild(e);const t=document.createElement("ul");S.appendChild(t),l.forEach(e=>{let n=document.createElement("li");n.textContent=e,n.classList="project",n.addEventListener("click",()=>{P(n.textContent),function(e){document.querySelectorAll(".project").forEach(t=>{t!==e?t.style.removeProperty("background-color"):t.style.backgroundColor="rgb(236, 236, 236)"})}(n)}),t.appendChild(n)})}u.addEventListener("click",()=>{!function(){for(;x.firstChild;)x.removeChild(x.firstChild);l.forEach(e=>{if("all"!==e){let t=document.createElement("option");t.textContent=e,t.value=e,x.appendChild(t)}})}(),g(p)}),s.addEventListener("click",g.bind(null,m)),y.addEventListener("click",()=>{q(p),r(o(h.value,b.value,E.value,k.value,x.value)),P(x.value)}),C.addEventListener("click",()=>{q(m);let e=j.value;l.push(e),O()}),O(),P("all")}]);