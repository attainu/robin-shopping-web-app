const  Router  = require('express');
var router = Router();

const { searchbykey } = require('../controllers/searchProductController')

//===================================================>>>>>>>>>>>>>>>
//==================================>>>>>>>>>>>>>>>

router.get('/searchbykey',searchbykey);

//===================================================>>>>>>>>>>>>>>>
//==================================>>>>>>>>>>>>>>>
module.exports = router;