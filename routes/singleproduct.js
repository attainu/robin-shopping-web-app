const { Router } = require('express');
var router = Router();

const {singleProductDekho} = require('../controllers/singleProductController')

// means single product view {{{ THE WIDE VIEW PRODUCT WITH DETAILS}}}
router.get('/productdekho/:id',singleProductDekho)

module.exports = router;