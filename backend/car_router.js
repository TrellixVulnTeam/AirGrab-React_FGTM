const express = require('express')
const router = express.Router()
const Car = require('./car')
const mongoose = require('mongoose');
const { json } = require('body-parser');

router.post('/car/v1/order', (req, res) => {
  console.log(req.body);
  new Car(req.body).save((err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "result": car
      })
    }
  })
})
router.get('/car/v1/order', (req, res) => {
  Car.find((err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "orders": car
      })
    }
  })
})
router.get('/car/v1/order/doing', (req, res) => {
  Car.find({
    status: "doing",
    email: req.query.email
  }, (err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "orders": car
      })
    }
  })
})
router.get('/car/v1/order/done', (req, res) => {
  Car.find({
    status: "done",
    email: req.query.email
  }, (err, car) => {
    if (err) { console.log(err); }
    else {
      res.send({
        "status": "200",
        "msg": "success",
        "orders": car
      })
    }
  })
})
router.put('/car/v1/order', (req, res) => {
  console.log(req.body.order_id);
  Car.updateOne({ order_id: req.body.order_id }, {
    status: "done"
  }, (err, car) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(car);
      res.send({
        "status": "200",
        "msg": "success",
        "result": car
      })
    }
  })
})
router.delete('/car/v1/order', (req, res) => {
  console.log(req.body.order_id);
  Car.deleteOne({
    order_id: req.body.order_id
  }, (err, car) => {
    if (err) {
      console.log(err);
    }
    else {
      console.log(car);
      res.send({
        "status": "200",
        "msg": "success",
        "result": car
      })
    }
  })
})
module.exports = router