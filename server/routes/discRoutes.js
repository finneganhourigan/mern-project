const express = require('express');
const router = express.Router();
const {
    getDiscs,
    getDiscByID,
    postDisc,
    updateDisc,
    deleteDisc
} = require('../controllers/discController');


router.get('/', getDiscs);

router.get('/:id', getDiscByID);

router.post('/', postDisc);

router.patch('/:id', updateDisc);

router.delete('/:id', deleteDisc);

module.exports = router;