// Pull in required dependencies
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889,

	// Your username
	user: 'root',

	// Your password
	password: 'root',
	database: 'bamazon'
});

// validateInput makes sure that the user is using only positive integers
function validateInput(input) {
	var integer = Number.isInteger(parseFloat(input));
	var sign = Math.sign(input);

	if (integer && sign === 1) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

// promptUserPurchase will prompt the user for the item/quantity they would like to purchase
function promptUserPurchase() {
	// Prompt the user to select an item
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		// Prompt the user to select the quantity of the desired item
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you want to purchase?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {
		// console.log('Customer has selected: \n    item_id = '  + input.item_id + '\n    quantity = ' + input.quantity);

		var item = input.item_id;
		var quantity = input.quantity;

		// Query database to confirm that the given item ID exists in the desired quantity
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;
			// If the user didn't type anything before submitting, it will error and reset
			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				displayInventory();

			} else {
				var productData = data[0];

				// If the quantity requested by the user is in stock, the order will be placed
				if (quantity <= productData.stock_quantity) {
					console.log('The product you requested is in stock! Placing order.');

					// SQL function that updates the inventory
					var updateQuery = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					// Run the update inventory command
					connection.query(updateQuery, function(err, data) {
						if (err) throw err;
						// If quantity ordered is 1, product referenced in order is singular
						if (quantity === 1){
							console.log('Your order has been placed for ' + quantity + ' ' + productData.product_name + '! Your total is $' + productData.price * quantity);
							console.log('Thank you for shopping with us!');
							console.log("\n---------------------------------------------------------------------\n");
	
							// End the database connection
							connection.end();
						}
						// If quantity ordered is more than 1, product referenced in order is plural
						else if (quantity > 1){
							console.log('Your order has been placed for ' + quantity + ' ' + productData.product_name + 's! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End the database connection
						connection.end();
						}
					})
					// If not enough of an item is in stock, prompt the user to modify their order
				} else {
					console.log('Sorry, there is not enough of the selected product in stock. Your order cannot be placed as is.');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}

// displayInventory will retrieve the current inventory from the database and output it to the console
function displayInventory() {

	// DB query string
	queryStr = 'SELECT * FROM products';

	// DB query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var inventory = '';
		for (var i = 0; i < data.length; i++) {
			inventory = '';
			inventory += 'Item ID: ' + data[i].item_id + '  //  ';
			inventory += 'Product Name: ' + data[i].product_name + '  //  ';
			inventory += 'Department: ' + data[i].department_name + '  //  ';
			inventory += 'Price: $' + data[i].price + '  //  ';
			inventory += 'Quantity: ' + data[i].stock_quantity + '\n';

			console.log(inventory);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	  	promptUserPurchase();
	})
}

// runBamazon will execute the main application logic
function runBamazon() {
	// console.log('___ENTER runBamazon___');

	// Display the available inventory
	displayInventory();
}

// Run the application logic
runBamazon();
