var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('default', { title: 'Express' });
  res.render('datasets' ,{'title':'資料集說明及下載'});
});


module.exports = router;