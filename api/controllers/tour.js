const mongoose = require('mongoose')
const Tour = require('../models/Tour')

exports.createTour = (req, res) => {

    const { name, description, price, tourCapacity} = req.body

    const newTour = new Tour({
        _id: new mongoose.Types.ObjectId(),
        name: name,
        description: description,
        price: price,
        tourCapacity: tourCapacity,
        creator: req.user.id
    })

    newTour.save()
           .then((tour, error) => {
               if (tour) {
                   return res.status(200).json({message: `${name} tour created successfully`})
               } else {
                    res.status(401).json(error)
                    console.log(error)
               }
           })
    
}