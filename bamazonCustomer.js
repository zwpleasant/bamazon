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
    // call the function that displays the current products/inventories
    readProducts();
});

// step 2: display all the current products/inventories
function readProducts() {
    console.log("Selecting all product... \n");
    connection.query("SELECT * FROM product", function (error, res){
        if (error) throw error;
        // display the products with the SELECT statement
        console.log(res);
        connection.end();
    });
}

// stept 3: prompt user for id of product they would like to buy

// step 4:prompt user for amount of the product they want to buy

// step 5: take in both parameters (product id & amount), then check to see (if-else statement?) if they is a sufficient quantity
    // if sufficient quantity
        // update SQL database with current amount
        // show total cost to customer for order
    // else display "Insufficient Quantitity!"
