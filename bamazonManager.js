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
            addInventory();
        } else {
            console.log("Adding new product");
            // function to add new product
            addProduct();
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
    inquirer.prompt([{
        name: "managerChoice",
        type: "list",
        message: "Select the item to update",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    },
    {
        name: "amount",
        type: "input",
        default: 1,
        message: "Enter the quantity"
    }
    ]).then(function (answer) {
        console.log(answer.managerChoice);
        console.log(answer.amount);
        connection.query(`SELECT product_name, stock_quantity FROM product WHERE item_id=${answer.managerChoice}`, function (error, results) {
            if (error) throw error;
            else if (results[0].stock_quantity >= answer.amount) {
                connection.query("UPDATE product SET stock_quantity=stock_quantity+? WHERE ?", [answer.amount,{item_id: answer.managerChoice}],
                function (error) {
                    if (error) throw (error);
                    console.log("Thanks for updating the inventory");
                });
            }
        });
    });
};

function addProduct() {
    return inquirer.prompt([
        {
            name: "productName",
            type: "input",
            message: "Enter product name"
        },
        {
            name: "departmentName",
            type: "list",
            message: "Enter department name",
            choices: ["Electronics", "Sports & Outdoors", "Books", "Home & Garden", "Toys & Games"]
        },
        {
            name: "price",
            type: "input",
            message: "Enter a price"
        },
        {
            name: "stockQuantity",
            type: "input",
            message: "Enter an amount"
        }
    ]).then(function (answers) {
        connection.query(
            `INSERT INTO product (product_name, department_name, price, stock_quantity)
            VALUES ("${answers.productName}", "${answers.departmentName}", ${answers.price}, ${answers.stockQuantity})`,
            function(error) {
                if (error) throw (error);
                console.log("New product has been added");
            }
        );
    });
}