import * as func from "./databases.js";

const userInput = 5;

const dbLocation = await func.central(userInput);

const funcs = [
    { name: "db1", action: (x) => func.db1(x) },
    { name: "db2", action: (x) => func.db2(x) },
    { name: "db3", action: (x) => func.db3(x) }
];

const selected = funcs.find(item => item.name === dbLocation);

const result = await Promise.all([
    selected.action(userInput),
    func.vault(userInput)
]);


console.log(result);
