process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('assert')
const https = require('https');
const testData = require('./test-data')

const server = 'http://localhost:5000'
const should = chai.should()

chai.use(chaiHttp);

let global = {
    token : null,
    lastCreatedUser : null,
    lastCreatedCard : null
}

function on(action, url, data, done, callback, after){
    tempRequest = chai.request(server)[action](url)
    if(global.token){
        tempRequest.set({ Authorization: 'Bearer ' + global.token })
    }
    if(data){
        tempRequest.send(data)
    }
    tempRequest.end((err, res) => {
        callback(res)
        done()
        if(after)
            after()
    })
}


function createUser(){
    describe(`[create] /user`, () => {
        it('should create new user', done => {
            on('post', '/user', testData.generateUser(), done, res => {
                res.should.have.status(200)
                global.lastCreatedUser = res.body
            })
        })
    })
}

function testUnauthenticatedUser(){
    describe('[unauthenticated] /user', () => {
        it('should not display all users', done => {
            on('get', '/user', null, done, res => {
                res.should.have.status(401)
            })
        })
        it('should not display created user', done => {
            on('get', `/user/${global.lastCreatedUser.id}`, null, done, res => {
                res.should.have.status(401)
            })
        })
        it('should not edit created user', done => {
            on('put', `/user/${global.lastCreatedUser.id}`, testData.generateUser(), done, res => {
                res.should.have.status(401)
            })
        })
        it('should not delete created user', done => {
            on('delete', `/user/${global.lastCreatedUser.id}`, testData.generateUser(), done, res => {
                res.should.have.status(401)
            })
        })
    })
}



function loginNewUser(){
    describe('[login] /login', () => {
        it('should login', done => {
            on('post', '/login', global.lastCreatedUser, done, res => {
                res.should.have.status(200)
                assert(res.body.token != null, 'No token received')
                global.token = res.body.token
            })
        })
    })
}

function loginGeneral(){
    describe('[login] /login', () => {
        it('should login', done => {
            on('post', '/login', testData.existingUser, done, res => {
                res.should.have.status(200)
                assert(res.body.token != null, 'No token received')
                global.token = res.body.token
            })
        })
    })
}

function testAuthenticatedUser(){
    describe('[authenticated] /user', () => {
        it('should display all users', done => {
            on('get', '/user', null, done, res => {
                res.should.have.status(200)
            })
        })
        it('should display created user', done => {
            on('get', `/user/${global.lastCreatedUser.id}`, null, done, res => {
                res.should.have.status(200)
            })
        })
        it('should edit created user', done => {
            on('put', `/user/${global.lastCreatedUser.id}`, testData.generateUser(), done, res => {
                res.should.have.status(200)
            })
        })
        it('should delete created user', done => {
            on('delete', `/user/${global.lastCreatedUser.id}`, testData.generateUser(), done, res => {
                res.should.have.status(200)
            })
        })
    })
}

function logout(){
    describe('logging out', () => {
        it('will log out...', done => {
            global.token = null
            done()
        })
    })
}

createUser()
testUnauthenticatedUser()
loginNewUser()
testAuthenticatedUser()
logout()













// Card
function createCard(){
    describe(`[create] /card`, () => {

    })
}

function testUnauthenticatedCard(){
    describe('[unauthenticated] /card', () => {
        it('should not display all cards', done => {
            on('get', '/card', null, done, res => {
                res.should.have.status(401)
            })
        })
        it('should not display card 1', done => {
            on('get', `/card/1`, null, done, res => {
                res.should.have.status(401)
            })
        })
        it('should not edit card 1', done => {
            on('put', `/card/1`, testData.generateCard(), done, res => {
                res.should.have.status(401)
            })
        })
        it('should not delete card 1', done => {
            on('delete', `/card/1`, testData.generateCard(), done, res => {
                res.should.have.status(401)
            })
        })
        it('should not create new card', done => {
            on('post', '/card', testData.generateCard(), done, res => {
                res.should.have.status(401)
            })
        })
    })
}

function testAuthenticatedCard(){
    describe('[authenticated] /card', () => {
        it('should create new card', done => {
            on('post', '/card', testData.generateCard(), done, res => {
                res.should.have.status(200)
                global.lastCreatedCard = res.body
            })
        })
        it('should display all cards', done => {
            on('get', '/card', null, done, res => {
                res.should.have.status(200)
            })
        })
        it('should display last created card', done => {
            on('get', `/card/${global.lastCreatedCard.id}`, null, done, res => {
                res.should.have.status(200)
            })
        })
        it('should edit last created card', done => {
            on('put', `/card/${global.lastCreatedCard.id}`, testData.generateCard(), done, res => {
                res.should.have.status(200)
            })
        })
        it('should delete last created card', done => {
            on('delete', `/card/${global.lastCreatedCard.id}`, testData.generateCard(), done, res => {
                res.should.have.status(200)
            })
        })
    })
}

createCard()
testUnauthenticatedCard()
loginGeneral()
testAuthenticatedCard()
logout()
