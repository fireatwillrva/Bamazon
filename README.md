# Bamazon

## Description

This application implements a simple command line based storefront using the npm [inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package. The application presents a **customer** interface.

### MySQL Database Setup

In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [Bamazon.sql](Bamazon.sql). Run this code inside your MySQL client like [Sequel Pro](https://www.sequelpro.com/) to populate the database, then you will be ready to proceed with running the Bamazon customer and manager interfaces.

### Customer Interface Setup

In order to get your Bamazon customer online, you'll need to connect to a port in [MAMP](https://www.mamp.info/en/). Click on the **Start Servers** button then click the **Open WebStart page** button. Your port information will be listed on the left side under *My SQL*. Take that information and replace the connection parameters on line 7 (as shown below) with your port info.

``` Javascript
	host: 'localhost',
	port: 8889,
	user: 'root',
	password: 'root',
```

### Customer Interface

The customer interface allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

To run the customer interface please follow the steps below:

``` JavaScript

	git clone git@github.com:fireatwillrva/Bamazon.git
	cd Bamazon
	npm install
	node bamazonCustomer.js

```

### Bamazon Demo

You can download and watch the demo of the Bamazon customer interface at the link below.

[Bamazon Demo](https://drive.google.com/file/d/1QWgUUDLdCyyIDCVSXluMCS2BgPtDN54z/view?usp=sharing)

