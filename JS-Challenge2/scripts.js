import { role as roleNwa, display as ceo } from "./nwabisa.js";
import { role as roleJoh, display as int } from "./johannes.js";
import { role as roleAlx, display as hom } from "./alex.js";

document.querySelector("#nwabisa").textContent = ceo;
document.querySelector("#johannes").textContent = int;
document.querySelector("#alex").textContent = hom;

console.log("Roles: " + roleNwa + ", " + roleJoh + ", " + roleAlx);
