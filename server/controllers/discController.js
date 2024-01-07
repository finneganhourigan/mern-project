const Disc = require('../models/discModel');
const mongoose = require('mongoose');


const getDiscs = async (req, res) => {
    const discs = await Disc.find({}).sort({name: 1});
    res.status(200).json(discs);
};


const getDiscByID = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid ID format'});
    }

    const disc = await Disc.findById(id);

    if(!disc){
        return res.status(404).json({error: 'No such disc to get'});
    }
    
    res.status(200).json(disc);
};


const postDisc = async (req, res) => {
    const {name, speed, glide, turn, fade, manufacturer, category, description, image} = req.body;

    try {
        const disc = await Disc.create({name, speed, glide, turn, fade, manufacturer, category, description, image});
        res.status(200).json(disc);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


const updateDisc = async (req, res) => {
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid ID format '})
    }

    const disc = await Disc.findByIdAndUpdate(id, {
        ...req.body
    })
    
    if(!disc){
        return res.status(404).json({error: "No such disc to update"})
    }

    res.status(200).json(disc);
};


const deleteDisc = async (req, res) => {
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid ID format'});
    }

    // const disc = await Disc.findOneAndDelete({_id: id});
    const disc = await Disc.findByIdAndDelete(id);

    if(!disc){
        return res.status(404).json({error: "No such disc to delete"})
    }

    res.status(200).json(disc);
};


module.exports = {
    getDiscs,
    getDiscByID,
    postDisc,
    updateDisc,
    deleteDisc
};