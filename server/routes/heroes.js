var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

//GET heroes from the DB;
router.get('/', function (req, res) {
  Hero.find({}, function (err, heroes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(heroes);
  });
});

//POST hero to DB;
router.post('/', function (req, res) {
  console.log('POST', req.body);
  var hero = Hero(req.body);

  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

//DELETE hero from DB;
router.delete('/:id', function (req, res) {
  var id = req.params.id;

  Hero.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
