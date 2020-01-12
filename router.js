const express = require('express');
const router = express.Router();

// Authentication Routing
const authenticationController = require('./controllers/AuthenticationController');
const authenticationMiddleware = require('./middlewares/authentication');
router.post('/login', authenticationController.login);

// User Routing
const userController = require('./controllers/UserController');
router.get('/user', authenticationMiddleware, userController.index);
router.post('/user', userController.create);
router.get('/user/:id', authenticationMiddleware, userController.show);
router.put('/user/:id', authenticationMiddleware, userController.update);
router.delete('/user/:id', authenticationMiddleware, userController.delete);

// Card Routing
const cardController = require('./controllers/CardController');
router.get('/card', authenticationMiddleware, cardController.index);
router.post('/card', authenticationMiddleware, cardController.create);
router.get('/card/:id', authenticationMiddleware, cardController.show);
router.put('/card/:id', authenticationMiddleware, cardController.update);
router.delete('/card/:id', authenticationMiddleware, cardController.delete);

// Deck Routing
const deckController = require('./controllers/DeckController');
router.get('/deck', authenticationMiddleware, deckController.index);
router.post('/deck', authenticationMiddleware, deckController.create);
router.get('/deck/:id', authenticationMiddleware, deckController.show);
router.put('/deck/:id', authenticationMiddleware, deckController.update);
router.delete('/deck/:id', authenticationMiddleware, deckController.delete);
router.post('/deck/addCard', authenticationMiddleware, deckController.addCardToDeck);

module.exports = router;
