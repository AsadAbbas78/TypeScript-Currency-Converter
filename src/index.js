import inquirer from "inquirer";
let convert = {
    PKR: {
        USD: 0.0036,
        GBP: 0.0028,
        PKR: 1,
    },
    GBP: {
        USD: 1.29,
        PKR: 259.8,
        GBP: 1,
    },
    USD: {
        PKR: 279.29,
        GBP: 0.78,
        USD: 1,
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency"
    },
    {
        type: "list",
        name: "To",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convert currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convert amount"
    }
]);
const { From, To, amount } = answer;
if (From && To && amount) {
    let result = convert[From][To] * amount;
    console.log(`your convert from ${From} to ${To} is ${result}`);
}
else {
    console.log("invalid inputs");
}
