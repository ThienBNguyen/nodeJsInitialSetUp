const express = require('express')
const router = express.Router();

// Item Model
const Item = require('../../models/item')

// @route get api/items
// @desc Get All Items
// @access Pulbic
router.get('/', (req, res) => {
    Item.find().sort({ date: -1 }).then(items => res.json(items));
});

module.exports = router;