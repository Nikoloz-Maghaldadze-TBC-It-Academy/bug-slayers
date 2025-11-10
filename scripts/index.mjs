import startCountdown from "./time.mjs";
import { data1 } from "./data1.js";
startCountdown(20, 'countdown');

let puzzleId = document.querySelector(".aside-puzzle-id");
puzzleId.innerHTML = data1.id;
let puzzleName = document.querySelector(".aside-puzzle-name");
puzzleName.innerHTML = data1.name;import * as puzzle1 from "./modules/puzzle1.mjs";

puzzle1.default();
puzzle1.insertValue();
import {startpuzzle3} from './modules/puzzle3.mjs';
startpuzzle3();