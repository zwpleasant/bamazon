// step 1: load npm packages and connect to database
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tucker10!",
    database: "bamazon"
});

connection.connect(function (error) {
    if (error) throw (error);
    // call the function that displays the manager options
    managerOptions();
});

function managerOptions() {
    inquirer.prompt([{
        name: "managerChoice",
        type: "list",
        message: "Welcome to the Bamazon Manager Interface. Please make a selection:",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product",]          
    }
    ]).then(function (answer) {
        console.log(answer.managerChoice);
        if (answer.managerChoice === "View Products for Sale") {
            console.log("Viewing products for sale");
            viewProducts();
        } else if (answer.managerChoice === "View Low Inventory") {
            console.log("Viewing low inventory");
            // function to view low inventory
            viewLowInventory();
        } else if (answer.managerChoice === "Add to Inventory") {
            console.log("Adding to inventory");
            // function to add inventory
        } else {
            console.log("Adding new product");
            // function to add new product
        }
    });
};

function viewProducts() {
    connection.query("SELECT * FROM product", function (error, results){
        if (error) throw error;
        console.log(results);
    })
}

function viewLowInventory() {
    connection.query("SELECT product_name, stock_quantity FROM product WHERE stock_quantity < 5", function (error, results) {
        if (error) throw (error);
        else if (results[0] === undefined) {
            console.log("Everything is stocked");
        } else {
            console.log(results);
        }
    })
}

function addInventory() {

}

function addProduct() {

}