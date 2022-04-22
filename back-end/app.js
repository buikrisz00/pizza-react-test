const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./storage/file-database');
const bodyParser = require('body-parser');
const fs = require('fs');

const dataFolder = path.join(`${__dirname}/../front-end/public/data`);
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/add_to_cart', (req, res) => {
  fs.readFile(`${dataFolder}/cart.json`, (error, data) => {
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
            cartItems.push(req.body);
        }

        // Overwrite the cart.json with the new array
        fs.writeFile(`${dataFolder}/cart.json`, JSON.stringify(cartItems), err => {
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
