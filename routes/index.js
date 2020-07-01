const { Router } = require('express');
var router = Router();

const {isLoggedIn} = require('../utils/usercheck')

const { allProduct, addToCart, increaseCartValue,decreaseCartValue, removeCartItem , shoppingCart, checkoutAsGet , checkoutAsPost} = require("../controllers/indexControllers");

/*  // route for all product in home page. */
router.get('/', allProduct);

router.get('/add-to-cart/:id',addToCart);

router.get('/increase/:id',increaseCartValue);

router.get('/reduce/:id',decreaseCartValue);

router.get('/remove/:id',removeCartItem);

router.get('/shoppingcart', shoppingCart);

router.get('/checkout', isLoggedIn, checkoutAsGet);

router.post('/checkout', isLoggedIn,checkoutAsPost);

module.exports = router;