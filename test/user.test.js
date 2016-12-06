const supertest = require('supertest')
const should = require('should')
const app = require('../app')


let User = require('../models/user')
let request = supertest(app)

describe('create user', () => {
  before(done => {
    User.remove({}, err => {
      done()
    })
  })

  it('success', done => {
    request.post('/user/signup')
      .send({
        username: 'f222222',
        password: '1234567'
      })
      .expect(302, (err, res) => {
        should.not.exists(err)
        done()
      })
  })
})


