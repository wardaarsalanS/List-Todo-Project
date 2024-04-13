#!usr/bin/env node
import inquirer from "inquirer";

let todos: string[] = [];

async function createTodo(arr: string[]) {
    let exit = false;
    do {
        let ans = await inquirer.prompt([{
            type: "list",
            message: "Select an operation",
            name: "select",
            choices: ["Add todos item", "Delete todos item", "Update list", "View your list", "Exit"],
        }]);

        if (ans.select == "Add todos item") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add item..",
                name: "todo",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        } else if (ans.select == "Delete todos item") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "select item to delete",
                name: "select",
                choices: todos,
            });
            todos = todos.filter(val => val !== deleteTodo.select);
            console.log(todos);
        } else if (ans.select == "Update list") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "select item for update",
                name: "select",
                choices: todos,
            });
            let newTodo = await inquirer.prompt({
                type: "input",
                message: "add new item..",
                name: "todo",
            });
            todos = todos.filter(val => val !== updateTodo.select);
            todos.push(newTodo.todo);
            console.log(todos);
        } else if (ans.select == "View your list") {
            console.log(todos);
        } else if (ans.select == "Exit") {
            exit = true;
        }
    } while (!exit);
}