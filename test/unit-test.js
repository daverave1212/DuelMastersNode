process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = require('assert')
const testData = require('./test-data')

const server = 'http://localhost:5000'
const should = chai.should()

chai.use(chaiHttp);

let token

function on(request, data, callback){
    let words = request.split(' ')
    let action = words[0]
    let url = words[1]
    let shouldWhat = words.slice(2).join(' ')
    it(shouldWhat, done => {
        let tempRequest = chai.request(server)[action](url)
        if(token){
            tempRequest.set({ Authorization: 'Bearer ' + token })
        }
        if(data)
            tempRequest.send(data)
        tempRequest.end((err, res) => {
            if(err){
                throw err
            } else {
                callback(res)
                done()
            }
        })
    })
}


describe('user', () => {
    describe('[unauthorized] user', () => {
        on('get /user should not display all users', null, res => {
            res.should.have.status(401)
        })
        on('get /user/1 should not display the user', null, res => {
            res.should.have.status(401)
        })
        on('put /user/1 should not change the user', testData.modifiedExistingUser, res => {
            res.should.have.status(401)
        })
        on('delete /user/1 should not delete the user', null, res => {
            res.should.have.status(401)
        })
        on('post /user should create a new user', testData.generateUser(), res => {
            res.should.have.status(200)
        })
    })
    describe('[authorized] user', () => {
        beforeEach(done => {
            chai.request(server).post('/login').send(testData.existingUser).end((err, res) => {
                token = res.body.token
                done()
            })
        })
        on('get /user should display all users', null, res => {
            res.should.have.status(200)
            assert(Array.isArray(res.body), 'The response should be an array!')
        })
        on('get /user/1 should display the user', null, res => {
            res.should.have.status(200)
        })
        on('put /user/1 should change the user', testData.modifiedExistingUser, res => {
            res.should.have.status(200)
        })
        on('delete /user/1 should delete the user', null, res => {
            res.should.have.status(200)
        })
        on('post /user should create a new user', testData.generateUser(), res => {
            res.should.have.status(200)
        })
    })
})


/*

describe('[authenticated] User', () => {
    let token = null;

    beforeEach(done => {
      chai.request(server).post('/login').send(userToAuthenticate).end((err, res) => {
          token = res.body.token;
          console.log('Logged in.')
          done()
        })
    })

    it('should list all users', done => {
      chai.request(server).get('/user').set({ Authorization: 'Bearer ' + token }).end((err, res) => {
          // res.should.have.status(200);
          // res.should.have.property('array');
          assert(res.header.statusCode === 200, "nu e 200")
          // assert(res.body, Array);
          done()
        })
    })

    let createdUserId = null;

    it('should create a new user', done => {
      chai.request(server)
        .post('/users')
        .send(mockUser)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          createdUserId = res.body.id;
          res.should.have.status(201);
          done();
        })
    });


    it('should list one user', done => {
      chai.request(server)
        .get('/users/' + createdUserId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

    it('should update the user', done => {
      chai.request(server)
        .put('/users/' + createdUserId)
        .send({
          ...mockUser,
          firstName: 'UpdatedName',
          lastName: 'TestUpdate',
        })
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    });

    it('should delete the user', done => {
      chai.request(server)
        .delete('/users/' + createdUserId)
        .set({ Authorization: 'Bearer ' + token })
        .end((err, res) => {
          res.should.have.status(200);
          done();
        })
    })
})

*/




/*
process.exit()

describe('Users', () => {
    describe('[unauthenticated] User', () => {
        it('should not list all users', done => {
          chai.request(server).get('/user').end((err, res) => {
              res.should.have.status(401)
              done()
            })
        })

        it('should not list a user', done => {
          chai.request(server).get('/user/1').end((err, res) => {
              res.should.have.status(401)
              done()
            })
        })

        it('should not update the user', done => {
          chai.request(server).put('/user/1').send(newUser).end((err, res) => {
              res.should.have.status(401)
              done()
            })
        })

        it('should not delete the user', done => {
          chai.request(server).delete('/user/1').end((err, res) => {
              res.should.have.status(401)
              done()
            })
        })

        it('should not create a user', done => {
          chai.request(server).post('/user').send(newUser).end((err, res) => {
              res.should.have.status(401)
              done()
            })
        })
    })
});
*/


/*
*/
