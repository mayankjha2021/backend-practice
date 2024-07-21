var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/failed', function(req, res) {
 res.send("bangaya");
});

module.exports = router;
