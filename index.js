#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate random number
// 2) user inpur for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number from (1-10): "
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("You guessed right number");
}
else {
    console.log("You have guessed wrong number");
}
