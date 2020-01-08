var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/yolo', function(req, res, next) {
  //res.render('default', { title: 'Express' });
  res.render('modules/yolo' ,{'title':'YOLOv3神經網路'});
});
router.get('/ssd', function(req, res, next) {
    //res.render('default', { title: 'Express' });
    //res.render('datasets');
});

module.exports = router;