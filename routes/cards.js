const express = require('express')
const router = express.Router()
const Card = require('../models/card')

// // Getting all
// router.get('/', async (req, res) => {
//     try {
//         const cards = await Card.find()

//         res.json(cards)
//     } catch (err) {
//         res.status(500).json({ message: err.message })
//     }
// })

// // Getting One
// router.get('/:id', getCard, (req, res) => {
//     res.json(res.card)
// })

// // Creating one
// router.post('/', async (req, res) => {
//         const card = new Card({
//         name: req.body.name,
//         description: req.body.description,
//         level: req.body.level,
//         point: req.body.point,
//         imageurl: req.body.imageurl
//     })

//     try {
//         const newCard = await card.save()
//         res.status(201).json(newCard)
//     } catch (err) {
//         res.status(400).json({ message: err.message })
//     }

// })

// async function getCard(req, res, next) {
//     let card
//     try {
//       card = await Card.findById(req.params.id)
//       if (card == null) {
//         return res.status(404).json({ message: 'Cannot find card' })
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message })
//     }
  
//     res.card = card
//     next()
// }

// Updating one


// Deleting one

const {getAllCards,getOneCard, createOneCard, editOneCard, deleteOneCard} = require('../controllers/controller')

// Getting all
router.get('/', getAllCards)

// Getting One
router.get('/:id', getOneCard)

// Creating one
router.post('/', createOneCard)

// Editing one
router.put('/:id', editOneCard)

// Deleting one
router.delete('/:id', deleteOneCard)

module.exports = router

