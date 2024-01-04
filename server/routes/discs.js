const express = require('express');
const router = express.Router();
const Disc = require('../models/discModel');


router.get('/', (req, res) => {
    res.json({msg: 'GET all discs'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'GET disc by id'})
})

router.post('/:id', async (req, res) => {
    const {name, speed, glide, turn, fade, manufacturer, category, description} = req.body;

    try {
        const disc = await Disc.create({name, speed, glide, turn, fade, manufacturer, category, description});
        res.status(200).json(disc);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE disc'});
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE disc'});
})

module.exports = router;