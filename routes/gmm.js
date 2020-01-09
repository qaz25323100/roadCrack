var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gmm', { title: '高斯混合模型' });
});

module.exports = router;