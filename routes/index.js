var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/travellers', async (req, res) => {
  let travellers = await prisma.Travellers.findMany({});
  return res.json(travellers);
});

router.post('/travellers/createTraveller', async (req, res) => {
  let travelerConfig = {
    name: req.body.name,
    email: req.body.email,
    numberOfTravellers: Number(req.body.numberOfTravellers),
    budgetPerPerson: req.body.budgetPerPerson,
    destination: req.body.destination,
  };
  let createTraveller = await prisma.Travellers.create({
    data: travelerConfig,
  });
  return res.json(createTraveller);
});

module.exports = router;
