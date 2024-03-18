// Creating a function that quizes the user and check the answer

import inquirer from "inquirer";
import chalk from "chalk";
let input1= await inquirer.prompt([{
    name: "userAnswer",
    type: "string",
    message: chalk.green.bold("What is the capital of Pakistan?"),
}]);

// Now we will define a function of quiz

let quiz= (question: string, correctAnswer: string)=>{
    if (input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        console.log(chalk.bgBlue.bold("Correct!"));
    }
    else{
        console.log(chalk.red.bold("Wrong Answer! Try again."));
    }
}
 // Now Calling the function

 quiz("What is the capital of Pakistan?", "Islamabad");