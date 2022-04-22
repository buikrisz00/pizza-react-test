const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./storage/file-database');
const bodyParser = require('body-parser');
const fs = require('fs');

const dataFolder = path.join(`${__dirname}/../front-end/public/data`);
const srcFolder = path.join(`${__dirname}/../front-end/src`);
const srcDataFolder = path.join(`${__dirname}/../front-end/src/data`);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("src", express.static(srcFolder))

app.post('/add_to_cart', (req, res) => {
  fs.readFile(`${srcDataFolder}/cart.json`, (error, data) => {
    if (error) {
        res.send("Error, while reading data from cart");
    } else {
        const cartItems = JSON.parse(data);
        // Check if the pizza name is already in the array or not, and save the index if yes
        let i = 0;
        const findValue = cartItems.find((x, index) => {
            i = index;
            return req.body.pizzaName === x.pizzaName;
        });

        // If it's in the array, increase the amount
        if (findValue) {
            let cartAmount = Number(cartItems[i].amount);
            cartAmount += Number(req.body.amount); 
            cartItems[i].amount = cartAmount.toString();
        } else {
            const newItem = {id: "", ...req.body};
            cartItems.push(newItem);
        }

        // Reindex items in the cart
        cartItems.map((cartItem, index) => cartItem.id = index)

        // Overwrite the cart.json with the new array
        fs.writeFile(`${srcDataFolder}/cart.json`, JSON.stringify(cartItems), err => {
          if (err) {
            console.log(err);
          }
        });
        res.send("Success");
    }
})
});

const port = 6789;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
