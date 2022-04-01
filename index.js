const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');
require('dotenv').config();

const app = express();

// setup express
app.set('view engine', 'hbs');

app.use(express.static('public'));

// enable forms
app.use(express.urlencoded({
    'extended': false
}))

wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

// custom MIDDLEWARES
app.use((req, res, next) => {
    res.locals.date = Date();

    next(); // forward the request to the next
    // or if there is no middleware, to
})

// IMPORT IN THE ROUTES
const landingRoutes = require('./routes/landing');
const productRoutes = require('./routes/products');

(async function () {

    app.get('/', (req, res) => {
        res.redirect("/landing");
    })

    app.use('/landing', landingRoutes)
    app.use('/products', productRoutes)
})();

app.listen(3000, function () {
    console.log("Server has started")
})