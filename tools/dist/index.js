"use strict";
// function printMessage(msg: string): void {
//     console.log(`Message: ${ msg }`);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// printMessage("Hello, Typescript");
// printMessage("It is sunny today");
const calc_1 = require("./calc");
let printMessage = (msg) => console.log(`Message: ${msg}`);
let message = ("Hello, TypeScript");
printMessage(message);
let total = calc_1.sum(100, 200, 300);
console.log(`Total: ${total}`);
//# sourceMappingURL=index.js.map