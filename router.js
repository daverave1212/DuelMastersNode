const express = require('express')
const router = express.Router()

// Authentication Routing
const authenticationController = require('./controllers/AuthenticationController')
const authenticationMiddleware = require('./middlewares/authentication')
router.post('/login', authenticationController.login)

// User Routing
const userController = require('./controllers/UserController')
router.get('/user', authenticationMiddleware, userController.index)
router.post('/user', userController.create)
router.get('/user/:id', authenticationMiddleware, userController.show)
router.put('/user/:id', authenticationMiddleware, userController.update)
router.delete('/user/:id', authenticationMiddleware, userController.delete)

// Card Routing
const cardController = require('./controllers/CardController')
router.get('/card', cardController.index)
router.post('/card', cardController.create)
router.get('/card/:id', cardController.show)
router.put('/card/:id', cardController.update)
router.delete('/card/:id', cardController.delete)

// Deck Routing
const deckController = require('./controllers/DeckController')
router.get('/deck', deckController.index)
router.post('/deck', deckController.create)
router.get('/deck/:id', deckController.show)
router.put('/deck/:id', deckController.update)
router.delete('/deck/:id', deckController.delete)

// History_Move controller
const history_moveController = require('./controllers/History_MoveController')
router.get('/history_move', history_move.index)
router.post('/history_move', history_move.create)
router.get('/history_move/:id', history_move.show)
router.put('/history_move/:id', history_move.update)
router.delete('/history_move/:id', history_move.delete)

// Deck_Card controller
const deck_cardController = require('./controllers/Deck_CardController')
router.get('/deck_card', deck_card.index)
router.post('/deck_card', deck_card.create)
router.get('/deck_card/:id', deck_card.show)
router.put('/deck_card/:id', deck_card.update)
router.delete('/deck_card/:id', deck_card.delete)

module.exports = router
