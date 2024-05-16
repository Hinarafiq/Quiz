#! /usr/bin/env node
import inquirer from "inquirer";
const questionary = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "Q1.What is TypeScript primarily used for?",
        choices: ["Memory Management",
            "Dynamic Typing",
            "Static Typing",
            "Asynchronous Operations"]
    },
    {
        name: "Question_2",
        type: "list",
        message: "Which of the following is not a valid TypeScript data type?",
        choices: ["Void",
            "Any",
            "Dynamic",
            "Tuple"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "How do you donate a variable as readonly in TypeScript?",
        choices: ["Const",
            "Static",
            "Readonly",
            "Fixed"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "How do you specify that a function does not return anything in TypeScript?",
        choices: ["function myFunc():undefined",
            "function myFunc():void",
            "funtion myFunc():null",
            "function myFun():none"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "How do you define a custom type in TypeScript?",
        choices: ["Interface",
            "Typedef",
            "Type",
            "Both Interface & Type"]
    }
]);
let marks = 0;
switch (questionary.Question_1) {
    case "Static Typing":
        console.log("1. Right Answer!");
        ++marks;
        break;
    default:
        console.log("1. Wrong Answer!");
}
switch (questionary.Question_2) {
    case "Dynamic":
        console.log("2. Right Answer!");
        ++marks;
        break;
    default:
        console.log("2. Wrong Answer!");
}
switch (questionary.Question_3) {
    case "Readonly":
        console.log("3. Right Answer!");
        ++marks;
        break;
    default:
        console.log("3. Wrong Answer!");
}
switch (questionary.Question_4) {
    case "function myFunc():void":
        console.log("4. Right Answer!");
        ++marks;
        break;
    default:
        console.log("4. Wrong Answer!");
}
switch (questionary.Question_5) {
    case "Both Interface & Type":
        console.log("5. Right Answer!");
        ++marks;
        break;
    default:
        console.log("5. Wrong Answer!");
}
console.log(`Marks: ${marks}`);
