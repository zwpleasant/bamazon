DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE product (
  item_id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(15,2) NOT NULL,
  stock_quantity INTEGER(10) NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE department (
  department_id INTEGER NOT NULL,
  department_name VARCHAR(100) NULL,
  over_head_costs INTEGER(10) NULL,
  PRIMARY KEY (department_id)
);