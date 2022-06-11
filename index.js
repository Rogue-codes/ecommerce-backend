const express = require("express"); /* importing express */
const cors = require("cors"); /* importing cors */

const app = express(); /* Initializing express to the variable app*/

const products = require('./Products') /* import our products array */

const laptop = require('./Laptop') /* import our laptop array */

const routerSwitches = require('./RouterSwitches') /* import our router switches array */

const printers = require('./Printer') /* import our printers array */

const monitor = require('./Monitor') /* import our monitor array */


app.use(express.json());
app.use(cors());

// creating an API end point
app.get('/', (req, res) => {
    res.send('welcome to homepage')
})

// creating another API end point for the /product route.
app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/laptop', (req, res) => {
    res.send(laptop)
})

app.get('/routerSwitches', (req, res) => {
    res.send(routerSwitches)
})

app.get('/printer', (req, res) => {
    res.send(printers)
})

app.get('/monitor', (req, res) => {
    res.send(monitor)
})

// app.get('/products/:id', (req, res) => {
//     res.send(products.id)
// })

// running the server on port 5000 any other available port environment 
const Port = process.env.PORT || 5000

// telling the server to run on Port 5000 or any other available port
app.listen(Port, console.log(`server running on port ${Port}`))