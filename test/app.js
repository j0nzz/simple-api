const chai = require('chai')
    , chaiHttp = require('chai-http')
    , request = require('supertest')
    , should = chai.should()
    , app = require('../app')
    , api = request(app)


chai.use(chaiHttp)

describe ('GET /', () => {
    it ('Should return 200 status code', async () => {
    const res = await api.get('/')
    res.body.should.be.a('string').equals('pong')
  })
})
