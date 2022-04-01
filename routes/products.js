const express = require('express');

// create the new router
const router = express.Router();

router.get('/', (req, res) => {

    res.locals.products = [
        ['apples', 'bananas', 'mango', 'pineapple']
    ]

    res.render('products/index')
})

module.exports = router;