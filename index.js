// A Simple Calculator Using Inquirer and Chalk
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        message: (chalk.green.bold.underline("Enter First Number:")),
        type: "number",
        name: "firstNumber",
    },
    {
        message: (chalk.yellowBright.underline.bold("Enter Second Number:")),
        type: "number",
        name: "secondNumber",
    },
    {
        message: (chalk.whiteBright.bold("Enter One of Operator to perform action")),
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/", "**", "%"],
    },
]);
// Now we will apply conditions to print the answer according to the operators entered
if (answer.Operator === "+") {
    console.log(chalk.red.italic.bold(answer.firstNumber + answer.secondNumber));
}
else if (answer.Operator === "-") {
    console.log(chalk.white.italic.bold(answer.firstNumber - answer.secondNumber));
}
else if (answer.Operator === "*") {
    console.log(chalk.red.italic.bold(answer.firstNumber * answer.secondNumber));
}
else if (answer.Operator === "/") {
    console.log(chalk.white.italic.bold(answer.firstNumber / answer.secondNumber));
}
else if (answer.Operator === "**") {
    console.log(chalk.red.italic.bold(answer.firstNumber ** answer.secondNumber));
}
else if (answer.Operator === "%") {
    console.log(chalk.white.italic.bold(answer.firstNumber % answer.secondNumber));
}
else {
    console.log(chalk.red.italic("Please enter valid operator"));
}
// import inquirer from "inquirer";
// import chalk from "chalk";
// const answer= await inquirer.prompt([{
//     message: (chalk.green.underline.bold("Enter first Number")),
//     type: (chalk.yellow.bold("number")),
//     name: "firstNumber",
// },
// {
//     message: "Enter second Number:",
//     type: "number",
//     name: "secondNumber",
// },
// {
//     message: "Select One of operator to perform action:",
//     type: "list",
//     name: "operator",
//     choices: ["+", "-", "*", "/" , "**", "%"],
// }
// ]);
// // Conditional Statements
// if (answer.operator=== 'Addition') {
//     console.log(`The ${answer} is:`);
//     console.log(chalk.red.bold (answer.firstNumber + answer.secondNumber));
// }
// else if (answer.operator=== 'Subtraction') {
//     console.log(answer.firstNumber - answer.secondNumber);
// }
// else if (answer.operator=== 'Multiplication') {
//     console.log(answer.firstNumber * answer.secondNumber);
// }
// else if (answer.operator=== 'Division') {
//  console.log(answer.firstNumber / answer.secondNumber);   
// }
// else{
//     console.log("Please Enter valid operator");
// }
