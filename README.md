# Bamazon
An Amazon-like storefront accesed from the command line using Node.js and MySQL. Use the customer interface to view and purchase items that are in stock on the site. Use the manager interface to view and add inventory to the site's stock!

## Instructions
Download the repository onto your computer and navigate to the folder. 

To view and purchase items on the site, type in "node bamazonCustomer.js" into your console. Upon hitting enter, you will be shown all of the items in inventory, the department they are found in, the price and inventory. To order an item, follow the on-screen inquirer to select the item ID of the item you'd like to purchase. Then, simply add the amount of the item you'd like to purchase. If there is adequate stock, the program will order your items and send you a total. If there is not adequate stock, you will receive a message indicated insufficient quantity.

To view and add to the inventory on the site, type in "node bamazonManager.js" into your console. Upon loading the manager interface, select the feature that you'd like to run. You can view the products for sale, view items with low inventory, add inventory to stock, and even add new products to the store.

Enjoy!

## Technologies Used
- [Node.js](https://nodejs.org/en/docs/)
- [Inquirer NPM](https://www.npmjs.com/package/inquirer)
- [MySQL](https://dev.mysql.com/doc/)
- [Sequel Pro](https://sequelpro.com/docs)

## Authors
- **Zach Pleasant** - *Northwestern Coding Bootcamp* - [zwpleasant](https://github.com/zwpleasant)

## Acknowledgments
- [Northwestern Coding Bootcamp](https://bootcamp.northwestern.edu/coding/)
