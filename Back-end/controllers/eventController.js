const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Event } = require('../models/event.model');

router.get('/', (req, res) => {
    Event.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in retrieving Events : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No record with given id : ${req.params.id}');
    }

    Event.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retrieving event by id : ' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var event = new Event({
        eventName: req.body.eventName,
        longDes: req.body.longDes,
        eventDate: req.body.eventDate,
        venueName: req.body.venueName,
        mobNumber: req.body.mobNumber,
        pincode: req.body.pincode,
        address: req.body.address
    });
    event.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log("Error in Posting the Data : " + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No Event With Given id : ${req.params.id}');
    }

    var event = {
        eventName: req.body.eventName,
        longDes: req.body.longDes,
        eventDate: req.body.eventDate,
        venueName: req.body.venueName,
        mobNumber: req.body.mobNumber,
        pincode: req.body.pincode,
        address: req.body.address
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { this.console.log('Error in Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send('No Record With Given id : ${ req.params.id }');
    }

    Event.findByIdAndRemove(req.params.id, (err, resp) => {
        if (!err) { res.send(resp); }
        else { this.console.log('Error in Deleting Selected Details : ' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
