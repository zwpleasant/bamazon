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
        order();
    });
}

// stept 3: prompt user for id of product they would like to buy and amount they want to buy
function order() {
    inquirer.prompt([{
        name: "userChoice",
        type: "input",
        message: "Welcome to Bamazon. Please make a selection:",
        choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]          
    },
    {
        name: "amount",
        type: "input",
        default: 1,
        message: "Enter the quantity"
    }
    ]).then(function (answer) {
        console.log(answer.userChoice);
        console.log(answer.amount);
        connection.query(`SELECT product_name, price, stock_quantity FROM product WHERE item_id=${answer.userChoice}`, function (error, results){
            if (error) throw error;
            else if (results[0].stock_quantity >= answer.amount) {
                connection.query("UPDATE product SET stock_quantity=stock_quantity-? WHERE ?", [answer.amount,{item_id: answer.userChoice}],
                function (error) {
                    if (error) throw (error);
                    console.log(`Thanks for your purchase, your order total is: $${results[0].price * answer.amount}`);
                });
            } else {
                console.log("Sorry, we don't have that much in stock. Please try another amount.");
            }
        });
    });
};

// step 4: take in both parameters (product id & amount), then check to see (if-else statement?) if they is a sufficient quantity
    // if sufficient quantity
        // update SQL database with current amount
        // show total cost to customer for order
    // else display "Insufficient Quantitity!"
