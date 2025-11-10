import startCountdown from "./time.mjs";
import { data1 } from "./data1.js";
import * as puzzle1 from "./modules/puzzle1.mjs";
import { puzzle2 } from "./modules/puzzle2.mjs";
import {startpuzzle3} from './modules/puzzle3.mjs';

startCountdown(20, 'countdown');
let puzzleId = document.querySelector(".aside-puzzle-id");
puzzleId.innerHTML = data1.id;
let puzzleName = document.querySelector(".aside-puzzle-name");
puzzleName.innerHTML = data1.name;
puzzle1.default();
puzzle1.insertValue();
puzzle2();
startpuzzle3();
