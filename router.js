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
const historyMoveController = require('./controllers/HistoryMoveController')
router.get('/history_move', historyMoveController.index)
router.post('/history_move', historyMoveController.create)
router.get('/history_move/:id', historyMoveController.show)
router.put('/history_move/:id', historyMoveController.update)
router.delete('/history_move/:id', historyMoveController.delete)

// Deck_Card controller
const deckCardController = require('./controllers/DeckCardController')
router.get('/deck_card', deckCardController.index)
router.post('/deck_card', deckCardController.create)
router.get('/deck_card/:id', deckCardController.show)
router.put('/deck_card/:id', deckCardController.update)
router.delete('/deck_card/:id', deckCardController.delete)

module.exports = router
