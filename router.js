const express = require('express');
const router = express.Router();

// Authentication Routing
const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationMiddleware = require('./middlewares/authentication');
const AdminGuardMiddleware = require('./middlewares/role');
router.post('/login', AuthenticationController.login);

// User Routing
const UserController = require('./controllers/UserController');
router.get('/user', AuthenticationMiddleware, UserController.index);
router.post('/user', UserController.create);
router.get('/user/:id', AuthenticationMiddleware, UserController.show);
router.put('/user/:id', AuthenticationMiddleware, UserController.update);
router.delete('/user/:id',[AuthenticationMiddleware, AdminGuardMiddleware], UserController.delete);

// Card Routing
const CardController = require('./controllers/CardController');
router.get('/card', AuthenticationMiddleware, CardController.index);
router.post('/card', [AuthenticationMiddleware, AdminGuardMiddleware], CardController.create);
router.get('/card/:id', AuthenticationMiddleware, CardController.show);
router.put('/card/:id', [AuthenticationMiddleware, AdminGuardMiddleware], CardController.update);
router.delete('/card/:id', [AuthenticationMiddleware, AdminGuardMiddleware], CardController.delete);

// Deck Routing
const DeckController = require('./controllers/DeckController');
router.get('/deck', AuthenticationMiddleware, DeckController.index);
router.post('/deck', AuthenticationMiddleware, DeckController.create);
router.get('/deck/:id', AuthenticationMiddleware, DeckController.show);
router.put('/deck/:id', AuthenticationMiddleware, DeckController.update);
router.delete('/deck/:id', AuthenticationMiddleware, DeckController.delete);
router.post('/deck/addCard', AuthenticationMiddleware, DeckController.addCardToDeck);

// Match
const MatchController = require('./controllers/MatchController');
router.get('/match', AuthenticationMiddleware, MatchController.index);
router.get('/match/:id', AuthenticationMiddleware, MatchController.show);
router.get('/match/pending', AuthenticationMiddleware, MatchController.getPending);
router.post('/match/pending', AuthenticationMiddleware, MatchController.create);
router.post('/match/pending/:id', AuthenticationMiddleware, MatchController.setStatus);
module.exports = router;
