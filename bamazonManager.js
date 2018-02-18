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
})