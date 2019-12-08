const express = require('express')


const router = express.Router()

/*
  Inregistram middleware-ul pentru a fi inclus in chain doar pe request-urile
  de pe ruta /users.
  Pentru a-l aplica pe intreaga aplicatie, metoda `.use()` exista si pe instanta de express (`app` din index.js)
*/

// Authentication Routing
const authenticationController = require('./controllers/AuthenticationController')
const authenticationMiddleware = require('./middlewares/authentication')
router.use('/user', authenticationMiddleware)
router.post('/login', authenticationController.login)

// User Routing
const userController = require('./controllers/UserController')
router.get('/user', userController.index)
router.post('/user', userController.create)
router.get('/user/:id', userController.show)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

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

module.exports = router
