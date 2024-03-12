const Card = require('../models/card')

const getAllCards = async (req, res)=> {
    try {
        const cards = await Card.find()
        res.json(cards)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getOneCard = async (req, res)=> {
    try {
      let card = await Card.findById(req.params.id)
      if (card == null) {
        res.status(404).json({ message: 'Cannot find card' })
      }else{
        res.json(card)
      }
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
}

const createOneCard = async (req, res) => {
    const card = new Card({
        name: req.body.name,
        description: req.body.description,
        level: req.body.level,
        point: req.body.point,
        imageurl: req.body.imageurl
    })

    try {
        const newCard = await card.save()
        res.json(newCard)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const editOneCard = async(req, res)=>{
    try {
        await Card.findByIdAndUpdate(req.params.id, req.body)
        let updateCard = await Card.findById(req.params.id)
        res.status(201).json(updateCard)
    } catch (err) {
    res.status(400).json({ message: err.message })
    }
}

const deleteOneCard = async(req, res)=>{
    try {
        let card = await Card.findByIdAndDelete(req.params.id, req.body)
        if (card == null) {
            res.status(404).json({ message: 'Cannot find card' })
          }else{
            res.json(card)
          }
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = {getAllCards, getOneCard, createOneCard, editOneCard, deleteOneCard}